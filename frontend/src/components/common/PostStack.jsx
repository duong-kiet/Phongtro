import React from "react";

const PostStack = ({ posts, children }) => {
  return (
    <div>
      {posts?.map((post, index) => {
        return children ? children(post, index) : null;
      })}
    </div>
  );
};

export default PostStack;
