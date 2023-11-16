"use strict"

const todoObj = {
    name: "To Do App",
    data: [],
    completed: [],

    addTodo: function (text) {
        this.data.push(text);
    },

    completedTodo: function (todoIndex) {
        this.completed.push(this.data[todoIndex]);
        let newData = this.data.filter((item, index) => index !== todoIndex);
        this.data = newData;
    },

    renderTodo: function (listEl) {
        console.log("completed: ", this.completed);
        console.log("data", this.data);

        listEl.innerHTML = this.data.map((item) => `<div> ${item}</div>`).join("");
    },
};

let todoInput = document.querySelector("#todoInput");
let todoSend = document.querySelector("#todoSend");
let todoList = document.querySelector("#todoList");

todoSend.addEventListener("click", function () {
    let value = todoInput.value;
    todoObj.addTodo(value);
    todoObj.renderTodo(todoList);
});


// todoObj.addTodo("Eat");
// todoObj.addTodo("Enter your email");
// console.log(todoObj);
// todoObj.completedTodo(0);
// console.log(todoObj);

