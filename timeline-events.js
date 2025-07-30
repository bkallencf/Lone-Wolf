// Timeline Buttons
const buttons = document.getElementsByClassName("button");
const tooltip = document.getElementById("tooltip");

// Content of each tooltip
const tooltipContent = {
    medicine: <p>Medicine Lodge Treaty (1867)</p>
};

for (let button of buttons) {
    button.addEventListener("mouseover", function() {
        
        // Chooses which content from tooltipContent to use with the button's id
        const content = tooltipContent[button.id];

        // Displays the bubble
        if (content) {
            tooltip.innerHTML = content;
            tooltip.style.display = "block";

            // Gets the button's position
            const rect = button.getBoundingClientRect();

            tooltip.style.position = "absolute";
            tooltip.style.left = rect.right + window.scrollX + 10 + "px";
            tooltip.style.top = rect.top + window.scrollY + "px";
        }
    });

    button.addEventListener("mouseout", function () {
        tooltip.style.display = "none";
    });
};