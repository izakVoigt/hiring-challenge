import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #3c3c3c;
`;

export const CalendarIconContainer = styled.div`
  border: 2px solid #5bb4cf;
  border-radius: 10px;

  svg {
    width: 20px;
    height: 20px;
    margin: 6px;
  }
`;

export const Title = styled.p`
  margin: 0 16px;
  font-weight: 500;
`;
