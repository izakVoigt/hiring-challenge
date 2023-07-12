import { StatusDisplayContainer } from './styles';
import { IStatusDisplay } from './types';

export const StatusDisplay = ({ color }: IStatusDisplay) => {
  return <StatusDisplayContainer role="status" color={color} />;
};
