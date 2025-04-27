// 1. Change text content dynamically
document.getElementById("changeTextButton").addEventListener("click", function() {
    const textElement = document.getElementById("textContent");
    textElement.textContent = "This text has been dynamically changed!";
    textElement.classList.add("highlight");  // Apply a CSS class to change style
});

// 2. Modify CSS styles via JavaScript
document.getElementById("toggleButton").addEventListener("click", function() {
    const textElement = document.getElementById("textContent");
    textElement.classList.toggle("hidden");  // Hide or show the text
});

// 3. Add or remove an element when a button is clicked
document.getElementById("addElementButton").addEventListener("click", function() {
    const container = document.getElementById("newElementContainer");

    // Check if the new element already exists
    if (!document.getElementById("newElement")) {
        const newElement = document.createElement("p");
        newElement.id = "newElement";
        newElement.textContent = "This is a dynamically added paragraph!";
        container.appendChild(newElement);
    } else {
        // If it already exists, remove it
        const existingElement = document.getElementById("newElement");
        container.removeChild(existingElement);
    }
});
