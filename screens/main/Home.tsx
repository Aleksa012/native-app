import "react-native-gesture-handler";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamsList } from "../../routes/Home";
import {
  createPost,
  getAllPosts,
  Post as PostType,
} from "../../api/posts/postsClient";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Post } from "../../components/Post";

export const Home = ({
  navigation,
}: NativeStackScreenProps<ParamsList, "home">) => {
  const [posts, setPosts] = useState<PostType[]>();
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getAllPosts();
      setPosts(data);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post {...item} navigation={navigation} />}
        keyExtractor={({ id }) => id}
        ListEmptyComponent={<Text>Empty</Text>}
        contentContainerStyle={styles.list}
      />
      <View style={styles.footer}>
        <TextInput
          onChangeText={(text) => setPostContent(text)}
          placeholder="Create post..."
          style={styles.field}
          value={postContent}
        />
        <Button
          onPress={async () => {
            if (postContent === "") return;
            await createPost({ content: postContent });
            setPostContent("");
            const data = await getAllPosts();
            setPosts(data);
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
    backgroundColor: "#18122B",
    height: "100%",
    position: "relative",
    flex: 1,
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
    paddingTop: 10,
    paddingBottom: 50,
    minHeight: "100%",
  },
});
