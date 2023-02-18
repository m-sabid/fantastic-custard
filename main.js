function geometryCalculation(input) {
  // Get element
  const card = input.parentNode;

  // Find all elements in the card
  const tags = card.querySelector("#card_title");

  // Find inputs
  const inputB = card.querySelector("#inputB");
  const inputH = card.querySelector("#inputH");
  // Convert input to number
  const numInputB = parseFloat(inputB.value);
  const numInputH = parseFloat(inputH.value);
  // Create Elements
  const items = document.getElementById("cart-items");
  const item = document.createElement("li");
  const sup = document.createElement("sup");
  const btn = document.createElement("button");

  // Conditions for geometrical calculations
  let calculatedValue;

  if (tags.innerHTML === "Triangle") {
    calculatedValue = 0.5 * numInputB * numInputH;
  }
  if (tags.innerHTML === "Rectangle") {
    calculatedValue = numInputB * numInputH;
  }
  if (tags.innerHTML === "Parallelogram") {
    calculatedValue = numInputB * numInputH;
  }
  if (tags.innerHTML === "Rhombus") {
    calculatedValue = 0.5 * numInputB * numInputH;
  }
  if (tags.innerHTML === "Pentagon") {
    calculatedValue = 0.5 * numInputB * numInputH;
  }
  if (tags.innerHTML === "Ellipse") {
    calculatedValue = 3.1416 * numInputB * numInputH;
  }

  // Cm to m
  const m = calculatedValue / 100;

  // Validation
  if (isNaN(calculatedValue)) {
    alert("Please enter a number!");
  } else {
    sup.innerText = "2";
    btn.innerText = "Covert to m";
    btn.classList.add("btn", "btn-primary", "ml-5");

    btn.onclick = function () {
      item.textContent = `${tags.innerHTML} ${m} m`;
    };

    item.textContent = `${tags.innerHTML} ${calculatedValue} cm`;
    items.appendChild(item);
    item.appendChild(sup);
    item.appendChild(btn);
    btn.appendChild(sup);
  }
}

function setRandomBackgroundColor(props) {
  const colors = [
    "#007bff",
    "#6c757d",
    "#28a745",
    "#dc3545",
    "#ffc107",
    "#17a2b8",
    "#ffffff",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  props.style.backgroundColor = randomColor;
}
