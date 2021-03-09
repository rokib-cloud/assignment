
//---------------Function for convert distance Kilometer to Meter
function kilometerToMeter(distanceKM) {
  if (typeof(distanceKM) != "number") {
      return "Number is expected as distance";
  }
  if (distanceKM < 0) {
      return "Distance cannot be negative";
  }

  var distanceM = distanceKM * 1000;
  return distanceM;
}

//---------------Function for Calculating Budget
function budgetCalculator(numWatch, numMobile, numLaptop) {
  if (typeof(numWatch) != "number" || typeof(numMobile) != "number" || typeof(numLaptop) != "number") {
      return "Number is expected as Product Quantity";
  }
  if (numWatch < 0 || numMobile < 0 || numLaptop < 0) {
      return "Product Quantity Cannot be negetive";
  }

  var totalPrice = (numWatch * 50) + (numMobile * 100) + (numLaptop * 500);
  return totalPrice;
}

//---------------Function for calculating hotel cost
function hotelCost(numDay) {
  if (typeof(numDay) != "number") {
      return "Number is expected";
  }
  if (numDay < 0) return "Day cann't be negetive";

  var totalBill = 0;
  if (numDay > 20) {
      totalBill = (numDay - 20) * 50;
      numDay = 20;
  }

  if (numDay > 10) {
      totalBill += (numDay - 10) * 80;
      numDay = 10;
  }

  totalBill += numDay * 100;
  return totalBill;
}

//---------------Function for finding largest name
function megaFriend(friendList) {
  if (friendList.length == 0) return "List of friend is empty."
  var maxName = "";
  for (var i = 0; i < friendList.length; i++) {
      if (friendList[i].length > maxName.length) maxName = friendList[i];
  }
  return maxName;
}

// Setup
var contacts = [{
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
  contacts.forEach(item => {
      if (item.hasOwnProperty(prop) item.firstName == name) {
          return item.prop;
      }

  })
  return "No such property"

  // Only change code above this line
}

lookUpProfile("Akira", "likes");