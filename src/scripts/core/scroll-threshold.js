import srraf from 'srraf'

export default function threshold ({ pxOffset, vhOffset, below, above } = options = {}) {
  return srraf((...args) => {
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
      offset = 0;
    }

    if (py < offset && y >= offset) {
      below && below(...args)
    } else if (py >= offset && y < offset) {
      above && above(...args)
    }
  })
}