var inherits = require('util').inherits;

var core = require('./core');

var CommandParser = core.CommandParser;
var regExps = core.regExps;
var tokens = require('../tokens');


var InsertCommandParser = function(ctx, commandName, commandStr) {
	CommandParser.call(this, ctx, commandName, commandStr);
};
inherits(InsertCommandParser, CommandParser);

InsertCommandParser.prototype.commandRegExp = RegExp([
	'^\\s*(',
		regExps.fullName,
	')(\\s*\\((.*)?\\))?\\s*$'
].join(''));

InsertCommandParser.prototype.parseMatched = function(match) {
	var templateName = match[1];
	var args = match[4];

	return new tokens.InsertTemplate(this.ctx, templateName, args);
};


module.exports = InsertCommandParser;