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

const slickSettingsProjects = {
  className: 'center',
  centerMode: true,
  slidesToShow: 3,
  swpieToSlide: true,
  dots: true,
  // customPaging: (i) => (
  //   <div
  //     style={
  //       i === state.currentSlide
  //         ? {
  //             width: '30px',
  //             color: '#fff',
  //             border: '1px #01be96 solid',
  //           }
  //         : null
  //     }
  //   >
  //     {i + 1}
  //   </div>
  // ),
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

const slickSettingsTestimonials = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const clients = [
  {
    name: 'John Michel',
    position: 'web developer',
    img_url:
      'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg',
    stars: 3,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: 'John Michel',
    position: 'web developer',
    img_url:
      'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg',
    stars: 4,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: 'John Michel',
    position: 'web developer',
    img_url:
      'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg',
    stars: 5,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: 'John Michel',
    position: 'web developer',
    img_url:
      'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg',
    stars: 5,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
];

export {
  services,
  projects,
  slickSettingsProjects,
  slickSettingsTestimonials,
  clients,
};
