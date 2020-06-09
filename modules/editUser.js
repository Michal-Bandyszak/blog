import { handleError } from "./handleError.js";

export const changeUserData = (data, editCallback) => 
  fetch('http://localhost:8090/v1/users/update', {
    method: 'PUT',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(data)
  }).then(() => {
    editCallback()
  })
    .catch(handleError)
  