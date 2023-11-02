const selectEstado = document.getElementById("estado");
const displayEstado = document.getElementById("display-estado");

const cambiarEstado = () => {
  displayEstado.innerHTML = selectEstado.value;
}

selectEstado.addEventListener("change", cambiarEstado)