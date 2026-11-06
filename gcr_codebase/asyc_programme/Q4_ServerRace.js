function serverResponse(server, seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(`${server} failed`);
      } else {
        resolve(`${server} responded`);
      }
    }, seconds * 1000);
  });
}

const serverA = serverResponse("Server A", 2);
const serverB = serverResponse("Server B", 3);

Promise.all([serverA, serverB])
  .then(() => console.log("Deployment completed for all servers"))
  .catch(error => console.error("Deployment failed:", error));

Promise.race([serverA, serverB])
  .then(response => console.log("Fastest response:", response))
  .catch(error => console.error("Race failed:", error));
