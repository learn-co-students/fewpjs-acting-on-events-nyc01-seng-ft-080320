// Your code here
function moveDodgerLeft(){
    let left_val = parseInt(dodger.style.left);
    debugger;
    if (left_val > 1){
        dodger.style.left = `${--left_val}px`;
        console.log(dodger.style.left);
    }
};

let moveDodgerRight = ()=>{
    let left_val = parseInt(dodger.style.left);
    debugger;
    if (left_val < 359){
        dodger.style.left = `${++left_val}px`;
        console.log(dodger.style.left);
    }
};