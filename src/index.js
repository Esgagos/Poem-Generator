const makeCall = (response) => {
  console.log(response);
};
const handleSubmit = (event) => {
  event.preventDefault();
  console.log("done");
  const poem = document.querySelector("#poem");
  new Typewriter(poem, {
    strings: "generating poem",
    autoStart: true,
    cursor: null,
    delay: 50,
  });

  //   poem.innerHTML = "generating poem";
  //   const wordInput = document.querySelector(".word-input");
  //   const context =
  //     "please provide a classic poem with the name of it and without any introduction to it";
  //   const prompt = `please generate a poem`;
  //   const apiKey = "6e77343taf210f7060a5ae1ab4ao9183";
  //   const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=?${apiKey}`;
  //   axios.get(apiUrl).then(makeCall);
};
const text = document.querySelector("#text-input");
text.addEventListener("submit", handleSubmit);
