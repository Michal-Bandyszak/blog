import { getHTMLElement } from './parsehtml.js'

export const userComponent = (user, index) => {
  const usersTableBody = document.querySelector("#usersTable__body")
  const row = [
    user.name,
    user.surname,
    user.email,
    user.gender,
    `<div><button class="btn-edit fas fa-edit"></button><button class="btn-del fas fa-trash"></button></div>`
  ]

  const tableRow = usersTableBody.insertRow(index);
  const tableContent = row.map((value) => getHTMLElement(value));

  tableContent.forEach((cell, index) => {
   tableRow.insertCell(index).appendChild(cell)
 })
}