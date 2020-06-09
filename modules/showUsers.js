import { userComponent } from "./userComponent.js"
import { handleError } from "./handleError.js"
const tbody = document.getElementById("usersTable__body")

const getAllUsers = () => {
  fetch("http://localhost:8090/v1/users/get")
    .then(res => res.json())
    .then(res => {
      res.data.forEach(userComponent)
    }).catch(handleError)
  }
  
export const showUsers = () => {
  tbody.innerHTML = "";
  getAllUsers()
}