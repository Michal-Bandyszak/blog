import { handleError } from './handleError.js'
import { showUsers } from './showUsers.js'
export const deleteUser = (id, deleteCallback) => {
	fetch(`http://localhost:8090/v1/users/delete/${id}`, {
		method: "DELETE",
		headers: {
	 		"Content-Type": "application/json"
		}
	}).then(() => {
		deleteCallback()
	})
		.catch(handleError)
 }