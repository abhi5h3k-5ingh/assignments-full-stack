/*
 * Write 3 different functions that return promises
 that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of
  these functions in order.
 * Return a promise chain which return the time in 
  milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`wait1 resolved after ${t} seconds`);
      }, t * 1000);
    });
  }
  
  function wait2(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`wait2 resolved after ${t} seconds`);
      }, t * 1000);
    });
  }
  
  function wait3(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`wait3 resolved after ${t} seconds`);
      }, t * 1000);
    });
  }
  
  // function calculateTime(t1, t2, t3) {
  //   const start = Date.now();
  
  //   // Sequentially call the functions using promise chaining
  //   return wait1(t1)
  //   .then((result1)=>{
  //       console.log(result1);
  //       return wait2(t2);
  //   })
  //   .then((result2)=>{
  //       console.log(result2);
  //       return wait3(t3);
  //   })
  //   .then((result3)=>{
  //       console.log(result3);
  //       const end=Date.now();
  //       return end-start;
  //   });

  // }


  // using async await syntax:
  async function calculateTime(t1, t2, t3) {
    const start = Date.now();
  
    try {
      // Sequentially call the functions using async/await
      const result1 = await wait1(t1);
      console.log(result1);
  
      const result2 = await wait2(t2);
      console.log(result2);
  
      const result3 = await wait3(t3);
      console.log(result3);
  
      const end = Date.now();
      return end - start;
    } catch (error) {
      console.error(error);
      throw error; // Re-throw the error to propagate it further if needed
    }
  }


calculateTime(2,4,6);
// module.exports = calculateTime;
