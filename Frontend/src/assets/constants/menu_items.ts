import { ILinkProps } from '../../interfaces/ILinkProps';

export const menu_items: ILinkProps[] = [
  {
    active: true,
    to: '/',
    label: 'головна'
  },
  {
    active: false,
    to: '/documents',
    label: 'документи'
  },
  {
    active: false,
    to: '/for-donors',
    label: 'для донорів'
  },
  {
    active: false,
    to: '/medicine',
    label: 'ліки'
  },
  {
    active: false,
    to: '/news',
    label: 'новини'
  },
  {
    active: false,
    to: '/photos',
    label: 'фотогалерея'
  }
];
