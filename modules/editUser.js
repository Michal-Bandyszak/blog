import { handleError } from "./handleError.js";

export const changeUserData = () => 
  fetch('http://localhost:8090/v1/users/update', {
    method: 'PUT',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
    .catch(handleError)
  