import { deleteTag } from './deleteTag.js'

export  class deleteTagModal {
	constructor(deleteCallback){
		this.element = $('#deleteModal');
		this.buttonDel = $('#modalButtonDelete')
		this.data = null;
		this.deleteCallback = deleteCallback;
	}

  setData(tag) {
    this.data = tag
  }


	showModal() {
		this.element.modal('show').find('textarea,input');
	}

	hideModal() {
		this.element.modal('hide').find('textarea,input');
	}

	onDelete() {
    const data = {id: ""}
    data.id = this.data.id
		deleteTag(data, this.deleteCallback)
	} 
}