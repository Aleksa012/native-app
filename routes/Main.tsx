import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeRouter } from "../routes/Home";
import { Profile } from "../screens/main/Profile";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Platform, StatusBar } from "react-native";

export type ParamsList = {
  homeRouter: undefined;
  profile: undefined;
};

const Tabs = createBottomTabNavigator<ParamsList>();

export const MainRouter = () => {
  return (
    <Tabs.Navigator
      initialRouteName="homeRouter"
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: "#393053",
        tabBarInactiveBackgroundColor: "#393053",
      }}
    >
      <Tabs.Screen
        component={HomeRouter}
        name="homeRouter"
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="white" />,
          title: "Home",
        }}
      />
      <Tabs.Screen
        component={Profile}
        name="profile"
        options={{
          tabBarIcon: () => (
            <AntDesign name="profile" size={24} color="white" />
          ),
          title: "Profile",
        }}
      />
    </Tabs.Navigator>
  );
};
