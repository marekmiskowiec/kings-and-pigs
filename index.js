const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

const player = new Player();

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  player.draw();
  player.update();
}

animate();

window.addEventListener("keydown", (e) => {
  console.log(e);

  switch (e.key) {
    // jump
    case "w":
      if (player.velocity.y === 0) player.velocity.y = -20;
      break;
    // move to the left
    case "a":
      console.log("pressed a");
      break;
    // move to the right
    case "d":
      console.log("pressed d");
      break;
  }
});
