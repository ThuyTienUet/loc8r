/*Get 'home' page */

module.exports.homelist = function(req, res){
	res.render('locations-list', {
		title: 'Loc8r - find a place to work with wifi',
	    pageHeader: {
	    	title: 'Loc8r',
	    	strapline: 'Find places to work with wifi near you!'
	    },
	    sidebar:"Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
	    locations: [
	      {
	        name : 'Starcups',
	        address: '125 Hight Street, Reading, RG6 1 PS',
	        rating: 3,
	        facilities: ['Hot drinks', 'Food', 'Premiumw wifi'],
	        distance: '100m'
	      },
	      {
	      	name : 'Cafe Hero',
	      	address : '125 Hight Street, Reading, RG6 1 PS',
	      	rating: 4,
	      	facilities: ['Hot drinks', 'Food', 'Premiumw wifi'],
	        distance: '200m'
	      },
	      {
	      	name : 'Burger Queen',
	      	address : '125 Hight Street, Reading, RG6 1 PS',
	      	rating: 2,
	      	facilities: ['Hot drinks', 'Food', 'Premiumw wifi'],
	        distance: '250m'
	      }]
	});

};

/*Get 'Location info' page */
module.exports.locationInfo = function(req, res){
	res.render('locations-info', {
		title: 'Starcups',
        pageHeader: {title: 'Startcups'},
        sidebar: {
        	context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
        	callToAction: 'Is you\'ve been and you like it - or if you don\'t - please leave areview to help other people just like you.'
        },
        location: 
        {
        	name: 'Startcups',
        	address: '125 Hight Street, Reading, RG6 1PS',
        	rating: 3,
        	facilities: ['Hot drinks', 'Food', 'Premiumw wifi'],
        	coords: {lat: 51.455041, lng: 0.9690884},
        	openingTimes: [
        	{
        		days: 'Monday-Friday',
        		opening: '7:00 am',
        		closing: '7:00.pm',
        		closed: false
        	},
        	{
        		days: 'Saturday',
        		opening: '8:00 am',
        		closing: '5:00 pm',
        		closed: false
        	},
        	{
        		days: 'Sunday',
        		closed: true,
        	}],
        	reviews: [
        	{
        		author: 'Simon Holmes',
        		rating: 5,
        		timestamp: '16 July 2013',
        		reviewText: 'What a great palse. i can\'t say enough good things about it.'
        	},
        	{
        		author: 'Charlie Chaplin',
        		rating: 3,
        		timestamp: '16 June 2013',
        		reviewText: 'It was okay. Coffee wasn\'t graet, but the wifi was fast.'
        	}]
        }
	 });
};

/*Get 'ADD review' page */
module.exports.addReview = function(req, res){
	res.render('locations-review-form', {
		title: 'Add review',
	    pageHeader: {title: 'Review Starcups'}
	});
};