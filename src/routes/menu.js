import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

const mainMenu = [
  {
    name: 'home',
    text: 'txt_menu_calendar',
    link: '/',
    icons: '/assets/images/icon_calendar.svg',
    icons_color: '/assets/images/icon_calendar_white.svg',
  },
  {
    name: 'projects',
    text: 'txt_menu_projects',
    link: '/projects',
    icons: '/assets/images/icon_projects.svg',
    icons_color: '/assets/images/icon_projects_white.svg',
  },
  {
    name: 'campaigns',
    text: 'txt_menu_campaigns',
    link: '/campaigns',
    icons: '/assets/images/icon_campaigns.svg',
    icons_color: '/assets/images/icon_campaigns_white.svg',
  },
  {
    name: 'content',
    text: 'txt_menu_content',
    link: '/content',
    icons: '/assets/images/icon_content.svg',
    icons_color: '/assets/images/icon_content_white.svg',
  },
  {
    name: 'channels',
    text: 'txt_menu_channels',
    link: '/channels',
    icons: '/assets/images/icon_channles.svg',
    icons_color: '/assets/images/icon_channles_white.svg',
  },
  {
    name: 'digital',
    text: 'txt_menu_digital_assets',
    link: '/digital-assets',
    icons: '/assets/images/icon_digital_assets.svg',
    icons_color: '/assets/images/icon_digital_assets_white.svg',
  },
];

const settingMenu = [
  {
    name: 'profile',
    text: 'txt_menu_profile',
    link: '/profile',
    icons_fa: faUser,
  },
];

const profileMenu = [
  {
    key: 1,
    text: 'txt_profile',
    link: '/profile',
  },
];

const integrationMenu = () =>
  mainMenu
    .filter((item) => item.name !== 'digital')
    .map((item) => {
      item.link = '/dma' + item.link;
      return item;
    });
export { profileMenu, mainMenu, settingMenu, integrationMenu };
