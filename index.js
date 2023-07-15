import { addHigh, taskList, errorText, addHighTaskBlock, buttonAdd, arreyTask } from "./modules/consts.js";

let i = 0;
buttonAdd.addEventListener('click', function (evt) {
  const newTask = document.createElement('div');
  evt.preventDefault()

  if (addHigh.value) {
    arreyTask.push(addHigh.value)
    errorText.remove();
    newTask.setAttribute("id", `${i}`)
    newTask.innerHTML =
      `
      <div class="input task" id='${i}'>
      <input class="checkbox" type="checkbox" name="elem" id='${i}'>
      <p>${arreyTask[i]}</p>
      <input type="submit" class="button button_delete" id='${i}' value="">
      </div>
      `
    taskList.appendChild(newTask);
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
})

