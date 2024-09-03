// Inicializa el mapa
const map = L.map('map').setView([13.7942, -88.8965], 8); // Coordenadas del centro de El Salvador

// Añade una capa de mapa base con estilo oscuro
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Datos de los centros turísticos
const touristSpots = [
    {
        name: "Playa El Tunco",
        coords: [13.492996538325523, -89.38147643500668],
        image: "https://ipanelsalvador.wordpress.com/wp-content/uploads/2012/09/eltiunco.jpg",
        description: "Playa famosa por sus olas ideales para surfistas.",
        address: "Playa El Tunco, El Salvador"
    },
    {
        name: "Centro Histórico de San Salvador",
        coords: [13.695846231736027, -89.19677879324728],
        image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Plaza-barrios-san-salvador.png",
        description: "Zona histórica con monumentos emblemáticos y arquitectura colonial.",
        address: "San Salvador, El Salvador"
    },
    {
        name: "Surf City",
        coords: [13.493192264029512, -89.38147608655342], // Coordenadas aproximadas del centro de Surf City
        image: "https://elsalvador.travel/system/wp-content/uploads/2023/03/Sunset-Park01.jpg",
        description: "Una serie de playas famosas por sus olas ideales para surfistas.",
        address: "La Libertad, El Salvador"
    },
    {
        name: "Tazumal",
        coords: [13.979701877972957, -89.67421755735893],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99g61wPeAb9GrcoZjlIR-0OEoN01ZgvvoWA&s",
        description: "Un sitio arqueológico con impresionantes ruinas mayas.",
        address: "Chalchuapa, El Salvador"
    },
    {
        name: "El Boquerón",
        coords: [13.736645755912368, -89.28711279880069],
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/77/96/39.jpg",
        description: "Un parque nacional con un cráter volcánico impresionante.",
        address: "San Salvador, El Salvador"
    },
    {
        name: "Lago de Coatepeque",
        coords: [13.861764230553785, -89.54502759010914],
        image: "hhttps://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/8c/aa/3e/lago-de-coatepeque.jpg?w=1200&h=-1&s=1",
        description: "Un hermoso lago de cráter con aguas turquesas.",
        address: "Coatepeque, El Salvador"
    },
    {
        name: "Divino Salvador del Mundo",
        coords: [13.70167001720474, -89.22457112084045],
        image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/79000/79652-Monumento-Al-Salvador-Del-Mundo.jpg",
        description: "Un monumento emblemático en el centro de San Salvador.",
        address: "Plaza Salvador del Mundo, San Salvador, El Salvador"
    },
    {
        name: "Cascadas Los Tercios",
        coords: [13.939121251711903, -89.01315939853055],
        image: "https://www.todoturismo.sv/custom/domain_1/image_files/sitemgr_photo_1631.jpg",
        description: "Cascadas impresionantes con formaciones rocosas únicas.",
        address: "Suchitoto, El Salvador"
    },
    {
        name: "Lago de Suchitoto",
        coords: [14.087365616988171, -89.12273269706957],
        image: "https://static.elmundo.sv/wp-content/uploads/2020/02/Lago-de-Suchitlan.jpg",
        description: "Un sereno lago rodeado de colinas verdes, ideal para paseos en lancha y observación de aves.",
        address: "Suchitoto, El Salvador"
    },
    {
        name: "Peñón de Comasagua",
        coords: [13.595267365584666, -89.37600911043505],
        image: "https://elsalvador.travel/system/wp-content/uploads/2022/12/DestinationPenonComasagua01.jpg",
        description: "Una formación rocosa imponente con vistas panorámicas del paisaje circundante.",
        address: "Comasagua, El Salvador"
    },
    {
        name: "Sitio Arqueológico San Andrés",
        coords: [13.809329400849059, -89.38943235414841],
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/e3/10/35/main-area.jpg?w=600&h=500&s=1",
        description: "Ruinas mayas con estructuras ceremoniales y arquitectura prehispánica.",
        address: "San Andrés, El Salvador"
    }
];

// Añade marcadores al mapa
touristSpots.forEach(spot => {
    const marker = L.marker(spot.coords).addTo(map);

    marker.bindPopup(`
        <div style="text-align:center;">
            <b>${spot.name}</b><br>
            <img src="${spot.image}" alt="${spot.name}" style="width:100%; border-radius: 8px; border: 2px solid #333;"><br>
            ${spot.description}
        </div>
    `).on('click', () => {
        document.getElementById('description').innerText = spot.description;
        document.getElementById('image').src = spot.image;
        document.getElementById('directions').href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(spot.address)}`;
    });
});
