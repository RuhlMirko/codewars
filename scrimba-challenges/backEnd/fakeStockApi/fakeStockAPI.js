export default function getStockData() {
    const currDate = new Date()
    let currentTime = `${currDate.getHours()}/${currDate.getMinutes()}/${currDate.getSeconds()}`    
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: (Math.random()*3).toFixed(2) /* return a random number between 0 and 3 to two decimal places */, 
        time: currentTime/* return a timestamp in this format: hh/mm/ss */
    }
}
  