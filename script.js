// Centralized prices that you can update easily
const prices = {
    650: 650,  // Price for 650
    640: 640,  // Price for 640
   // 700: 700,  // Example price for 700
   // 680: 680   // Example price for 680
};

// Define multipliers in a clear section for easy updates
const multipliers = {
    90: 0.28,
    100: 0.3,
    110: 0.32,
    120: 0.34,
    130: 0.36,
    140: 0.38,
    150: 0.4
};

// Function to calculate the results based on inputs
function calculate() {
    const letterCount = document.getElementById("letterCount").value;
    const multiplier = parseInt(document.getElementById("multiplier").value);

    // Check if the letter count is empty
    if (letterCount === "") {
        alert("Please enter a letter count.");
        return;
    }

    // Get multiplier value based on the selected option
    let multiplierValue = multipliers[multiplier];

    // If no valid multiplier is selected, default to 100 multiplier
    if (!multiplierValue) {
        multiplierValue = multipliers[100]; // Default to 100 multiplier if not matched
    }

    // Calculate kg
    const kg = letterCount * multiplierValue;
    document.getElementById("kgResult").textContent = `Kg: ${kg.toFixed(2)}`;

    // Dynamically generate price results based on the prices object
    Object.keys(prices).forEach(priceKey => {
        const price = prices[priceKey];
        const priceLabel = `price${priceKey}`;  // Dynamically create labels like price650, price640
        const calculatedPrice = kg * price;

        // Update the results dynamically
        document.getElementById(priceLabel).textContent = `Price for ${priceKey}: ${calculatedPrice.toFixed(2)}`;
    });
}

// Function to refresh and reset the inputs and results
function refresh() {
    document.getElementById("letterCount").value = "";
    document.getElementById("multiplier").value = "90";
    document.getElementById("kgResult").textContent = "";
    
    // Reset all price result fields dynamically based on the price labels
    Object.keys(prices).forEach(priceKey => {
        const priceLabel = `price${priceKey}`;
        document.getElementById(priceLabel).textContent = "";
    });
}
