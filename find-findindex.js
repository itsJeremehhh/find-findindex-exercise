/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {

   return usersArray.find(function(user) {
    return user.username === username;
  })
  // below was my attempt\\

  // let arr = usersArray;
  //  for(let i = 0; i < arr.length; i++){
  //   if(arr[i] === username) {
  //     return arr[i];
  //   }
  //  }
 
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user) {
    return user.username === username;
  })
if(foundIndex === -1) return;

return usersArray.splice(foundIndex,1) [0];

  //i was unable to figure this one out my own.
  // return usersArray.findIndex(function(user) {
  //   return user.username !== username;
  // })
}

//Where is the user within the callback function coming from? 
// what is happening when we have "user.username === username"
//what is the point of the [0] at the end of the "removeUser" function?