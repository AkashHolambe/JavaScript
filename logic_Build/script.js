document.addEventListener("DOMContentLoaded", function () {
  const rectangle = document.getElementById("rectangle");
  const maxX = window.innerWidth - rectangle.clientWidth;

  rectangle.addEventListener("mouseover", function () {
    moveRectangle();
  });

  function moveRectangle() {
    // Determine whether to move to the left or right side
    const moveToLeft = rectangle.offsetLeft < window.innerWidth / 2;
    const newX = moveToLeft ? maxX : 300;

    // Move the rectangle to the new position
    rectangle.style.left = newX + "px";
  }
});
