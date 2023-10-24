// JavaScript variables
const canvas = document.getElementById("canvas");
const frame = document.getElementById("frame"); // Add this line
const context = canvas.getContext("2d");
const clearButton = document.getElementById("clear-button");
const imageUpload = document.getElementById("image-upload");

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Set up frame
frame.style.width = canvas.width + 2 * 80 + "px";
frame.style.height = canvas.height + 2 * 80 + "px";

// Set up canvas
canvas.width = window.innerWidth - 20;
canvas.height = 400;
context.lineWidth = 5;
context.lineJoin = "round";
context.lineCap = "round";
context.strokeStyle = "#000";

// Event listeners
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top];
});

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);

clearButton.addEventListener("click", clearCanvas);

imageUpload.addEventListener("change", handleImageUpload);

// Drawing function
function draw(e) {
    if (!isDrawing) return;

    const [x, y] = [e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top];

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(x, y);
    context.stroke();

    [lastX, lastY] = [x, y];
}

// Clear the canvas
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// Handle image upload
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (event) {
            const img = new Image();
            img.src = event.target.result;

            img.onload = function () {
                // Set canvas dimensions to match the image
                canvas.width = img.width;
                canvas.height = img.height;

                // Set up frame dimensions
                frame.style.width = canvas.width + 2 * 80 + "px";
                frame.style.height = canvas.height + 2 * 80 + "px";

                // Draw the uploaded image on the canvas
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
        };

        reader.readAsDataURL(file);
    }
}
