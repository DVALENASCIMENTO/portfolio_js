// Script do popup
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const btnIniciar = document.getElementById("btnIniciar");

  btnIniciar.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
