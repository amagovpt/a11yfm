
const languageButton = document.getElementById('language-button');
const languageOption = document.getElementById('language-option');
const engButton = document.getElementById('eng-button');

engButton?.addEventListener('click', () => {

    if (languageOption.textContent === 'PT') {
        languageOption.textContent = 'EN';
    } else {
        languageOption.textContent = 'PT';
    }
    
    
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => option.classList.remove('selected'));
    languageOption.classList.add('selected');
});


languageButton?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        languageButton.click();
    }
});



document.getElementById("openModalButton")?.addEventListener("click", function () {
  document.getElementById("searchModal").style.display = "flex";
});

document.getElementById("closeModalButton")?.addEventListener("click", function () {
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
  prevButton?.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showCurrentSlide();
  });

  // Event listener for the next button
  nextButton?.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % slides.length;
      showCurrentSlide();
  });

  // Initialize the slider
  showCurrentSlide();
});

document.addEventListener("DOMContentLoaded", function () { 
    // Event listener for Close Submenu
    document.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
            // Press Enter - Open submenu
            const element = event.target.closest('.has-submenu');
            element.classList.add('active');
        } else if (event.keyCode === 27) {
            // Press ESC - Close submenu
            Array.from(document.getElementsByClassName('has-submenu')).forEach(
                (el) => el.classList.remove('active')
              );
        }
    });
});

document.getElementById('btn-hamburguer')?.addEventListener('click', function() {
    console.log("ping");

    document.getElementById('mainNav').classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById('openSearchModalButton');
  const modal = document.getElementById('searchModal');
  const closeButton = document.getElementById('closeSearchModalButton');
  const searchInput = document.getElementById('searchInput');

  openButton.addEventListener('click', () => {
      modal.style.display = 'flex';
      searchInput.focus();
  });

  closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
  });
});


//**    FORMS    **/

// focus and dirty
Array.from(document.getElementsByTagName('input')).forEach(
    (el) => el.addEventListener('focusin', function() {
        el.classList.add('focus');
        if (el.type == "radio") {
            el.closest('.field-group').classList.add('focus');
        }
    })
);
Array.from(document.getElementsByTagName('input')).forEach(
    (el) => el.addEventListener('focusout', function() {
        el.classList.add('dirty');
        el.classList.remove('focus');
        if (el.type == "radio") {
            el.closest('.field-group').classList.remove('focus');
            if (el.checked) {
                el.closest('.field-group').classList.remove('empty');   
            } else {
                el.closest('.field-group').classList.add('empty');
            }
        }
    })
);

// radio buttons change
for (let elem of document.querySelectorAll('input[type="radio"]')) {
    elem.addEventListener('change', function () {
        if (elem.checked) {
            elem.closest('.field-group').classList.remove('empty');   
        } else {
            elem.closest('.field-group').classList.add('empty');
        }
    });
}



