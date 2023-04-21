import LanguageIcon from '@mui/icons-material/Language';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import SpeedIcon from '@mui/icons-material/Speed';

const services = [
  {
    icon: LanguageIcon,
    title: 'Website Development',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?',
    direction: 'left',
  },
  {
    icon: MobileFriendlyIcon,
    title: 'App Development',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?',
    direction: 'right',
  },
  {
    icon: SpeedIcon,
    title: 'Test Automation',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?',
    direction: 'down',
  },
];

const projects = [
  {
    title: 'Title 1',
    img: 'https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!',
  },
  {
    title: 'Title 2',
    img: 'https://res.cloudinary.com/ghazni/image/upload/v1661324074/Yt-portfolio/ui4_jku3ol.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!',
  },
  {
    title: 'Title 3',
    img: 'https://res.cloudinary.com/ghazni/image/upload/v1661323981/Yt-portfolio/ui2_wtollo.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!',
  },
  {
    title: 'Title 4',
    img: 'https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!',
  },
  {
    title: 'Title 5',
    img: 'https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!',
  },
];

let slickSettings = {
  className: 'center',
  centerMode: true,
  slidesToShow: 3,
  swpieToSlide: true,
  dots: true,
  customPaging: (i) => (
    <div
      style={{
        width: '30px',
        color: '#fff',
        border: '1px #01be96 solid',
      }}
    >
      {i + 1}
    </div>
  ),
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export { services, projects, slickSettings };
