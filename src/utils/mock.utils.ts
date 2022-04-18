import { SvgProps } from 'react-native-svg';

export type OnboardingItemsProps = {
  id: number;
  text: string;
  illustrationName: string;
};

export const onboardingItems: OnboardingItemsProps[] = [
  {
    id: 1,
    text: 'Olá, seja bem vindo! Vamos te mostrar informações importantes a respeito do clima na sua região!',
    illustrationName: 'weather',
  },
  {
    id: 2,
    text: 'Para melhorar sua experiência, precisamos da sua permissão de localização. Não se preocupe, não compartilhamos dados de usuários com terceiros!',
    illustrationName: 'weather',
  },
];
