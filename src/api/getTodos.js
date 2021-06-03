const getTodos = () => {
   return fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
}

export default getTodos