// Variables
const courses = document.querySelector("#courses-list"),
  shoppingCartContent = document.querySelector("#cart-content tbody");

// Listeners
loadEventListeners();

function loadEventListeners() {
  // When a new course is added
  courses.addEventListener("click", buyCourse);
}

// Functions

function buyCourse(e) {
  e.preventDefault();
  // Use delegation to find the course was added
  if (e.target.classList.contains("add-to-cart")) {
    // read the course values
    const course = e.target.parentElement.parentElement;

    // read the values
    getCourseInfo(course);
  }
}
// Reads the HTML information of the selected code
function getCourseInfo(course) {
  // Create an object with Course Data
  const courseInfo = {
    image: course.querySelector("img").src,
    title: course.querySelector("h4").textContent,
    price: course.querySelector(".price span").textContent,
    id: course.querySelector("a").getAttribute("data-id")
  };
  // Insertinto the shopping cart
  addIntoCart(courseInfo);
}

// Display the selected course into the shopping cart

function addIntoCart(course) {
  // create a <tr>
  const row = document.createElement("tr");

  // Build the template
  row.innerHTML = `
    <tr>
        <td>
            <img src="${course.image}" width=100>
        </td>
        <td>
            ${course.title}
        </td>
        <td>
            ${course.price}
        </td>
        <td>
            <a href="#" class="remove" data-id="${course.id}">X</a>
        </td>

    </tr>
  `;

  // Add into the shopping cart
  shoppingCartContent.appendChild(row);
}
