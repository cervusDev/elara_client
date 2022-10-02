import React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Controller, UseControllerProps, useFormContext } from 'react-hook-form';
import { IconButton, InputAdornment, InputLabelProps, TextField, TextFieldProps } from '@mui/material';

interface IProps {
  name: string
  clock?: boolean
  password?: boolean
}

type OmitProps = 'name' | 'value' | 'ref';

type FormsProps = Omit<UseControllerProps, 'control'> &
  Omit<TextFieldProps, OmitProps> & IProps;

export const FormField: React.FC<FormsProps> = ({
  name,
  clock,
  rules,
  onChange,
  password,
  InputProps,
  type='text',
  defaultValue,
  size='medium',
  variant='filled',
  InputLabelProps: inputLabelProps,
  ...rest
}) => {
  const clocks = clock || false;
  const clockSx = React.useMemo(() => {
    const inner = {
      '[type="time"]::-webkit-calendar-picker-indicator': {
        display: 'none'
      }
    };

    if (clocks) {
      return {
        ...inner,
        ...rest.sx
      };
    }

    return {
      ...rest.sx
    };
  }, [clocks, rest.sx]);

  const pass = password || false;
  const [passw, setPass] = React.useState<boolean>(pass);
  const handlePassword = () => {
    setPass(prev => !prev);
  };

  const PasswordEndAdornment = () => (
    <InputAdornment position='end'>
      <IconButton aria-label='toggle password visibility' onClick={handlePassword} edge='end'>
        {passw ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange({
        ...event,
        target: {
          ...event.target,
          value: event.target.value
        }
      });
    }
  };

  const handleInputLabelProps = (value: string | undefined, type: string) => {
    const inputLabelPropsValue: InputLabelProps = {};
    if (inputLabelProps) {
      if (value && value.length > 0) {
        inputLabelProps.shrink = true;

        return inputLabelProps;
      }

      if (type === 'time') {
        inputLabelProps.shrink = true;

        return inputLabelProps;
      }

      return inputLabelProps;
    }

    if (value && value.length > 0) {
      inputLabelPropsValue.shrink = true;
    }

    return inputLabelPropsValue;
  };

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
        <TextField
          fullWidth
          {...field}
          {...rest}
          size={size}
          sx={clockSx}
          value={value}
          error={!!error}
          variant={variant}
          type={passw ? 'password' : type}
          InputProps={{
            ...InputProps,
            endAdornment: pass ? <PasswordEndAdornment /> : InputProps?.endAdornment
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(event);
            handleChange(event);
          }}
          helperText={error ? error.message : null}
          defaultValue={defaultValue}
          InputLabelProps={handleInputLabelProps(value, type)}
        />
      )}
    />
  );
};
