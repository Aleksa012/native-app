import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/main/Home";

export type ParamsList = {
  home: undefined;
};

const Tabs = createBottomTabNavigator<ParamsList>();

export const MainRouter = () => {
  return (
    <Tabs.Navigator initialRouteName="home">
      <Tabs.Screen component={Home} name="home" />
    </Tabs.Navigator>
  );
};
