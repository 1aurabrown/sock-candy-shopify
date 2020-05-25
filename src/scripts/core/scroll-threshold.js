import srraf from 'srraf'

export default function threshold ({ pxOffset, vhOffset, below, above } = options = {}) {
  var firstRun = true
  const scroller = srraf((...args) => {
    const [ { py, y, vh } ] = args
    var offset;

    if (pxOffset !== undefined) {
      if (typeof pxOffset === "function") {
        offset = pxOffset(...args);
      } else {
        offset = pxOffset;
      }
    } else if (vhOffset !== undefined) {
      if (typeof vhOffset === "function") {
        offset = vhOffset(...args) * vh;
      } else {
        offset = vhOffset * vh;
      }
    } else {
      offset = 1;
    }

    if (y >= offset && (py < offset || firstRun)) {
      below && below(...args)
    } else if (y < offset && (py >= offset || firstRun)) {
      above && above(...args)
    }
    firstRun = false
  })
  scroller.update()
  return scroller
}