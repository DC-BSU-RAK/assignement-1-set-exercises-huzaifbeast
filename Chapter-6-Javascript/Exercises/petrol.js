window.onload = function() {
    var priceInput = document.getElementById('pricePerLiter');
    var litersInput = document.getElementById('liters');
    var calculateButton = document.getElementById('calculateBtn');
    var totalCostDisplay = document.getElementById('totalCost');
    
    calculateButton.onclick = function() {
        calculatePetrolCost();
    };
    
    priceInput.onkeydown = function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            calculatePetrolCost();
        }
    };
    
    litersInput.onkeydown = function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            calculatePetrolCost();
        }
    };
    
    function calculatePetrolCost() {
        var pricePerLiter = parseFloat(priceInput.value);
        var liters = parseFloat(litersInput.value);
        
        if (isNaN(pricePerLiter) || isNaN(liters)) {
            alert('Please enter valid numbers in both fields');
            return;
        }
        
        if (pricePerLiter < 0 || liters < 0) {
            alert('Please enter positive numbers only');
            return;
        }
        
        var totalCost = pricePerLiter * liters;
        
        totalCostDisplay.textContent = '£' + totalCost.toFixed(2);
        
        var resultBox = document.querySelector('.result');
        resultBox.style.backgroundColor = '#d6eaff';
        
        setTimeout(function() {
            resultBox.style.backgroundColor = '#e8f4ff';
        }, 300);
    }
};