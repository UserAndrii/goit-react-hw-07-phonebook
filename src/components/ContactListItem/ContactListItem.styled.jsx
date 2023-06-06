import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.16;
  color: rgb(191, 192, 192);
`;

export const Number = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.16;
  color: #ef8354;
`;

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.06em;
  cursor: pointer;

  color: #bfc0c0;
  background-color: inherit;
  border: 2px solid #4f5d75;
  transition: all 0.45s ease-Out;

  :hover {
    color: #ef8354;
  }
`;
