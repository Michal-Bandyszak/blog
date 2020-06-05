import { changeUserData } from "./editUser.js";

    export class Modaledit{
      constructor(){
        this.element = $('#editUser');
        this.buttonDel = $('.editSubmit')
        this.data = null;
      }
    
      setData(user) {
        this.data = user;
        const name = document.getElementById("name");
        const surname = document.getElementById("surname");
        const email = document.getElementById("email");
        const gender = document.getElementById("gender");
       
        name.innerText = user.name
        surname.value = user.surname;
        email.value = user.email;
        gender.value = user.gender
       
      }
    
      showModal() {
        this.element.modal('show').find('textarea,input').val('');
      }
    
      hideModal() {
        this.element.modal('hide').find('textarea,input').val('');
      }
    
      onEdit() {
        //changeUserData()
    
      } 
    }