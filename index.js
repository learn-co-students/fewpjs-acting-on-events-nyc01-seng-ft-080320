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
    let bottomNumbers = dodger.style.bottom.replace('px', '');
    let bottom = parseInt(bottomNumbers, 10)

    if(bottom < 380){
        dodger.style.bottom = `${bottom + 5}px`
    };
}

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowUp'){
        moveDodgerUp()
    }
})