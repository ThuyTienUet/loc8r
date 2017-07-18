/* Get 'about' page */
module.exports.about = function (req, res){
	res.render('generic-text', {
		title: "About Loc8r",
		content: 'Loc8r was creat to help people find places to sit sown and get a bit of work don. \n\nLorem ip sum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan. Nullam sit amet interdum magna. Morbi quis faucibus nisi. Vestibulum mollis purus quis eros adipiscing tristique. Proin posuare semper tells, id placerat augue dapibus ornare, Aenean leo metus, tempus in nisl eget, accumsan interdum dui. Pellentesque sollicitudin volutpat ullamcorper. '
	});
};

module.exports.angularApp = function(req, res) {
	res.render('layout', {title: 'Loc8r'});
};
