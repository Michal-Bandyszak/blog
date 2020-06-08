import { handleError } from "./modules/handleError.js"
import { getHTMLElement } from "./modules/parsehtml.js"


//Raz znaleźć modal 
const newTagModal =  $('#newTag');

const createTag = (tag) => 
  fetch("http://localhost:8090/v1/tags", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tag),
  })
    .then(res => res.json())
    .catch(handleError)


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


    const showTags = () => {
      list.innerHTML = "";
      getAllTags()
    }


const list = document.querySelector('#tags-list');
const tagsComponent = (tag, index) => {
const row = [
  tag.id,
  tag.value,
  `<div><button class="btn-del fas fa-trash"></button></div>`,
]

  const tableRow = list.insertRow(index);
  const tableContent = row.map((value) => getHTMLElement(value));
  const tr = list.querySelectorAll("tr")[index];
  tableContent.forEach((cell, index) => {
  tableRow.insertCell(index).appendChild(cell) 
  })

}

const addTag = document.getElementById("addTag");
addTag.addEventListener("click", () => {
  newTagModal.modal('show').find('textarea,input').val('');
})


document.forms.formAdd.addEventListener("submit", (e) => {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.target));
    const tag = {value: ""};
    tag.value = body.tag
  
    createTag(tag)
    newTagModal.modal('hide').find('textarea,input').val('');
    showTags()
  }
)


// const btnDel = document.getElementById
// const delete = () => {
//   $('#deleteTag').modal('show').find('textarea,input').val('');
// }

getAllTags()
