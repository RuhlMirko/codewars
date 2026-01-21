/*
   Let's create an emoji slot machine! Replace the hardcoded 
   data with random fruit emojis from an emojis API. 
   
   - Request emoji food data from the API resource below. Log it and look at it!
        - Write a function that takes in the data and returns a new array of only
        fruit emoji objects
        - Write a function to get 9 random fruits from your new array of fruit 
        
   - Load nine random fruits into the slot machine
*/

const slotMachine = document.querySelector(".emoji-slots-game");
const food =
  "https://apis.scrimba.com/emojihub/api/all/category/food-and-drink";
// const MAX_FRUITS = 9

slotMachine.innerHTML = "<h1>Loading fruits ...</h1>";

function getRandomFruits(arr, count = 9) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, count);
}

async function renderFruits() {
  const res = await fetch(food);
  const fruits = await res.json();

  const randomFruits = getRandomFruits(fruits);

  slotMachine.innerHTML = "";

  randomFruits.forEach((fruit) => {
    console.log(fruit);
    const span = document.createElement("li");
    span.innerHTML = fruit.htmlCode[0]; // API format
    slotMachine.appendChild(span);
  });
}

renderFruits();
// write your fetch request here
