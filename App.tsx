import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
import { rootStyles } from "./styles/main";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignUpRouter } from "./routes/SignUpRouter";
import { MainRouter } from "./routes/Main";
import { SessionContext, SessionProvider } from "./context/Session";
import { useContext } from "react";

const AppBody = () => {
  const { isLoggedIn } = useContext(SessionContext);

  return (
    <View style={rootStyles.wrapper}>
      {!isLoggedIn ? <SignUpRouter /> : <MainRouter />}
    </View>
  );
};

export default function App() {
  return (
    <SessionProvider>
      <NavigationContainer>
        {Platform.OS === "android" ? (
          <View style={rootStyles.container}>
            <AppBody />
          </View>
        ) : (
          <SafeAreaView style={rootStyles.container}>
            <AppBody />
          </SafeAreaView>
        )}
        <StatusBar
          translucent={true}
          backgroundColor={"transparent"}
        ></StatusBar>
      </NavigationContainer>
    </SessionProvider>
  );
}
