import { handleError } from './modules/handleError.js';
import { userComponent } from './modules/userComponent.js';

const btnAddUserModal = document.getElementById("btnAddUserModal");

const getAllUsers = () => 
  fetch("http://localhost:8090/v1/users/get")
    .then(res => res.json())
    .then(res => {
      res.data.forEach(userComponent)
    }).catch(handleError)
  

const addUser = () => 
  fetch("http://localhost:8090/v1/users/add", {
    method: "POST",
    headers:  {
      "Content-Type": "application"
    }
  }).catch(handleError)

getAllUsers()

btnAddUserModal.addEventListener("click", () => {
  $('#newUser').modal('show').find('textarea,input').val('');

})