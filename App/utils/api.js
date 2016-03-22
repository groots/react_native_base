var api = {
	getSearchData(searchterm){
		searchterm = searchterm.toLowerCase().trim();
		var url = `http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2015&week=1&format=json`;
	} 
};

module.exports = api;