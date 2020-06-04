import { handleError } from './handleError.js'

export const deleteUser = (id) => {
  console.log(id)
	fetch(`http://localhost:8090/v1/users/delete/${id}`, {
		method: "DELETE",
		headers: {
	 		"Content-Type": "application/json"
		}
	}).then(res => res.json())
		.catch(handleError)
 }