const file =  document.getElementById('file')
const model = document.getElementById('model')
const placeholder = document.getElementById('placeholder')


file.onchange = (evt) => {
    const file = evt.target.files[0]
    model.src = URL.createObjectURL(file)
    model.alt = file.name
    placeholder.classList.add('hidden')
    model.classList.remove('hidden')
};