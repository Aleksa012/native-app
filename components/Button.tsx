import { Pressable, PressableProps } from "react-native"

export const Button = (props: PressableProps) => {
    return <Pressable {...props}>
        {props.children}
    </Pressable>
}