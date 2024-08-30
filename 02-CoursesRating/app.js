const nameInput = document.querySelector("#input-name");
const ratingInput = document.querySelector("#input-rate");
const confirmBtn = document.querySelector("#btn-confirm");
const coursesList = document.querySelector('#courses-list');

const clear = () => {
    nameInput.value = '';
    ratingInput.value = '';
}

confirmBtn.addEventListener('click', () => {
  const courseName = nameInput.value;
  const courseRate = ratingInput.value;

  if (
    courseName.trim().length <= 0 ||
    courseRate.trim().length <= 0 ||
    courseRate < 0 || courseRate > 5
  ) {
    return;
  }

  const newItem = document.createElement('ion-item');
  newItem.innerHTML = `<strong>${courseName}:</strong> &nbsp; ${courseRate}/5`;
  coursesList.appendChild(newItem);

  clear();
});
