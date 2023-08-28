window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("btn");
  const output = document.getElementById("output");

  btn.addEventListener("click", function () {
    root.style.backgroundColor = generateHexColor();
    output.value = generateHexColor();
  });
}

function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

console.log(generateHexColor());
