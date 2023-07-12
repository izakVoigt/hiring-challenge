import { ReactNode } from 'react';

export interface IForm {
  children: ReactNode | ReactNode[];
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}
