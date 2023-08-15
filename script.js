window.addEventListener('Load', function() {


const container = document.getElementById('container');

//fetch using tradiotional syntax
// fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function (response) {
//     response.json().then(function (data) {
//         console.log(data);

//         for (let i=0; i < data.length; i++) {
//             let astronaut = data[i];
//             container.innerHTML += `
//             <div class="astronaut">
//             <div class="bio">
//             <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
//             <ul>
//             <li>Hours in space: ${astronaut.hoursInSpace}</li>
//             <li>Active: ${astronaut.active}</li>
//             <li>Skills:${astronaut.skills.join(", ")}</li>
//             </ul>
//             </div>
//             <img class="avatar src="${astronaut.picture}">
//             </div>
//             `;
//         }
//     })
// });

//Fetch with modren async /await syntax 
async function fetchAndDisplayAstronauts()  {
    let repsonse = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
    let data = await Response.json();

    for (let i=0; i < data.length; i++) {
        let astronaut = data[i];
        container.innerHTML += `
        <div class="astronaut">
        <div class="bio">
        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
        <ul>
        <li>Hours in space: ${astronaut.hoursInSpace}</li>
        <li>Active: ${astronaut.active}</li>
        <li>Skills:${astronaut.skills.join(", ")}</li>
        </ul>
        </div>
        <img class="avatar src="${astronaut.picture}">
        </div>
        `;
    }
}


fetchAndDisplayAstronauts();

});