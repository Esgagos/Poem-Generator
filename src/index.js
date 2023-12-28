const makeCall = (response) => {
  console.log(response);

  const poem = document.querySelector("#poem");
  new Typewriter(poem, {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
};
const handleSubmit = (event) => {
  event.preventDefault();
  console.log("done");
  const poem = document.querySelector("#poem");
  poem.innerHTML = "<div class='blink'>Generating poem... 🙄</div>";
  const wordInput = document.querySelector(".word-input");
  const prompt = `generate a poem with ${wordInput.value}`;
  const context =
    "please provide a classic short poem with its title in basic html. Don't provide any introduction at the begining of it. Please add the author of the poem AT THE END inside <em> tags";
  const apiKey = "6e77343taf210f7060a5ae1ab4ao9183";
  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(makeCall);
};
const text = document.querySelector("#text-input");
text.addEventListener("submit", handleSubmit);
