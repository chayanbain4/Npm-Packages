import currencyConverter from "currencyconverterbychayan";
(async () => {
    const result = await currencyConverter('USD', 'INR', 1);
    console.log(result);
})();