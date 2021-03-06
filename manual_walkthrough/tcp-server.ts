const hostname = '0.0.0.0'
const port = 8000

const listener = Deno.listen({ hostname, port })

console.log(`Listening on ${hostname}:${port}`)

for await(const conn of listener) {
  Deno.copy(conn, Deno.stdout)
}
