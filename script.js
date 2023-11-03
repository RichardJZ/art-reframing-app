document.addEventListener("DOMContentLoaded", function() {
    const imageUpload = document.getElementById("image-upload");
    const brightnessSlider = document.getElementById("brightness-slider");
//    const widthSlider = document.getElementById("width-slider");
//     const heightSlider = document.getElementById("height-slider");
    const uploadedImage = document.getElementById("uploaded-image");
    const backgroundColorSlider = document.getElementById("background-color-slider");

    imageUpload.addEventListener("change", handleImageUpload);
    brightnessSlider.addEventListener("input", updateBrightness);
  //  widthSlider.addEventListener("input", updateDimensions);
  //  heightSlider.addEventListener("input", updateDimensions);
    backgroundColorSlider.addEventListener("input", updateBackgroundColor);

    function handleImageUpload(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function(event) {
                uploadedImage.src = event.target.result;
                // Reset sliders to default values
                brightnessSlider.value = 100;
            //    widthSlider.value = 100;
            //    heightSlider.value = 100;
            };

            reader.readAsDataURL(file);
        }
    }

    function updateBrightness() {
        const value = brightnessSlider.value;
        uploadedImage.style.filter = `brightness(${value}%)`;
    }
/*
    function updateDimensions() {
        const widthValue = widthSlider.value;
        const heightValue = heightSlider.value;
        uploadedImage.style.width = `${widthValue}%`;
        uploadedImage.style.height = `${heightValue}%`;
    } */

    function updateBackgroundColor() {
        const colorValue = backgroundColorSlider.value;
        document.body.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
    }
  


    const points = document.querySelectorAll('.point');
    const bText = document.getElementById('bottomText');
    const lText = document.getElementById('leftText');
    const tText = document.getElementById('topText');
    const rText = document.getElementById('rightText');

    const words = ['honger', 'dierlijkheid', 'woede','kalmte',
    'hemel', 'leren', 'realisatie', 'bodhisattva', 'boeddha'];

    points.forEach((point, index) => {
        point.addEventListener('click', () => {
            bText.textContent = words[index];
            bText.style.display = 'block';
            lText.textContent = words[index];
            lText.style.display = 'block';
            tText.textContent = words[index];
            tText.style.display = 'block';
            rText.textContent = words[index];
            rText.style.display = 'block';
        });
    });


});
