class Generator {
  constructor() {}

  createInstance() {
    if (!this.instance) {
      this.instance = new Generator();
    }
    return this.instance;
  }

  generate() {
    this.fillRow();
  }

  fillRow() {}
}

new Generator();
