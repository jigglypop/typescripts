const fetch = require("./fetch");

export const fetchJokes = <T>() =>
  new Promise<T>((resolve, reject) => {
    const jokeUrl = "https://api.icndb.com/jokes/random/5?limitTo=[nerdy]";
    fetch(jokeUrl)
      .then((res) => res.json())
      .then((fetchResult) => resolve(fetchResult as T))
      .catch((e: Error) => reject(e));
  });

fetchJokes()
  .then((result) => console.log(result))
  .catch((e) => console.log(e));

console.log("Hello");
