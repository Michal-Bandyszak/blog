import { changeUserData } from "./editUser.js";

    export default class Modaledit{
      constructor(editCallback){
        this.element = document.getElementById('editUser');
        this.$element = $(this.element);

        this.buttonDel = $('.editSubmit')
        this.data = null;
        this.editCallback = editCallback;
      }
    
      setData(user) {
        this.data = user;
        const name = this.element.querySelector('input[name="name"]');
        const surname = this.element.querySelector('input[name="surname"]');
        const email = this.element.querySelector('input[name="email"]');
        const gender = this.element.querySelector('input[name="gender"]');
        name.value = user.name;
        surname.value = user.surname;
        email.value = user.email;
        gender.value = user.gender;
      }
    
      showModal() {
        this.$element.modal('show');
      }
    
      hideModal() {
        this.$element.modal('hide');
      }
    
      onEdit(data) {
        const id = this.data.id
        const dataWithId = {...data, id}
        changeUserData(dataWithId, this.editCallback)
      } 
    }