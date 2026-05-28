export function parsePrice(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, '')) || 0;
}

export function formatTotal(items: { price: string; quantity: number }[]): string {
  const total = items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
  return `${total} MDL`;
}
