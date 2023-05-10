import React from "react";
import {
  Button,
  Card,
  CardContent,
  List,
  Typography,
  ListItem
} from "@mui/material";
import { ApiUser } from "../api/getUsers";
import { UsersWithPosts } from "../api/getUsersWithPosts";

interface userProperties {
  data: UsersWithPosts
}

const User = (props: userProperties) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.data.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.data.email}
        </Typography>
        <Typography variant="body2">Posts</Typography>
        <List>
          {props.data.posts.map((post) => (
            <ListItem key={post.id}>{post.title}</ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          sx={{
            marginTop: "1rem"
          }}
        >
          Save
        </Button>
      </CardContent>
    </Card>
  );
};
export default User;
