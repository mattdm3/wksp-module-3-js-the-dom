document.head.innerHTML = '<link href="https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display&display=swap" rel="stylesheet" />';

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

// BODY STYLING
body.style.background = "rgba(246,187,33, .8) url(./images/yellow-umbrella.jpg) no-repeat";
body.style.backgroundSize = "100%";
body.style.fontFamily = 'Playfair Display';

// MAIN STYLING
main.style.background = "#fafafa";
main.style.borderRadius = "4px";
main.style.boxShadow = "8px 10px 25px 0 rgba(128, 128, 128, .44)";
main.style.minWidth = "320px";
main.style.maxWidth = "600px";
main.style.margin = "36px";
main.style.padding = "4px 32px 32px";

// h1 h2 styling
headingText.style.fontFamily = "Open Sans";
subheading.style.fontFamily = "Open Sans";
headingText.style.textAlign = "center";
subheading.style.textAlign = "left";

// Paragraph tags

pTag.style.fontSize = "17px";
pTag2.style.fontSize = "17px";
pTag3.style.fontSize = "17px";
pTag4.style.fontSize = "17px";

// IMAGE

img.style.border = "#fafafa";
img.style.borderRadius = "4px";
img.style.boxShadow = "4px 4px 14px rgba(128, 128, 128, .4)";
img.style.width = "100%";

// ANCHOR

anchor.style.color = "#174E7C";
anchor.style.display = "block";
anchor.style.weigth = "700";
anchor.style.marginTop = "auto";
anchor.style.textAlign = "right";
anchor.style.textDecoration = "none";



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


