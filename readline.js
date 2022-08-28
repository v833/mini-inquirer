const readline = require('readline')

const rl = readline.createInterface({
  // 输入流
  input: process.stdin,
  output: process.stdout
})

rl.question('your name: ', (answer) => {
  console.log(answer)
  rl.close()
})
