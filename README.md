# Jellyfin Service Router

A simple Express.js application that provides a landing page with links to various media services.

## Features

- Auto-redirect to Jellyfin (port 8096) after 5 seconds
- Grid layout with service cards for:
  - Jellyfin (8096) - Media Server
  - Radarr (7878) - Movie Management
  - Transmission (9091) - Torrent Client
  - Sonarr (8989) - TV Series Management
- Dark theme with Jellyfin-inspired colors
- Fully customizable using EJS templates
- Responsive design

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

The server will start on port 80 by default. You can change this by setting the `PORT` environment variable:

```bash
PORT=3000 npm start
```

## Customization

- Edit `views/index.ejs` to modify the HTML structure
- Edit `public/css/style.css` to customize the styling
- Edit `server.js` to add/remove services or change the redirect behavior
