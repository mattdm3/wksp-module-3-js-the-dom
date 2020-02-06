// document.head.innerHTML = '<link href="https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display&display=swap" rel="stylesheet" /><link rel="stylesheet" href="styles.css" type="text/css"/>';

// Add <link> to CSS
const head = document.getElementsByTagName('head');
const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
head[0].appendChild(stylesheet);

let body = document.querySelector("body");
let main = document.getElementById("main");
let headingText = document.createElement("heading");
let pTag = document.createElement("pTag");
let subheading = document.createElement("subheading");
let pTag2 = document.createElement("pTag2");
let img = document.createElement("img");
let pTag3 = document.createElement("pTag3");
let pTag4 = document.createElement("pTag4");
let anchor = document.createElement("anchor");

// ADD CLASSES 
headingText.classList.add("h1");
subheading.classList.add("h2");
pTag.classList.add("p");
pTag2.classList.add("p");
pTag3.classList.add("p");
pTag4.classList.add("p");
img.classList.add("img");
anchor.classList.add("a");



headingText.innerHTML = '<h1>The best How I Met Your Mother episode (according to fans)</h1>';
pTag.innerHTML = '<p>As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…</p>'
subheading.innerHTML = "<h2>The Slap Bet (Season 2, Episode 9)</h2>";
pTag2.innerHTML = "<p>IMDB Rating: 9.5</p>";
img.src = "./images/robin-sparkles.jpg";
pTag3.innerHTML = "<p>In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased. </p>"
pTag4.innerHTML = "<p>In the end, Robin’s big secret was revealed - she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”.The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times - available for all of eternity(horrible call Barney).</p >";
anchor.innerHTML = '<a href="https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/">Source</a>';

main.appendChild(headingText);
main.appendChild(pTag);
main.appendChild(subheading);
main.appendChild(pTag2);
main.appendChild(img);
main.appendChild(pTag3);
main.appendChild(pTag4);
main.appendChild(anchor);


