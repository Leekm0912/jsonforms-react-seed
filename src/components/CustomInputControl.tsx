import { withJsonFormsControlProps } from '@jsonforms/react';
import { CustomInput } from './CustomInput';

interface CustomInputControlProps {
  data: string;
  handleChange(path: string, value: string): void;
  path: string;
}

const CustomInputControl = ({ data, handleChange, path }: CustomInputControlProps) => (
  <CustomInput
    value={data}
    updateValue={(newValue: string) => handleChange(path, newValue)}
  />
);

// Fast refresh can't handle anonymous components.
const RatingControlWithJsonForms = withJsonFormsControlProps(CustomInputControl);
export default RatingControlWithJsonForms;
