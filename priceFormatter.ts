export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
};

export const calculateDiscountPrice = (price: number, discountPercentage?: number): number => {
  if (!discountPercentage) return price;
  return price - (price * discountPercentage / 100);
