import srraf from 'srraf'

export default function direction ({ up, down } = options = {}) {
  var dir
  var pdir

  return srraf((...args) => {
    const [ { py, y } ] = args

    pdir = dir

    if (py < y) {
      dir = 'down'
    } else if (y < py) {
      dir = 'up'
    }

    if (pdir != dir) {
      if (dir === 'up') {
        up && up(...args)
      } else if (dir === 'down') {
        down && down(...args)
      }
    }
  })
}