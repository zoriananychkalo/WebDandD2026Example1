// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views',  'views');


// where to find static files - css, images, js
// this needs to be uncommented so that the css file can be found and used in the layout.hbs file
app.use(express.static('public'));

const pages = {
  '/': { view: 'index', title: 'Biomes', state: { home: true } },
  '/index.html': { view: 'index', title: 'Biomes', state: { home: true } },
  '/about.html': { view: 'about', title: 'About', state: { about: true } },
  '/arctic.html': { view: 'arctic', title: 'Arctic' },
  '/contact.html': { view: 'contact', title: 'Contact' },
  '/desert.html': { view: 'desert', title: 'Desert' },
  '/learnmore.html': { view: 'learnmore', title: 'Learn more', state: { about: true } },
  '/map.html': { view: 'map', title: 'Map', state: { map: true } },
  '/newspaper.html': { view: 'newspaper', title: 'Newspaper' },
  '/ocean.html': { view: 'ocean', title: 'Ocean' },
  '/savanna.html': { view: 'savanna', title: 'Savanna' },
  '/species.html': { view: 'species', title: 'Species', state: { species: true } },
  '/team.html': { view: 'team', title: 'Our team' },
  '/tropicalrainforest.html': { view: 'tropicalrainforest', title: 'Tropical rainforest' },
};

for (const [route, page] of Object.entries(pages)) {
  app.get(route, (req, res) => {
    res.render(page.view, {
      head: { title: page.title },
      state: page.state || {},
    });
  });
}


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});