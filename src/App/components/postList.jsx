import React from "react";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <h3 key={post.id}>{post.label}</h3>
      ))}
    </div>
  );
};

export default PostList;
