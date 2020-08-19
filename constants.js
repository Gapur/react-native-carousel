import React from 'react';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const carouselData = [
  {
    title: 'Facebook',
    description: 'Connect with friends and the world around you on Facebook.',
    onActionPress: 'Catalog',
    renderIcon: () => <AwesomeIcon name="facebook-square" size={28} />,
    bgColor: '#3B5998',
  },
  {
    title: 'WhatsApp',
    description:
      'With WhatsApp, you will get fast, simple, secure messaging and calling for free*, available on phones all over the world.',
    onActionPress: 'WhatsApp',
    renderIcon: () => <AwesomeIcon name="whatsapp" size={28} />,
    bgColor: '#43d854',
  },
  {
    title: 'Instagram',
    description: 'Bringing you closer to the people and things you love.',
    renderIcon: () => <AwesomeIcon name="instagram" size={28} />,
    bgColor: '#C13584',
  },
];

export const colors = {
  kellyGreen: '#6BCD28',
  shipCove: '#7A8EB1',
  white: '#FFFFFF',
};
