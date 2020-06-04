import { handleError } from "./modules/handleError.js"

const createTag = (tag) => {
  fetch("http://localhost:8090", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tag),
  })
    .then(res => res.json())
    .catch(handleError)
}

const getAllTags = () => {
  fetch("http://localhost:8090/v1/tags")
    .then(res => res.json())
    .then(res => {
      res.data.forEach(allTagsList)
    })
}

let tagsArray = [];

const allTagsList = (tags) => {
  tagsArray.push(tags)
}

getAllTags();
console.log(tagsArray)


const deleteTag = (tag) => {
    fetch(`http://localhost:8090/v1/tags`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(tag)
    }).then(res => res.json())
      .catch(handleError)
}
