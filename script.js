// change page background mode
const changeTheme = () => {
    const btn = document.querySelector('.change-mode'); // find button which will change mode
    const body = document.querySelector('body'); // find body element
    const iconLight = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>`;
    const iconDark = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
  </svg>`;

    body.classList.toggle('dark-mode'); // change body class for dark and light mode
    btn.classList.toggle('light'); // change button class for light and dak mode

    if (btn.classList.contains('light')) { // check if button has light class and change icon
        btn.innerHTML = iconLight;
    } else {
        btn.innerHTML = iconDark;
    }
}

// open-close popup with settings
const openPopup = () => {
    // create vaiables
    const openPopupBtn = document.getElementById('show-popup');
    const popup = document.getElementById('popup');

    // open popup
    openPopupBtn.addEventListener('click', () => {
        popup.classList.remove('hidden');
    })
}

const closePopup = () => {
    // create vaiables
    const closePopupBtn = document.getElementById('close-popup');
    const popup = document.getElementById('popup');

    // close popup
    closePopupBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    })
}

openPopup();
closePopup();

// function for creating sections
const createSection = () => {
    /**
     * Algo
     * create section, container for title and text,  title, text, image
     * get content values from inputs and selects
     * add content inside title, text, image
     * add background color to section
     * add text color to section
     * add title inside container
     * add text inside container
     * add container inside section
     * add image inside section
     * position image inside section
     * add section inside body and position it
     * close popup
     */
    
    // find body, main and popup elements
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    const popup = document.getElementById('popup');

    // create section, title, text, image
    const sectionContainer = document.createElement('section');
    const sectionTitle = document.createElement('h3');
    const sectionText = document.createElement('p');
    const sectionImage = document.createElement('img');
    const textContainer = document.createElement('div');

    // get content values from inputs and selects
    const sectionTitleValue = document.getElementById('section-title').value;
    const sectionTextValue = document.getElementById('section-text').value;
    const imageSource = document.getElementById('section-image').value;
    const imagePosition = document.getElementById('section-image-place').value;
    const sectionPositionValue = document.getElementById('section-place').value;
    const sectionBgColor = document.getElementById('section-bg-color').value;
    const sectionTextColor = document.getElementById('section-text-color').value;

    // create content
    const sectionTitleContent = document.createTextNode(sectionTitleValue);
    const sectionTextContent = document.createTextNode(sectionTextValue);
    sectionImage.setAttribute("src", imageSource);

    // add content to section title and text
    sectionTitle.appendChild(sectionTitleContent);
    sectionText.appendChild(sectionTextContent);
    
    // stylish section
    sectionContainer.style.backgroundColor = sectionBgColor;
    sectionContainer.style.color = sectionTextColor;
    sectionContainer.style.display = 'flex';

    // add title and text to container
    textContainer.appendChild(sectionTitle);
    textContainer.appendChild(sectionText);

    // add container and image to section
    sectionContainer.appendChild(sectionImage);
    sectionContainer.appendChild(textContainer);

    // position image and text inside section
    if (imagePosition == 'left') {
        sectionContainer.style.justifyContent = 'flex-start'
    } else {
        sectionContainer.style.flexDirection = 'row-reverse';
        sectionContainer.style.justifyContent = 'space-between';
    }

    // add section to the page and position it
    const sectionPosition = document.getElementById(sectionPositionValue);
    //console.log(sectionPosition);
    
    // if position is not before footer it is necessary to insert section inside main element 
    sectionPositionValue != 'footer' ? main.insertBefore(sectionContainer, sectionPosition) : body.insertBefore(sectionContainer, sectionPosition);

    // close popup
    popup.classList.add('hidden');
}