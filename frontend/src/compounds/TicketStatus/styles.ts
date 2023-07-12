import styled from 'styled-components';

export const TicketStatusDiv = styled.div<{ color: string }>`
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

export const ToggleCheckboxLabel = styled.label`
  position: relative;
  margin: 0 5px;
  display: inline-block;
  width: 40px;
  height: 20px;

  input:checked + span {
    background-color: green;
  }
  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
  input:checked + span::before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
`;

export const ToggleCheckboxInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ToggleCheckboxSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-radius: 50%;
  }
`;
