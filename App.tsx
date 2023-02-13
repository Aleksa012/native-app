import "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { rootStyles } from "./styles/main";
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function App() {
  return (
      <NavigationContainer>
        <SafeAreaView style={rootStyles.container}>
          <View style={rootStyles.wrapper}>
            {/* App */}
          </View>
          <StatusBar></StatusBar>
         </SafeAreaView>
      </NavigationContainer>
  );
}


