// Timeline Buttons
const buttons = document.getElementsByClassName("button");
const tooltip = document.getElementById("tooltip");

// Content of each tooltip
const tooltipContent = {
    medicine: <p>Medicine Lodge Treaty (1867)</p>
};

for (let button of buttons) {
    button.addEventListener("mouseover", function(event) {
        const content = tooltipContent[button.id];
        if (content) {
            tooltip.innerHTML = content;
            tooltip.style.display = "block";
            tooltip.style.left = (event.pageX + 10) + "px";
            tooltip.style.top = (event.pageY + 10) + "px";
        }
    });

    button.addEventListener("mouseout", function () {
        tooltip.style.display = "none";
    });
};