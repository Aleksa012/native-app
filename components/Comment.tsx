import { StyleSheet, View, Text } from "react-native";
import { Comment as CommentType } from "../api/posts/postsClient";

export const Comment = ({ content, author }: CommentType) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>{content}</Text>
      <Text style={{ color: "white", alignSelf: "flex-end" }}>
        {"- " + author}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "white",
    paddingVertical: 10,
  },
});
