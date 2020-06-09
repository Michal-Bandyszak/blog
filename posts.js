import { handleError } from './modules/handleError.js';
import { postComponent } from './modules/postComponent.js';

export const getAllPosts = () => {
  const postDiv = document.querySelector(".posts");
  postDiv.innerHTML = ""
  fetch("http://localhost:8090/v1/posts")
    .then(res => res.json())
    .then(res => {
      res.data.forEach(postComponent)
    }).catch(handleError)

}
getAllPosts()