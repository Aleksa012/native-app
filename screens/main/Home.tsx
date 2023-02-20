import "react-native-gesture-handler";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamsList } from "../../routes/Home";
import {
  createPost,
  getAllPosts,
  Post as PostType,
} from "../../api/posts/postsClient";
import { useContext, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Post } from "../../components/Post";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SessionContext } from "../../context/Session";
import { homeStyles } from "../../styles/home/home";

export const Home = ({
  navigation,
}: NativeStackScreenProps<ParamsList, "home">) => {
  const [posts, setPosts] = useState<PostType[]>();
  const [postContent, setPostContent] = useState("");
  const { setSessionUser, toggleLogginState } = useContext(SessionContext);

  useEffect(() => {
    (async () => {
      const data = await getAllPosts();
      setPosts(data);
    })();
  }, []);

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>
        <MaterialCommunityIcons name="logout" color="white" size={32} />
        <Button
          onPress={async () => {
            await AsyncStorage.clear();
            toggleLogginState();
            setSessionUser(null);
          }}
        >
          <Text style={{ color: "white", fontSize: 24 }}>Log out</Text>
        </Button>
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post {...item} navigation={navigation} />}
        keyExtractor={({ id }) => id}
        ListEmptyComponent={<Text>Empty</Text>}
        contentContainerStyle={homeStyles.list}
      />
      <View style={homeStyles.footer}>
        <TextInput
          onChangeText={(text) => setPostContent(text)}
          placeholder="Create post..."
          style={homeStyles.field}
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
          style={homeStyles.btn}
        >
          <MaterialCommunityIcons name="send" size={24} color="white" />
        </Button>
      </View>
    </View>
  );
};
