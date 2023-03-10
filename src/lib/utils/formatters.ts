import { format } from "date-fns";

export function formatDate(lastUpdated: string, includeTime = false) {
  if (lastUpdated) {
    return format(
      new Date(lastUpdated),
      `MMM dd, yyyy${includeTime ? ' hh:mm a' : ''}`
    );
  }
}

export function formatCurrency(
  num = 0,
  currency = 'JMD',
  decimalPlaces = 2
): string {
  const result = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: decimalPlaces,
    minimumFractionDigits: decimalPlaces,
  }).format(num);

  return currency === 'JMD' ? result.replace('JMD', 'JMD $') : `USD ${result}`;
}