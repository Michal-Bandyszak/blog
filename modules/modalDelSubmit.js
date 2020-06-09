import { deleteUser } from './deleteUser.js';

export class Modal{
	constructor(deleteCallback){
		this.element = $('#deleteModal');
		this.buttonDel = $('#modalButtonDelete')
		this.data = null;
		this.deleteCallback = deleteCallback;
	}

	setData(user) {
		this.data = user;
	}

	showModal() {
		this.element.modal('show').find('textarea,input');
	}

	hideModal() {
		this.element.modal('hide').find('textarea,input');
	}

	onDelete() {
		deleteUser(this.data.id, this.deleteCallback)
	} 
}