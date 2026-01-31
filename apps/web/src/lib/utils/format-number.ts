export function formatNumber(value: number): string {
  return value.toLocaleString('en-US');
}

export function formatCurrency(value: number): string {
  return `${formatNumber(value)}€`;
}

export function formatHourlyRate(from: number, to: number): string {
  return `${formatNumber(from)} - ${formatNumber(to)} €/h`;
}
