const heading = document.querySelector(".heading");
const paragraph = document.querySelector(".paragraph");

// trigger when mouse goes over the heading
heading.addEventListener("mouseover", () => {
    paragraph.textContent = "You hovered over the heading!";
});

// optional: reset when mouse leaves
heading.addEventListener("mouseout", () => {
    paragraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, atque!";
});
