// Select all cocoa pod containers
const slides = document.querySelectorAll('.SliderCarousel > div');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
    // Wrap around logic
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    // Move the carousel
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentIndex) * 30}%)`;
        slide.style.transition = "transform 0.02s ease-in-out";
    });
}

// Show the first slide initially
showSlide(currentIndex);

// Next button functionality
nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
    resetAutoSlide();
});

// Previous button functionality
prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
    resetAutoSlide();
});

// Auto slide functionality
let autoSlideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
}, 1000); // Change slide every 1 seconds

// Reset auto slide timer when buttons are clicked
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 2000);
}








document.addEventListener('DOMContentLoaded', () => {
    const slides = Array.from(document.querySelectorAll('.Addi-slider > div'));
    const nextBtn = document.querySelector('.after');
    const prevBtn = document.querySelector('.before');

    if (!slides.length) {
        console.error('No slides found. Check selector .Addi-slider > div');
        return;
    }
    if (!nextBtn || !prevBtn) {
        console.error('Nav buttons not found. Check classes .after and .before');
        return;
    }

    let currentIndex = 0;
    let autoSlideId = null;
    const AUTO_MS = 3000;

    function hideAll() {
        slides.forEach(slide => {
            // hide the slide container
            slide.style.display = 'none';
            // also ensure any image inside is visible when container shown
            const img = slide.querySelector('img');
            if (img) img.style.display = 'block';
        });
    }

    function showSlide(index) {
        hideAll();
        const s = slides[index];
        if (!s) return;
        s.style.display = 'block';        // show container
        const img = s.querySelector('img');
        if (img) img.style.display = 'block'; // ensure image not hidden by CSS
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function startAuto() {
        stopAuto();
        autoSlideId = setInterval(nextSlide, AUTO_MS);
    }
    function stopAuto() {
        if (autoSlideId) clearInterval(autoSlideId);
        autoSlideId = null;
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        startAuto(); // restart auto cycle
    });
    prevBtn.addEventListener('click', () => {
        prevSlide();
        startAuto();
    });

    // init
    showSlide(currentIndex);
    startAuto();
});






// Select the two image containers
const image1 = document.querySelector(".Founder-images1 img");
const image2 = document.querySelector(".Founder-images2 img");

// Make sure image1 shows first
image1.style.display = "block";
image2.style.display = "none";

let showFirst = true;

// Function to toggle between the two images
function toggleImages() {
    if (showFirst) {
        image1.style.opacity = "0";
        setTimeout(() => {
            image1.style.display = "none";
            image2.style.display = "block";
            setTimeout(() => (image2.style.opacity = "1"), 50);
        }, 300);
    } else {
        image2.style.opacity = "0";
        setTimeout(() => {
            image2.style.display = "none";
            image1.style.display = "block";
            setTimeout(() => (image1.style.opacity = "1"), 50);
        }, 300);
    }
    showFirst = !showFirst;
}

// Run every 3 seconds
setInterval(toggleImages, 3000);





//counter-loops




// Select all h1 elements inside .years-cont divs
const counters = document.querySelectorAll('.years-cont h1');

// Animate the counters
function runCounters() {
    counters.forEach((counter, index) => {
        const target = parseInt(counter.getAttribute('data-target')); // get the target number
        let count = 0;
        const speed = target / 200; // adjust animation speed

        // Delay each counter start for staggered effect
        setTimeout(() => {
            const updateCount = () => {
                if (count < target) {
                    count += speed;
                    counter.innerHTML = Math.ceil(count).toLocaleString() + '+';
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerHTML = target.toLocaleString() + '+';
                }
            };
            updateCount();
        }, index * 500); // delay each counter
    });
}

// Restart counters automatically every 15 seconds
function loopCounters() {
    runCounters();
    setTimeout(loopCounters, 8000); // restart after 8s
}

// Initialize
counters.forEach(counter => {
    // Store the target number (get from HTML text content)
    const target = parseInt(counter.textContent.replace(/\D/g, ''));
    counter.setAttribute('data-target', target);
    counter.textContent = '0+';
});

// Start the loop
loopCounters();




//accordion-section



const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px"
        }
        else {
            accordionItemBody.style.maxHeight = 0
        }
    });
});







const menuBtn = document.querySelector('.fa[menu-btn]');
const closeBtn = document.querySelector('.fa[close-btn]');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.add('show-nav');
    menuBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show-nav');
    menuBtn.style.display = 'block';
});

