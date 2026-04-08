export const widgetStats = {
  createCount: 0,
  updateCalls: [],
  destroyCount: 0,
};

export function resetWidgetStats() {
  widgetStats.createCount = 0;
  widgetStats.updateCalls = [];
  widgetStats.destroyCount = 0;
}

export function createWidget(element, value) {
  widgetStats.createCount += 1;
  widgetStats.updateCalls.push(value);
  element.textContent = 'Widget: ' + value;

  return {
    update(nextValue) {
      widgetStats.updateCalls.push(nextValue);
      element.textContent = 'Widget: ' + nextValue;
    },
    destroy() {
      widgetStats.destroyCount += 1;
      element.textContent = 'Widget destroyed';
    },
  };
}
