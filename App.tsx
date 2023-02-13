import "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar';
import { Platform, View } from 'react-native';
import { rootStyles } from "./styles/main";
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { SignUpLayout } from "./screens/Signup/Layout"
import { SignIn } from "./screens/Signup/SignIn"

const AppBody = () => {
  return <View style={rootStyles.wrapper}>
  <SignUpLayout>
    <SignIn/>
  </SignUpLayout>
</View>

}

export default function App() {

  return (
      <NavigationContainer>
        {Platform.OS === "android" ? 
        <View style={rootStyles.container}>
          <AppBody/>
        </View> : <SafeAreaView style={rootStyles.container}>
          <AppBody/>
         </SafeAreaView>}
         <StatusBar translucent={true} backgroundColor={"transparent"}></StatusBar>
      </NavigationContainer>
  );
}


