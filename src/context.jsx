import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";


const AppContext = React.createContext();

const initialState = {
  name: "Devendra Jangir",
  image: "",
  description: "",
  btn: "",
  services: [],
};


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "KHOJO",
        image: "./images/hero.svg",
        description:
        "Your Personalized Course Finder. Tailored roadmaps, course recommendations, and a vibrant learning community await. Start your journey today!",
      btn: "Join Us",
      },
    });
  };

  const updateAboutPage = () => {
    dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: " I'm Tanjul Sarathe",
        image: "./images/about1.svg",
        description:
          "Full Stack Web Developer and 3D Design Enthusiast | 3rd-Year Student at VIT Bhopal | Passionate about Technical Education, Hands-On Learning, and Problem Solving in DSA and Competitive Programming.",
        btn: "Hire me",
      },
    });
  };

  useEffect(() => {
    // You may perform additional setup or data fetching here
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
      {/* <HeroSection/> */}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
