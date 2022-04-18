export const getMsgSalutation = () => {
  const hour = Number(
    new Date()
      .toLocaleTimeString('pt-br', { hour12: false, hour: 'numeric' })
      .split(':')[0]
  );
  if (hour >= 0 && hour <= 5) return 'Boa madrugada';
  if (hour >= 6 && hour < 12) return 'Bom dia';
  if (hour >= 12 && hour < 18) return 'Boa tarde';
  if (hour >= 18 && hour <= 23) return 'Boa noite';
};
