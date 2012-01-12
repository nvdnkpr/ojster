var inherits = require('util').inherits;

var core = require('./core');

var CommandParser = core.CommandParser;
var regExps = core.regExps;
var tokens = require('../tokens');


var RequireCommandParser = function(ctx, commandName, commandStr) {
	CommandParser.call(this, ctx, commandName, commandStr);
};
inherits(RequireCommandParser, CommandParser);

RequireCommandParser.prototype.commandRegExp = RegExp([
	'^\\s*(((',
		regExps.alias,
	')(\\s*=\\s*((',
		regExps.path,
	')(\\.(',
		regExps.subpath,
	'))?))?(\\s+(',
		regExps.fullName,
	')(\.\.(',
		regExps.subName,
	'))?)?)|(',
		regExps.fullName,
	'))\\s*$'
].join(''));

RequireCommandParser.prototype.parseMatched = function (match) {
	var alias = match[3];
	var pathOrig = match[6], path = pathOrig;
	var subpath = match[11];
	var fullNameOrig = match[14] || match[19], fullName = fullNameOrig;
	var subname = match[17];

	if (fullName == null && pathOrig == null)
	{
		fullName = alias;
	}

	if (path == null && alias != null && fullNameOrig == null)
	{
		path = ("'" + alias + "'");
	}

	return new tokens.Require(this.ctx, alias, path, subpath, fullName, subname);
};


module.exports = RequireCommandParser;