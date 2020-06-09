import { handleError } from './handleError.js'

export const deleteTag = (data, delleteCallback) => {
  fetch(`http://localhost:8090/v1/tags`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(() => {
    delleteCallback()
  }) 
  .catch(handleError)
}