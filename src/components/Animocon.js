import mojs from 'mo-js';

function extend(a, b) {
  for (let key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

export class Animocon {
  constructor(el, options) {
    this.el = el;
    this.options = extend({}, this.options);
    extend(this.options, options);
    this.checked = false;
    this.timeline = new mojs.Timeline();
    for (let i = 0, len = this.options.tweens.length; i < len; i++) {
      this.timeline.add(this.options.tweens[i]);
    }
    console.log(this.el);
    this.el.addEventListener('click', () => {
      if (this.checked) {
        this.options.onUnCheck();
      } else {
        this.options.onCheck();
        this.timeline.replay();
      }
      this.checked = !this.checked;
    });
  }
}

Animocon.prototype.options = {
  tweens: [new mojs.Burst()],
  onCheck() {
    return false;
  },
  onUnCheck() {
    return false;
  }
};
