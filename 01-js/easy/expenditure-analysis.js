/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  obj=[];
  for(let i=0;i<transactions.length;i++){
    let found=0;
      for(let j=0;j<obj.length;j++){
        if(transactions[i]["category"]==obj[j]["category"]){
          obj[j]["totalSpent"]+=transactions[i]["totalSpent"];
          found=1;
        }
      }
      if(found==0)
          obj.push({category: transactions[i]["category"], totalSpent: transactions[i]["totalSpent"]});
  }
  return obj;
}

module.exports = calculateTotalSpentByCategory;
