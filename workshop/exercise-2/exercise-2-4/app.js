// Preset values
const FROGS = 4;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

const track = document.getElementById("track");

for (l = 1; l <= FROGS; l++) {
    // 2. Create li    
    let lane = document.createElement('li');
    track.appendChild(lane);
    let span = document.createElement('span');
    span.innerHTML = l;
    // 3. Create span and add it to the li
    lane.appendChild(span);
    // 4. Assign an id to each lane
    lane.id = `lane-${l}`;


}

// 2

let racers = [];

for (count = 0; count < FROGS; count++) {
    let frogArray = frogStable[count];
    racers.push(frogArray);
}

// console.log(racers);

// 3

racers.forEach(function (racer, id) {
    // create frog in span element
    const newFrog = document.createElement("span");
    // Add number to frog
    newFrog.innerText = `${racer.number}`;
    // apply class of frog
    newFrog.classList.add("frog");
    // apply color to frog
    newFrog.style.background = racer.color;
    // append frog to lane id
    document.getElementById(`lane-${id + 1}`).appendChild(newFrog);
    // set  progress to 0 by adding to array
    racers[id].progress = 0;
    // assign frog lane to lane id
    racers[id].lane = `lane-${id + 1}`;
    // create a progress element
    let progress = document.createElement("span");
    // set progress id according to name 
    progress.id = racers[id].name;
    // append progress to each lane
    document.getElementById(`lane-${id + 1}`).appendChild(progress);
});

// 2.4

// Create a function called `racingFrog`. It will accept one parameter. This parameter will be a frog object from the racers array.

function racingFrog(racer) {
    // make progress variable
    let progress = racer.progress;
    //establish width of track
    let trackWidth = track.offsetWidth;

    // establish a randomDistance 
    let randomDistance = Math.random() * 100 / trackWidth * 60;


    // make the frogs bounce using setInterval, 
    const bounce = setInterval(function () {
        progress += randomDistance;
        if (progress > 100) {
            progress = 100.1;
            console.log(`${racer.name} has finished!`);
            clearInterval(bounce);
        };

        document.querySelector(`#${racer.lane} .frog`).style.left = `${progress}%`;
    }, Math.random() * 1000);


}

// startRace forEach racer 

racers.forEach(function (racer) {
    racingFrog(racer);
});
