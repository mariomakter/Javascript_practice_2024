function calculateDiscountedPrice(originalPrice, discountParcentage) {

    const discountAmount = (originalPrice * discountParcentage) / 100;

    const finalPrice = originalPrice - discountAmount;

    return finalPrice.toFixed(2);

}

const originalPrice = 50;
const discountParcentage = 20;

const finalPrice = calculateDiscountedPrice(originalPrice, discountParcentage);
console.log(`price: ${finalPrice}`);
