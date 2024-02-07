var currentImageIndex = 0;

function showMorePhoto(category) {
    currentImageIndex = 0; // Reset the current image index
    showImage(category);
}

function showImage(category) {
    var imagesBox = document.getElementById("images-box");
    imagesBox.innerHTML = "";

    const imagesFolder = "images/" + category;

    for (var i = 1; i <= 100; i++) {
        imageURL = "images/" + category + "/" + i + '.jpg';

        if (imageExists(imageURL)) {
            var image = document.createElement('img');
            image.src = imageURL;
            image.alt = category + ' Image ' + i;
            imagesBox.appendChild(image);
        }
    }

    // Display the current image
    displayImage(currentImageIndex);

    var modal = document.getElementById("popup-modal");
    modal.style.display = "block";
}

function displayImage(index) {
    var images = document.getElementById("images-box").getElementsByTagName("img");

    // Hide all images
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    // Display the current image
    images[index].style.display = "block";
}

function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= 5) {
        currentImageIndex = 0;
    }
    displayImage(currentImageIndex);
}

function showPreviousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = 4;
    }
    displayImage(currentImageIndex);
}

function Backpopup() {
    var modal = document.getElementById("popup-modal");
    modal.style.display = "none";
}


function imageExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status !== 404;
}


