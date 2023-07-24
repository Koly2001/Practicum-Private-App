const express = require('express');
const axios = require('axios');
const app = express();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');


// Configuration du proxy pour rediriger les requêtes vers le domaine de HubSpot
const hubspotProxy = createProxyMiddleware({
  target: 'https://app.hubspot.com', // Remplacez par l'URL du domaine de HubSpot
  changeOrigin: true,
});

// Montez le proxy sur le chemin que vous souhaitez utiliser pour appeler l'API de HubSpot
app.use('/hubspot-api', hubspotProxy);

// Définissez vos autres routes ici
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Le serveur est en écoute sur le port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  const PORT = 3000; 

  app.listen(PORT, () => {
    console.log(`Le serveur est en écoute sur le port ${PORT}`);
  });
    