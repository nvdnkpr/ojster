
goog.provide('ojster.example.templates.Person');
goog.require('ojster.example.page'); // 'page' is an alias, can be used if goog.scope is enabled
goog.require('ojster.example.templates.Hobbies');

ojster.example.templates.Person = function() {
	ojster.example.templates.Base.apply(this, arguments);
};
goog.inherits(ojster.example.templates.Person, ojster.example.templates.Base);


// usually code is enclosed into such a "tag"
ojster.example.templates.Person.twistScore = function (value) {
    return value * 5 / 3;
}


// but beyond blocks code can be inserted just plain
ojster.example.templates.Person.prototype.calculateScore = function(person) {
    return ojster.example.templates.Person.twistScore(person.score);
};

ojster.example.templates.Person.prototype.renderBlockMain = function() { // @19:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		' '
	); // @20:1

    // TODO bad example, need 'init' function instead
    vars.score = this.calculateScore(d); // vars is right place for template-level variables
    ojster.example.templates.Base.prototype.renderBlockMain();

	self.writer.write(
		' '
	);
}; // @25:1

// code could be here too, almost anywhere

ojster.example.templates.Person.prototype.renderBlockTitle = function() { // @29:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'Person #',
		self.escape(d.id) // @29:29
	);
}; // @29:40

ojster.example.templates.Person.prototype.renderBlockScript = function() { // @31:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<script>(function() { // TODO good for node, but bad for goog var settings = ',
		JSON.stringify(ctx.pageSettings), // @35:20
		'; // inserting JSON unescaped ojster.example.page.initPage(settings); })();</script>'
	);
}; // @39:1

ojster.example.templates.Person.prototype.renderBlockContent = function() { // @41:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<div>Hello, '
	); // @42:17
	self.renderBlockFullName();
	self.writer.write(
		'!</div><div>Your score: '
	); // @43:22

	vars.score;

	self.writer.write(
		':</div><div>Your skills, '
	); // @44:23

	this.renderBlockFullName();

	self.writer.write(
		':</div>'
	); // @45:5

	this.renderBlockSkills();

	self.writer.write(
		' '
	); // @46:5

	if (d.events && d.events.length) {

	self.writer.write(
		'<div>Your events:</div>'
	); // @48:9

	d.events.forEach(function(event) {

	self.writer.write(
		' '
	); // @49:13
	self.renderBlockBeforeEvent();
	self.writer.write(
		'<div>',
		self.escape(event.Name), // @50:18
		'</div>'
	); // @51:13

	self.renderBlockAfterEvent(); // 'self' alias of 'this' can be used when need

	self.writer.write(
		' '
	); // @52:9

	}

	self.writer.write(
		' '
	); // @53:5

	}

	self.writer.write(
		' '
	); // @54:5

    this.writer.write('<div>this.writer.write() can be ', 'used at any moment', '</div>');
    this.write('<div>this.write() is the same, but a little bit less effective', ' (designed primary to use in chains, see below)</div>');

    var Hobbies = ojster.example.templates.Hobbies; // just an alias

    // how to render other template in place:
    new Hobbies(this.ctx, d, this).render(); // NOTE third argument makes redirects rendering to our template writer
    
	self.writer.write(
		' '
	); // @63:5

	// possible but less effective:

	self.writer.write(
		' ',
		new Hobbies(this.ctx, d).render.done(), // @64:5
		' '
	); // @66:5

    var Snippets = ojster.example.templates.Snippets;

    // how to render block of other template in place:
    new Snippets(this.ctx, d.email, this).renderBlockEmail();

    // rendering chains can be used:
    new Snippets(this.ctx, d.about, this).renderBlockShort().write(' -> ').renderBlockHidden();
    
	self.writer.write(
		' '
	); // @75:5

	// possible but less effective:

	self.writer.write(
		' ',
		new Snippets(this.ctx, d.email).renderBlockEmail().done(), // @76:5
		' ',
		ojster.template(Hobbies, this.ctx, d.about).renderBlockShort().write(' -> ').renderBlockHidden().done(), // @77:5
		' '
	);
}; // @78:1

ojster.example.templates.Person.prototype.renderBlockFullName = function() { // @42:17
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		self.escape(d.firstName), // @42:40
		' ',
		self.escape(d.lastName) // @42:59
	);
}; // @42:76

ojster.example.templates.Person.prototype.renderBlockBeforeEvent = function() { // @49:13
	var self = this;
	var d = this.data, vars = this.vars;
};

ojster.example.templates.Person.prototype.renderBlockSkills = function() { // @80:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		' '
	); // @81:1

    if (vars.areSkillsRendered) {
        return this; // must return 'this' object if do return manually
    }

    vars.areSkillsRendered = true;

    if (!d.skills) {
        return this.renderBlockNoSkills();
    }

    for (var i=0, l=d.skills.length; i < l; i++) {
        var skill = skills[i];

	self.writer.write(
		'<div>',
		self.escape(skill.name), // @95:14
		': ',
		self.escape(skill.value), // @95:33
		'</div>'
	); // @96:1

    }

	self.writer.write(
		' '
	);
}; // @99:1

ojster.example.templates.Person.prototype.renderBlockNoSkills = function() { // @101:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		' You have no skills :( '
	);
}; // @103:1

ojster.example.templates.Person.prototype.renderBlockAfterEvent = function() { // @105:1
	var self = this;
	var d = this.data, vars = this.vars;
};

