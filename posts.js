import { handleError } from './modules/handleError.js';
import { postComponent } from './modules/postComponent.js';

const getAllPosts = () => 
  fetch("http://localhost:8090/v1/posts")
    .then(res => res.json())
    .then(res => {
      res.data.forEach(postComponent)
    }).catch(handleError)


// const logged = document.querySelector(".logged");
// console.log(logged)
// const email = localStorage.getItem('email')
// logged.appendChild(email)
getAllPosts()