"use strict";
var escape = require('./rendering/escape');
var DefaultWriterClass = require('./rendering/string_writer');


var Template = function (data, ctx, writer) {
	this.data = data;
	this.ctx = ctx;
	this.writer = writer;
	this.vars = {};
	this.baseCssName = null;

	this.init();
};

Template.prototype.init = function () {
};

Template.prototype.setup = function (setupFunc) {
	setupFunc.call(this);
	return this;
};

Template.prototype.getBaseCssName = function (setupFunc) {
	return this.baseCssName;
};

Template.prototype.setBaseCssName = function (baseCssName) {
	this.baseCssName = baseCssName;
};

Template.prototype.getCssName = function (name, modifiers) {
	if (modifiers == null) {
		return name;
	}

	return [name, modifiers].join('-');
};

Template.prototype.escape = function (str) {
	return escape(str);
};

Template.prototype.render = function () {
	// ensure we have a writer
	if (this.writer == null) {
		this.writer = new DefaultWriterClass();
	}

	// render
	this.renderBlockMain();
	return this.writer.done();
};

Template.prototype.renderTo = function (template) {
	this.writer = template.writer;
	this.renderBlockMain();
};

Template.prototype.renderBlockMain = function () {
	throw new Error('Abstract method call');
};


module.exports = Template;
