import { ApiPost } from "./getPosts";
import { ApiUser } from "./getUsers";

export interface UsersWithPosts extends ApiUser {
    posts: ApiPost[]
}