class Clock {

  constructor() {
    let date = new Date;
    this.hour = date.getHours();
    this.min = date.getMinutes();
    this.sec = date.getSeconds();

    this.printTime();

    // window.setInterval( () => { console.log(this);} , 1000);
    setInterval( this._tick.bind(this), 1000);
  }

  printTime() {
    let h = this.hour;
    let m = this.min;
    let s = this.sec;

    if (this.hour < 10) {
      h = "0" + this.hour;
    }
    if (this.min < 10) {
      m = "0" + this.min;
    }
    if (this.sec < 10) {
      s = "0" + this.sec;
    }

    console.log(`${h}:${m}:${s}`);
  }

  _tick() {
    console.log(this);
    this.sec += 1;

    if (this.sec === 60) {
      this.sec = 0;
      this.min += 1;
    }

    if (this.min === 60) {
      this.min = 0;
      this.hour += 1;
    }

    if (this.hour === 24) {
      this.hour = 0;
    }

    this.printTime();
  }
}
