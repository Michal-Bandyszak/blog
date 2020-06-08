const btnAdd = document.querySelector("#btnAddPost");
const userId = localStorage.getItem('id')
const userMail = localStorage.getItem('email');

btnAdd.addEventListener("click", () => {
	$('#newPost').modal('show');
	console.log("yoyo")
});

console.log("Hello")

buttonSubmit.addEventListener("click", () => submitFormEdit(e));

const submitFormEdit = (e) => {
	e.preventDefault();

	const body = Object.fromEntries(new FormData(e.target));
	const data = Object.entries(body).reduce((prev, actual) => {
		return { ...prev, [key]: value };
		
	}, {});
	 
	$('#newPost').modal('hide').find('textarea, input').val('');
}