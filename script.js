let section = document.querySelector("section"),
  icons = document.querySelector(".icons");

// Comprueba si hay un tema guardado en localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  section.classList.add(savedTheme); // Aplica el tema guardado
}

icons.onclick = () => {
  section.classList.toggle("dark");
  
  // Guarda el estado del tema en localStorage
  if (section.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "");
  }
};

// ... Resto de tu código para mostrar la hora

// Creación de una función y llamada a la misma cada segundo
setInterval(() => {
  let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

  let d;
  d = hour < 12 ? "AM" : "PM"; // Si la hora es menor que 12, su valor será AM, de lo contrario, será PM
  hour = hour > 12 ? hour - 12 : hour; // Si el valor de la hora es mayor que 12, le resta 12 (de esta manera obtenemos un valor de 1 a 12 en lugar de 13, 14 o 24)
  hour = hour == 0 ? (hour = 12) : hour; // Si el valor de la hora es 0, se establece en 12

  // Agrega un "0" al principio de los valores si son menores que 10
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  document.querySelector(".hour_num").innerText = hour;
  document.querySelector(".min_num").innerText = min;
  document.querySelector(".sec_num").innerText = sec;
  document.querySelector(".am_pm").innerText = d;
}, 1000); // 1000 milisegundos = 1 segundo
