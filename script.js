const positionElement = document.getElementById("position");

document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    positionElement.textContent = `X: ${x}, Y: ${y}`;
});
