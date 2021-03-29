const [arg1, arg2] = Deno.args
const n1 = Number(arg1)
const n2 = Number(arg2)

if(!n1 || !n2) {
  console.error('%cArguments must be numbers', 'color: #e33')
} else {
  console.log(n1 + n2)
}
