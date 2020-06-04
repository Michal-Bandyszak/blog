const tbody = document.getElementById("usersTable__body")

export const showUsers = () => {
  tbody.innerHTML = "";
  getAllUsers()
}