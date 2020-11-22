import { Dimensions, ImageSourcePropType } from 'react-native';

export type PhoneModel = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  color: string;
  translate: {
    x: number;
    y: number;
  };
};

export const { width: SIZE } = Dimensions.get('window');

export const phones: PhoneModel[] = [
  {
    id: '1',
    name: 'Black',
    image: require('../../assets/phone/black.png'),
    color: 'black',
    translate: { x: 0, y: 0 },
  },
  {
    id: '2',
    name: 'Blue',
    image: require('../../assets/phone/blue.png'),
    color: 'blue',
    translate: { x: SIZE / 2, y: 0 },
  },
  {
    id: '3',
    name: 'Green',
    image: require('../../assets/phone/green.png'),
    color: 'green',
    translate: { x: -SIZE / 2, y: 0 },
  },
  {
    id: '4',
    name: 'Orange',
    image: require('../../assets/phone/orange.png'),
    color: 'orange',
    translate: { x: 0, y: SIZE / 2 },
  },
  {
    id: '5',
    name: 'Pink',
    image: require('../../assets/phone/pink.png'),
    color: 'pink',
    translate: { x: 0, y: -SIZE / 2 },
  },
  {
    id: '6',
    name: 'Purple',
    image: require('../../assets/phone/purple.png'),
    color: 'purple',
    translate: { x: 0, y: 0 },
  },
  {
    id: '7',
    name: 'Red',
    image: require('../../assets/phone/red.png'),
    color: 'red',
    translate: { x: SIZE / 2, y: SIZE / 2 },
  },
  {
    id: '8',
    name: 'Yellow',
    image: require('../../assets/phone/yellow.png'),
    color: 'yellow',
    translate: { x: -SIZE / 2, y: -SIZE / 2 },
  },
];
