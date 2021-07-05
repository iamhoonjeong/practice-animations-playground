import Ball from './ball';

export default class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    const ground = document.querySelector('.bounce-ball');
    ground.appendChild(this.canvas);

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 30, 15);
    this.ball2 = new Ball(this.stageWidth, this.stageHeight, 60, 10);

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
    this.ball2.draw(this.ctx, this.stageWidth, this.stageHeight);

    requestAnimationFrame(this.animate.bind(this));
  }
}
