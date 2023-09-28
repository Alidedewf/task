const fileInput = document.getElementById("upload-file");
const buttonImg = document.querySelector("#request-img");
const buttonLabel = document.querySelector(".request__button");
const buttonLabelText = document.querySelector(".request__button span");
const buttonText = document.querySelector(".request__button-text");

fileInput.addEventListener("change", function () {
  if (fileInput.files.length > 0) {
    buttonText.textContent = `"${fileInput.files[0].name}"`;
    buttonLabel.classList.add("active");
    buttonLabelText.textContent = `Файл загружен`;
    buttonImg.remove();
  } else {
    buttonText.textContent = "Файл не загружен";
    buttonLabel.return("active");
    buttonLabel.return("active::before");
  }
});
