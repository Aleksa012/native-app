import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamsList } from "../../routes/Main";
import { useContext } from "react";
import { SessionContext } from "../../context/Session";

export const Home = ({}: NativeStackScreenProps<ParamsList, "home">) => {
  const { user } = useContext(SessionContext);

  return (
    <View>
      <Text>{user ? user.userName : "sadge"}</Text>
    </View>
  );
};
