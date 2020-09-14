let dodger = document.getElementById("dodger");

function getDodgerLocation() {
    let dodgerLocation = dodger.style.left
    const parsedLocation = parseInt(dodgerLocation, 10);
    return parsedLocation;
}

function moveDodgerLeft() {
    let location = getDodgerLocation();

    if (location > 0) {
        dodger.style.left = `${location - 1}px`;
    }
}

function moveDodgerRight() {
    let location = getDodgerLocation();

    if (location < 360) {
        dodger.style.left = `${location + 1}px`;
    }

}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    };
});