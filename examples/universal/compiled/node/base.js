// Content below is autogenerated by ojster template engine
// usually there is no reason to edit it manually

var inherits = require('util').inherits;
// universal templates must provide both aliases and fully qualified names

// @require also needs path to library for node
var ojster = require('../../../..'); // normally path will be just 'ojster', fullName = alias if not explicitly specified
// example of handling subpath and subname
var SomeClass = require('../../../somemodule').sub.SomeClass;

var Base = function() {
	ojster.Template.apply(this, arguments);
};
inherits(Base, ojster.Template);


// aliases can be used only if you are planning to compile with goog.scope enabled
// else there is no way to introduce them without poluting global

// variables defined outside of blocks will become global if goog.scope is not enabled
// the same is true for functions

// on the other hand, fully qualified names also cannot be used,
// because node knows nothing about them

// so, enabling goog.scope can sometimes be the only way to get trully universal template


Base.prototype.renderBlockMain = function() { // @24:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<!DOCTYPE HTML><html><head>'
	); // @28:1
	self.renderBlockMeta();
	self.writer.write(
		'<title>'
	); // @29:8
	self.renderBlockTitle();
	self.writer.write(
		'</title>'
	); // @30:1
	self.renderBlockCss();
	self.renderBlockScript();
	self.writer.write(
		'</head><body>'
	); // @33:7
	self.renderBlockContent();
	self.writer.write(
		'</body></html>'
	);
}; // @35:1

Base.prototype.renderBlockMeta = function() { // @28:1
	var self = this;
	var d = this.data, vars = this.vars;
};

Base.prototype.renderBlockTitle = function() { // @29:8
	var self = this;
	var d = this.data, vars = this.vars;
};

Base.prototype.renderBlockCss = function() { // @30:1
	var self = this;
	var d = this.data, vars = this.vars;
};

Base.prototype.renderBlockScript = function() { // @31:1
	var self = this;
	var d = this.data, vars = this.vars;
};

Base.prototype.renderBlockContent = function() { // @33:7
	var self = this;
	var d = this.data, vars = this.vars;
};

module.exports = Base;
