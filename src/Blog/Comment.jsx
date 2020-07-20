import React from "react";
import CommentUser from "./CommentUser";
import CommentContent from "./CommentContent";

const Comment = ({ comment }) => {
  return (
    <div>
      <CommentUser user={comment.user} />
      <CommentContent comment={comment.comment} />
    </div>
  );
};
export default Comment;
