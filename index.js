import { formatBytes } from "./helper.js";

const fileInput = document.getElementById("fileInput");
const model = document.getElementById("model");
const modelWrapper = document.getElementById("modelWrapper");
const placeholder = document.getElementById("placeholder");
const infoTag = document.getElementById("infoTag");
const removeModel = document.getElementById('removeModel')

fileInput.onchange = (evt) => {
  const file = evt.target.files[0];
  model.src = URL.createObjectURL(file);
  model.alt = file.name;
  placeholder.classList.add("hidden");
  modelWrapper.classList.remove("hidden");
  infoTag.children[0].innerHTML = 
  `
  <li>${file.name}</li>
  <li>${formatBytes(file.size)}</li>
  `;
};

removeModel.click = () => {
    placeholder.classList.remove("hidden");
    modelWrapper.classList.add("hidden");
    infoTag.children[0].innerHTML = ''
}