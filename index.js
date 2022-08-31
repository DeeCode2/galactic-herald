//get APOD
fetch('https://api.nasa.gov/planetary/apod?api_key=MYJtgbAeczTZJ2QgloJZO5Xi9siRsGzHsxwvbsJs')
  .then((response) => response.json())
  
  .then((data) => {
    //console.log(data.title)

    document.getElementById('apod__title').innerText = data.title;
    var img = document.createElement('img');
    img.src = data.hdurl;
    img.alt = data.title;
    document.getElementById('apod__img').appendChild(img);
    //document.getElementById('apod__img').style.backgroundImage = `url(${data.hdurl})`;
    document.getElementById('apod__desc').innerText = data.explanation;
  });


  let date = new Date().toUTCString().slice(0, 16);
  document.getElementById('current__date').innerText = date

