// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

const track = document.getElementById("track");

for (l = 1; l < FROGS; l++) {
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

for (count = 0; count <= FROGS; count++) {
    let frogArray = frogStable[count];
    racers.push(frogArray);
}

console.log(racers);





