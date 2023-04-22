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
    name: 'Linsi Abbott',
    position: 'Wifey',
    img_url:
      'https://scontent.ftpa1-1.fna.fbcdn.net/v/t39.30808-6/290012187_5585699794774425_6092875156347403056_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=dtQeUt8PaQsAX-zN3t_&_nc_ht=scontent.ftpa1-1.fna&oh=00_AfDF0Y877wC4XV4NNNU8W7csFmAOfYcdycEESarqPKrVgg&oe=6448CA29',
    stars: 5,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: 'Hartli Abbott',
    position: 'Daughter',
    img_url:
      'https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.30808-6/339055254_607307070956936_3728402710566778031_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=KdGZY5gvQ8sAX8fuRAD&_nc_ht=scontent.ftpa1-2.fna&oh=00_AfCG7EpyEVI23p3J3YU3OFeaEG3Au6VEP8mnC2xT-t4lAA&oe=6448AD57',
    stars: 5,
    desc: `DADA DADADADAD ADADADADA DADADADADAD ADADAD ADAD ADADADA DADADAD ADADADADA ADADADA DA
    DAD ADADADAD ADADADA DADADADADA DAD`,
  },
  {
    name: 'Johnny Appleseed',
    position: 'Web Developer',
    img_url:
      'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg',
    stars: 5,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: 'Gary Llil',
    position: 'Best Buddy',
    img_url:
      'https://scontent.ftpa1-1.fna.fbcdn.net/v/t39.30808-6/305311946_10230189130291502_3388004835895427014_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=z-6ByY6_P4QAX_f2OlY&_nc_ht=scontent.ftpa1-1.fna&oh=00_AfCnOTVaF8x1KsyPc1b92LejNXi6Z26-CINGh8402SLjHg&oe=64479BA5',
    stars: 5,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
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
