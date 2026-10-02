// ========================================
// TYPING EFFECT
// ========================================

const bidang = [
    "Cybersecurity",
    "Ethical Hacking",
    "Network Security",
    "Network Engineering"
];


const typingElement = document.getElementById("typing");


let bidangIndex = 0;

let charIndex = 0;

let deleting = false;


function typingEffect() {

    if (!typingElement) {
        return;
    }


    const text = bidang[bidangIndex];


    // Saat sedang mengetik
    if (!deleting) {

        typingElement.textContent =
            text.substring(0, charIndex + 1);

        charIndex++;


        // Kalau tulisan sudah lengkap
        if (charIndex === text.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    }


    // Saat menghapus tulisan
    else {

        typingElement.textContent =
            text.substring(0, charIndex - 1);

        charIndex--;


        // Kalau sudah habis
        if (charIndex === 0) {

            deleting = false;

            bidangIndex =
                (bidangIndex + 1) % bidang.length;
        }

    }


    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );
}


typingEffect();



// ========================================
// ANIMASI SECTION SAAT SCROLL
// ========================================

const sections =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach((section) => {

    observer.observe(section);

});



// ========================================
// TAHUN FOOTER OTOMATIS
// ========================================

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}