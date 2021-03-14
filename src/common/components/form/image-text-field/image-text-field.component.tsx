import React from 'react';
import { cx } from 'emotion';
import { useField } from 'formik';
import MuiTextField, { TextFieldProps } from '@material-ui/core/TextField';
import * as classes from './image-text-field.styles';

export const ImageTextFieldComponent: React.FunctionComponent<TextFieldProps> = (
  props
) => {
  const { name, onChange, onBlur, value, error, inputProps } = props;

  const [field, meta] = Boolean(name) ? useField(name) : [];
  const hasError = error || Boolean(meta && meta.touched && meta.error);
  const helperText = Boolean(field) ? meta?.error : props.helperText;

  return (
    <>
      <MuiTextField
        {...props}
        name={name}
        id={name}
        onChange={onChange || field?.onChange}
        onBlur={onBlur || field?.onBlur}
        value={value || field?.value}
        error={hasError}
        helperText={hasError ? helperText : ''}
        fullWidth={true}
        margin="normal"
        inputProps={{
          ...inputProps,
          className: cx(inputProps?.className, classes.input),
        }}
      />
      <img
        style={{
          width: '15rem',
          height: '15rem',
          margin: 'auto',
          marginTop: '2rem',
          marginBottom: '2rem',
        }}
        src={value || field?.value}
      />
    </>
  );
};
