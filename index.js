import { addHigh, taskListHigh, addHighTaskBlock, buttonAddHigh, errorText } from "./modules/consts.js";
import { addLow, taskListLow, addLowTaskBlock, buttonAddLow } from "./modules/consts.js";

buttonAddHigh.addEventListener('click', function (evt) {
  evt.preventDefault()

  const newTask = document.createElement('div');
  console.log(buttonAddHigh.parentNode.id); //high

  if (addHigh.value) {
    errorText.remove();
    newTask.innerHTML =
      `
      <div class="input task">
      <input class="checkbox" type="checkbox" name="elem">
      <p>${addHigh.value}</p>
      <input type="submit" class="button button_delete" value="">
      </div>
      `
    taskListHigh.appendChild(newTask);
    addHigh.value = '';

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
  evt.preventDefault()

  const newTask = document.createElement('div');
  console.log(buttonAddLow.parentNode.id);
  if (addLow.value) {
    errorText.remove();
    newTask.innerHTML =
      `
      <div class="input task">
      <input class="checkbox" type="checkbox" name="elem">
      <p>${addLow.value}</p>
      <input type="submit" class="button button_delete" value="">
      </div>
      `
    taskListLow.appendChild(newTask);
    addLow.value = '';

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