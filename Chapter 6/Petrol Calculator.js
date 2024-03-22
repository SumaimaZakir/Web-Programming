document.addEventListener('DOMContentLoaded', function() {
    // Get references to input elements and button
    const costInput = document.getElementById('costPerLiter');
    const litersInput = document.getElementById('liters');
    const fuelEfficiencyInput = document.getElementById('fuelEfficiency');
    const currencySelect = document.getElementById('currency');
    const calculateBtn = document.getElementById('calculateBtn');
    const totalCostDisplay = document.getElementById('totalCost');

    // Add event listener to calculate button
    calculateBtn.addEventListener('click', function() {
        // Parse input values
        const costPerLiter = parseFloat(costInput.value);
        const liters = parseFloat(litersInput.value);
        const fuelEfficiency = parseFloat(fuelEfficiencyInput.value);
        const currency = currencySelect.value;

        // Calculate total cost and distance
        let totalCost = costPerLiter * liters;
        const distance = liters / fuelEfficiency;

        // Check if input values are valid
        if (!isNaN(totalCost) && !isNaN(distance)) {
            // Format total cost based on selected currency
            totalCost = totalCost.toLocaleString(undefined, { style: 'currency', currency: currency });
            // Display total cost and distance
            totalCostDisplay.textContent = `Total cost: ${totalCost}, Distance: ${distance.toFixed(2)} km`;
        } else {
            // Display error message for invalid input
            totalCostDisplay.textContent = 'Please enter valid input.';
        }
    });
});
