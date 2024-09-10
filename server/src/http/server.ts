import fastify from "fastify";

const app = fastify()

app.listen({ port: 3333 }, (err, address) => {
  console.log(`Server is running on ${address}`);
});
