
console.log("JS file is connected!");
// Hamburger CSS STARTS HERE
    const hamburger = document.getElementById("hamburger");
    const sideMenu = document.getElementById("sideMenu");

    hamburger.addEventListener("click", () => {
      sideMenu.classList.toggle("active");
    });

    // Optional: Close menu when clicking a link
    const sideLinks = sideMenu.querySelectorAll("a");
    sideLinks.forEach(link => {
      link.addEventListener("click", () => {
        sideMenu.classList.remove("active");
      });
    });
    const closeBtn = document.getElementById("closeBtn");

    closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    });
// Hamburger CSS ENDS HERE

// BLUR CSS STARTS HERE

// BLUR CSS ENDS HERE


  // IMAGE SLIDER STARTS HERE
document.addEventListener("DOMContentLoaded", function () {


  const ring = document.querySelector('.rotating-slider-ring');
  const zoomOverlay = document.getElementById('zoomPreview');
  const zoomImage = document.getElementById('zoomImage');
  const closeZoom = document.getElementById('closeZoom');

  if (!ring) {
    console.error("'.rotating-slider-ring' not found in DOM.");
    return;
  }

  const imagePaths = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.jpg",
    "images/image10.jpg",
    "images/image11.jpg"
  ];

  ring.innerHTML = "";

  // Populate images
  imagePaths.forEach((src, i) => {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('rotating-slider-img');
    imgDiv.style.backgroundImage = `url(${src})`;
    ring.appendChild(imgDiv);
  });

  // GSAP animation setup
  const autoRotate = gsap.to('.rotating-slider-ring', {
    rotationY: '+=360',
    duration: 50, // Controls the speed of the slider
    ease: 'none',
    repeat: -1,
  });

  // Initial transforms
  gsap.set('.rotating-slider-ring', { rotationY: 365 });
  gsap.set('.rotating-slider-img', {
    rotateY: (i) => i * -36,
    transformOrigin: '50% 50% 500px',
    z: -500,
    backfaceVisibility: 'hidden'
  });

  // 👇 This flag tracks if user manually paused
  let manuallyPaused = false;

  // Updated click event for each image
  document.querySelectorAll('.rotating-slider-img').forEach(img => {
    img.addEventListener('click', (e) => {
      const bgImage = img.style.backgroundImage;
      if (zoomImage && zoomOverlay) {
        zoomImage.style.backgroundImage = bgImage;
        zoomOverlay.style.display = 'flex';
        manuallyPaused = true;
        autoRotate.pause();
        e.stopPropagation();
      }
    });
  });

  // Close preview when 'X' is clicked
  if (closeZoom) {
    closeZoom.addEventListener('click', () => {
      if (zoomOverlay) {
        zoomOverlay.style.display = 'none';
        manuallyPaused = false;
        autoRotate.resume();
      }
    });
  }

  // ✅ Clicking on an image stops the slider
  document.querySelectorAll('.rotating-slider-img').forEach(img => {
    img.addEventListener('click', (e) => {
      manuallyPaused = true;
      autoRotate.pause();
      e.stopPropagation(); // prevent body click triggering resume
    });
  });

});

  // IMAGE SLIDER ENDS HERE


// EMAIL KA CHAKKAR STARTS HERE
// EMAIL KA CHAKKAR ENDS HERE


// Close any popup

console.log("JS file is connected till end!");


