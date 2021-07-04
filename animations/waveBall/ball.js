export default class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius;
    this.vx = speed;
    this.vy = 0;
    this.fixedY = stageHeight / 2;

    this.max = Math.random() * 100 + 150;

    const diameter = radius;
    this.x = diameter + (Math.random() * stageWidth - diameter);
    this.y = diameter + (Math.random() * stageHeight - diameter);
  }

  draw(ctx, stageWidth, stageHeight) {
    this.x += this.vx;
    this.vy += 0.1;
    this.y = this.fixedY + Math.sin(this.vy) * this.max;

    this.bounceWindow(stageWidth, stageHeight);

    ctx.beginPath();
    ctx.fillStyle = 'pink';

    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  bounceWindow(stageWidth, stageHeight) {
    const minX = this.radius;
    const maxX = stageWidth - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    }
  }
}
