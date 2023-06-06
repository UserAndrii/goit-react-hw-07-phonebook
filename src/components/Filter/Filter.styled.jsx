import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 320px;
  padding: 20px 10px;
`;

export const Label = styled.label`
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.16;
  color: #bfc0c0;
  margin-bottom: 12px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Input = styled.input`
  width: 270px;
  height: 30px;
  font-size: 16px;
  line-height: 1.16;
  background-color: inherit;
  color: #bfc0c0;
  margin-bottom: 12px;
  padding-left: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 4px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus {
    border: 1px solid #ef8354;
    outline: transparent;
  }

  :focus + Label {
    color: #ef8354;
  }
`;
