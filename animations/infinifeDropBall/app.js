import Ball from './ball';

export default class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    const ground = document.querySelector('.infinite-drop');
    ground.appendChild(this.canvas);

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.ball = new Ball(0, this.stageHeight / 2, 30, 0.03);
    this.ball2 = new Ball(0, this.stageHeight / 2, 45, 0.04);
    this.ball3 = new Ball(0, this.stageHeight / 2, 15, 0.02);

    this.ball.resize(this.stageWidth / 2);
    this.ball2.resize(this.stageWidth / 5);
    this.ball3.resize(this.stageWidth - this.stageWidth / 5);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.ball.draw(this.ctx);
    this.ball2.draw(this.ctx);
    this.ball3.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}
