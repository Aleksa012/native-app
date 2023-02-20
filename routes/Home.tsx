import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Post } from "../screens/main/Post";
import { Home } from "../screens/main/Home";
import { Platform } from "react-native";

export type ParamsList = {
  home: undefined;
  post: {
    postId: string;
  };
};

const Stacks = createNativeStackNavigator<ParamsList>();

export const HomeRouter = () => {
  return (
    <Stacks.Navigator
      initialRouteName="home"
      screenOptions={{ headerTitle: "" }}
    >
      <Stacks.Screen
        component={Home}
        name="home"
        options={{ headerShown: false }}
      />
      <Stacks.Screen
        component={Post}
        name="post"
        options={{ headerShown: Platform.OS === "ios" ? true : false }}
      />
    </Stacks.Navigator>
  );
};
