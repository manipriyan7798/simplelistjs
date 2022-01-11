// Selecting all elements

const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

// Add new element on form submit

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   Create a new element on submit
  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");
  console.log(item);

  //   Add item to list
  list.appendChild(item);

  //   Clear input
  input.value = "";

  //   Setup event listener to delete a item
  item.addEventListener("click", (e) => {
    // list.removeChild(item);
    item.remove();
  });
});
