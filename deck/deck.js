// Faster UI — Minimal Slide Deck Engine & Auto-Fullscreen Control

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const fullscreenBtn = document.getElementById("fullscreen-btn");
  const pageNumber = document.getElementById("page-number");

  let currentSlide = 0;
  const totalSlides = slides.length;

  const updateSlide = (index) => {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;

    currentSlide = index;

    slides.forEach((slide, idx) => {
      slide.classList.remove("active", "prev");
      if (idx === currentSlide) {
        slide.classList.add("active");
      } else if (idx < currentSlide) {
        slide.classList.add("prev");
      }
    });

    if (pageNumber) {
      pageNumber.textContent = `${currentSlide + 1} / ${totalSlides}`;
    }
  };

  // Fullscreen Request Helper
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFullscreen();
    });
  }

  // Keyboard Shortcuts Navigation
  document.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

    switch (e.key) {
      case "ArrowRight":
      case "PageDown":
      case " ":
        e.preventDefault();
        updateSlide(currentSlide + 1);
        break;
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault();
        updateSlide(currentSlide - 1);
        break;
      case "Home":
        e.preventDefault();
        updateSlide(0);
        break;
      case "End":
        e.preventDefault();
        updateSlide(totalSlides - 1);
        break;
      case "f":
      case "F":
        toggleFullscreen();
        break;
    }
  });

  // Touch Swipe Support
  let touchStartX = 0;
  document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      updateSlide(currentSlide + 1);
    } else if (touchEndX - touchStartX > 50) {
      updateSlide(currentSlide - 1);
    }
  });

  // Initialize first slide
  updateSlide(0);
});
