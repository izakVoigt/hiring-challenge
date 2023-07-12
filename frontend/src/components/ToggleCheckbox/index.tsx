import { ToggleCheckboxInput, ToggleCheckboxLabel, ToggleCheckboxSpan } from './styles';
import { IToggleCheckbox } from './types';

export const ToggleCheckbox = ({ checked, onChange }: IToggleCheckbox) => {
  return (
    <ToggleCheckboxLabel role="contentinfo">
      <ToggleCheckboxInput role="checkbox" type="checkbox" checked={checked} onChange={onChange} />
      <ToggleCheckboxSpan role="figure" />
    </ToggleCheckboxLabel>
  );
};
