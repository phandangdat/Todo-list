let inputContent = document.querySelector('.add-input');
let form = document.querySelector('form');
let todos = document.querySelector('.list-todo');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let contentValue = inputContent.value.trim();
    if(contentValue) {
        addTodoElement({
            text: contentValue,
        })
    }
    inputContent.value = '';
})
function addTodoElement(todo) {
    var li = document.createElement('li');
    li.setAttribute('class', 'item-todo general-size')

    li.innerHTML = `
        <span>${todo.text}</span>
    `
    todos.appendChild(li)
    li.addEventListener('click', function() {
        this.classList.toggle("completed");
    })
}
// function todoActive {
//     const buttonAll = querySelector('#all');
//     const buttonActive = querySelector('#active');
//     const buttonCompleted = querySelector('#completed');


//     buttonAll.onclick = function(e) {
//         var itemTodos = document.querySelector('.item-todo')

//         // itemTodos.forEach((itemTodo)=>  )
//     }
// }