import { getHTMLElement } from './parsehtml.js';
import { AddReadMore } from './readMore.js';
import {getPostComments } from'./getPostComments.js'
import { comment } from './comment.js';
import commentArray from './comment.js'
const userId = localStorage.getItem('id')
const userMail = localStorage.getItem('email');
const postDiv = document.querySelector(".posts");
const commentDiv = postDiv.querySelector("comments")

AddReadMore()


export const postComponent = (data, index) => {
 getPostComments(data.id)
  const days = data.createdAt.slice(0, 10);
  const time = data.createdAt.slice(11, 19);
 
    const postBody = [
      `<article  id="module" class="container post pt-4 ">
        <div class="mt-10">
          Created by: ${data.author}, 
          tags: ${data.tags},
          created at: ${days} ${time}
        </div>
        <p class="addReadMore showlesscontent" id="collapse-${index}" aria-expanded="false"">
           ${data.contet}
        </p>
        <div class="comments">
          
        </div>
        <div>
          <form>
            <label>Add Comment </label>
            <input type="text"
          </form>
        </div>
      </article>`,
    ]
    
    commentArray.forEach((elem) => {
      console.log(elem)
    })
    const putComment = () => {
      console.log(commentArray);
        
    };
      // commentArray.map(item =>  console.log(item))
      //   const kom = [
      //     `<div>
      //       <p>Author: ${elem.author}, created at: ${elem.createdAt}</p>
      //       <p>${elem.content}</p>
      //     </div>`
      //   ]
      //   commentDiv.appendChild(getHTMLElement(kom))
      // })
    
    putComment()
    postDiv.appendChild(getHTMLElement(postBody))
    // console.log(index)
      // if(data.contet.length > 50) {
      //   postDiv.appendChild(getHTMLElement(
      //     `<a 
      //         role="button" class="collapsed mb-30"
      //         data-toggle="collapse" href="#collapse-${index}" aria-expanded="false"
      //         aria-controls="collapse-${index}">
      //           Read more
      //     </a>`
      //   ))
      // }
      
}