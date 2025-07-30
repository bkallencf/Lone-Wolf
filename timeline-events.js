// Timeline Buttons
const buttons = document.getElementsByClassName("button");
const tooltip = document.getElementById("tooltip");

// Content of each tooltip
const tooltipContent = {
    medicine: "Medicine Lodge Treaty (1867)",
    lonewolf: "Lone Wolf v. Hitchcock (1903)"
};

// Checks if the user clicked the button to lock it
let buttonLocked = false;

main();

function main() {
    checkEvents();
}

function checkEvents() { // Displays button content
    for (let button of buttons) {

        // Checks for when the button is hovered over
        button.addEventListener("mouseover", function() {
            if (!buttonLocked) {
                setButton(button);
            }
        });

        // Clears the tooltip when not being hovered over
        button.addEventListener("mouseout", function () {
            if (!buttonLocked) {
                tooltip.style.display = "none";
            }
        });

        // Locks the button when clicked
        button.addEventListener("click", function() {
            buttonLocked = true;
            setButton(button);

            // Disables this button and re-enables all other buttons
            button.disabled = true;
            for (let otherButton of buttons) {
                if (otherButton !== button) {
                    otherButton.disabled = false;
                }
            }
        });
    }

    // Closes the tooltip whenever the user clicks anywhere else on the page
    document.addEventListener("click", function(e) {
        if (![...buttons].includes(e.target)) {
            buttonLocked = false;
            tooltip.style.display = "none";

            // Re-enables all buttons
            for (let button of buttons) {
                button.disabled = false;
            }
        }
    }); 
}

function setButton(button) { // Sets up and displays the contents of the popup
    // Chooses which content from tooltipContent to use with the button's id
    const content = tooltipContent[button.id];
    if (!content) return;

    // Temporarily creates the tooltip off-screen to measure its length for positioning
    tooltip.style.visibility = "hidden";
    tooltip.style.display = "block";
    tooltip.style.left = "-9999px";

    // Delays the positioning of the button until measurements are done
    requestAnimationFrame(() => {
        // Gets the button's position
        const rect = button.getBoundingClientRect();

        const tooltipWidth = tooltip.offsetWidth;

        tooltip.style.position = "absolute";
        tooltip.style.top = button.offsetTop + "px";

        // Displays the tooltip relative to the right of the button
        if (button.classList.contains("right")) {
            tooltip.style.left = rect.left + window.scrollX + 10 + "px";

        // Displays the tooltip relative to the left of the button
        } else {
            tooltip.style.left = rect.left + window.scrollX - tooltipWidth - 10 + "px";
        }

        tooltip.style.visibility = "visible";
    });
}