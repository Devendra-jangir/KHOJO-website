import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import {Button}  from "./styles/Button.js";
import webDev from "./images/images/web_dev1.png";
import DS from "./images/images/ui-ux.png";
import AppDev from "./images/images/Android_development.webp";
import Blockchain from "./images/images/Blockchain_development.png";
import ML from "./images/images/Machine_learning.webp";
import DSA from "./images/images/DSA.jpg";

const getServices = [
  {
    id: "01",
    title: "Best Web Development Course",
    imgUrl: webDev,
    students: 5.3,
    rating: 4.7,
    url: "../courses/web.html",
  },
  {
    id: "02",
    title: "Best Data Science Courses",
    imgUrl: DS,
    students: 5.3,
    rating: 4,
    url: "../courses/Ds.html",
  },

  {
    id: "03",
    title: "Best App Development Courses",
    imgUrl: AppDev,
    students: 5.3,
    rating: 1.7,
    url: "../courses/App.html",
  },

  {
    id: "04",
    title: "Best Blockchain Development Courses",
    imgUrl: Blockchain,
    students: 5.3,
    rating: 1.7,
    url: "../courses/blockchain.html",
  },
  {
    id: "04",
    title: "Best AI/ML Courses",
    imgUrl: ML,
    students: 5.3,
    rating: 1.7,
    url: "../courses/Ml.html",
  },
  {
    id: "04",
    title: "Best DSA Courses",
    imgUrl: DSA,
    students: 5.3,
    rating: 1.7,
    url: "../courses/Dsa.html",
  },
];

const Services = () => {
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Courses</h2>
      <div className="container grid grid-three-column">
        {getServices.map((curElem) => {
          const { id, title, imgUrl } = curElem;
          return (
            <div key={id} className="card">
              <figure>
                <img src={imgUrl} alt="#" />
              </figure>
              <div className="card-data">
                <h3>{title}</h3>
                <Button className="btn">
                  <a href={curElem.url}  className="btn-in">
                    Read More
                  </a>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 120rem;
  }
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;
      .btn-in {
        color: blue;
      }
      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
        .btn-in:hover {
          color: #fff;
        }
      }
    }
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
