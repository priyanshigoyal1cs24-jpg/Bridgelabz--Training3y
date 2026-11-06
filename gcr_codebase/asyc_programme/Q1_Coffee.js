function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() < 0.2 ? reject("Water boiling failed") : resolve("Water boiled"), 1500);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() < 0.2 ? reject("Coffee brewing failed") : resolve("Coffee brewed"), 1500);
  });
}

function pourCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() < 0.2 ? reject("Pouring failed") : resolve("Coffee poured"), 1500);
  });
}

boilWater()
  .then(result => {
    console.log(result);
    return brewCoffee();
  })
  .then(result => {
    console.log(result);
    return pourCoffee();
  })
  .then(result => {
    console.log(result);
    console.log("Coffee ready for the team!");
  })
  .catch(error => console.error("Coffee process failed:", error));
