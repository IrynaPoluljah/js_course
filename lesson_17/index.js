input.addEventListener('change', () => {
  let today = new Date();
  input = document.getElementById('input');
  let birthdayDate = input.value;
  let nextEVENT = new Date(birthdayDate);
  let msPerDay = 24 * 60 * 60 * 1000 ;
  let daysLeft = (nextEVENT.getTime() - today.getTime()) / msPerDay;
  daysLeft = Math.round(daysLeft);

  if(daysLeft < 0) {
    result = `Введите корректное значение, пожалуйста`;
    let text = document.getElementById('result');
    text.innerText = result;
    return false;
  }

  let result = `До моего дня рождения осталось: ${daysLeft} дней`;
  let text = document.getElementById('result');
  text.innerText = result;
})