import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { CalendarContainer, CalendarIconContainer, Title } from './styles';

export const Calendar = () => {
  return (
    <CalendarContainer role="contentinfo">
      <CalendarIconContainer role="figure">
        <CalendarTodayIcon />
      </CalendarIconContainer>
      <Title role="textbox">Timeline</Title>
    </CalendarContainer>
  );
};
