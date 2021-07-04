export default class Ball {
  constructor(x, y, radius, speed) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.radius = radius;
    this.speed = speed;
    this.cur = 0;
    this.max = Math.random() * 100 + 150;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'pink';

    this.cur += this.speed;
    this.y = this.fixedY + Math.tan(this.cur) * this.max;

    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

    ctx.fill();
  }

  resize(stageWidth) {
    this.x = stageWidth;
  }
}
