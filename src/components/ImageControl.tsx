import { withJsonFormsControlProps } from '@jsonforms/react';
import { ImageRenderer } from './ImageRenderer';

interface ImageControlProps {
  data: string;
  handleChange(path: string, value: string): void;
  path: string;
}

const ImageControl = ({ data, handleChange, path }: ImageControlProps) => (
  <ImageRenderer
    value={data}
    updateValue={(newValue: string) => handleChange(path, newValue)}
  />
);

// Fast refresh can't handle anonymous components.
const RatingControlWithJsonForms = withJsonFormsControlProps(ImageControl);
export default RatingControlWithJsonForms;
