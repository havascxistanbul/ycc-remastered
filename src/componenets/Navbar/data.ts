import { v4 as uuidv4 } from 'uuid';

interface ListItem {
  text: string
  href: string
  id: string
}

export const NavbarList: ListItem[] = [
  {
    text: 'About Us',
    href: '#',
    id: uuidv4()
  },
  {
    text: 'Process',
    href: '#',
    id: uuidv4()
  },
  {
    text: 'Contact Us',
    href: '#',
    id: uuidv4()
  }
];
