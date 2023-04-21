import React, { useRef } from 'react';
import styled from 'styled-components';

import ClientSlider from './ClientSlider';

// MUI
import Container from '@mui/material/Container';

// Utilities
import { slickSettingsTestimonials, clients } from '../../utility/data';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = clients.map((client, i) => (
    <ClientSlider client={client} key={i} />
  ));
  return (
    <Container id='clients'>
      <Testimonials>
        <Slider ref={arrowRef} {...slickSettingsTestimonials}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

// const Container = styled.div`
//   width: 80%;
//   max-width: 1280px;
//   margin: 0 auto;
//   padding: 4rem 0;

//   @media (max-width: 840px) {
//     width: 90%;
//   }

//   span {
//     font-weight: 700;
//     text-transform: uppercase;
//   }

//   h1 {
//     padding-top: 1rem;
//     text-transform: capitalize;
//   }

//   .slick-list,
//   .slick-slider,
//   .slick-track {
//     padding: 0;
//   }

//   .slick-dots {
//     text-align: left;
//     margin-left: 1rem;
//   }

//   .slick-dots li button:before {
//     content: '';
//   }

//   .slick-dots li button {
//     width: 9px;
//     height: 4px;
//     background: linear-gradient(
//       159deg,
//       rgb(45, 45, 58) 0%,
//       rgb(43, 43, 53) 100%
//     );
//     padding: 0.1rem;
//     margin-top: 1rem;
//     transition: all 400ms ease-in-out;
//     border-radius: 50px;
//   }

//   .slick-dots li.slick-active button {
//     background: #01be96;
//     width: 15px;
//   }

//   .slick-dots li {
//     margin: 0;
//   }
// `;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #01be96;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
