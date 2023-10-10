function displayTime() {
  let londonElement = document.querySelector("#london");
  let londonElementDate = londonElement.querySelector(".date");
  let londonElementTime = londonElement.querySelector(".time");

  londonElementDate.innerHTML = moment().format("dddd Do MMMM YYYY");
  londonElementTime.innerHTML = moment().format("HH:mm:ss");
}

setInterval(displayTime, 1000);
