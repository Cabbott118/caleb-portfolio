import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const pages = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'About',
    route: '/about',
  },
  {
    name: 'Projects',
    route: '/projects',
  },
  {
    name: 'Contact',
    route: '/contact',
  },
];

const iconInfo = [
  {
    href: 'https://calebabbottportfolio.com',
    iconName: GitHubIcon,
    key: '1',
  },
  {
    href: 'https://calebabbottportfolio.com',
    iconName: LinkedInIcon,
    key: '2',
  },
  {
    href: 'https://calebabbottportfolio.com',
    iconName: FacebookIcon,
    key: '3',
  },
];

export { pages, iconInfo };
