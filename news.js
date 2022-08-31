//get ISS location

fetch('https://api.wheretheiss.at/v1/satellites/25544')
.then((response) => response.json())
.then((data) => {
    const lat = data.latitude
    const long = data.longitude

    //get map location of ISS
    fetch(`https://api.wheretheiss.at/v1/coordinates/${lat},${long}`)
        .then((response) => response.json())
        .then((data) => console.log(data.timezone_id))

        const mapDiv = document.getElementById('iss-map')
        mapDiv.innerHTML = `<iframe width="450" height="250" frameborder="0" style="border:0" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAn83bxe5QYDP3mdvH20DLN2f1Xmso07A4&q=${lat},${long}&zoom=4&maptype=satellite" allowfullscreen/>`
})

//get people currently on the ISS
fetch('https://api.open-notify.org/astros.json')
.then((response) => response.json())
.then((data) => {
    
    const people = data.people.filter((member) => member.craft === 'ISS')
    const crew = people.map((member) => member.name).join(", ")
    
    //console.log(crew)
    document.getElementById('crew').innerText = `The International Space Station travels at 17,500 miles per hour and orbits the Earth every 90 minutes. Currently ther are 7 crew members aboard the ISS: ${crew}.`
})

