
  const languageButton = document.getElementById('language-button');
  const languageOption = document.getElementById('language-option');
  const engButton = document.getElementById('eng-button');
  
  
  engButton.addEventListener('click', () => {
  
    if (languageOption.textContent === 'PT') {
      languageOption.textContent = 'EN';
    } else {
      languageOption.textContent = 'PT';
    }
    
    
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => option.classList.remove('selected'));
    languageOption.classList.add('selected');
  });
  
  languageButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      languageButton.click();
    }
  });
  

  document.getElementById("openModalButton").addEventListener("click", function () {
    document.getElementById("searchModal").style.display = "flex";
});

document.getElementById("closeModalButton").addEventListener("click", function () {
    document.getElementById("searchModal").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev-slide");
    const nextButton = document.querySelector(".next-slide");

    let currentIndex = 0;

    // Function to show the current slide and hide others
    function showCurrentSlide() {
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
    }

    // Event listener for the previous button
    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showCurrentSlide();
    });

    // Event listener for the next button
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showCurrentSlide();
    });

    // Initialize the slider
    showCurrentSlide();
});