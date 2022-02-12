const mapButton = document.querySelector(".map-button");
const fbPopup = document.querySelector(".feedback-container");

const fbForm = fbPopup.querySelector(".feedback-form");
const fbClose = fbForm.querySelector(".feedback-close");
const fbName = fbForm.querySelector("#feedback-name");
const fbEmail = fbForm.querySelector("#feedback-email");
const fbText = fbForm.querySelector("#feedback-text");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
    storageName = localStorage.getItem("fbName");
    storageEmail = localStorage.getItem("fbEmail");
} catch (err) {
    isStorageSupport = false;
}

mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    fbPopup.classList.add("display-block");
    if (storageName) {
        fbName.value = storageName;
        fbEmail.value = storageEmail;
        fbText.focus();
    } else {
        fbName.focus();
    }
});

fbClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    fbPopup.classList.remove("display-block");
    // fbPopup.classList.remove("modal-error");
});

fbForm.addEventListener("submit", function (evt) {
    if (!fbName.value || !fbEmail.value || !fbText.value) {
        evt.preventDefault();
        fbForm.classList.remove("feedback-error");
        fbForm.offsetWidth = fbForm.offsetWidth;
        fbForm.classList.add("feedback-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("fbName", fbName.value);
            localStorage.setItem("fbEmail", fbEmail.value);
        }
    }
});