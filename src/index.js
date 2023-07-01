document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', function(e){
    e.preventDefault()
    
    const inputValue = document.getElementById('new-task-description').value
    const task = document.createElement('li')
    task.textContent = inputValue

    document.getElementById('tasks').appendChild(task)
  })
});
