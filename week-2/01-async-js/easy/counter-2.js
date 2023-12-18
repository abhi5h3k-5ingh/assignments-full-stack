// create counter without using setInterval function

let count=0;
const counter=()=>{
    count++;
    console.log(count);
    setTimeout(counter, 1000);
}
counter();
