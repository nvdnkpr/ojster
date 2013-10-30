// Content below is autogenerated by ojster template engine
// usually there is no reason to edit it manually
goog.provide('ojster.example.templates.Hobbies');

goog.require('ojster'); // normally here will be just 'ojster'

goog.scope(function () {
"use strict";

/**
 * @param {Object=} opt_data
 * @param {Object=} opt_ctx
 * @param {ojster.StringWriter=} opt_writer
 * @constructor
 * @extends {ojster.Template}
 */
ojster.example.templates.Hobbies = function (opt_data, opt_ctx, opt_writer) {
	goog.base(this, opt_data, opt_ctx, opt_writer);
};
var Hobbies = ojster.example.templates.Hobbies;
goog.inherits(Hobbies, ojster.Template);

Hobbies.prototype.renderBlockMain = function () { // @6:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<div>No hobbies detected.</div>'
	);
}; // @8:1

}); // goog.scope
