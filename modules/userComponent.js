import { getHTMLElement } from './parsehtml.js'
import { Modal } from './modalDelSubmit.js'
import { Modaledit } from './modalEditUser.js';


const modal = new Modal()
const modalEdit = new Modaledit()

export const userComponent = (user, index) => {
  const usersTableBody = document.querySelector("#usersTable__body")
  const row = [
    `<div><input type="checkbox"></div>`,
    user.name,
    user.surname,
    user.email,
    user.gender,
    `<div><button class="btn-edit fas fa-edit edit-user"></button><button class="btn-del fas fa-trash"></button></div>`,
    `<div><button class="btn btn-secondary login">login</button></div>`
  ]

  const tableRow = usersTableBody.insertRow(index);
  const tableContent = row.map((value) => getHTMLElement(value));
  const tr = usersTableBody.querySelectorAll("tr")[index];
  tableContent.forEach((cell, index) => {
   tableRow.insertCell(index).appendChild(cell) 
  })
  const deleteButton = tr.querySelector(".btn-del");
  
  deleteButton.addEventListener("click", () => {
    modal.setData(user);
    modal.showModal();
  })

  const btnDel = document.getElementById("modalButtonDelete")
  btnDel.addEventListener("click", () => {
      modal.onDelete()
      modal.hideModal()
    })
    
  const login = tr.querySelector(".login");
 
  login.addEventListener("click", () => {
    localStorage.setItem('id', user.id)
    localStorage.setItem('name', user.name)
    localStorage.setItem('surName', user.surname)

  })
  
  const btnEdit = tr.querySelector('.btn-edit');
  btnEdit.addEventListener("click", () => {
    modalEdit.setData(user)
    modalEdit.showModal()
  })

}
// const btnDel = document.getElementById("modalButtonDelete");

// btnDel.addEventListener("click", () => {
//   funkcja()
// })
// const funkcja = (btnDel) => {
//   console.log("kawa")
// }
