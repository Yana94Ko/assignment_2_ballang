function convertPriceToKRW(amount) {
  return `${amount.toLocaleString()}원`;
}
function convertDeliveryDate() {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}
export const productsUtils = {
  convertPriceToKRW,
  convertDeliveryDate,
};
export default productsUtils;
