import { FormContainer } from './styles';
import { IForm } from './types';

export const Form = ({ children, onSubmit }: IForm) => {
  return (
    <FormContainer role="form" onSubmit={onSubmit}>
      {children}
    </FormContainer>
  );
};
