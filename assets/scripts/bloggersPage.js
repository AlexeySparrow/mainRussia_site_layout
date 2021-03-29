/* custom select */

const selectedPlatform = document.getElementById('selectedPlatform')
const selectedDirection = document.getElementById('selectedDirection')
const optionsContainerPlatform = document.getElementById('optionsContainerPlatform')
const optionsContainerDirection = document.getElementById('optionsContainerDirection')

const clickSelect = (selected, optionsContainer, option) => {
    const optionsList = document.querySelectorAll('.' + option);

    optionsContainer.classList.toggle("active");

    optionsList.forEach(o => {
        o.addEventListener("click", () => {
            selected.innerHTML = o.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
        });
    });
};
