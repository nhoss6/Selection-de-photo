/******* VARIABLES  *******/
const photos = document.querySelectorAll(".photo-list li");
const total = document.querySelector("#total em");

/******* FONCTION  *******/
function select() {
  this.classList.toggle("selected");
  total.textContent = document.querySelectorAll(".selected").length;
}

function selectAll() {
  photos.forEach((li) => li.classList.add("selected"));
  total.textContent = photos.length;
}

function deselectAll() {
  photos.forEach((li) => li.classList.remove("selected"));
  total.textContent = "0";
}

/******* CODE PRINCIPALE  *******/
photos.forEach((li) => li.addEventListener("click", select));

document.querySelector("#selectAll").addEventListener("click", selectAll);

document.querySelector("#deselectAll").addEventListener("click", deselectAll);
