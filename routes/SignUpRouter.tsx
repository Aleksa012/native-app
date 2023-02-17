import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/signup/Login";
import { SignIn } from "../screens/signup/SignIn";

export type ParamsList = {
  login: undefined;
  sign_in: undefined;
};

const Stack = createNativeStackNavigator<ParamsList>();

export const SignUpRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="sign_in"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Group>
        <Stack.Screen name="sign_in" component={SignIn} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
