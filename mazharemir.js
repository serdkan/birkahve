function getStudents(url){
    fetch(url)
    .then((response) => {
        return response .json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}
getStudents("https://jsonplaceholder.typicode.com/albums")
