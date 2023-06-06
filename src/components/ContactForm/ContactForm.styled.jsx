import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  padding: 20px 10px;
  margin-bottom: 30px;
  border: 1px solid rgb(191, 192, 192);
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.16;
  color: #bfc0c0;
  margin-bottom: 12px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus-within {
    color: #ef8354;
  }
`;

export const Input = styled.input`
  width: 270px;
  height: 42px;
  font-size: 16px;
  line-height: 1.16;
  background-color: inherit;
  color: #bfc0c0;
  margin-top: 8px;
  padding-left: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 4px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus {
    border: 1px solid #ef8354;
    outline: transparent;
  }

  :focus + label {
    color: #ef8354;
  }
`;

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  cursor: pointer;
  width: 150px;
  padding: 10px;
  color: #bfc0c0;
  background-color: inherit;
  border: 2px solid #4f5d75;
  transition: all 0.45s ease-Out;
  margin: 0 auto;

  :hover {
    color: #ef8354;
  }

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -200px;
    width: 100%;
    height: 2.5px;
    margin-top: 15px;
    align-self: flex-end;
    background: #ef8354;
    transition: all 0.45s ease-Out;
  }

  :hover::after {
    left: 0;
  }
`;
