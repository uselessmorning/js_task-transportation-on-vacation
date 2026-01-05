/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceOfRental = 40;
  const priceTotal = priceOfRental * days;

  if (days >= 7) {
    return priceTotal - 50;
  }

  if (days >= 3) {
    return priceTotal - 20;
  }

  return priceTotal;
}

module.exports = calculateRentalCost;
