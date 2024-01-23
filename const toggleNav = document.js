const likeBtn = document.getElementById("like-btn");
const dislikeBtn = document.getElementById("dislike-btn");
const counter = document.getElementById("counter");
let count = 0;

likeBtn.addEventListener("click", () => {
  count += 2;
  counter.textContent = count;
  if (count > 0) {
    counter.style.color = "white";
  }
});

dislikeBtn.addEventListener("click", () => {
  count--;
  counter.textContent = count;
  if (count < 0) {
    counter.style.color = "red";
  } else if (count === 0) {
    counter.style.color = "black";
  }
});

const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
  counter.style.color = "black";
});

const colourBtn = document.getElementById("colour-btn");

colourBtn.addEventListener("click", () => {
  const colours = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  const randomColour = colours[Math.floor(Math.random() * colours.length)];
  document.body.style.backgroundColor = randomColour;
});

const employeeBtn = document.getElementById("employee-btn");
const employeeContainer = document.getElementById("employee-container");
const employeeStatements = [
  {
    name: "Jake Paul",
    title: "Software Engineer",
    statement: "I love working at Air Canada because of the amazing team and challenging projects.",
    image: "https://m.media-amazon.com/images/M/MV5BNGJlMTg5NTctZDk5ZS00MWU2LTk3OWItYjNiMTNhZmI5MjE5XkEyXkFqcGdeQXVyOTE0NjgwMjY@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Logan Paul",
    title: "General Manager",
    statement: "Working at Air Canada has given me the opportunity to work on exciting design projects and collaborate with talented professionals.",
    image: "https://www.rollingstone.com/wp-content/uploads/2023/07/Logan-Paul-controversies.jpg?w=1581&h=1054&crop=1",
  },
  // Add more employee statements as needed
  {
    name: "THE ROCK",
    title: "Air Host",
    statement: "Working at Air Canada is really good as I get to visit a lot of countries and get paid for it",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/240123121215-dwayne-johnson-101922.jpg?c=16x9&q=h_833,w_1480,c_fill",
  },
  {
    name: "Rey Mysterio",
    title: "UX Designer",
    statement: "I love working at Air Canada as enjoy it with my colleagues",
    image: "data:image/jpeg;base64,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",
  },
];
let currentIndex = 0;

employeeBtn.addEventListener("click", () => {
  const employee = employeeStatements[currentIndex];
  employeeContainer.innerHTML = `
    <img src="${employee.image}" alt="${employee.name}">
    <h2>${employee.name}</h2>
    <p>${employee.title}</p>
    <p>${employee.statement}</p>
  `;
  currentIndex = (currentIndex + 1) % employeeStatements.length;
});

const specialBtn = document.getElementById("special-btn");

specialBtn.addEventListener("click", () => {
  alert("You clicked the special button!");
});