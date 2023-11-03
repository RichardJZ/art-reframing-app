document.addEventListener("DOMContentLoaded", function() {
    const imageUpload = document.getElementById("image-upload");
    const brightnessSlider = document.getElementById("brightness-slider");
    const widthSlider = document.getElementById("width-slider");
    const heightSlider = document.getElementById("height-slider");
    const uploadedImage = document.getElementById("uploaded-image");
    const backgroundColorSlider = document.getElementById("background-color-slider");

    imageUpload.addEventListener("change", handleImageUpload);
    brightnessSlider.addEventListener("input", updateBrightness);
    widthSlider.addEventListener("input", updateDimensions);
    heightSlider.addEventListener("input", updateDimensions);
    backgroundColorSlider.addEventListener("input", updateBackgroundColor);

    function handleImageUpload(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function(event) {
                uploadedImage.src = event.target.result;
                // Reset sliders to default values
                brightnessSlider.value = 100;
                widthSlider.value = 100;
                heightSlider.value = 100;
            };

            reader.readAsDataURL(file);
        }
    }

    function updateBrightness() {
        const value = brightnessSlider.value;
        uploadedImage.style.filter = `brightness(${value}%)`;
    }

    function updateDimensions() {
        const widthValue = widthSlider.value;
        const heightValue = heightSlider.value;
        uploadedImage.style.width = `${widthValue}%`;
        uploadedImage.style.height = `${heightValue}%`;
    }

    function updateBackgroundColor() {
        const colorValue = backgroundColorSlider.value;
        document.body.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
    }
    function addText() {
        const textInput = document.getElementById("textInput").value;
        const uploadedImage = document.getElementById("uploaded-image");

        if (!uploadedImage.src) {
            alert("Please upload an image first.");
            return;
        }

        document.getElementById("topText").textContent = textInput;
        document.getElementById("bottomText").textContent = textInput;
        document.getElementById("leftText").textContent = textInput;
        document.getElementById("rightText").textContent = textInput;
    }

});
