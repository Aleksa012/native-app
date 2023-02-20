import { authInstance } from "../instances/authInstance";

const COMMON_PATH = "/posts";

export type PostData = {
  content: string;
};

export type CommentData = {
  content: string;
};

export type Post = {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  editedAt: string;
  likes: string[];
  dislikes: string[];
  comments: Comment[];
};

export type Comment = {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  editedAt: string;
  likes: string[];
  dislikes: string[];
};

export const getAllPosts = async (): Promise<Post[]> => {
  const { data } = await authInstance.get(COMMON_PATH);
  return data;
};

export const createPost = async (postData: PostData) => {
  await authInstance.post(COMMON_PATH, postData);
};

export const getPostById = async (postId: string): Promise<Post> => {
  const { data } = await authInstance.get(COMMON_PATH + `/Id?Id=${postId}`);
  return data;
};

export const likePost = async (postId: string) => {
  await authInstance.put(COMMON_PATH + `/like?Id=${postId}`);
};

export const dislikePost = async (postId: string) => {
  await authInstance.put(COMMON_PATH + `/dislike?Id=${postId}`);
};

export const createComment = async (
  comment: CommentData,
  postId: string
): Promise<Comment> => {
  const { data } = await authInstance.post(
    `/comments?postId=${postId}`,
    comment
  );
  return data;
};
