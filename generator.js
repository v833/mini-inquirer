function* test() {
  while (true) {
    const ch = yield
    console.log(ch)
  }
}

const t = test()
t.next()
t.next(5)
t.next(6)
// console.log(t.next(5))
