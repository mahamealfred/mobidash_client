// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Deposit Transaction',
  caption: '',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Transactions',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login3',
          title: 'Pending Transactions',
          type: 'item',
          url: '/',
          target: true
        },
        // {
        //   id: 'register3',
        //   title: '',
        //   type: 'item',
        //   url: '/pages/register/register3',
        //   target: true
        // }
      ]
    }
  ]
};

export default pages;
