import React from 'react';

// Components
import Project from './Project';

// Utilities
import { projects, slickSettingsProjects } from '../../utility/data';
import Slider from 'react-slick';

const SliderComp = () => {
  const sliderProject = projects.map((project, i) => (
    <Project project={project} key={i} />
  ));
  return <Slider {...slickSettingsProjects}>{sliderProject}</Slider>;
};

export default SliderComp;
