import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ApiPost } from "../api/getPosts";
import { ApiUser } from "../api/getUsers";
import { UsersWithPosts } from "../api/getUsersWithPosts";
import User from "../components/User";
import demoTreeData, { TreeData } from "../demodata/treeItem";

const Home: React.FC = () => {
  const [usersWithPosts, setUsersWithPosts] = useState<UsersWithPosts[]>([])

  useEffect(() => {
    async function fetchData(){
      try {
        const respPosts = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const jsonPosts = await respPosts.data;
        const respUsers = await axios.get('https://jsonplaceholder.typicode.com/users');
        const jsonUsers = await respUsers.data
        const userPost = jsonPosts.map((post: ApiPost) => {
          const userToAddPost = jsonUsers.find((user: ApiUser)=> user.id == post.userId)
          // console.log(userToAddPost)
          if(!userToAddPost.posts){
            userToAddPost['posts']=[post]
          }else {
            userToAddPost['posts'].push(post)
          }
        })
        setUsersWithPosts(jsonUsers);
      } catch (error) {
        console.log('Error:', error)
      }
    }
    fetchData()
  }, [])

  useEffect(()=>{
    let checkedItems: TreeData[] = []
    function recurse(treeData: TreeData[]) {
      treeData.forEach(element => {
        if(element.checked){
          checkedItems.push(element)
        }if(element.treeData){
          recurse(element.treeData)
        }
      });
    }
    recurse(demoTreeData)
    console.log(checkedItems)
  })


  const paintUsersWithPosts = () => {
    return usersWithPosts.map((userWithPost, i) => <User key={i} data={userWithPost} />
  )
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem"
      }}
    >
      <>{paintUsersWithPosts()}</>
    </Box>
  );
};
export default Home;
