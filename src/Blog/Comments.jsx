import React from "react";
import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <section>
      <h2>Comentarios</h2>

      {comments.map((comment, i) => {
        return <Comment key={i} comment={comment} />;
      })}
    </section>
  );
};

export default Comments;
