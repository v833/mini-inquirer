function stepRead(callback) {
  function onKeypress(s) {
    output.write(s)
    line += s
    switch (s) {
      case '\r':
        input.pause()
        callback(line)
        break
    }
  }
  const input = process.stdin
  let output = process.stdout
  let line = ''

  emitKeypressEvents(input)
  input.on('keypress', onKeypress)
  input.setRawMode(true)
  input.resume()
}

function emitKeypressEvents(stream) {
  function onData(chunk) {
    g.next(chunk.toString())
  }
  const g = emitKeys(stream)
  g.next()

  stream.on('data', onData)
}

function* emitKeys(stream) {
  while (true) {
    let ch = yield
    stream.emit('keypress', ch)
  }
}

stepRead(function (line) {
  console.log('result: ', line)
})
