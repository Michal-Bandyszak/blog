import { handleError } from './handleError.js'

export const deleteTag = (data) => {
  fetch(`http://localhost:8090/v1/tags`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
  .catch(handleError)
}