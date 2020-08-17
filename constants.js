import {images} from './assets';

export const carouselData = [
  {
    title: 'Direct bestellen',
    description:
      'Bestel hier direct alle materialen die u nodig heeft voor uw opdrachten',
    action: 'Naar bestellen',
    onActionPress: 'Catalog',
    imageUrl: images.facebook,
    bgColor: '#1BAAE6',
  },
  {
    title: 'Liever chatten?',
    description:
      'Aarzel niet om vragen te stellen of te bestellen via WhatsApp',
    action: 'App ons',
    onActionPress: 'WhatsApp',
    imageUrl: images.whatsapp,
    bgColor: '#6BCD28',
  },
  {
    title: 'Fotobestellen',
    description: 'Maak een foto en wij maken de bestelling',
    action: 'Maak een foto',
    imageUrl: images.instagram,
    bgColor: '#00427E',
    isPhotoOrderItem: true,
  },
];

export const colors = {
  kellyGreen: '#6BCD28',
  shipCove: '#7A8EB1',
  white: '#FFFFFF',
};
