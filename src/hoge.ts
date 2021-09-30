export {}

interface User {
  id: number
  name: string
}

let lamp: User = {
  id: 1,
  name: 'lamp',
}

console.log(lamp)

// interfaceはJSのオブジェクトに独自型を定義するための機能
