import { postComponent } from "./postComponent.js"
import { comment } from "./comment.js"

export const getPostComments = (postId) => {
  fetch(`http://localhost:8090/v1/posts/comments/${postId}`)
    .then(res => res.json())
    .then(res => {
      res.data.forEach(comment)
  })
}
