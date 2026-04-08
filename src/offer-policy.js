export function formatOfferView(offer) {
  return {
    badgeText: offer.isVip ? 'VIP offer' : 'Regular offer',
    priceText: `${offer.price - offer.extraDiscount} ₽`,
    tone: offer.isVip ? 'accent' : 'neutral',
  };
}
