const positionElement = document.getElementById("position");
var clickPosition = document.getElementById("clickposition");

document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    positionElement.textContent = `X: ${x}, Y: ${y}`;
});

button.addEventListener("click", function(event) {
    // Get the mouse click coordinates relative to the viewport
    var x = event.clientX;
    var y = event.clientY;
    
    // Display the coordinates
    alert("Mouse click coordinates: X=" + x + ", Y=" + y);
});