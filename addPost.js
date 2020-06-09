import { handleError } from "./modules/handleError.js";
import { postComponent } from "./modules/postComponent.js";
import { getAllPosts } from "./posts.js";
import { getHTMLElement } from './modules/parsehtml.js';

const btnAdd = document.querySelector("#btnAddPost");
const userId = localStorage.getItem('id')
const userMail = localStorage.getItem('email');
const formAdd = document.getElementById("formAdd");
const tagInput = formAdd.querySelector("#tags");

btnAdd.addEventListener("click", () => {
	$('#newPost').modal('show');
});


const getAllTags = () => 
fetch("http://localhost:8090/v1/tags")
.then(res => res.json())
.then(res => {
	res.data.map((tag) => {
		tagComponent(tag)
	})
})


const tagComponent = (tag) => {
const value = tag.value;
const option = `<option value="${value}">${value}</option`
tagInput.appendChild(getHTMLElement(option))
}

getAllTags()


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
		
			
			const content = data.content
		
		
			let selectedValues = Array.from(tagInput.selectedOptions)
        .map(option => option.value)


			console.log(selectedValues)

			const post = {
				tags: selectedValues,
				authorID: userId,
				content: content
			}
			 addPost(post)
			 getAllPosts()
			 $('#newPost').modal('hide')
		})
			