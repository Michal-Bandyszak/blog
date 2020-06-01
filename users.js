const table = document.querySelector("#usersTable");
const usersTableBody = document.querySelector("#usersTable__body")

const handleError = (error) => {
  console.log(error);
}

const getHTMLElement = (str) => {
	const parser = new DOMParser();	
	const childNodes = parser.parseFromString(str, "text/html").body.childNodes;
	return childNodes.length > 0 ? childNodes[0] : document.createElement("div");
};

const getAllUsers = () => 
  fetch("http://localhost:8090/v1/users/get")
    .then(res => res.json())
    .then(res => {
      res.data.forEach(userComponent)
    }).catch(handleError)
  
  
getAllUsers()


const userComponent = (user, index) => {
  const row = [
    user.name,
    user.surname,
    user.email,
    user.gender,
    `<div><button class="btn-edit fas fa-edit"></button><button class="btn-del fas fa-trash"></button></div>`
  ]

  const tableRow = usersTableBody.insertRow(index);
  const tableContent = row.map((value) => getHTMLElement(value));

  tableContent.forEach((cell, index) => {
   tableRow.insertCell(index).appendChild(cell)
 })
}
