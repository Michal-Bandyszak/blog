import { deleteUser } from './deleteUser.js';

export class Modal{
	constructor(){
		this.element = $('#deleteModal');
		this.buttonDel = $('#modalButtonDelete')
		this.data = null;
	}

	setData(user) {
		this.data = user;
		
		// console.log(user.id)
	}

	showModal() {
		this.element.modal('show').find('textarea,input').val('');
	}

	hideModal() {
		this.element.modal('hide').find('textarea,input').val('');
	}

	onDelete() {
		deleteUser(this.data.id)

	} 
}