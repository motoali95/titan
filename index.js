let tankValue = 50;

function updateTank() {
  const tank = document.querySelector(".tank");
  const valueElement = document.querySelector(".value");
  const pump = document.querySelector(".pump");

  tank.style.height = tankValue + "px";
  valueElement.textContent = "Значение: " + tankValue + "%";

  if (tankValue > 50) {
    tank.style.backgroundColor = "#2ecc71";
  } else {
    tank.style.backgroundColor = "#e74c3c";
  }
  if (tankValue > 100) {
    //   tank.classList.add("explosion");
    tankValue = 20;
    updateTank();
  }
  // setTimeout(() => {
  //   if (tankValue < 100) {
  //     // tank.classList.remove("explosion");
  //   }
  // }, 1500);
  pump.classList.toggle("rotate");
}

setTankPlus = () => {
  tankValue = tankValue + 10;

  updateTank();
};
