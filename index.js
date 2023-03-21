function receivesAFunction(callback) {
  callback();
}

function callback() {
  console.log("Function receivesAFunction");
}

function returnsANamedFunction() {
  return function coffee() {
    console.log("Drinking a cup a coffee");
  };
}

function returnsAnAnonymousFunction() {
  return () => console.log("Drink a cup a coffee");
}
