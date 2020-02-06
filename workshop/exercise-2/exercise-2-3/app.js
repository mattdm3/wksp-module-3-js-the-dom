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
    lane.id = `lane-${l}`


}

// 2

let racers = [];

for (count = 0; count <= FROGS; count++) {
    let frogArray = frogStable[count];
    racers.push(frogArray);
}

console.log(racers);

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
    console.log(progress);
    // append progress to each lane
    document.getElementById(`lane-${id + 1}`).appendChild(progress);
});

