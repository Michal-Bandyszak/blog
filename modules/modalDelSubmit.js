import { deleteUser } from './deleteUser.js';

export class Modal{
	constructor(id){
		this.id = id
	}

	showModal() {
		$('#deleteModal').modal('show').find('textarea,input').val('');
	}
	
	showUSer() {
		console.log("hej")
	}

	onDelete(id) {
			console.log("hej")
			console.log(id)
			//  deleteUser(id)//.then(showUsers)
			$('#deleteModal').modal('hide').find('textarea,input').val('');
	
	} 
}



//  export const showDeleteModal = (user) => {

// 	btnDel.addEventListener("click", () => {
// 		deleteUser(user.id)//.then(showUsers)
// 		$('#deleteModal').modal('hide').find('textarea,input').val('');
// 	})
// }