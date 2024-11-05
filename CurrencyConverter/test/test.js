import currencyConverter from '../index.js'; // Ensure the path is correct

// Example test case
(async () => {
    const result = await currencyConverter('USD', 'INR', 1);
    console.log(result);
})();
