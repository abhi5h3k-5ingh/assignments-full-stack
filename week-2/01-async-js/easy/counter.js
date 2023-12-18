// create a counter in javascript

let count=0;

const countInterval=setInterval(()=>{
    count++;
    console.log(count);
}, 1000);

setTimeout(()=>{
    clearInterval(countInterval);
    console.log("Counter stopped after 10 sec");
}, 10000);
