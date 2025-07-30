// Timeline Buttons
const buttons = document.getElementsByClassName("button");
const tooltip = document.getElementById("tooltip");

for (let button of buttons) {
    button.addEventListener("mouseover", function(event) {
        if (button.id === "medicine") {
            tooltip.textContent = "The Medicine Lodge Treaty was signed in 1867."
        }

        tooltip.style.display = "block";
        tooltip.style.left = (event.pageX + 10) + "px";
        tooltip.style.top = (event.pageY + 10) + "px";
    });
};