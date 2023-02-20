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
import { postScreenStyles } from "../../styles/home/post";

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
      <View style={{ ...postScreenStyles.container, flex: 1 }}>
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <View style={postScreenStyles.container}>
      <View style={postScreenStyles.post}>
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
        contentContainerStyle={postScreenStyles.list}
      />
      <View style={postScreenStyles.footer}>
        <TextInput
          onChangeText={(text) => setComment(text)}
          placeholder="Comment..."
          style={postScreenStyles.field}
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
          style={postScreenStyles.btn}
        >
          <MaterialCommunityIcons name="send" size={24} color="white" />
        </Button>
      </View>
    </View>
  );
};
