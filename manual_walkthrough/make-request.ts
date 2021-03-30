const [url] = Deno.args
const response = await fetch(url)

const body = new Uint8Array(await response.arrayBuffer())
Deno.stdout.write(body)
