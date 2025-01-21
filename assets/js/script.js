const nameInput = document.getElementById("name");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const timer = document.getElementById("timer");

const nameKey = "nameStr";

saveBtn.onclick = () => {
  localStorage.setItem(nameKey, nameInput.value);
  console.log(nameInput.value);
};

cancelBtn.onclick = () => {
  localStorage.removeItem(nameKey);
  console.log(nameInput.value);
  nameInput.value = "";
};

let timeKey = "Time";
let seconds = sessionStorage.getItem(timeKey);
if (seconds == null) {
  seconds = 0;
} else {
  seconds = +seconds;
}
function increseSeconds() {
  seconds += 1;
  sessionStorage.setItem(timeKey, seconds);
  timer.innerText = seconds;
}

setInterval(increseSeconds, 1000);
setInterval(() => {
  console.clear();
  console.log(sessionStorage, localStorage);
}, 1000);

nameInput.value = localStorage.getItem(nameKey);
