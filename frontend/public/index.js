// document.addEventListener("DOMContentLoaded", () => {
//     fetch("http://localhost:3000/users")
//         .then(response => response.json())
//         .then(data => {
//             console.log("Users:", data);
//         })
//         .catch(error => console.error("Error fetching users:", error));
// });

document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/posts")
        .then(response => response.json())
        .then(data => {
            console.log("Posts:", data);
            loadPosts(data);
        })
        .catch(error => console.error("Error fetching posts:", error));
});



function loadPosts(data) {
    console.log(data)
};
