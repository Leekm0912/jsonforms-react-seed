import { FC } from 'react';
import { InputLabel } from '@mui/material';

interface CustomInputProps {
  id?: string;
  value: string;
  updateValue: (newValue: string) => void;
}

export const CustomInput: FC<CustomInputProps> = ({ id, value, updateValue }) => {
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(e.target.value);
  };

  return (
    <div>
      <InputLabel shrink style={{ marginTop: '0.8em' }}>
        Custom Input
      </InputLabel>
      <div>
        <input type='password' onChange={onChangePassword}/>
      </div>
    </div>
  );
};
