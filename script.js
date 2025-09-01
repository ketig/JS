// Interactive Examples JavaScript Code

function demonstrateVariables() {
  const output = document.getElementById("variablesOutput");
  let result = "";

  try {
    let name = "John";
    const age = 25;
    var city = "თბილისი";

    result += `let name = "${name}"\n`;
    result += `const age = ${age}\n`;
    result += `var city = "${city}"\n\n`;

    name = "გიორგი"; // შეიძლება შეცვლა
    result += `name შეცვლის შემდეგ: "${name}"\n`;

    // age = 30; // ეს შეცდომას გამოიწვევდა
    result += `age-ის შეცვლა არ შეიძლება (const)\n`;

    result += `typeof name: ${typeof name}\n`;
    result += `typeof age: ${typeof age}\n`;
  } catch (error) {
    result += `შეცდომა: ${error.message}`;
  }

  output.textContent = result;
}

function testComparison() {
  const output = document.getElementById("comparisonOutput");
  let result = "";

  // შედარების მაგალითები
  const tests = [
    ['5 == "5"', 5 == "5"],
    ['5 === "5"', 5 === "5"],
    ["0 == false", 0 == false],
    ["0 === false", 0 === false],
    ["null == undefined", null == undefined],
    ["null === undefined", null === undefined],
    ['"" == 0', "" == 0],
    ['"" === 0', "" === 0],
  ];

  tests.forEach(([expression, result]) => {
    output.innerHTML += `${expression} → ${result}\n`;
  });
}

function gradeScore() {
  const scoreInput = document.getElementById("scoreInput");
  const output = document.getElementById("gradeOutput");
  const score = parseInt(scoreInput.value);

  if (isNaN(score)) {
    output.textContent = "გთხოვთ შეიყვანოთ ვალიდური რიცხვი";
    return;
  }

  let grade;
  if (score >= 90) {
    grade = "შესანიშნავი! (A)";
  } else if (score >= 80) {
    grade = "კარგი! (B)";
  } else if (score >= 70) {
    grade = "საშუალო (C)";
  } else if (score >= 60) {
    grade = "სუსტი (D)";
  } else {
    grade = "ჩაჭრილი (F)";
  }

  output.textContent = `ქულა ${score}: ${grade}`;
}

function checkAge() {
  const ageInput = document.getElementById("ageInput");
  const output = document.getElementById("ageOutput");
  const age = parseInt(ageInput.value);

  if (isNaN(age)) {
    output.textContent = "გთხოვთ შეიყვანოთ ვალიდური ასაკი";
    return;
  }

  // Ternary operator გამოყენება
  const status = age >= 18 ? "ზრდასრული" : "არასრულწლოვანი";
  const canVote = age >= 18 ? "კენ" : "ვერ";
  const canDrive = age >= 16 ? "კენ" : "ვერ";

  output.innerHTML = `ასაკი: ${age}\nსტატუსი: ${status}\nხმის მიცემა: ${canVote} შეუძლია\nმანქანის მართვა: ${canDrive} შეუძლია`;
}

function stringCoercionDemo() {
  const output = document.getElementById("stringCoercionOutput");
  let result = "";

  const examples = [
    [123, String(123)],
    [true, String(true)],
    [false, String(false)],
    [null, String(null)],
    [undefined, String(undefined)],
    [[1, 2, 3], String([1, 2, 3])],
    [{ name: "John" }, String({ name: "John" })],
  ];

  examples.forEach(([original, converted]) => {
    result += `${JSON.stringify(original)} → "${converted}"\n`;
  });

  output.textContent = result;
}

function testBoolean() {
  const booleanInput = document.getElementById("booleanInput");
  const output = document.getElementById("booleanOutput");
  let value = booleanInput.value;

  // სხვადასხვა ტიპის გარდაქმნა
  if (value === "true") value = true;
  else if (value === "false") value = false;
  else if (value === "null") value = null;
  else if (value === "undefined") value = undefined;
  else if (!isNaN(value) && value !== "") value = Number(value);

  const booleanResult = Boolean(value);
  const doubleNegation = !!value;

  output.innerHTML = `მნიშვნელობა: ${JSON.stringify(
    value
  )}\nBoolean(value): ${booleanResult}\n!!value: ${doubleNegation}\nTruthy/Falsy: ${
    value ? "Truthy" : "Falsy"
  }`;
}

function arrayDemo() {
  const output = document.getElementById("arrayOutput");
  let result = "";

  let fruits = ["ვაშლი", "ბანანი", "ყვითელი"];
  result += `თავდაპირველი მასივი: [${fruits.join(", ")}]\n`;

  fruits.push("ყურძენი");
  result += `push-ის შემდეგ: [${fruits.join(", ")}]\n`;

  fruits.unshift("ატამი");
  result += `unshift-ის შემდეგ: [${fruits.join(", ")}]\n`;

  let popped = fruits.pop();
  result += `pop-ის შემდეგ: [${fruits.join(", ")}] (წაშლილი: ${popped})\n`;

  let shifted = fruits.shift();
  result += `shift-ის შემდეგ: [${fruits.join(", ")}] (წაშლილი: ${shifted})\n`;

  result += `მასივის სიგრძე: ${fruits.length}`;

  output.textContent = result;
}

function loopDemo() {
  const output = document.getElementById("loopOutput");
  let result = "";

  // For loop
  result += "For loop:\n";
  for (let i = 1; i <= 3; i++) {
    result += `  მეორე ${i}\n`;
  }

  // For...of
  result += "\nFor...of (მასივი):\n";
  let colors = ["წითელი", "მწვანე", "ლურჯი"];
  for (let color of colors) {
    result += `  ფერი: ${color}\n`;
  }

  // For...in
  result += "\nFor...in (ობიექტი):\n";
  let student = { name: "ანა", grade: 95, subject: "მათემატიკა" };
  for (let key in student) {
    result += `  ${key}: ${student[key]}\n`;
  }

  output.textContent = result;
}

function arrayMethodsDemo() {
  const output = document.getElementById("arrayMethodsOutput");
  let result = "";

  let numbers = [1, 2, 3, 4, 5];
  result += `თავდაპირველი მასივი: [${numbers.join(", ")}]\n\n`;

  // map
  let doubled = numbers.map((num) => num * 2);
  result += `map (x2): [${doubled.join(", ")}]\n`;

  // filter
  let evens = numbers.filter((num) => num % 2 === 0);
  result += `filter (ლუწი): [${evens.join(", ")}]\n`;

  // find
  let found = numbers.find((num) => num > 3);
  result += `find (>3): ${found}\n`;

  // reduce
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  result += `reduce (ჯამი): ${sum}\n`;

  // forEach example
  result += `forEach გამოტანა:\n`;
  let forEachResult = [];
  numbers.forEach((num, index) => {
    forEachResult.push(`  [${index}]: ${num}`);
  });
  result += forEachResult.join("\n");

  output.textContent = result;
}

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Add some interactive hover effects
document.querySelectorAll(".run-button").forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)";
    this.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  });

  button.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "none";
  });
});

// Add syntax highlighting effect to code blocks
document.querySelectorAll(".code-block").forEach((block) => {
  block.addEventListener("mouseenter", function () {
    this.style.boxShadow = "0 0 20px rgba(90, 103, 216, 0.3)";
  });

  block.addEventListener("mouseleave", function () {
    this.style.boxShadow = "none";
  });
});

// Add loading animation to output areas
function showLoading(outputId) {
  const output = document.getElementById(outputId);
  output.textContent = "იტვირთება...";
  setTimeout(() => {
    // Remove loading text before actual function runs
    output.textContent = "";
  }, 200);
}

// Welcome message
console.log("🚀 JavaScript მენტორული სესია ჩაიტვირთა!");
console.log("გამოიყენეთ ინტერაქტიული ღილაკები მაგალითების სანახავად!");
