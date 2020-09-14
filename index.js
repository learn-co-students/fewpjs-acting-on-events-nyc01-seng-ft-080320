// Your code here
const dodger = document.querySelector('#dodger');
dodger.style.backgroundColor = '#FF69B4';
dodger.style.bottom = '0px';
function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);

    if (left > 0){
        dodger.style.left = `${left - 1}px`
    }
}

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowLeft'){
        moveDodgerLeft()
    };
})

function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);

    if (left < 360){
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowRight'){
        moveDodgerRight()
    }
})

function moveDodgerUp(){
    // get the current location of the item along the y axis and remove the px
    let bottomNumbers = dodger.style.bottom.replace('px', '');
    // convert the result of bottomNumbers to a number we can use by parsing it
    let bottom = parseInt(bottomNumbers, 10)

    if(bottom < 380){
        // reset bottom to the current bottom plus the number of pixels we want to increment by and add back in the px
        dodger.style.bottom = `${bottom + 5}px`
    };
}

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowUp'){
        moveDodgerUp()
    }
})