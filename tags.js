import { handleError } from "./modules/handleError.js"
import { getHTMLElement } from "./modules/parsehtml.js"

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

const list = document.querySelector('#tags-list');
const tagsComponent = (tag, index) => {
const row = [
  tag.id,
  tag.value,
  `<div><button class="btn-edit fas fa-edit edit-user"></button><button class="btn-del fas fa-trash"></button></div>`,
]

  const tableRow = list.insertRow(index);
  const tableContent = row.map((value) => getHTMLElement(value));
  const tr = list.querySelectorAll("tr")[index];
  tableContent.forEach((cell, index) => {
  tableRow.insertCell(index).appendChild(cell) 
  })

}


getAllTags()
