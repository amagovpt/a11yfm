const i18nPt = {
    lanBothDays: 'Ambos, dias 9 e 10 de novembro',
    lanDay9: 'Dia 9 de novembro', 
    lanDay10: 'Dia 10 de novembro', 
    lanSearch: 'Pesquisar'
};

const i18nEn = {
    lanBothDays: 'Both November 9th and 10th',
    lanDay9: 'November 9th', 
    lanDay10: 'November 10th', 
    lanSearch: 'Search'
};

const languageSelector = document.getElementById('language-selector');
updateTexts();

const button = document.querySelector('button');

button.addEventListener('click', () => {
  button.ariaExpanded = true;
})

languageSelector.addEventListener("change", function() {
    var url = window.location.pathname;
    var newUrl = '';

    language = this.value;
    sessionStorage.setItem("language", this.value);
    updateTexts();
    
});

function updateTexts() {
    var language = sessionStorage.getItem("language");
    var lanArray = {};

    if (language == undefined) {
        language = 'pt';
        sessionStorage.setItem("language", language);
    }

    if (document.getElementById('language-selector').value != language) {
        document.getElementById('language-selector').value = language;
    }

    if (language === 'pt') {
        document.documentElement.setAttribute("lang", 'pt-pt');
        lanArray = i18nPt;
        // change page title
        document.title = document.getElementById('title-pt').innerHTML;
    } else {
        document.documentElement.setAttribute("lang", 'en-US');
        lanArray = i18nEn;
        // change page title
        document.title = document.getElementById('title-en').innerHTML;
    }

    Array.from(document.getElementsByClassName("lan-pt")).forEach(
        (el) => el.classList.add('hidden')
    );
    Array.from(document.getElementsByClassName("lan-en")).forEach(
        (el) => el.classList.add('hidden')
    );
    Array.from(document.getElementsByClassName("lan-" + language)).forEach(
        (el) => el.classList.remove('hidden')
    );

    
    Array.from(document.getElementsByClassName("lan")).forEach(
        (el) => { el.innerHTML = lanArray[el.getAttribute('id')]; }
    );

    // search placeholder
    document.getElementById('searchInput').setAttribute('placeholder', lanArray['lanSearch']);


    
}

document.addEventListener("DOMContentLoaded", function () { 
    // Event listener for Close Submenu
    document.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
            // Press Enter - Open submenu
            const element = event.target.closest('.has-submenu');
            element?.classList.add('active');
        } else if (event.keyCode === 27) {
            // Press ESC - Close submenu
            button.ariaExpanded = false;
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

  closeButton?.addEventListener('click', () => {
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

function putInputsDirty() {
    Array.from(document.getElementsByTagName('input')).forEach(
        (el) => el.classList.add('dirty')
    );

    // radio buttons
    for (let elem of document.querySelectorAll('.field-group')) {
        for (let radio of elem.getElementsByTagName('input')) {
            if (radio.checked) {
                return;
            }
        }

        elem.classList.add('empty');
    }

}



