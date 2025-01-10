class Player {
  constructor() {
    this.character = {
      width: 100,
      height: 100,
      color: "red",
      // starting position
      position: {
        x: 100,
        y: 100,
      },
      // starting velocity
      velocity: {
        x: 0,
        y: 0,
      },
    };

    // bottom left corner position
    this.sides = {
      bottom: this.character.position.y + this.character.height,
    };

    this.gravity = 1;
  }

  draw() {
    c.fillStyle = this.character.color;
    c.fillRect(
      this.character.position.x,
      this.character.position.y,
      this.character.width,
      this.character.height
    );
  }

  update() {
    this.character.position.x += this.character.velocity.x;
    this.character.position.y += this.character.velocity.y;
    this.sides.bottom = this.character.position.y + this.character.height;

    // above bottom of canvas
    if (this.sides.bottom + this.character.velocity.y < canvas.height) {
      this.character.velocity.y += this.gravity;
    } else this.character.velocity.y = 0;
  }
}
