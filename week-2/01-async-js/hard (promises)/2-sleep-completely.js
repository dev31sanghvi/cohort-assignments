/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

module.exports = sleep;

console.log("start");

delay(5000)
  .then(() => {
    console.log("5 sec later");
  })

  .then(() => delay(3000))
  .then(() => {
    console.log("after 3 more sec ");
  });


  console.log('over');



