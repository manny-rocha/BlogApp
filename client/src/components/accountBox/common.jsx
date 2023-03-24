import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  /* background: #ff0000; */
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  /* background-color: #BDC3C7; */
  padding: 100px 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 2.5px rgbs(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: #34495E;
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: #16A085;
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
  width: 90%;
  padding: 10px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(22,160,133);
  background: linear-gradient(222deg, rgba(22,160,133,1) 48%, rgba(39,174,96,1) 79%); 

  &:hover {
    filter: brightness(1.03);
  }
`;