import { addHigh, taskList, errorText, addHighTaskBlock, buttonAdd, buttonDelete } from "./modules/consts.js";


buttonAdd.addEventListener('click', function (evt) {
  const newTask = document.createElement('div');
  evt.preventDefault()

  if (addHigh.value) {

    errorText.remove();

    newTask.innerHTML =
      `
      <div class="input task" >
      <input class="checkbox" type="checkbox" name="elem" id="1">
      <p>${addHigh.value}</p>
      <button type="button" class="button button_delete"></button>
      </div>
      `
    taskList.appendChild(newTask);
    addHigh.value = '';
    console.log(buttonDelete);

    buttonDelete.addEventListener('click', function () {
      newTask.remove()
    })

  } else {
    errorText.style.color = 'red';
    errorText.textContent = 'Введите описание дела';
    addHighTaskBlock.appendChild(errorText);
  }
})






