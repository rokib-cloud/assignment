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
