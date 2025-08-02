// Timeline Buttons
const nodes = document.getElementsByClassName("node");
const tooltip = document.getElementById("tooltip");

// TODO: write the actual contents of each item
// Content of each tooltip
const tooltipContent = {
    // Use ol for numbered or ul for bullet point
    medicine: `<h3>The Medicine Lodge Treaty</h3>
                <p>On [month] [date], the Kiowa, [list of others] signed a treaty with the US. Notably, the treaty included the following provisions:</p>
                <ul>
                    <li>Article II stated [stuff]</li>
                    <li>Article IV</li>
                    <li>Article XII</li>
                </ul>
                <img id="medicinePic" src="images/medicine.jpg></img>">`,
    dawes: `<h3>The General Allotment Act</h3>`,
    jerome: `<h3>The Jerome Commission</h3>`,
    fortHall: `<h3>Congress Ratifies the Treaty</h3>
                <p>An Act to Ratify an Agreement Made with the Indians of the Fort Hall Indian Reservation in Idaho, and Making an Appropriation to Carry the Same into Effect</p>`,
    // TODO: 1901?
    allotment: `<h3>Land Seizures</h3>`,
    loneWolf: `<h3><em>Lone Wolf v. Hitchcock</em></h3>
                <img id="loneWolfPic" src="images/lonewolf.jpg"></img>`
};

// Checks if the user clicked the button to lock it
let nodeLocked = false;

main();

function main() {
    checkEvents();
}

function checkEvents() { // Displays button content
    for (let node of nodes) {

        // Checks for when the button is hovered over
        node.addEventListener("mouseover", function() {
            if (!nodeLocked) {
                setButton(node);
            }
        });

        // Clears the tooltip when not being hovered over
        node.addEventListener("mouseout", function () {
            if (!nodeLocked) {
                tooltip.style.display = "none";
            }
        });

        // Locks the button when clicked
        node.addEventListener("click", function() {
            nodeLocked = true;
            setButton(node);

            node.style.backgroundColor = "red";

            // Disables this button and re-enables all other buttons
            node.disabled = true;
            for (let otherNode of nodes) {
                if (otherNode !== node) {
                    otherNode.disabled = false;
                    otherNode.style.backgroundColor = "#007200";
                }
            }
        });
    }

    // Closes the tooltip whenever the user clicks anywhere else on the page
    document.addEventListener("click", function(e) {
        if (![...nodes].includes(e.target)) {
            nodeLocked = false;
            tooltip.style.display = "none";

            // Re-enables all buttons
            for (let button of nodes) {
                button.disabled = false;
                button.style.backgroundColor = "#007200";
            }
        }
    }); 
}

function setButton(button) { // Sets up and displays the contents of the popup
    // Chooses which content from tooltipContent to use with the button's id
    const content = tooltipContent[button.id];
    if (!content) return;
    tooltip.innerHTML = content;

    tooltip.style.display = "block";
    tooltip.classList.remove("right-pointer", "left-pointer");

    // Gets the button's position
    const rect = button.getBoundingClientRect();

    const tooltipWidth = tooltip.offsetWidth;

    tooltip.style.position = "absolute";
    tooltip.style.top = button.offsetTop - 15 + "px";

    // Displays the tooltip relative to the right of the button
    if (button.classList.contains("right")) {
        tooltip.style.left = rect.right + window.scrollX + 40 + "px";
        tooltip.classList.add("right-pointer");

    // Displays the tooltip relative to the left of the button
    } else {
        tooltip.style.left = rect.left + window.scrollX - tooltipWidth - 40 + "px";
        tooltip.classList.add("left-pointer");
    }
}