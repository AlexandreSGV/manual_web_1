const dropdownBtn = document.getElementById("dropdownBtn");
const menuDropdown = document.getElementById("menuDropdown");

dropdownBtn.addEventListener("click", () => {
    menuDropdown.classList.toggle("hidden");
});

document.addEventListener('click', (evento) => {
    if (!dropdownBtn.contains(evento.target) && !menuDropdown.contains(evento.target)){
        menuDropdown.classList.add("hidden");
    }
});