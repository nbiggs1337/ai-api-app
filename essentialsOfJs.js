// Essentials of JS 
// Arrays and Objects
// Functions and return
// Async Coding



// forEach map filter find indexOf

// arr.forEach(function(val){
//     console.log(val + "Hello")
// }) // grab each value in the array and calls the function for each item



// this is the easist way to copy an array - with map
// let data = arr.map(function(val){
//     return val
// })

// console.log(data)


//filter == return true == filter out -- return false == keep
// let data = arr.filter(function(val){
//     if ( val > 3) {
//         return true
//     } else { 
//         return false
//     }
// })

// console.log(data)
// // 
// let arr = [1,2,3,4,"hey", {}, 2]

// find returns the first value that passes the given test
// let found = arr.find(val => val = 2)

// index of tells you which index a value is at, and returns -1 if that value is not found!
// let idx = arr.indexOf(6)
// console.log(idx)

///OBJECTS

// here we can define an object
// let obj = {
//     key: "value",
//     name: "Noah",
//     age: 28,
//     "two word": "value",
//     friends: {
//         name: "David"
//     }
// }

// freezing objects lets us protect objects from mutation
// Object.freeze(obj)

// changing and deleting properties
// obj.name = "Biggs"
// obj["age"] = 20
// delete obj.age


// // console.log(obj)

//FUNCTIONS

// A FUNCTION CALL IS EQUAL TO WHAT IT RETURNS
// function abcd(){
//     return 12
// }

// let output = abcd() // output is now == 12

// because thats what the function returns

// console.log(output)

//ASYBC CODING 

// async await proper syntax
async function abcd(){
    let url = "https://randomuser.me/api"
    let blob = await fetch(url)
    let ans = await blob.json()
    console.log(ans.results[0])
}
// then catch sync syntax
function notAwait() {
    let blob = fetch("https://randomuser.me/api")
    blob.then(data => data.json())
        .then(final => console.log(final.results[0]))
        .catch(errr => console.error(errr))
}

// abcd()
notAwait()