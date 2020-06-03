import { getHTMLElement } from './parsehtml.js'
import { Modal } from './modalDelSubmit.js'

export const userComponent = (user, index) => {
  let modal = new Modal(user.id)
  const usersTableBody = document.querySelector("#usersTable__body")
  const row = [
    `<div><input type="checkbox"></div>`,
    user.name,
    user.surname,
    user.email,
    user.gender,
    `<div><button class="btn-edit fas fa-edit"></button><button class="btn-del fas fa-trash"></button></div>`
  ]

  const tableRow = usersTableBody.insertRow(index);
  const tableContent = row.map((value) => getHTMLElement(value));
  const tr = usersTableBody.querySelectorAll("tr")[index];
  tableContent.forEach((cell, index) => {
   tableRow.insertCell(index).appendChild(cell) 
  })
  const deleteButton = tr.querySelector(".btn-del");
  
  deleteButton.addEventListener("click", () => {
    // $('#deleteModal').modal('show').find('textarea,input').val('');
    modal.showModal()
  })

}












// const btnDel = document.getElementById("modalButtonDelete")
//  btnDel.addEventListener("click", () => {
//     funkcja(Modal)
//   })

  // const funkcja = (modal) => {
  //   modal.showUSer()
  //   $('#deleteModal').modal('hide').find('textarea,input').val('');
  // }

// modal.onDelete()





// btnDel.addEventListener("click", () => {
//   funkcja()
// })
// const funkcja = () => {
//   modal.showUSer()
//   $('#deleteModal').modal('hide').find('textarea,input').val('');
// }










// const btnDel = document.getElementById("modalButtonDelete");

// btnDel.addEventListener("click", () => {
//   funkcja()
// })
// const funkcja = (btnDel) => {
//   console.log("kawa")
// }

