import React from "react";
import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder: string;
  name: string;
  textarea?: boolean;
  required?: boolean;
  size?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  textarea,
  name,
  placeholder,
  required,
}) => {
  const InputOrTextarea = textarea ? Textarea : Input;

  const [field, { error }] = useField( name );

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <InputOrTextarea
        {...field}
        placeholder={placeholder}
        name={name}
        required={required}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default InputField;
