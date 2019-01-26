const getIds = new Promise((resolve, reject) => {
  setTimeout(() => {
  resolve('Chamika');
  console.log('Resolved')
}, 1500);
})

getIds.then(result => {
  console.log(result)
})

/////////////////////////

const getIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Chamika');
    console.log('Resolved')
  }, 1500);
})

const getIds2 = new Promise((resolve, reject) => {
  setTimeout(() => {
  resolve('Chamika2');
  console.log('Resolved2')
}, 1500);
})

async function multipleRequestsAsync() {
  try {
    console.log("starting...");                // 3
    const response1 = await getIds; // 4
    console.log("middile...");
    const response2 = await getIds2; // 4
    console.log("done");                       // 7
  } catch (error) {
    console.error(error);
  }
}                                              // 5

console.log("before start");                   // 1
const promise = multipleRequestsAsync();       // 2
console.log("continuing...");                  // 6
