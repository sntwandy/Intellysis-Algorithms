const $map = document.querySelector('#map');


const cities = [
    {
        cityName: 'New York',
        pointA: 100,
        pointB: 150,
    },
    {
        cityName: 'LA',
        pointA: 300,
        pointB: 350,
    },
    {
        cityName: 'Toronto',
        pointA: 500,
        pointB: 550,
    },
    {
        cityName: 'Rome',
        pointA: 700,
        pointB: 750,
    },
    {
        cityName: 'Santo Domingo',
        pointA: 900,
        pointB: 950,
    },
    {
        cityName: 'Boston',
        pointA: 1100,
        pointB: 1150,
    }
]



$map.addEventListener('click', event => {
    coordenatesFilter(event.screenX, event.screenY);
});


const coordenatesFilter = (pointA, pointB) => {
    for (let i = 0; i <= cities.length; i++) {
        if (pointA <= cities[i].pointA) {
            return alert(`City: ${cities[i].cityName}, Coordenates: ${cities[i].pointA} : ${cities[i].pointB}`);
        }
    }
};