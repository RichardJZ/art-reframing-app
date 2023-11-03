document.addEventListener("DOMContentLoaded", function() {
    const imageUpload = document.getElementById("image-upload");
    const brightnessSlider = document.getElementById("brightness-slider");
    const uploadedImage = document.getElementById("uploaded-image");

    imageUpload.addEventListener("change", handleImageUpload);
    brightnessSlider.addEventListener("input", updateBrightness);

    function handleImageUpload(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function(event) {
                uploadedImage.src = event.target.result;
            };

            reader.readAsDataURL(file);
        }
    }

    function updateBrightness() {
        const value = brightnessSlider.value;
        uploadedImage.style.filter = `brightness(${value}%)`;
    }
});
