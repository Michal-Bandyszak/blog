import { handleError } from "./modules/handleError.js"
import { getHTMLElement } from "./modules/parsehtml.js"
import { deleteTagModal } from './modules/deleteTagModal.js'

//Raz znaleźć modal 
const newTagModal =  $('#newTag');
const delModal =  $('#deleteModal');

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
  
  
const modal = new deleteTagModal;

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

  const btnDel = tr.querySelector(".btn-del");
  
  btnDel.addEventListener("click", () => {
    modal.setData(tag);
    modal.showModal();
  })

  const btnModalDel = document.getElementById("modalButtonDelete")
  btnModalDel.addEventListener("click", () => {
      modal.onDelete()
      modal.hideModal()
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




getAllTags()
