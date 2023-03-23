import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2980B9;
  padding: 80px 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 2.5px rgbs(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: rgb(192,57,43);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 80%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 5px 5px 5px 5px;
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  border-bottom: 1.4px solid transparent;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.3);
    margin-bottom: 10px;
  } 

  &:focus {
    outline: none;
    border-bottom: 2px solid #3498DB;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(192,57,43);
  background: -moz-linear-gradient(58deg, rgba(192,57,43,1) 20%, rgba(231,76,60,1) 68%);
  background: -webkit-linear-gradient(58deg, rgba(192,57,43,1) 20%, rgba(231,76,60,1) 68%);
  background: linear-gradient(58deg, rgba(192,57,43,1) 20%, rgba(231,76,60,1) 68%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c0392b",endColorstr="#e74c3c",GradientType=1);

  &:hover {
    filter: brightness(1.03);
  }
`;