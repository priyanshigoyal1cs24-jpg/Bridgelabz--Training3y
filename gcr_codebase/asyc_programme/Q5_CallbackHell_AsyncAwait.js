function wait(message, callback) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, 1000);
}

function callbackPipeline() {
  wait("Design", () => {
    wait("Build", () => {
      wait("Test", () => {
        wait("Deploy", () => {
          wait("Celebrate", () => console.log("Callback pipeline completed"));
        });
      });
    });
  });
}

function stage(message) {
  return new Promise(resolve => setTimeout(() => {
    console.log(message);
    resolve();
  }, 1000));
}

async function asyncPipeline() {
  await stage("Design");
  await stage("Build");
  await stage("Test");
  await stage("Deploy");
  await stage("Celebrate");
  console.log("Async pipeline completed");
}

callbackPipeline();
setTimeout(asyncPipeline, 6000);
