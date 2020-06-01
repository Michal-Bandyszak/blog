import { handleError } from './modules/handleError.js';
import { userComponent } from './modules/userComponent.js';

const btnAddUserModal = document.getElementById("btnAddUserModal");
const tbody = document.getElementById("usersTable__body")

const getAllUsers = () => 
  fetch("http://localhost:8090/v1/users/get")
    .then(res => res.json())
    .then(res => {
      res.data.forEach(userComponent)
    }).catch(handleError)
  

const addUser = (user) => 
  fetch("http://localhost:8090/v1/users/add", {
    method: "POST",
    headers:  {
      "Content-Type": "application"
    },
    body: JSON.stringify(user),
	}).then(res => res.json())
		.catch(handleError);

  const showUsers = () => {
    tbody.innerHTML = "";
    getAllUsers()
  }

  showUsers()

  document.forms.formAdd.addEventListener("submit", (e) => {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.target));
  
    const data = Object.entries(body).reduce((prev, actual) => {
      const [key, value] = actual;
      if(key === 'gender') {
        return { ...prev, [key]: +value }
      };
      
      return { ...prev, [key]: value };
      
    }, {});
     addUser(data).then(showUsers)
     $('#newUser').modal('hide').find('textarea,input').val('');
  })

  

btnAddUserModal.addEventListener("click", () => {
  $('#newUser').modal('show').find('textarea,input').val('');

})