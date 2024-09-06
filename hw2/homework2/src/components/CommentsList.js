import React, { useState } from 'react';
import './CommentsList.css';

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);

  const handleDelete = (id) => {
    const updatedComments = comments.filter(comment => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div className="comments-list">
      {comments.length > 0 ? (
        comments.map(comment => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <button onClick={() => handleDelete(comment.id)}>Удалить</button>
          </div>
        ))
      ) : (
        <p>Комментариев нет</p>
      )}
    </div>
  );
};

export default CommentsList;