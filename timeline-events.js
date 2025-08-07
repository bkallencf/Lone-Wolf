// Timeline Buttons
const nodes = document.getElementsByClassName("node");
const tooltip = document.getElementById("tooltip");

// Content of each tooltip
const tooltipContent = {
    medicine: `<h3>The Medicine Lodge Treaties</h3>
                <p>
                    On October 21, after a series of conflicts with the USA, the Kiowa, Apache, 
                    Comanche, and other Native tribes signed treaties with the USA Indian Peace 
                    Commission, relinquishing their lands in exchange for peace, lands near the Red 
                    River, and the retention of buffalo hunting rights. Notably, one of the treaties 
                    included the following provisions:
                </p>
                <ul>
                    <li>Article II guaranteed "absolute and undisturbed use and occupation (U.S., <em>Treaty with the Kiowa and Comanche</em>)" of the land to the Native residents.</li>
                    <li>Article IV gave 320 acres of land to the male head of each family and 80 acres to others above 18 to be divided as the family grew.</li>
                    <li>Article XII specified that any treaty or decision with the US and the Kiowa would require signatures from ¾ of all Kiowa males.</li>
                </ul>
                <div>
                    <img id="medicinePic" src="images/medicine.jpg"></img>
                    <p class="image-citation"><em>Sa-tan-ti Addressing the Peace Commissioners at Council Grove, Medicine Lodge Creek</em>, 1867, Hermann Stieffel. Smithsonian American Art Museum.</p>
                </div>
                <p>
                    However, once on the reservation, problems still plagued the Kiowa. In protest, many 
                    Kiowa fought nonviolently to thwart the federal policies, such as by denying the aid 
                    of teachers, on the reservation.
                </p>`,
    kagama: `<h3><em>United States v. Kagama</em></h3>
                <p>
                    <em>United States v. Kagama</em>, brought before the Supreme Court on March 2, sought to 
                    determine if the government could try Kagama for the murder of another Native, 
                    Iyouse, in June of the prior year, under the Major Crimes Act. Kagama argued that 
                    since the crime was committed on the reservation between 2 Native Americans, 
                    Congress had no right to try him.
                </p>
                <p>
                    On March 10, the Supreme Court unanimously ruled against Kagama. As the 
                    precursor to <em>Lone Wolf</em>, <em>Kagama</em> gave the government jurisdiction over crimes 
                    committed on the reservations and by Natives. The Justices' opinion states, "The 
                    territorial governments owe all their powers to the statutes of the United States 
                    conferring on them the powers which they exercise, and which are liable to be 
                    withdrawn, modified, or repealed at any time by Congress (Justia, <em>US v. Kagama</em>)." 
                    Congress assumed the right to exercise and modify its powers over Native tribes as it 
                    pleased since the tribal governments drew their powers from it. This relationship 
                    drew heavily upon the Marshall Trilogy, which defined Native's as mere stewards of 
                    their lands (Meyer 124). Thereby, this case sowed the seeds for the doctrine of 
                    plenary power that manifested in <em>Lone Wolf<em>.
                </p>`,
    dawes: `<h3>The General Allotment Act</h3>
                <p>
                    The Dawes Severalty Act, also known as the General Allotment Act, marked an 
                    important initiative to legitimize seizures of Native lands by the US. Signed into law 
                    on February 8, by President Roosevelt, it promised 160 acres for the male head of 
                    each family, 80 for those above the age of 18, and 40 acres for those under 18. The 
                    original act also made Natives who accepted allotment into US citizens in hopes of 
                    assimilating them. Surplus allotted lands could also be negotiated for by the 
                    Secretary of the Interior. All these conditions worked together to try and mask 
                    attempts to take Native lands. Additionally, these conditions and motives spurred 
                    the allotment era, which would lead to even more aggressive attempts by Congress 
                    to control Native lands.
                </p>`,
    jerome: `<h3>The Jerome Commission</h3>
                <p>
                    The Jerome Commission was established a few years prior, in 1889, to open up 
                    reservations to white settlers. Arriving on the Kiowa reservation in 1892, they quickly 
                    set to gathering signatures for a new treaty. The new treaty promised $2 million for 
                    about 2 million acres of land, well under what the land was actually worth at around 
                    $2.50 per acre. Chairman Jerome made little attempt to negotiate, saying, “‘Congress 
                    has full power over you, it can do as it is a mind to with you (Echo-Hawk 177).’” As 
                    such, the Jerome Commission used many underhanded moves to get signatures, 
                    lying about the terms of the treaty, threatening Natives, and even forging signatures. 
                    By October 6, they had gathered 456 signatures out of 725 males above 18 or 639 
                    above 21, both less than the ¾ required by Article XII of the Medicine Lodge Treaty.
                </p>
                <div>
                    <img id="jeromePic" src="images/jerome.jpg"></img>
                    <p class="image-citation"><em>Commissioner David Jerome</em>, Oklahoma Historical Society.</p>
                </div>`,
    fortHall: `<h3>Congress Ratifies the Treaty</h3>
                <p>
                    As the 1892 treaty made its way through Congress, several problems faced it. Almost 
                    as soon as it entered the Senate, changes were made to the treaty without 
                    signatures from the Kiowa or Comanche people. To stop the treaty from passing, a 
                    delegation of Kiowa and Comanche went to DC. The treaty was changed multiple 
                    times without consent; however, it was never enough to fully ratify the treaty.    
                </p>
                <p>
                    That changed as “An Act to Ratify an Agreement Made with the Indians of the Fort 
                    Hall Indian Reservation in Idaho, and Making an Appropriation to Carry the Same 
                    into Effect” was passed by the Senate on January 19. A few months later, on June 6, 
                    the act was fully passed by both houses of Congress. While the previous treaty in 
                    1892 found much difficulty in passing, the later act in 1900 essentially, among other 
                    things, passed a modified version of the treaty without involving the Kiowa at all.
                </p>`,
    resistance: `<h3>Legal Resistance</h3>
                <p>
                    As Congress’ new act imposed itself on the Kiowa people, many, such as the Kiowa 
                    chief, Lone Wolf the younger, sought to take this injustice to the government. On 
                    June 6, he sued the Secretary of the Interior, Ethan Hitchcock, in the Supreme Court 
                    for the District of Columbia. His argument was primarily based on the Medicine 
                    Lodge Treaty. He argued they violated Article II by restricting their access to the land, 
                    Article VI because there wasn’t enough usable land on the reservation to account for 
                    each person, and Article XII because they had never gotten enough signatures to 
                    approve the treaty, nor had they gotten any signatures when they had changed the 
                    treaty. Despite this, Lone Wolf lost the case and appealed to the District of Columbia 
                    Circuit Court of Appeals.
                </p>
                <p>
                    Losing in that court, too, Lone Wolf appealed the case to the US Supreme Court. 
                    While fighting the case, Lone Wolf requested a temporary injunction to prevent the 
                    use of the surplus lands. However, this request was denied, and on August 6, settlers 
                    flooded into the reservation. Finally, on October 23, the Supreme Court heard the 
                    case.
                </p>`,
    loneWolf: `<h3><em>Lone Wolf v. Hitchcock</em></h3>
                <div>
                    <img id="loneWolfPic" src="images/lonewolf.jpg"></img>
                    <p class="image-citation"><em>Portrait (Front) of Mamay-Day-Te or Mamay-Dat-Ta (Lone Wolf The Second)</em>, Oct. 1902, De Lancey W. Gill. National Anthropological Archives, Smithsonian Institution.</p>
                </div>
                <p>
                    On January 5, 1903, the US Supreme Court unanimously ruled that there had been 
                    no wrongdoing, but that Congress was subject to exercising its plenary powers over 
                    the Native people. Further, Congress would not be subject to judicial scrutiny in this 
                    regard as the Court assumed Congress to act in "perfectly good faith (Justia, <em>Lone 
                    Wolf v. Hitchcock</em>)." This was partially predicated on Kagama as well as the Marshall 
                    Trilogy, in particular, <em>Johnson v. McIntosh (1823)</em>, giving Congress the doctrine of 
                    discovery.
                </p>
                <p>
                    The Court’s decision ultimately allowed Congress to exercise more power in seizing 
                    lands from other Native tribes and influenced the mentality of land management in 
                    territories outside of the US in the Interior Cases. However, unlike the Interior Cases, 
                    while some concern was expressed over allowing Congress to have absolute control 
                    over the territories, no such concerns existed in <em>Lone Wolf</em>.
                </p>`,
    reparations: `<h3>Reparations</h3>
                <p>
                    After suffering for decades under acts of legislation pushed forth by Congress' 
                    plenary power, small compensations were made to alleviate some of the damages.
                </p>
                <ul>
                    <li>1955: To compensate for some of the damages caused in the wake of plenary power, Congress awarded $2 million to the Kiowa. While this did not completely make up for their wrongdoing, it marked a step in a new direction for the Natives.</li>
                    <li>Throughout the 1970s, Natives achieved 3 key victories by securing the right to vote, making Congress beholden to the Courts, and ensuring that Congress and other nations had to abide by Native treaties, which had previously been practically discarded.</li>    
                </ul>
                <p>
                    Additionally, future cases redefined the plenary power doctrine, imposing limits to 
                    lessen Congress’ absolute power. However, despite being restricted, the doctrine still 
                    unleashed its power in multiple future cases.
                </p>`
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
        tooltip.style.left = rect.right + window.scrollX + 10 + "px";
        tooltip.classList.add("right-pointer");

    // Displays the tooltip relative to the left of the button
    } else {
        tooltip.style.left = rect.left + window.scrollX - tooltipWidth - 50 + "px";
        tooltip.classList.add("left-pointer");
    }
}