import React from 'react';

// Components
import Project from './Project';

// Utilities
import { projects, slickSettings } from '../../utility/data';
import Slider from 'react-slick';

const SliderComp = () => {
  const sliderProject = projects.map((project, i) => (
    <Project project={project} key={i} />
  ));
  return <Slider {...slickSettings}>{sliderProject}</Slider>;
};

export default SliderComp;
