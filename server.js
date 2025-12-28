const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Get the host from request
app.get('/', (req, res) => {
  const host = req.hostname;

  const services = [
    {
      name: 'Jellyfin',
      port: 8096,
      color: '#00A4DC',
      description: 'Media Server',
    },
    {
      name: 'Sonarr',
      port: 8989,
      color: '#35C5F4',
      description: 'TV Series Management',
    },
    {
      name: 'Radarr',
      port: 7878,
      color: '#FFC230',
      description: 'Movie Management',
    },
    {
      name: 'Transmission',
      port: 9091,
      color: '#DF2020',
      description: 'Torrent Client',
    },
  ];

  res.render('index', {
    host,
    services,
    redirectPort: 8096,
    redirectDelay: 5,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
