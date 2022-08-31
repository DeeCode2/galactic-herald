//get APOD
fetch('https://api.nasa.gov/planetary/apod?api_key=MYJtgbAeczTZJ2QgloJZO5Xi9siRsGzHsxwvbsJs')
  .then((response) => response.json())
  
  .then((data) => {
    //console.log(data.title)

    document.getElementById('apod__title').innerText = data.title;
    document.getElementById('apod__img').style.backgroundImage = `url(${data.hdurl})`;
    document.getElementById('apod__desc').innerText = data.explanation;
  });


  let date = new Date().toUTCString().slice(0, 16);
  document.getElementById('current__date').innerText = date

  //get ISS location

  fetch('https://api.wheretheiss.at/v1/satellites/25544')
    .then((response) => response.json())
    .then((data) => {
        const lat = data.latitude
        const long = data.longitude

        fetch(`https://api.wheretheiss.at/v1/coordinates/${lat},${long}`)
        .then((response) => response.json())
        .then((data) => console.log(data.timezone_id))
    })

  //get people currently on the ISS
  fetch('http://api.open-notify.org/astros.json')
    .then((response) => response.json())
    .then((data) => {
        const people = data.people.filter((member) => member.craft === 'ISS')
        const crew = people.map((member) => member.name)

    })