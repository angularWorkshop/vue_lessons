export class MockIntersectionObserver {
  static lastInstance = null;

  constructor(callback) {
    this.callback = callback;
    this.observed = [];
    this.disconnected = false;
    MockIntersectionObserver.lastInstance = this;
  }

  observe(element) {
    this.observed.push(element);
  }

  disconnect() {
    this.disconnected = true;
  }

  emit(element, isIntersecting) {
    this.callback([{ target: element, isIntersecting }]);
  }
}
