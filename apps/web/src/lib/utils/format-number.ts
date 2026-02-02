export function formatNumber(value: number): string {
  return value.toLocaleString('en-US');
}

export function formatCurrency(value: number): string {
  return `${formatNumber(value)} €`;
}

export function formatHourlyRate(from: number, to: number): string {
  return `${formatNumber(from)} - ${formatNumber(to)} €/h`;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}
