import { PropsWithChildren } from "react"
import { StyleSheet, View } from "react-native"

export const SignUpLayout = ({children}: PropsWithChildren) => {
    return <View style={styles.container}>
       {children}
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: "center",
        backgroundColor: "#8BF5FA"
    }
})