import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export const Button = (props: TouchableOpacityProps) => {
  return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};
