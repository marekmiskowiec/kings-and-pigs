window.addEventListener("keydown", (e) => {
  switch (e.key) {
    // jump
    case "w":
      if (player.velocity.y === 0) player.velocity.y = -20;
      break;
    // move to the left
    case "a":
      keys.a.pressed = true;
      break;
    // move to the right
    case "d":
      keys.d.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    // move to the left
    case "a":
      keys.a.pressed = false;
      break;
    // move to the right
    case "d":
      keys.d.pressed = false;
      break;
  }
});
