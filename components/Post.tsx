import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View, Text } from "react-native";
import {
  dislikePost,
  likePost,
  Post as PostProps,
} from "../api/posts/postsClient";
import { ParamsList } from "../routes/Home";
import { Button } from "./Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useContext, useState } from "react";
import { SessionContext } from "../context/Session";
import { postStyles } from "../styles/components/post";

export const Post = ({
  id,
  author,
  createdAt,
  content,
  navigation,
  likes,
  dislikes,
}: PostProps &
  Pick<NativeStackScreenProps<ParamsList, "home">, "navigation">) => {
  const {
    user: { id: userId },
  } = useContext(SessionContext);
  const [{ didLike, didDislike }, setUserInteraction] = useState({
    didLike: likes.includes(userId),
    didDislike: dislikes.includes(userId),
  });

  return (
    <View style={postStyles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={postStyles.author}>{`Author: ${author}`}</Text>
        <Text style={{ color: "white" }}>{`${createdAt.slice(
          0,
          createdAt.indexOf("T")
        )}`}</Text>
      </View>
      <Text style={postStyles.content}>{`- ${content}${
        content[content.length - 1] === "." ? "" : "."
      }`}</Text>
      <View style={{ flexDirection: "row", marginTop: "auto" }}>
        <Button onPress={() => navigation.navigate("post", { postId: id })}>
          <Text style={{ color: "orange", textDecorationLine: "underline" }}>
            comments
          </Text>
        </Button>
        <AntDesign
          onPress={async () => {
            setUserInteraction((prev) => {
              return { ...prev, didLike: !prev.didLike };
            });
            await likePost(id);
          }}
          name={didLike ? "like1" : "like2"}
          size={20}
          style={{ marginLeft: "auto" }}
        />
        <Text style={{ marginHorizontal: 5 }}>
          {likes.filter((like) => like !== userId).length + (didLike ? 1 : 0)}
        </Text>
        <AntDesign
          onPress={async () => {
            setUserInteraction((prev) => {
              return { ...prev, didDislike: !prev.didDislike };
            });
            await dislikePost(id);
          }}
          name={didDislike ? "dislike1" : "dislike2"}
          size={20}
        />
        <Text style={{ marginHorizontal: 5 }}>
          {dislikes.filter((dislike) => dislike !== userId).length +
            (didDislike ? 1 : 0)}
        </Text>
      </View>
    </View>
  );
};
