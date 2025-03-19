/* Début du fichier script.js */

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript chargé avec succès !");

    // Animation de la barre de compétences
    const bars = document.querySelectorAll(".skill-bar");
    bars.forEach(bar => {
        const level = bar.getAttribute("data-level");
        bar.style.width = level + "%";
    });

    // Formulaire de contact - Validation basique
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Message envoyé avec succès !");
            form.reset();
        });
    }

    // Navigation console log
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", () => {
            console.log("Navigation vers : " + anchor.href);
        });
    });

    // 🎵 Gestion de l'audio 🎵
    var music = document.getElementById("bg-music");
    var button = document.getElementById("toggle-music");

    // Vérification des éléments audio
    if (!music || !button) {
        console.error("L'élément audio ou le bouton est introuvable !");
        return;
    }

    console.log("L'audio et le bouton sont bien trouvés !");

    // Écouteur d'événement sur le bouton
    button.addEventListener("click", function () {
        if (music.paused) {
            music.play().then(() => {
                console.log("Lecture audio démarrée !");
                button.textContent = "🔊"; // Icône ON
            }).catch(error => console.error("Erreur lecture audio :", error));
        } else {
            music.pause();
            console.log("Lecture audio arrêtée !");
            button.textContent = "🔇"; // Icône OFF
        }
    });
}); // ✅ Fin de DOMContentLoaded propre
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("#presentation, #music");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        observer.observe(section);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // 🎵 Gestion du modal musique
    const openMusicBtn = document.getElementById("open-music");
    const modal = document.getElementById("music-modal");
    const closeBtn = document.querySelector(".close");
    const musicFrame = document.getElementById("music-frame");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const musicTitle = document.getElementById("music-title");

    const musicTracks = [
        { title: "DNA. - Kendrick Lamar", url: "https://open.spotify.com/embed/track/6HZILIRieu8S0iqY8kIKhj?si=4d9faea9f6ec4ad8" },
        { title: "7 rings - Ariana Grande", url: "https://open.spotify.com/embed/track/6ocbgoVGwYJhOv1GgI9NsF?si=1d5d975b031b4a29" },
        { title: "Money Trees - Kendrick Lamar", url: "https://open.spotify.com/embed/track/2HbKqm4o0w5wEeEFXm2sD4" },
        { title: "Kill Bill - SZA", url: "https://open.spotify.com/embed/track/3OHfY25tqY28d16oZczHc8?si=ffeff180ad7c45b8" },
        { title: "Good Credit - Playboi Carti", url: "https://open.spotify.com/embed/track/2n9fC0A4ptmWqYeMXEVaok?si=f7a0e005caf040a8" }
    ];
    
    let currentTrack = 0;

    openMusicBtn.addEventListener("click", () => {
        modal.style.display = "flex";
        updateMusic();
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    prevBtn.addEventListener("click", () => {
        currentTrack = (currentTrack - 1 + musicTracks.length) % musicTracks.length;
        updateMusic();
    });

    nextBtn.addEventListener("click", () => {
        currentTrack = (currentTrack + 1) % musicTracks.length;
        updateMusic();
    });

    function updateMusic() {
        musicFrame.src = musicTracks[currentTrack].url;
        musicTitle.textContent = musicTracks[currentTrack].title;
    }

    // Fermer le modal en cliquant en dehors du contenu
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // 🎭 Animation du schéma
    const schema = document.getElementById("schema");
    setTimeout(() => {
        schema.style.opacity = "1";
        schema.style.transform = "translateY(0)";
    }, 500);

    // 📈 Animation des barres de progression
    const bars = document.querySelectorAll(".progress-bar");
    bars.forEach(bar => {
        const level = bar.getAttribute("data-level");
        setTimeout(() => {
            bar.style.width = level + "%";
        }, 1000);
    });
});
