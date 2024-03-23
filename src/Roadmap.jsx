import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

const Roadmap = () => {
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Roadmap</h2>
      <div className="container grid grid-three-column">
            <div className="card">
              <figure>
                <img src="src\images\images\web-design.png" />
              </figure>
              <div className="card-data">
                <h3>Web Development</h3>
                <p>click here to get full roadmap</p>
                  <Button className="btn"> 
                  <a className="btn-text" href="https://whimsical.com/web-development-roadmap-Hqgk6FpFEpcvB7s3ZqGnxV" target="
                  _blank">Read More</a>
                  </Button>
              </div>
            </div>
            <div className="card">
              <figure>
                <img src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
              </figure>
              <div className="card-data">
                <h3>App Development</h3>
                <p>click here to get full roadmap</p>
                <Button className="btn"> 
                  <a className="btn-text" href="https://whimsical.com/android-and-ios-devlopment-roadmap-TH3LmfQWv7FEcTFtEBXpmH" target="
                  _blank">Read More</a>
                  </Button>
              </div>
            </div>
            <div className="card">
              <figure>
                <img src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              </figure>
              <div className="card-data">
                <h3>Machine Learning</h3>
                <p>click here to get full roadmap</p>
                <Button className="btn"> 
                  <a className="btn-text" href="https://whimsical.com/machine-learning-roadmap-2020-CA7f3ykvXpnJ9Az32vYXva" target="
                  _blank">Read More</a>
                  </Button>
              </div>
            </div>
            <div className="card">
              <figure>
                <img src="https://plus.unsplash.com/premium_photo-1672914187190-3bb9eaed6a27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" />
              </figure>
              <div className="card-data">
                <h3>Blockchain Development</h3>
                <p>click here to get full roadmap</p>
                <Button className="btn"> 
                  <a className="btn-text" href="https://whimsical.com/blockchain-roadamp-4Q5TFeFtVboe3z7vhVambZ" target="
                  _blank">Read More</a>
                  </Button>
              </div>
            </div>
            <div className="card">
              <figure>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              </figure>
              <div className="card-data">
                <h3>Data Science</h3>
                <p>click here to get full roadmap</p>
                <Button className="btn"> 
                  <a className="btn-text" href="https://whimsical.com/getting-started-boards-5Y8bSYkUsiP2LjhYnzrJnX" target="
                  _blank">Read More</a>
                  </Button>
              </div>
            </div>
            <div className="card">
              <figure>
                <img src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              </figure>
              <div className="card-data">
                <h3>Game Development</h3>
                <p>click here to get full roadmap</p>
                <Button className="btn"> 
                  <a className="btn-text" href="https://whimsical.com/game-development-Dd9rHJFfZQ5LGqJbatv7E" target="
                  _blank">Read More</a>
                  </Button>
              </div>
            </div>
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
      .btn-text{
        color:blue;
        &:hover{
          background-color: rgb(98 84 243);
          color: #fff;
        }
      }
      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
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

export default Roadmap;