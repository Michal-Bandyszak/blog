import { handleError } from "./modules/handleError.js"
import { getHTMLElement } from "./parsehtml.js"

const createTag = () => {
  fetch("http://localhost:8090", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tag),
  })
    .then(res => res.json())
    .catch(handleError)
}

const deleteTag = () => {
  fetch(`http://localhost:8090/v1/tags`, {
    method: "DELETE",
    headers: {
       "Content-Type": "application/json"
    },
    body: JSON.stringify()
  }).then(res => res.json())
    .catch(handleError)
}

const getAllTags = () => 
  fetch("http://localhost:8090/v1/tags")
    .then(res => res.json())
    .then(res => {
      res.data.forEach(tagsComponent)
    })


const tagsArray = [];

const tagsComponent = (tag) => {
  tagsArray.push(tag)
  
  // const node = tag.value
  // const ul = document.getElementById('list');
  // li.appendChild(node);
  // ul.appendChild(li)

}

getAllTags()
console.log(tagsArray)

const showElems = () => {
  tagsArray.forEach(tag => console.log(tag));
}
showElems()


