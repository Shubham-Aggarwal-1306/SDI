// routes/api/events.js
const bodyParser = require("body-parser");
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

// Load event model
const event = require('../../models/event');

// @route GET api/events/test
// @description tests events route
// @access Public
app.get('/test', (req, res) => res.send('event route testing!'));

// @route GET api/events
// @description Get all events
// @access Public
app.get('/', (req, res) => {
  event.find()
    .then(events => res.json(events))
    .catch(err => res.status(404).json({ noeventsfound: 'No events found' }));
});

// @route GET api/events/:id
// @description Get single event by id
// @access Public
app.get('/:name', (req, res) => {
  event.findOne({name: req.params.name})
    .then(event => res.json(event))
    .catch(err => res.status(404).json({ noeventfound: 'No event found' }));
});

// @route GET api/events
// @description add/save event
// @access Public
app.post('/', (req, res) => {
  event.create(req.body)
    .then(event => res.json({ msg: 'event added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this event' }));
});

// @route GET api/events/:id
// @description Update event
// @access Public
app.put('/:id', (req, res) => {
  event.findByIdAndUpdate(req.params.id, req.body)
    .then(event => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/events/:id
// @description Delete event by id
// @access Public
app.delete('/:id', (req, res) => {
  event.findByIdAndRemove(req.params.id, req.body)
    .then(event => res.json({ mgs: 'event entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a event' }));
});

module.exports = app;