import React from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { SignupForm } from "./signupForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  top: -315px;
  left: -105px;
  transform: rotate(30deg);
  width: 160%;
  height: 550px;
  background: rgb(192,57,43);
  background: -moz-linear-gradient(58deg, rgba(192,57,43,1) 20%, rgba(231,76,60,1) 68%);
  background: -webkit-linear-gradient(58deg, rgba(192,57,43,1) 20%, rgba(231,76,60,1) 68%);
  background: linear-gradient(58deg, rgba(192,57,43,1) 20%, rgba(231,76,60,1) 68%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c0392b",endColorstr="#e74c3c",GradientType=1);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVartiants = {
  expanded: {
    width: "233%",
    height: "1150px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "520px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  }
};

const expandingTransition = {
  type: "spring",
  duration: 2.2,
  stiffness: 25,
};

export function AccountBox() {
  const [isExpanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState("signin");

  const startExpand = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1000);
  };

  const switchToSignup = () => {
    startExpand();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignIn = () => {
    startExpand();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignIn };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial="false"
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVartiants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome to</HeaderText>
              <HeaderText>Blog.Me</HeaderText>
              <SmallText>Please sign-in to continue</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}