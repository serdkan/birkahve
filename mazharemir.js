function getStudents(url) {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(id[15]); 
    })
    .catch((err) => console.log(err));
}

getStudents("https://jsonplaceholder.typicode.com/albums");
