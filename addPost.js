import { handleError } from "./modules/handleError.js";
import { postComponent } from "./modules/postComponent.js";
import { getAllPosts } from "./posts.js";

const btnAdd = document.querySelector("#btnAddPost");
const userId = localStorage.getItem('id')
const userMail = localStorage.getItem('email');
const formAdd = document.getElementById("formAdd");
btnAdd.addEventListener("click", () => {
	$('#newPost').modal('show');
});

const tagsArray = [];
const getAllTags = () => 
fetch("http://localhost:8090/v1/tags")
.then(res => res.json())
.then(res => {
	// console.log(res.data)
	res.data.forEach(tagsArray.push(res.data))
})

getAllTags()
console.log(tagsArray);

const addPost = (data) => 
	fetch("http://localhost:8090/v1/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}).then(res => res.json())
		.catch(handleError())
		
	formAdd.addEventListener("submit", (e) => {
			e.preventDefault();
			const body = Object.fromEntries(new FormData(e.target));
		
			const data = Object.entries(body).reduce((prev, actual) => {
				const [key, value] = actual;
				return { ...prev, [key]: value };
				
			}, {});
			const tags = [];
			tags.push(data.tags.split(" "))
			
			const content = data.content
			const post = {
				tags: tags[0],
				authorID: userId,
				content: content
			}
			 addPost(post)
			 getAllPosts()
			 $('#newPost').modal('hide')
		})
			