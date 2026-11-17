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

// home route
app.get('/', (req, res) => {
  // set active for navigation
  const state = { home: true };
  // set specifics for <head>
  const head = { title: 'Home - Biomes' };
  res.render('index', { state, head });
  // send this to terminal where node app is running
  console.log('home');
});

// about route
app.get('/about', (req, res) => {
  // set active for navigation
  const state = { about: true };
  // set specifics for <head>
  const head = { title: 'About - Biomes' };
  res.render('about', { state, head });
  // send this to terminal where node app is running
  console.log('about');
});

// arctic route
app.get('/arctic', (req, res) => {
  // set active for navigation
  const state = {};
  // set specifics for <head>
  const head = { title: 'Arctic - Biomes' };
  res.render('arctic', { state, head });
  // send this to terminal where node app is running
  console.log('arctic');
});

// responsiveexample route
app.get('/responsiveexample', (req, res) => {
  // set active for navigation
  const state = { responsive: true };
  // set specifics for <head>
  const head = { title: 'Natural Wonders - Biomes' };
  res.render('responsiveexample', { state, head });
  // send this to terminal where node app is running
  console.log('responsiveexample');
});

// bsform route
app.get('/bsform', (req, res) => {
  // set active for navigation
  const state = { bsform: true };
  // set specifics for <head>
  const head = { title: 'Holiday Booking Form - Biomes', bootstrap: true };
  res.render('bootstrapform', { state, head });
  // send this to terminal where node app is running
  console.log('bsform');
});

// contact route
app.get('/contact', (req, res) => {
  // set active for navigation
  const state = {};
  // set specifics for <head>
  const head = { title: 'Contact - Biomes' };
  res.render('contact', { state, head });
  // send this to terminal where node app is running
  console.log('contact');
});

// desert route
app.get('/desert', (req, res) => {
  // set active for navigation
  const state = {};
  // set specifics for <head>
  const head = { title: 'Desert - Biomes' };
  res.render('desert', { state, head });
  // send this to terminal where node app is running
  console.log('desert');
});

// learnmore route
app.get('/learnmore', (req, res) => {
  // set active for navigation
  const state = { about: true };
  // set specifics for <head>
  const head = { title: 'Learn more - Biomes' };
  res.render('learnmore', { state, head });
  // send this to terminal where node app is running
  console.log('learnmore');
});

// map route
app.get('/map', (req, res) => {
  // set active for navigation
  const state = { map: true };
  // set specifics for <head>
  const head = { title: 'Map - Biomes' };
  res.render('map', { state, head });
  // send this to terminal where node app is running
  console.log('map');
});

// newspaper route
app.get('/newspaper', (req, res) => {
  // set active for navigation
  const state = {};
  // set specifics for <head>
  const head = { title: 'Newspaper - Biomes' };
  res.render('newspaper', { state, head });
  // send this to terminal where node app is running
  console.log('newspaper');
});

// ocean route
app.get('/ocean', (req, res) => {
  // set active for navigation
  const state = {};
  // set specifics for <head>
  const head = { title: 'Ocean - Biomes' };
  res.render('ocean', { state, head });
  // send this to terminal where node app is running
  console.log('ocean');
});

// savanna route
app.get('/savanna', (req, res) => {
  // set active for navigation
  const state = {};
  // set specifics for <head>
  const head = { title: 'Savanna - Biomes' };
  res.render('savanna', { state, head });
  // send this to terminal where node app is running
  console.log('savanna');
});

// species route
app.get('/species', (req, res) => {
  // set active for navigation
  const state = { species: true };
  // set specifics for <head>
  const head = { title: 'Species - Biomes' };
  res.render('species', { state, head });
  // send this to terminal where node app is running
  console.log('species');
});

// team route
app.get('/team', (req, res) => {
  // set active for navigation
  const state = {};
  // set specifics for <head>
  const head = { title: 'Our team - Biomes' };
  res.render('team', { state, head });
  // send this to terminal where node app is running
  console.log('team');
});

// tropicalrainforest route
app.get('/tropicalrainforest', (req, res) => {
  // set active for navigation
  const state = {};
  // set specifics for <head>
  const head = { title: 'Tropical rainforest - Biomes' };
  res.render('tropicalrainforest', { state, head });
  // send this to terminal where node app is running
  console.log('tropicalrainforest');
});


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});