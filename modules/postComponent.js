import { getHTMLElement } from './parsehtml.js'

const userId = localStorage.getItem('id')
const userMail = localStorage.getItem('email');
const postDiv = document.querySelector(".posts");


export const postComponent = (data) => {
 
  const days = data.createdAt.slice(0, 10);
  const time = data.createdAt.slice(11, 19);

  
    const postBody = [
      `<article id="module" class="container post ">
        <div>
          Created by: ${data.author}, 
          tags: ${data.tags},
          created at: ${days} ${time}
        </div>
        <p class="mt-1 collapse" id="collapseExample" aria-expanded="false"">
           ${data.contet}
        </p>
        <div class="mb-4">Comments</div>
      </article>`,
     
    ]
    postDiv.appendChild(getHTMLElement(postBody))

    
      if(data.contet.length > 400) {
        postDiv.appendChild(getHTMLElement(`<a role="button" class="collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Read more</a>`))
      
      }
      
}