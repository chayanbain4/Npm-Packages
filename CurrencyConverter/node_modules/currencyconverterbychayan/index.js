import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_Q7kh2ujuVLJ0YZlHFI0BeFX8XJfyrEFMZ6qMvM0Y');


 async function currencyConverter (fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency
  });
  const multiplier = res.data[toCurrency]; 
  return units * multiplier;
}

export default currencyConverter;
