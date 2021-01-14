const randomNum =  Math.floor((Math.random() * 8) + 1);
let quotes = [
  "I don't like sand. It's coarse and rough and irritting and it gets everywhere.",
  "I'm a person and my name is Annakin.",
  "Jedi business. Go back to your drinks.",
  "If Master Obi-Wan caught me doing this he'd be very grumpy.",
  "Love won't save you, Padme. Only my new powers can do that.",
  "I sense Count Dooku.",
  "Now THIS is podracing.",
  "I'll try spinning. That's a good trick.",
  "NOOOOoooooOOOOOOOOoooooooOOOOOOOoooo!"
];
const showElement = document.getElementById("quote");
showElement.innerHTML = quotes[randomNum];
