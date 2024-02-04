function convertPriceToKRW(amount) {
  return `${amount.toLocaleString()}원`;
}

export const productsUtils = {
  convertPriceToKRW,
};
export default productsUtils;
