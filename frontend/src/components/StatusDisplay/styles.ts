import styled from 'styled-components';

export const StatusDisplayContainer = styled.div<{ color: string }>`
  position: relative;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid ${(props) => props.color};
  border-radius: 50%;
  background-color: transparent;
  transition: 0.2s;

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    transition: 0.2s;
  }
`;
