// Timeline Buttons
const buttons = document.getElementsByClassName("button");
const tooltip = document.getElementById("tooltip");

// Content of each tooltip
const tooltipContent = {
    medicine: "Medicine Lodge Treaty (1867)",
    lonewolf: "Lone Wolf v. Hitchcock (1903)"
};

// Displays mouseover content
for (let button of buttons) {
    button.addEventListener("mouseover", function() {
        
        // Chooses which content from tooltipContent to use with the button's id
        const content = tooltipContent[button.id];

        // Displays the bubble
        if (content) {
            tooltip.textContent = content;
            tooltip.style.display = "block";

            // Gets the button's position
            const rect = button.getBoundingClientRect();

            tooltip.style.position = "absolute";
            tooltip.style.top = rect.top + window.scrollY + "px";

            // Displays the tooltip relative to the right of the button
            if (button.classList.contains("right")) {
                tooltip.style.left = rect.right + window.scrollX + 10 + "px";

            // Displays the tooltip relative to the left of the button
            } else {
                tooltip.style.right = rect.left + window.scrollX + 10 + "px";
            }
        }
    });

    // Clears the tooltip
    button.addEventListener("mouseout", function () {
        tooltip.style.display = "none";
    });
};