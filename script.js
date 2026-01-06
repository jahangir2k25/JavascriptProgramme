function calculateResult() {

    let studentName = document.getElementById("studentName").value;
    let marksInput = document.getElementById("marks").value;

    if (studentName === "" || marksInput === "") {
        alert("Please fill all fields");
        return;
    }

    // Convert input string to array
    let marks = marksInput.split(",").map(Number);

    // Calculate total & average
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    let average = total / marks.length;

    // Grade logic
    let grade;
    if (average >= 80) {
        grade = "Excellent";
    } else if (average >= 60) {
        grade = "Good";
    } else if (average >= 33) {
        grade = "Pass";
    } else {
        grade = "Fail";
    }

    // Highest mark function
    function findHighestMark(arr) {
        let highest = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > highest) {
                highest = arr[i];
            }
        }
        return highest;
    }

    let highestMark = findHighestMark(marks);

    // Count vowels
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let i = 0; i < studentName.length; i++) {
        if (vowels.includes(studentName[i])) {
            vowelCount++;
        }
    }

    // Display result
    document.getElementById("result").innerHTML = `
        <strong>Student Name:</strong> ${studentName}<br>
        <strong>Total Marks:</strong> ${total}<br>
        <strong>Average Marks:</strong> ${average.toFixed(2)}<br>
        <strong>Highest Mark:</strong> ${highestMark}<br>
        <strong>Grade Result:</strong> ${grade}<br>
        <strong>Vowels in Name:</strong> ${vowelCount}
    `;
}


// Shopping cart analyzer part--------------------------------------------
function analyzeCart() {

    let customerName = document.getElementById("customerName").value;
    let pricesInput = document.getElementById("prices").value;

    if (customerName === "" || pricesInput === "") {
        alert("Please fill all fields");
        return;
    }

    // Convert prices to array
    let prices = pricesInput.split(",").map(Number);

    // Calculate total price
    let totalPrice = 0;
    for (let i = 0; i < prices.length; i++) {
        totalPrice += prices[i];
    }

    // Discount logic
    let discountRate = 0;
    if (totalPrice >= 3000) {
        discountRate = 0.20;
    } else if (totalPrice >= 2000) {
        discountRate = 0.10;
    }

    let discountAmount = totalPrice * discountRate;
    let finalPayable = totalPrice - discountAmount;

    // Function to find lowest price
    function findLowestPrice(arr) {
        let lowest = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < lowest) {
                lowest = arr[i];
            }
        }
        return lowest;
    }

    let lowestPrice = findLowestPrice(prices);

    // Count characters in customer name (without .length)
    let charCount = 0;
    for (let ch of customerName) {
        charCount++;
    }

    // Display result
    document.getElementById("result").innerHTML = `
        <strong>Customer Name:</strong> ${customerName}<br>
        <strong>Total Price:</strong> ${totalPrice} Tk<br>
        <strong>Discount Amount:</strong> ${discountAmount.toFixed(2)} Tk<br>
        <strong>Final Payable Amount:</strong> ${finalPayable.toFixed(2)} Tk<br>
        <strong>Lowest Product Price:</strong> ${lowestPrice} Tk<br>
        <strong>Characters in Name:</strong> ${charCount}
    `;
}