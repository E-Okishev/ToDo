import { addHigh, taskListHigh, errorText, addHighTaskBlock, buttonAddHigh } from "./modules/consts.js";
import { addLowTaskBlock, addLow, buttonAddLow, taskListLow } from "./modules/consts.js";

let i = 0;
buttonAddHigh.addEventListener('click', function (evt) {
  const newTask = document.createElement('div');
  evt.preventDefault()

  if (addHigh.value) {
    errorText.remove();
    newTask.setAttribute("id", `${i}`)
    newTask.innerHTML =
      `
      <div class="input task" id='${i}'>
      <input class="checkbox" type="checkbox" name="elem" id='${i}'>
      <p>${addHigh.value}</p>
      <input type="submit" class="button button_delete" id='${i}' value="">
      </div>
      `
    taskListHigh.appendChild(newTask);
    addHigh.value = '';
    i++

    const buttonDelete = newTask.querySelector('.button_delete')
    buttonDelete.addEventListener('click', function () {
      newTask.remove()
    })
  } else {
    errorText.style.color = 'red';
    errorText.textContent = 'Введите описание дела';
    addHighTaskBlock.appendChild(errorText);
  }

  const checkbox = newTask.querySelector('.checkbox');
  checkbox.addEventListener('click', function () {
    newTask.classList.toggle('disabled')
  })
})

buttonAddLow.addEventListener('click', function (evt) {
  const newTask = document.createElement('div');
  evt.preventDefault()

  if (addLow.value) {
    errorText.remove();
    newTask.setAttribute("id", `${i}`)
    newTask.innerHTML =
      `
      <div class="input task" id='${i}'>
      <input class="checkbox" type="checkbox" name="elem" id='${i}'>
      <p>${addLow.value}</p>
      <input type="submit" class="button button_delete" id='${i}' value="">
      </div>
      `
    taskListLow.appendChild(newTask);
    addLow.value = '';
    i++

    const buttonDelete = newTask.querySelector('.button_delete')
    buttonDelete.addEventListener('click', function () {
      newTask.remove()
    })
  } else {
    errorText.style.color = 'red';
    errorText.textContent = 'Введите описание дела';
    addLowTaskBlock.appendChild(errorText);
  }

  const checkbox = newTask.querySelector('.checkbox');
  checkbox.addEventListener('click', function () {
    newTask.classList.toggle('disabled')
  })
})