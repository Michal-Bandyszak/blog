import { handleError } from './modules/handleError.js';
import { userComponent } from './modules/userComponent.js';
import { showUsers } from './modules/showUsers.js';
const btnAddUserModal = document.getElementById("btnAddUserModal");
const tbody = document.getElementById("usersTable__body")
   
const addUser = (user) => 
  fetch("http://localhost:8090/v1/users/add", {
    method: "POST",
    headers:  {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user),
	}).then(res => res.json())
		.catch(handleError);

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
});

// const btnEddit = document.querySelector('.editSubmit');
// btnEddit.addEventListener("click", () => submitFormEdit(e));

const showDeleteModal = (user) => {
	$('#deleteModal').modal('show').find('textarea,input').val('');
	const btnDel = document.querySelector("#modalButtonDelete");

	btnDel.addEventListener("click", () => {
		deleteUser(user.id).then(showUsers)
		$('#deleteModal').modal('hide').find('textarea,input').val('');
	})
}


showUsers()
