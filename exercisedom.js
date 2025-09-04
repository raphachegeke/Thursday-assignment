// stored my name in a variable
let myName = "Rapha Chege";

// takes the first[0] element with a class name heading 
let heading = document.getElementsByClassName("heading")[0];

// takes the first[0] element with a class name paragraph
let paragraph = document.getElementsByClassName("paragraph")[0];

// trigger when mouse goes over the heading
heading.addEventListener("mouseover", () => {
    heading.outerHTML = '<p style="color: green;">Welcome to FCA</p>';
});

// // reset text when mouse leaves
// heading.addEventListener("mouseout", () => {
//     heading.outerHTML = '<h1 class="heading">Hello there✌️</h1>'
// });
paragraph.addEventListener("click", () => {
        paragraph.outerHTML = '<h1 style="color: yellow;">My name is ' + myName + '</h1>'

})

// this button refresh the page when hovered on 
let btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("mouseover", () => {
    location.reload();
});
