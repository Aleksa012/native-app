import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamsList } from "../../routes/Home";
import { useEffect, useState } from "react";
import {
  createComment,
  getPostById,
  Post as PostProps,
} from "../../api/posts/postsClient";
import { Button } from "../../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Comment } from "../../components/Comment";

export const Post = (props: NativeStackScreenProps<ParamsList, "post">) => {
  const [post, setPost] = useState<PostProps>();
  const [comment, setComment] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await getPostById(props.route.params.postId);
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (!post)
    return (
      <View style={{ ...styles.container, flex: 1 }}>
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "white" }}>{`Author: ${post.author}`}</Text>
          <Text style={{ color: "white" }}>{`${post.createdAt.slice(
            0,
            post.createdAt.indexOf("T")
          )}`}</Text>
        </View>
        <Text style={{ color: "#8BF5FA", fontSize: 16 }}>{`- ${post.content}${
          post.content[post.content.length - 1] === "." ? "" : "."
        }`}</Text>
      </View>
      <FlatList
        data={post.comments}
        renderItem={({ item }) => <Comment {...item} />}
        ListEmptyComponent={
          <Text style={{ color: "white" }}>Empty, be first to comment :D</Text>
        }
        contentContainerStyle={styles.list}
      />
      <View style={styles.footer}>
        <TextInput
          onChangeText={(text) => setComment(text)}
          placeholder="Comment..."
          style={styles.field}
          value={comment}
        />
        <Button
          onPress={async () => {
            if (comment === "") return;
            const newComment = await createComment(
              { content: comment },
              post.id
            );
            setPost((prev) => {
              return { ...prev, comments: [...prev.comments, newComment] };
            });
            setComment("");
          }}
          style={styles.btn}
        >
          <MaterialCommunityIcons name="send" size={24} color="white" />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#18122B",
  },
  post: {
    backgroundColor: "#635985",
    width: "100%",
    minHeight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#205E61",
    padding: 10,
  },
  footer: {
    backgroundColor: "#393053",
    position: "absolute",
    height: 50,
    width: "100%",
    bottom: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  field: {
    width: "90%",
    backgroundColor: "#635985",
    height: 40,
    fontSize: 24,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: "white",
  },
  btn: {
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 10,
    minHeight: "100%",
  },
});
