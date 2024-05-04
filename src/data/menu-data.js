import home_1 from '@assets/img/menu/menu-home-1.jpg';
import home_2 from '@assets/img/menu/menu-home-2.jpg';
import home_3 from '@assets/img/menu/menu-home-3.jpg';
import home_4 from '@assets/img/menu/menu-home-4.jpg';

const menu_data = [
  {
    id: 1,
    homes: true,
    title: 'Home',
    link: '/',
    home_pages: [
      {
        img: home_1,
        title: 'Electronics',
        link: '/'
      },
      {
        img: home_2,
        title: 'Fashion',
        link: '/home-2'
      },
      {
        img: home_3,
        title: 'Beauty',
        link: '/home-3'
      },
      {
        img: home_4,
        title: 'Jewelry',
        link: '/home-4'
      }
    ]
  },
  {
    id: 2,
    products: true,
    title: 'Products',
    link: '',
    product_pages: [
      {
        title: 'Shop Page',
        link: '',
        mega_menus: [
          { title: 'Only Categories', link: '' },
          { title: 'Shop Grid with Sideber', link: '' },
          { title: 'Product Details', link: '' },
        ]
      },
      {
        title: 'Products',
        link: '',
        mega_menus: [
          { title: 'Product Simple', link: '' },
          { title: 'With Video', link: '' },
          { title: 'With Countdown Timer', link: '' },
          { title: 'Variations Swatches', link: '' },
        ]
      },
      {
        title: 'eCommerce',
        link: '',
        mega_menus: [
          { title: 'Shopping Cart', link: '' },
          { title: 'Compare', link: '' },
          { title: 'Wishlist', link: '' },
          { title: 'Checkout', link: '' },
          { title: 'My account', link: '' },
        ]
      },
      {
        title: 'More Pages',
        link: '',
        mega_menus: [
          { title: 'Login', link: '/login' },
          { title: 'Register', link: '/register' },
          { title: 'Forgot Password', link: '/forgot' },
          { title: '404 Error', link: '/404' },
        ]
      },
    ]
  },
  {
    id: 3,
    sub_menu: true,
    title: 'Shop',
    link: '',
    sub_menus: [
      { title: 'Shop', link: '/shop' },
      { title: 'Right Sidebar', link: '' },
      { title: 'Hidden Sidebar', link: '' },
    ],
  },
  {
    id: 4,
    single_link: true,
    title: 'Coupons',
    link: '',
  },
  {
    id: 5,
    sub_menu: true,
    title: 'Blog',
    link: '',
    sub_menus: [
      { title: 'Blog Standard', link: '' },
      { title: 'Blog Grid', link: '' },
      { title: 'Blog List', link: '' },
      { title: 'Blog Details', link: '' },
      { title: 'Blog Details Full Width', link: '' },
    ]
  },
  {
    id: 6,
    single_link: true,
    title: 'Contact',
    link: '/contact',
  },
]

export default menu_data;

// mobile_menu
export const mobile_menu = [
  {
    id: 1,
    homes: true,
    title: 'Home',
    link: '/',
    home_pages: [
      {
        img: home_1,
        title: 'Electronics',
        link: '/'
      },
      {
        img: home_2,
        title: 'Fashion',
        link: '/home-2'
      },
      {
        img: home_3,
        title: 'Beauty',
        link: '/home-3'
      },
      {
        img: home_4,
        title: 'Jewelry',
        link: '/home-4'
      }
    ]
  },
  {
    id: 2,
    sub_menu: true,
    title: 'Products',
    link: '',
    sub_menus: [
      { title: 'Shop', link: '/shop' },
      { title: 'Right Sidebar', link: '/' },
      { title: 'Hidden Sidebar', link: '' },
      { title: 'Only Categories',link:'' },
      { title: 'Product Simple', link: '' },
      { title: 'With Video', link: '' },
      { title: 'With Countdown Timer', link: '' },
      { title: 'Variations Swatches', link: '' },
    ],
  },
  {
    id: 3,
    sub_menu: true,
    title: 'eCommerce',
    link: '',
    sub_menus: [
      { title: 'Shopping Cart', link: '' },
      { title: 'Compare', link: '' },
      { title: 'Wishlist', link: '' },
      { title: 'Checkout', link: '' },
      { title: 'My account', link: '' },
    ],
  },
  {
    id: 4,
    sub_menu: true,
    title: 'More Pages',
    link: '/login',
    sub_menus: [
      { title: 'Login', link: '/login' },
      { title: 'Register', link: '/register' },
      { title: 'Forgot Password', link: '/forgot' },
      { title: '404 Error', link: '/404' },
    ],
  },
  {
    id: 4,
    single_link: true,
    title: 'Coupons',
    link: '',
  },
  {
    id: 5,
    sub_menu: true,
    title: 'Blog',
    link: '',
    sub_menus: [
      { title: 'Blog Standard', link: '' },
      { title: 'Blog Grid', link: '' },
      { title: 'Blog List', link: '' },
      { title: 'Blog Details', link: '' },
      { title: 'Blog Details Full Width', link: '' },
    ]
  },
  {
    id: 6,
    single_link: true,
    title: 'Contact',
    link: '/contact',
  },
]