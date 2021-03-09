//* Unit Conversion//
function killometerToMeter(killometer){
    var Meter= killometer*1000;
    return Meter;
  
  }
  
  var Meter= killometerToMeter(25.75);
  console.log(Meter)
  
  
  
  
  //*BudgetCalculator//
  function budgetCalculator(price){
    var total = price * 3 ;
    return total;
  
  }
  
  var watch = budgetCalculator(50);
  var Phone = budgetCalculator(100);
  var laptop = budgetCalculator(500);
  console.log(watch+Phone+laptop);