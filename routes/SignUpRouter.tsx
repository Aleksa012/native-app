import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native"
import { Login } from "../screens/Signup/Login"
import { SignIn } from "../screens/Signup/SignIn"

export type ParamsList = {
    "login" : undefined,
    "sign_in": undefined
}

const Stack = createNativeStackNavigator<ParamsList>()

export const SignUpRouter = () => {
    return <Stack.Navigator 
    initialRouteName="sign_in" screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name="sign_in" component={SignIn} />
        <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
}

const styles = StyleSheet.create({
    container: {
        height: "100%"
    }
})