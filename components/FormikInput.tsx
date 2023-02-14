import { FormikProps, FormikValues } from "formik";
import { View, Text, TextInput } from "react-native";
import { SignUpStyles } from "../styles/SignUp/signUp";

type FormikInputProps = Pick<FormikValues, "handleChange"> & {
  value: string;
  error?: string;
  name: string;
  label?: string;
  touched: boolean;
  type?: "password";
};

export const FormikInput = ({
  value,
  handleChange,
  error,
  name,
  label,
  touched,
  type,
}: FormikInputProps) => {
  return (
    <View style={{ width: "80%" }}>
      {label && <Text style={SignUpStyles.label}>{label + ":"}</Text>}
      <TextInput
        secureTextEntry={type === "password"}
        value={value}
        onChangeText={handleChange(name)}
        style={SignUpStyles.field}
      ></TextInput>
      {error && touched && <Text style={SignUpStyles.error}>{error}</Text>}
    </View>
  );
};
