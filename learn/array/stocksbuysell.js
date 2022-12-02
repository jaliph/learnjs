

let findBuySellStockPrices = function(stockNums) {
  
  
  return [-1, -1]; //Return a tuple with (high, low) price values
};



// Function to print a vector of integers as a comma-separated list
// This function is not part of the solution.
let printArray = function(array){

    let element = "";
    element += "[";
    for (let index = 0; index < array.length; index++) {
        element +=   array[index] + ', '; 
    }
    element = element.replace(/,\s*$/, "");
    element += "]";

    return element;
}

var stockPricesData = [[1, 2, 3, 4, 3, 2, 1, 2, 5], [8, 6, 5, 4, 3, 2, 1], [12, 30, 40, 90, 110], [2]];

for (var i=0; i< stockPricesData.length; i++){
  var result = findBuySellStockPrices(stockPricesData[i]);
  console.log((i + 1) + ". Day stocks: " + printArray(stockPricesData[i]));
  if (result){
      console.log("   Buy Price: " + result[0] + ", Sell Price: " + result[1]);
  }
  else{
      console.log("   Buy Price: None, Sell Price: None");
  }
  console.log("-------------------------------------------------------------------------------------------------------\n");
}