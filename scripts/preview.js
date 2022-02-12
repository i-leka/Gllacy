const controlButtons = document.querySelectorAll('.preview-control');
const controlBody = document.querySelector('body');
const controlBodyText = document.querySelector('.preview-title');
const bodyClasses = ['first-body', 'second-body', 'third-body'];
const bodyTexts = ['Крем-брюле и пломбир<br> с малиновым джемом', 'Шоколадный пломбир <br> и лимонный сорбет', 'Пломбир с помадкой <br> и клубничный щербет']

const TimeView = 5000;
let slideTime;
let pause = false;

let setBody = function (controlButton, index) {
    if (!controlButton.classList.contains('preview-control_active')) {
        for (let j = 0; j < controlButtons.length; j++) {
            controlButtons[j].classList.remove('preview-control_active');
        }
        controlButton.classList.add('preview-control_active');
        controlBody.className = '';
        controlBody.classList.add(bodyClasses[index]);
        controlBodyText.classList.remove('preview-title-opacity');
        controlBodyText.innerHTML = bodyTexts[index];
        controlBodyText.classList.add('preview-title-opacity');
    }
}

let rotator = function () {
    if (!pause) {
        let index = 0;
        slideTime = setInterval(function () {
            index = (index + 1) % 3;
            setBody(controlButtons[index], index)
        }, TimeView);
    }
}

for (let i = 0; i < controlButtons.length; i++) {
    controlButtons[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        setBody(this, i);
        pause = true;
        rotator();
    });
    controlButtons[i].addEventListener('mouseover', function () {
        pause = false;
        rotator();
    });
}

rotator();


