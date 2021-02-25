(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.animation_button = function() {
	this.initialize(img.animation_button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,162);


(lib.Art_button = function() {
	this.initialize(img.Art_button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1920);


(lib.Button_bar = function() {
	this.initialize(img.Button_bar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,698,206);


(lib.chip_papercopy4 = function() {
	this.initialize(img.chip_papercopy4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1920);


(lib.Contact_button = function() {
	this.initialize(img.Contact_button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,160);


(lib.content_tile = function() {
	this.initialize(img.content_tile);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,638,738);


(lib.hilooski_diner = function() {
	this.initialize(img.hilooski_diner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,608);


(lib.Next_button = function() {
	this.initialize(img.Next_button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.Previous_button = function() {
	this.initialize(img.Previous_button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,158);


(lib.Rubberducky = function() {
	this.initialize(img.Rubberducky);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1080);


(lib.Sharoom = function() {
	this.initialize(img.Sharoom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1080);


(lib.slugger = function() {
	this.initialize(img.slugger);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1080);


(lib.UI_Bars = function() {
	this.initialize(img.UI_Bars);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1080);


(lib.witchy = function() {
	this.initialize(img.witchy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,864);


(lib.Tween37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Slugger", "72px 'Henny Penny'", "#403122");
	this.text.lineHeight = 130;
	this.text.lineWidth = 274;
	this.text.parent = this;
	this.text.setTransform(-136.95,-65.85);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.9,-67.8,277.9,135.7);


(lib.Tween36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.slugger();
	this.instance.setTransform(-270,-270,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,-270,540,540);


(lib.Tween35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Character", "72px 'Henny Penny'", "#403122");
	this.text.lineHeight = 130;
	this.text.lineWidth = 340;
	this.text.parent = this;
	this.text.setTransform(-169.95,-66.85);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.9,-68.8,343.9,137.7);


(lib.Tween34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Sharoom();
	this.instance.setTransform(-270,-270,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,-270,540,540);


(lib.Tween33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Ducky", "72px 'Henny Penny'", "#403122");
	this.text.lineHeight = 130;
	this.text.lineWidth = 238;
	this.text.parent = this;
	this.text.setTransform(-118.95,-63.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.9,-65.8,241.9,131.6);


(lib.Tween31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Rubberducky();
	this.instance.setTransform(-270,-270,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,-270,540,540);


(lib.Tween30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Building", "72px 'Henny Penny'", "#403122");
	this.text.lineHeight = 130;
	this.text.lineWidth = 300;
	this.text.parent = this;
	this.text.setTransform(-149.95,-67.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.9,-69.3,303.9,138.6);


(lib.Tween29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hilooski_diner();
	this.instance.setTransform(-270,-152,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,-152,540,304);


(lib.Tween28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Witch Character Design", "108px 'Henny Penny'", "#403122");
	this.text.lineHeight = 193;
	this.text.lineWidth = 1195;
	this.text.parent = this;
	this.text.setTransform(-626.75,-152.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-628.7,-154.8,1198.6,206.8);


(lib.Tween24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.witchy();
	this.instance.setTransform(-540,-432);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540,-432,1080,864);


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#403122").s().p("AADEPQgQgEgOgHQgOgGgMgJQgLgIgIgJQgOgQgKgIQgKgJgMAAQgHAAgHAEIgPAKIgNAKQgHAFgEAAQgEAAgBgCQgCgCAAgDQAAgEAFgFIAJgIIAPgOIAUgXQAMgNAMgSQAMgQAIgPIANgZIALgRQAEgHAFABQAFAAACACQACADAAAEQAAAGgEAJQgEAHgEANQgFAMgEAQQgEAPAAAVQAAALAFAQQAEAPALANQAKAOARAKQAQAKAXAAQATAAAQgIQAPgHALgMQAKgNAGgSQAGgRAAgXQAAgbgNgaQgNgagUgZQgTgYgXgYQgWgYgUgXQgTgYgNgYQgNgYAAgYQAAgcAKgTQAKgVARgNQAQgNAVgGQAUgHAWAAIAZABIARAEIAMADQAFACAGAAQAGAAADgGIAGgQQAFgNAGAAQAGAAACAEIABAHIgBAJIgCALIgEASIgFAaIgDAWIgCARIgBAOIgCAMQgCANgHAAQgFABgBgFQgCgEAAgGIAAgbQAAgVgEgOQgFgOgIgJQgJgIgLgEQgMgDgNAAQgLAAgLAEQgLAEgIAHQgHAIgFALQgFALAAANQAAATAJAQQAHARAOAQQAOAQARARIAkAhIAkAkQARASAOAVQAOAVAIAXQAIAYAAAbQAAAkgLAcQgLAcgTATQgTATgZAKQgaAJgcABQgUAAgRgFg");
	this.shape.setTransform(82.725,-271.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#403122").s().p("AiUDyQgDgCAAgEQAAgFAFgCIAMgFIAOgDQAIgCAMgFQALgFAFgIQAEgJAAgRIgBgRIgCgeIgCgmIgEgqIgEgrIgDgnIgEgiIgCgYQgCgKgDgGQgCgGgEgEQgEgDgFAAQgFgCgGAAIgPAAIgEAAIgFgBIgEgCQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgEADgCIAIgCQASgCAOgEQAOgEAOgKQAIgHAKgLQAJgLAGgMQAEgJAFAAQAFAAABADIABAHIgBAMIAAAQIABAVQABAMADAJIADARQACAGACAAQABAAADgKIAIgaQAEgPAJgSQAHgSAMgPQANgQASgKQARgKAZAAQAWAAAQAIQAPAHAJAMQAJALAEAOQAEAOAAAMQAAASgFAOQgFAOgIAJQgJAJgKAFQgLAFgLAAQgUAAgMgKQgNgJAAgTQAAgJADgHQACgHAFgFQAEgFAHgDQAFgEAIgCQAPgFAGgGQAFgHAAgJQAAgFgCgFQgCgFgEgEQgFgEgGgDQgHgCgKAAQgUAAgPAKQgQAJgLAPQgLAQgHAUQgHAVgEAWQgFAWgCAXQgCAXAAATIACAmIADAqIAFApIAGAlIAEAcIADARQAEAQAIAGQAIAGAOAAIAMAAIAKgBQAJAAAAAHQAAAGgFACQgEACgLAAIgZABIgeABQgQAAgQACQgRACgQAEIgeAHIgYAGQgLACgGAAQgHAAgCgDg");
	this.shape_1.setTransform(53.925,-276.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#403122").s().p("ABlD/QgMgFgIgHQgJgHgGgJQgFgIgEgIQgKgTgFgWIgIgsQgGAJgKANQgLANgPAMQgQAMgUAJQgVAIgZAAQgcAAgVgIQgTgIgNgNQgNgOgFgSQgHgSAAgVQAAgVAIgWQAJgXASgSQATgRAdgLQAegLArAAIATABIARACIAMACIAIABIgGg8IgCgbIgEgcIgEgcIgEgaQgFgbgQgQQgRgQgZAAQgNAAgLAFQgLAFgGAIQgIAHgDAKQgEAKAAAJQAAALAFAHQAFAGAHAGIAQAKQAIAEAIAHQAHAGAFAIQAEAJAAANQABARgMALQgMAKgRAAQgNAAgLgFQgMgFgIgKQgJgKgEgPQgGgOABgUQAAgWAGgVQAGgVANgQQANgRAVgJQATgKAdAAQAXAAATAGQAQAGAOALQAOAKAKANQAKAOAGAPQAGAPAFAPIAIAdIAEAWIAGAhIAGAoIAHAqIAHArIAHAlIAEAdIAEARIAEAWQADALAEAKQAEAJAGAGQAFAGAKAAQAFAAAEgCQAEgDACgEIAEgKIABgLIgBgNIAAgMIABgJQABgEAFAAQADAAADAFQACAEACAGIABALIABAJQAAAMgCAQQgDAPgGAPQgHAOgPAKQgOAJgUAAQgRAAgMgFgAhMACQgPAFgMALQgLAKgIAQQgGAPAAAVQAAASAGANQAGAMAKAHQAKAHALACQAMADALAAQASAAARgFQAQgGALgHQAMgIAIgHIAJgJIgEgrIgCgRIgCgPIgCgMIgBgHIgIgCIgOgDIgSgCIgTgBQgSAAgRAEg");
	this.shape_2.setTransform(18.85,-270.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#403122").s().p("AjxFfQAAgHAIgGQAHgGALgIIAZgQQANgIANgJIAOgNQAGgHAGgJQAFgJADgLQADgNACgPQADgWABggIABhIIABg0IAAg9IgBhGQAAgjgCggQgDghgEgaQgEgagHgPQgGgPgIgJQgIgKgKgGQgLgHgLgEQgMgDgNgDQgJgBgDgDQgDgCAAgDQAAgDADgBQACgCAEABIAOABIAQABIAVACIAbABQAgAAAZgEIAvgLIAsgLQAXgFAcAAQAWAAAXAGQAXAFASANQATAMAMAXQAMAWAAAiQAAAagIAVQgIAVgMARQgNAQgQANQgQANgQAIQgPAJgOAGIgYAIQAOAAAVAEQAUADAXAIQAXAJAWANQAWAOASAVQARAUAMAeQALAcAAAmQAAAigIAbQgHAbgNAUQgNAVgQAPQgRAPgSAKQgSAKgTAHQgTAFgRACQgSACgQAAIgdABIgngBIgkgBQgXAAgUAFQgVAEgRAIQgRAGgOAJIgaAPIgTAMQgJAFgFAAQgJAAAAgJgAgYg9QgRAEgJAEIACAtIAEAwIADA0IAEAvIADAnIACAYQACASAFAOQAFAQAIAKQAIAKAMAHQANAFASAAQAYAAAVgKQAVgKAQgUQAPgWAIggQAJggAAgtQAAgqgLghQgLghgTgVQgTgXgZgLQgagLgfAAQgSAAgRACgAgolGQgPADgNADIADAiIACAnIADApIACAmIAGBZQApgDAfgPQAOgFANgKQANgKALgNQAKgOAHgTQAGgSAAgYQAAgjgJgWQgIgXgOgOQgOgNgTgGQgSgGgUAAQgRAAgPADg");
	this.shape_3.setTransform(-26.975,-276.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#403122").s().p("AjEFqQAAgGAIgDIAPgFIAagJIAcgLQAOgFAHgFQALgGAGgHQAHgHAEgJQAFgJABgLIADgXIACgoIACg8IAAhJIAAhPIAAhBIAAg+IgBg2IgBgrQgBgagDgRQgDgRgFgKQgEgKgGgGQgFgGgHgEQgKgHgSgDQgSgDgSAAQgIAAgEgDQgDgDgBgEIABgEIADgEIAHgDIALgBIAZABIAiACIAmACIApABQAVAAAXgCIAtgFIAtgFQAVgCATAAQANAAAGABQAHABAFACQADACABACIABAFQAAAGgIADQgHAEgRAAIghABQgPABgNAEQgMADgLAGQgJAGgIALQgIAKgGAPQgGAOgEAVQgFAXgEAjIgKBPIgJBbIgHBeIgFBaQgCAsAAAiQABAUACAMQADALAFAGQAGAGAFACIAKADQAKADAMAAIAWABQARAAAAAJQAAAEgEAEQgEAEgOAAIgQgBIgUAAIghABQgSABgYAEQgXADgWAHIgpAOIgjAMQgPAFgJAAQgJAAAAgIg");
	this.shape_4.setTransform(-86.15,-275.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#403122").s().p("AgwEDQgbgKgVgSQgWgSgPgZQgQgZgKgdQgFgSgEgWQgEgXgCgYQgCgZgBgZIgCg0IgCgoQgCgSgDgNQgDgOgFgJQgGgKgJgFQgKgGgKgCQgKgDgRAAQgNAAAAgKQAAgIALgCIAggEIAggFIAigFQARgDATgFQAigIAagJIAsgRIAegMQALgFAHAAQAJAAAAAIQAAAFgFAEQgEAEgMAGIgOAHIgPAJQgIAFgHAHQgIAHgHAIQgJAMgHARQgHASgEAWQgFAWgCAbQgDAaAAAdQAAAfACAfQACAfAGAcQAFAcAIAYQAJAYAMARQAMASASAKQAQAKAXAAQAdAAAVgQQAVgPAOgZQANgYAHgdQAGgeAAgcIAAgUIgBgcIgCgeQgBgQgCgPQgDgPgEgNQgEgMgFgIQgFgHgHgGQgHgGgKgFQgKgFgOgEQgOgDgSgDQgPgCgHgDQgIgDAAgIQAAgGAGgDQAGgCALAAIAWABIAbADIAdADQAPACARAAQAPAAAQgCIAegEIAbgEIAWgBQAMAAAEACQAEACAAAEQAAAEgEABIgNACIgSACQgKABgKACQgJACgIAFQgJAFgFAJQgHAMgDAUQgDAUgBAYIgBAyQAAAagCAYIgDAkQgCAVgGAZQgGAXgLAZQgKAYgRATQgRATgZANQgZAMgiAAQggAAgbgKg");
	this.shape_5.setTransform(-124.975,-281.175);

	this.instance = new lib.UI_Bars();
	this.instance.setTransform(-270,-205,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,-335,540,670);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Previous_button();
	this.instance.setTransform(-78.5,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-79,157,158);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Next_button();
	this.instance.setTransform(-79,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-79,158,158);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA3ABIAAgBQAAg0gUgaQgTgYgaAAIgBAAQgeAAgNAVIAACtIAAACQANAaAfAGIiHAAQAdgFAPgcIAAgBIAAirQAAgGgDgCQgFgEgJgCIgbgFIBHgbIAUgGIAAASIAAAAQAYgSAdAAQAbAAAYASQAXARAPAfQAOAfAAAiIAAACIAABOQAAAGADACQAEAEAKACIAbAFQgNAGg7AVIgTAGg");
	this.shape.setTransform(43.725,109.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgzBzQgZgRgOgfQgNgdAAgjQAAgmAOgeQAOgfAYgRQAXgSAcAAQAcAAAYASQAYARAOAfQAOAfAAAiQAAAkgOAeQgOAfgYASQgYARgcAAQgbAAgYgRgAglhNQgPAZAAA0QAAAzAMAaQAPAhAbAAQAZAAAPglQAMgfAAgpIAAgBQAAgwgSgeQgPgYgVAAIAAAAQgXAAgOAZg");
	this.shape_1.setTransform(15.2,109.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag0BzQgYgRgOgfQgNgdAAgjQAAgmAOgeQAOgfAXgRQAYgSAcAAQAcAAAYASQAYARAOAfQAOAfAAAiQAAAkgOAeQgOAfgYASQgXARgdAAQgaAAgagRgAglhNQgPAZAAA0QAAAzALAaQAQAhAbAAQAaAAAOglQAMgfAAgpIAAgBQAAgwgSgeQgQgYgUAAIAAAAQgWAAgPAZg");
	this.shape_2.setTransform(-10.75,109.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AACC3QgQAAgggKIgsgSIgDgBQgXABgIAcIAAi1QAKBRAYAkIAEAEQAEAGAPAKQAbAUAkgBIABAAIAQAAQAjgHASgeQANgWAAgXIAAgGQgCgdgmgRIhPgkQg8gbAAg2IAAgEQABgkAZgZQAagYAmAAIACAAQAmAAAWAeIACAAQARgCAIgcIAACHQgOg6gPgTIgIgKIgMgKQgSgQgSABIgBAAQgWAAgPANQgPAOAAAZIAAACQAAAgAsAUIBTAmQA2AWADA9IAAAJQgHAvggAcQgfAfg0AAg");
	this.shape_3.setTransform(-39.05,104.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiC0QglgDgTgTQgKgLAAgMQAAgNAJgJQAIgIANAAQANgBAJALQAJAKAAAMQAAAKgIAJQAFACAJABQAIgBAMgCQAVgFALgPQANgTAAgiIAAgEIAAgLQgXAQgbABQgcgBgYgRQgYgRgOggQgOgdAAgmQAAgkAOgdQAOgeAYgRQAZgSAgAAQAZAAAnAOQA6AVAOAGQgGAAgWAFQgJACgFAEQgDACAAAGIAADGQgDA0gkAaQgiAXgiAAIgFAAgAg7h8QgMAaAAA0QAAAzAPAaQAQAZAeAAQAXAAAMgTQAGgJABgIIAAgCIAAiJQAAgMgEgEIgCgDQgSgSgWAAIgDAAQgbABgPAfg");
	this.shape_4.setTransform(-81.625,114.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA3ABIAAgBQAAg0gUgaQgTgYgaAAIgBAAQgeAAgNAVIAACtIAAACQANAaAfAGIiHAAQAdgFAPgcIAAgBIAAirQAAgGgDgCQgFgEgJgCIgbgFIBHgbIAUgGIAAASIAAAAQAYgSAdAAQAbAAAYASQAXARAPAfQAOAfAAAiIAAACIAABOQAAAGADACQAEAEAKACIAbAFQgNAGg7AVIgTAGg");
	this.shape_5.setTransform(-111.125,109.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhDC0QAdgGAPgbIABgBIAAirQAAgGgDgCQgFgFgLgBIgagGQARgHA2gTIATgGIAADfIABACQAMAZAgAHgAgVh+QgJgJAAgNQAAgNAJgJQAJgJAMAAQANAAAIAJQAJAJAAANQAAANgJAJQgIAJgNAAQgMAAgJgJg");
	this.shape_6.setTransform(-134.375,104.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ACFABIAAgBQAAg1gTgZQgVgYggAAQgYAAgOAVIAACtIABACQANAaAfAGIiGAAQAcgFAQgcIAAgBIAAhaIAAgBIAAgBQAAg0gVgaQgSgYgcAAIgBAAQgeAAgNAVIAACtIABACQAMAaAgAGIiIAAQAdgFAPgcIABgBIAAirQAAgGgDgCQgFgEgKgCIgbgFIBIgbIATgGIAAASIABAAQAagSAaAAQAcAAAYASQAOAKALAPQAVgYANgIQAQgLAcAAIABAAQAeAAAWASQAZATANAdQAOAfAAAiIAAACIAABOQAAAGADACQAFAEAJACIAbAFIhHAbIgUAGg");
	this.shape_7.setTransform(-164.55,109.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag0BzQgXgRgPgfQgNgdAAgjQAAgmAOgeQAOgfAXgRQAZgSAbAAQAcAAAYASQAYARAOAfQAOAfAAAiQAAAkgOAeQgOAfgYASQgXARgdAAQgaAAgagRgAglhNQgPAZAAA0QAAAzAMAaQAPAhAbAAQAZAAAPglQAMgfAAgpIAAgBQAAgwgSgeQgPgYgVAAIAAAAQgWAAgPAZg");
	this.shape_8.setTransform(-200.9,109.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAJC3QgkAAgYgOQgZgOgSgYQgRgXgLgiQgKghAAgnQAAglAKgjQALglARgXQATgYAXgOQAZgOAZAAIACAAQAaAAAXAMQAQAJAJAJIACAAQAYgCAHgcIAACHQgMgwgQgbQgJgMgMgJQgTgOgagBQgdAAgaAVQgTAVgKAoQgLAnAAAlIAAACQgBAkAIAeQARA1AZATQAUARAeAAIALgBQARgBAWgOQAMgHAPgSQAJgMAGgUIAYAKQgIAVgNAPQgRAYgYAOQgbAPgjAAIAAAAg");
	this.shape_9.setTransform(-229.55,104.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AC7DmIgTgMQgLgHgQgIQgPgJgWgHQgRgFgQgDQgRgEgWgBQgMgBAAgGQAAgGAIAAIANAAIASgBQAOgBAKgIQAJgHAEgVIADgUIADgbIABgdIABgcIgBgbQAAgPgBgRQgCgRgFgQQgEgQgHgNQgIgNgMgHQgMgJgRAAQgPAAgMAIQgLAHgKAOQgJANgHASQgHARgDAWQgEAWgBAWQgCAXAAAXQAAATACASIAEAhQADAOADAMQADAMAFAGQAHAJAHAFIANAGIAKAEQACACAAACQAAACgDACQgDACgHAAIgQgBIgSgDIgUgCIgUgCIgVABIgSABIgSACIgMAAQgOAAAAgIQAAgEACgCQACgCAGgBIAJAAIAIgBIAJgBIAKgBQAMgBAEgHQADgGAAgMQAAgTgDgcQgDgcgGghIgNhGIgRhMQgEgUgFgKQgGgKgKAAQgFAAgGACIgLAEIgLAFIgJABQgHAAAAgFQABgFAEgCIAHgDIAVgKQAMgGANgKQANgLAKgLIASgWIAMgQQAFgHACAAQADAAACAKQADAIADAPIAGAhIAFAmIANBZQACgMAEgPQAEgPAIgQQAHgQALgQQALgPAMgNQAPgMARgHQARgIAWAAQAaAAATAKQAUAKAMASQANARAGAZQAGAZAAAdQAAAagDAaIgHA0IgFAyQgEAXAAAVQAAAMACAKQADAJADAIQAFAHAIAGIAOAKIALAJQAEAFABAFQAAADgCADQgCACgEAAQgHAAgHgFg");
	this.shape_10.setTransform(73.9,-74.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag7CeQgfgLgXgWQgYgVgOgfQgOgeAAgnQAAgnAMgfQAMghAXgWQAWgWAggMQAggMAmAAQAjgBAdAMQAdALAWAXQAVAVAMAfQAMAeAAAmQAAAtgOAhQgPAfgYAWQgXAUgdAKQgdAJgcAAQggABgfgLgAghiQQgOAKgKARQgJARgFAXQgEAXAAAZQAAAUACAVQADAUAFAUQAFAUAIAQQAHARALANQAKANAOAIQAMAGARAAQAVABAPgKQAOgKAJgPQAJgRAEgSQADgVAAgTQAAgvgHgkQgHgkgMgYQgNgYgRgMQgRgLgUAAQgTAAgPAKg");
	this.shape_11.setTransform(34.525,-74.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA+D9IgWgDIgXgEQgMgBgNgBIgWABIgTACIgQABIgPABIgLgBQgEgCAAgFQAAgFAFgBIALgDIAOgEQAGgCAGgDQAFgEAEgGQAEgGABgKIACgoIABgnIAAgmIAAgiIAAgkIAAgaQgBgSgDgKQgEgLgGgFQgGgEgKgCIgWgDIgGgCQgDgCAAgEQAAgGALgCIANgBIATgCIAXgFIAbgKQAOgGALgGIAQgLIAKgJQADgEADAAQADABAAAHIgBASIgDAZIgGAxIgFA1IgFA4IgEAzIgDApIgBAaIABASIAEALIAFAIIAFAFIAIAEIAKADIALACIAJACIAMADQAFAAAAAEQAAAHgPAAIgVgCgAgKioQgIgBgGgGQgGgEgEgJQgEgIAAgMQAAgOAEgIQAEgJAGgFQAHgFAHgCQAHgDAGAAQAUAAANALQAMALAAAUQAAAOgEAJQgEAIgHAGQgHAFgHACQgJACgHAAQgGAAgHgCg");
	this.shape_12.setTransform(5.525,-83.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgcELQgcgPgRgZQgPgWgHgeQgHgeAAgeQAAgjAFghQAGggAGgaIALguQAGgUAAgJQAAgGgEgCQgDgCgGAAIgKABIgNABIgQABIgPAAQgNAAAAgHQAAgHAJgCQAIgDAOgDIAZgFQAZgHAQgKQARgKALgPQAMgPAIgTQAHgUAIgZQAHgVAHgJQAHgKAJABQAIgBADAHQAEAFAAAKQAAAJgEAQIgHAfIgHAhQgDAPAAAMQAAAGACAFQACAEAHAAIALAAIAMgCIAOgCIAOAAQAPAAAAAJQAAAFgEACQgEACgHAAIgMAAIgPADIgQACIgPAHQgKAEgGAHQgGAIgEAIQgGAMgHAVQgFAWgGAaQgGAagDAcQgEAcAAAbQAAAmAGAbQAHAbAKARQALASAQAIQAPAJASAAQAOAAAKgFQAKgEAGgGQAHgHACgHQADgJAAgHQAAgJgFgHIgLgMQgHgHgFgHQgFgHAAgLQAAgOAJgJQAJgKAQAAQAHAAAHADQAGACAFAGQAFAFADAJQADAJAAAMQAAAUgGAVQgGAUgOAQQgOARgVAKQgWAKggAAQgiAAgcgOg");
	this.shape_13.setTransform(-21.025,-79.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABlD/QgMgFgIgHQgJgHgFgJQgHgIgDgIQgKgTgFgWIgIgsQgGAJgKANQgLANgPAMQgPAMgWAJQgUAIgaAAQgcAAgTgIQgVgIgMgNQgNgOgGgSQgFgSgBgVQABgVAHgWQAIgXATgSQASgRAfgLQAdgLArAAIATABIARACIAMACIAIABIgGg8IgDgbIgDgcIgEgcIgDgaQgGgbgQgQQgQgQgaAAQgOAAgKAFQgKAFgIAIQgHAHgDAKQgEAKAAAJQAAALAFAHQAFAGAHAGIAQAKQAIAEAIAHQAGAGAFAIQAFAJABANQAAARgMALQgMAKgRAAQgNAAgLgFQgMgFgIgKQgJgKgEgPQgGgOAAgUQABgWAGgVQAGgVANgQQANgRAVgJQATgKAdAAQAXAAATAGQAQAGAOALQAOAKAKANQAKAOAGAPQAHAPAEAPIAIAdIAEAWIAGAhIAHAoIAGAqIAHArIAHAlIAEAdIAEARIAEAWQACALAFAKQAEAJAFAGQAHAGAJAAQAFAAAEgCQAEgDADgEIADgKIAAgLIAAgNIAAgMIABgJQACgEAEAAQADAAADAFQADAEABAGIABALIAAAJQAAAMgBAQQgDAPgGAPQgHAOgPAKQgPAJgSAAQgSAAgMgFgAhLACQgRAFgLALQgMAKgGAQQgHAPAAAVQAAASAGANQAGAMAKAHQAJAHANACQALADALAAQATAAAPgFQAQgGAMgHQAMgIAIgHIAJgJIgEgrIgCgRIgBgPIgDgMIgBgHIgIgCIgNgDIgSgCIgUgBQgSAAgQAEg");
	this.shape_14.setTransform(-53.85,-71.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ADZCeQgJgFgLgHIgVgNQgLgHgJgEQgPgHgLgEIgVgGIgNgFQgEgDAAgEQAAgEADgCIAKgEQAHgCAGgGQAGgHADgLIAEgNIADgRIACgUIAAgSIgBgXQgBgNgDgLQgFgLgIgHQgHgIgOAAQgJAAgHADQgHADgFAFQgFAFgDAFIgGALQgGAPgDAWQgDAUAAAVQAAAVAHANQAHAMAMAGIAGADQACACAAADQAAAHgLAAIgPgCIgTgEIgXgEQgKgCgMAAIgPAAIgQABIgNgBQgGgCAAgEQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAgBIAFgBIAHgCIAIgCQAHgDAFgIQAFgIADgKIADgYIABgbIgBgXQgBgMgDgMQgFgLgIgHQgHgIgOAAQgIAAgHADQgGAEgGAFQgEAGgEAHQgEAHgCAHQgCAHgDATQgDATgBAfQAAAZAEATQAEASAKAIQAIAFAHADIAPADIALADQAEACAAAEQAAACgDACQgEACgJAAIgPgBIgUgDIgWgCIgVgCIgRABIgRABIgQABIgSABIgMgBIgHgCIgCgDIgBgDQAAgEAEgCQAFgDAGgBIANgCIAPgDQAIgCAHgIQAIgJAAgQIgCgkIgEglIgGghIgGgaQgEgMgIgHQgHgHgRAAIgJAAIgHAAQgGAAgEgCQgCgCAAgEQAAgFAFgBQADgCAJgCIAUgEQAMgDAQgHQAQgGAJgGIAQgLIAIgIQAEgDABAAQADAAADAKIAFAYIADAgIADAgQAEgGAGgKQAHgLAKgKQALgKAOgHQAPgHASAAQAPAAAMAFQAMAFAIAIQAIAIAGAKQAFAKACAKQAIgMAIgKQAJgLALgHQALgIANgEQANgFAPAAQAXAAAOAIQAPAIAJAOQAHANADARQADARAAARIgBAeIgCAdIgCAdIgBAYQAAALABAKQACAJADAJQAFAJAHAFQAFAGAGADIAJAGQAEADAAAEQAAAEgDACQgDACgFAAQgGAAgKgFg");
	this.shape_15.setTransform(-100.1,-74.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA+D9IgWgDIgXgEQgMgBgNgBIgWABIgTACIgQABIgPABIgLgBQgEgCAAgFQAAgFAFgBIALgDIAOgEQAGgCAGgDQAFgEAEgGQAEgGABgKIACgoIABgnIAAgmIAAgiIAAgkIAAgaQgBgSgDgKQgEgLgGgFQgGgEgKgCIgWgDIgGgCQgDgCAAgEQAAgGALgCIANgBIATgCIAXgFIAbgKQAOgGALgGIAQgLIAKgJQADgEADAAQADABAAAHIgBASIgDAZIgGAxIgFA1IgFA4IgEAzIgDApIgBAaIABASIAEALIAFAIIAFAFIAIAEIAKADIALACIAJACIAMADQAFAAAAAEQAAAHgPAAIgVgCgAgKioQgIgBgGgGQgGgEgEgJQgEgIAAgMQAAgOAEgIQAEgJAGgFQAHgFAHgCQAHgDAGAAQAUAAANALQAMALAAAUQAAAOgEAJQgEAIgHAGQgHAFgHACQgJACgHAAQgGAAgHgCg");
	this.shape_16.setTransform(-136.475,-83.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AC7DmIgSgMQgMgHgPgIQgQgJgWgHQgQgFgRgDQgRgEgWgBQgNgBAAgGQAAgGAJAAIAOAAIASgBQAOgBAIgIQAKgHAFgVIACgUIACgbIADgdIAAgcIAAgbQgBgPgCgRQgCgRgDgQQgFgQgIgNQgHgNgMgHQgMgJgRAAQgPAAgMAIQgLAHgJAOQgKANgHASQgHARgDAWQgEAWgBAWQgCAXABAXQgBATACASIAEAhQACAOAEAMQADAMAFAGQAGAJAJAFIALAGIAKAEQADACABACQAAACgEACQgEACgGAAIgQgBIgTgDIgTgCIgUgCIgVABIgTABIgRACIgMAAQgOAAAAgIQAAgEADgCQABgCAHgBIAJAAIAIgBIAIgBIAKgBQAMgBADgHQAFgGAAgMQAAgTgEgcQgDgcgGghIgNhGIgRhMQgEgUgGgKQgFgKgLAAQgEAAgGACIgLAEIgKAFIgKABQgGAAAAgFQAAgFADgCIAIgDIAWgKQALgGANgKQANgLALgLIARgWIAMgQQAEgHADAAQADAAADAKQACAIADAPIAGAhIAFAmIANBZQACgMAFgPQAEgPAHgQQAIgQAKgQQALgPANgNQANgMASgHQARgIAVAAQAbAAATAKQAUAKAMASQANARAGAZQAGAZAAAdQAAAagDAaIgGA0IgHAyQgDAXAAAVQAAAMADAKQABAJAFAIQAFAHAHAGIANAKIAMAJQAFAFgBAFQAAADgCADQgBACgFAAQgFAAgIgFg");
	this.shape_17.setTransform(-168.25,-74.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAnFGQgCgCAAgDQAAgFACgCQADgDAHgDIAIgCIALgDIAOgEIAMgFQAHgEAGgHQAFgGAAgNIAAgIIgCgIIgNgyIgNgwIgNgqIgLggQgIgVgKgKQgLgLgNgGIgLgEIgSgHIgYgIIgZgJIgXgGIgSgFIgQA0IgQAxIgMAnIgHAYIgEARIgBANQAAALADAGQADAHAFAFQAFAEAHAEIANAGIALAHQAEADAAAFQAAADgCACQgDACgGABQgGAAgJgDIgUgIIgXgIIgZgJIgUgFIgVgDIgRgDIgNgBQgJgBgDgBQgEgDAAgFQAAgDACgCQACgCAGgBIAIABIAMAAQARAAALgCQALgCAIgFQAIgEAFgHQAFgHAEgJIAKgYIANgiIAOglIAOglIAKgfIAHgTIAIgaIALgkIANgoIAMgpIAJgkQADgQAAgJQAAgHgEgFQgEgEgJgBIgRACIgTACIgTACIgRABQgNAAAAgKQAAgHANgCIATgBIAXgFIAYgFQAMgEALgFQASgJANgIIAVgPIAOgLQAGgFADABQADAAADAFIAGAPIAGAQIAEALIARA0IAUA9IAXBEIAXBIIAYBEIAWBCIAUA5IAQAtQAJAXAIAOQAIANAJAJQAJAHALAEQALAEAPAEQAKABAAAHQAAADgEABQgDACgFAAIgUgBIgbAAIgbABIgdACQgYABgUAEIgkAIIgcAHQgNADgHAAQgEAAgCgBgAghjYIgFAKIgFALIgEAMIgwCYIAcAKIAjAMIAgAJQAOACAHAAQAEAAADgCQADgCAAgHQAAgFgDgOIgIggIgKglIgKgkIgIgcIgEgMIgDgMIgFgQIgFgNQgDgGgCAAIgDAEg");
	this.shape_18.setTransform(-217.075,-78.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("A7GBYQazlebaFe");
	this.shape_19.setTransform(-74.45,3.7206);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248.9,-136.2,496.8,272.4);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA3ABIAAgBQAAg0gUgaQgTgYgaAAIgBAAQgeAAgNAVIAACtIAAACQANAaAfAGIiHAAQAdgFAPgcIAAgBIAAirQAAgGgDgCQgFgEgJgCIgbgFIBHgbIAUgGIAAASIAAAAQAYgSAdAAQAbAAAYASQAXARAPAfQAOAfAAAiIAAACIAABOQAAAGADACQAEAEAKACIAbAFQgNAGg7AVIgTAGg");
	this.shape.setTransform(43.725,109.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgzBzQgZgRgOgfQgNgdAAgjQAAgmAOgeQAOgfAYgRQAXgSAcAAQAcAAAYASQAYARAOAfQAOAfAAAiQAAAkgOAeQgOAfgYASQgYARgcAAQgbAAgYgRgAglhNQgPAZAAA0QAAAzAMAaQAPAhAbAAQAZAAAPglQAMgfAAgpIAAgBQAAgwgSgeQgPgYgVAAIAAAAQgXAAgOAZg");
	this.shape_1.setTransform(15.2,109.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag0BzQgYgRgOgfQgNgdAAgjQAAgmAOgeQAOgfAXgRQAYgSAcAAQAcAAAYASQAYARAOAfQAOAfAAAiQAAAkgOAeQgOAfgYASQgXARgdAAQgaAAgagRgAglhNQgPAZAAA0QAAAzALAaQAQAhAbAAQAaAAAOglQAMgfAAgpIAAgBQAAgwgSgeQgQgYgUAAIAAAAQgWAAgPAZg");
	this.shape_2.setTransform(-10.75,109.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AACC3QgQAAgggKIgsgSIgDgBQgXABgIAcIAAi1QAKBRAYAkIAEAEQAEAGAPAKQAbAUAkgBIABAAIAQAAQAjgHASgeQANgWAAgXIAAgGQgCgdgmgRIhPgkQg8gbAAg2IAAgEQABgkAZgZQAagYAmAAIACAAQAmAAAWAeIACAAQARgCAIgcIAACHQgOg6gPgTIgIgKIgMgKQgSgQgSABIgBAAQgWAAgPANQgPAOAAAZIAAACQAAAgAsAUIBTAmQA2AWADA9IAAAJQgHAvggAcQgfAfg0AAg");
	this.shape_3.setTransform(-39.05,104.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiC0QglgDgTgTQgKgLAAgMQAAgNAJgJQAIgIANAAQANgBAJALQAJAKAAAMQAAAKgIAJQAFACAJABQAIgBAMgCQAVgFALgPQANgTAAgiIAAgEIAAgLQgXAQgbABQgcgBgYgRQgYgRgOggQgOgdAAgmQAAgkAOgdQAOgeAYgRQAZgSAgAAQAZAAAnAOQA6AVAOAGQgGAAgWAFQgJACgFAEQgDACAAAGIAADGQgDA0gkAaQgiAXgiAAIgFAAgAg7h8QgMAaAAA0QAAAzAPAaQAQAZAeAAQAXAAAMgTQAGgJABgIIAAgCIAAiJQAAgMgEgEIgCgDQgSgSgWAAIgDAAQgbABgPAfg");
	this.shape_4.setTransform(-81.625,114.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA3ABIAAgBQAAg0gUgaQgTgYgaAAIgBAAQgeAAgNAVIAACtIAAACQANAaAfAGIiHAAQAdgFAPgcIAAgBIAAirQAAgGgDgCQgFgEgJgCIgbgFIBHgbIAUgGIAAASIAAAAQAYgSAdAAQAbAAAYASQAXARAPAfQAOAfAAAiIAAACIAABOQAAAGADACQAEAEAKACIAbAFQgNAGg7AVIgTAGg");
	this.shape_5.setTransform(-111.125,109.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhDC0QAdgGAPgbIABgBIAAirQAAgGgDgCQgFgFgLgBIgagGQARgHA2gTIATgGIAADfIABACQAMAZAgAHgAgVh+QgJgJAAgNQAAgNAJgJQAJgJAMAAQANAAAIAJQAJAJAAANQAAANgJAJQgIAJgNAAQgMAAgJgJg");
	this.shape_6.setTransform(-134.375,104.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ACFABIAAgBQAAg1gTgZQgVgYggAAQgYAAgOAVIAACtIABACQANAaAfAGIiGAAQAcgFAQgcIAAgBIAAhaIAAgBIAAgBQAAg0gVgaQgSgYgcAAIgBAAQgeAAgNAVIAACtIABACQAMAaAgAGIiIAAQAdgFAPgcIABgBIAAirQAAgGgDgCQgFgEgKgCIgbgFIBIgbIATgGIAAASIABAAQAagSAaAAQAcAAAYASQAOAKALAPQAVgYANgIQAQgLAcAAIABAAQAeAAAWASQAZATANAdQAOAfAAAiIAAACIAABOQAAAGADACQAFAEAJACIAbAFIhHAbIgUAGg");
	this.shape_7.setTransform(-164.55,109.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag0BzQgXgRgPgfQgNgdAAgjQAAgmAOgeQAOgfAXgRQAZgSAbAAQAcAAAYASQAYARAOAfQAOAfAAAiQAAAkgOAeQgOAfgYASQgXARgdAAQgaAAgagRgAglhNQgPAZAAA0QAAAzAMAaQAPAhAbAAQAZAAAPglQAMgfAAgpIAAgBQAAgwgSgeQgPgYgVAAIAAAAQgWAAgPAZg");
	this.shape_8.setTransform(-200.9,109.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAJC3QgkAAgYgOQgZgOgSgYQgRgXgLgiQgKghAAgnQAAglAKgjQALglARgXQATgYAXgOQAZgOAZAAIACAAQAaAAAXAMQAQAJAJAJIACAAQAYgCAHgcIAACHQgMgwgQgbQgJgMgMgJQgTgOgagBQgdAAgaAVQgTAVgKAoQgLAnAAAlIAAACQgBAkAIAeQARA1AZATQAUARAeAAIALgBQARgBAWgOQAMgHAPgSQAJgMAGgUIAYAKQgIAVgNAPQgRAYgYAOQgbAPgjAAIAAAAg");
	this.shape_9.setTransform(-229.55,104.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AC7DmIgTgMQgLgHgQgIQgPgJgWgHQgRgFgQgDQgRgEgWgBQgMgBAAgGQAAgGAIAAIANAAIASgBQAOgBAKgIQAJgHAEgVIADgUIADgbIABgdIABgcIgBgbQAAgPgBgRQgCgRgFgQQgEgQgHgNQgIgNgMgHQgMgJgRAAQgPAAgMAIQgLAHgKAOQgJANgHASQgHARgDAWQgEAWgBAWQgCAXAAAXQAAATACASIAEAhQADAOADAMQADAMAFAGQAHAJAHAFIANAGIAKAEQACACAAACQAAACgDACQgDACgHAAIgQgBIgSgDIgUgCIgUgCIgVABIgSABIgSACIgMAAQgOAAAAgIQAAgEACgCQACgCAGgBIAJAAIAIgBIAJgBIAKgBQAMgBAEgHQADgGAAgMQAAgTgDgcQgDgcgGghIgNhGIgRhMQgEgUgFgKQgGgKgKAAQgFAAgGACIgLAEIgLAFIgJABQgHAAAAgFQABgFAEgCIAHgDIAVgKQAMgGANgKQANgLAKgLIASgWIAMgQQAFgHACAAQADAAACAKQADAIADAPIAGAhIAFAmIANBZQACgMAEgPQAEgPAIgQQAHgQALgQQALgPAMgNQAPgMARgHQARgIAWAAQAaAAATAKQAUAKAMASQANARAGAZQAGAZAAAdQAAAagDAaIgHA0IgFAyQgEAXAAAVQAAAMACAKQADAJADAIQAFAHAIAGIAOAKIALAJQAEAFABAFQAAADgCADQgCACgEAAQgHAAgHgFg");
	this.shape_10.setTransform(73.9,-74.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag7CeQgfgLgXgWQgYgVgOgfQgOgeAAgnQAAgnAMgfQAMghAXgWQAWgWAggMQAggMAmAAQAjgBAdAMQAdALAWAXQAVAVAMAfQAMAeAAAmQAAAtgOAhQgPAfgYAWQgXAUgdAKQgdAJgcAAQggABgfgLgAghiQQgOAKgKARQgJARgFAXQgEAXAAAZQAAAUACAVQADAUAFAUQAFAUAIAQQAHARALANQAKANAOAIQAMAGARAAQAVABAPgKQAOgKAJgPQAJgRAEgSQADgVAAgTQAAgvgHgkQgHgkgMgYQgNgYgRgMQgRgLgUAAQgTAAgPAKg");
	this.shape_11.setTransform(34.525,-74.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA+D9IgWgDIgXgEQgMgBgNgBIgWABIgTACIgQABIgPABIgLgBQgEgCAAgFQAAgFAFgBIALgDIAOgEQAGgCAGgDQAFgEAEgGQAEgGABgKIACgoIABgnIAAgmIAAgiIAAgkIAAgaQgBgSgDgKQgEgLgGgFQgGgEgKgCIgWgDIgGgCQgDgCAAgEQAAgGALgCIANgBIATgCIAXgFIAbgKQAOgGALgGIAQgLIAKgJQADgEADAAQADABAAAHIgBASIgDAZIgGAxIgFA1IgFA4IgEAzIgDApIgBAaIABASIAEALIAFAIIAFAFIAIAEIAKADIALACIAJACIAMADQAFAAAAAEQAAAHgPAAIgVgCgAgKioQgIgBgGgGQgGgEgEgJQgEgIAAgMQAAgOAEgIQAEgJAGgFQAHgFAHgCQAHgDAGAAQAUAAANALQAMALAAAUQAAAOgEAJQgEAIgHAGQgHAFgHACQgJACgHAAQgGAAgHgCg");
	this.shape_12.setTransform(5.525,-83.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgcELQgcgPgRgZQgPgWgHgeQgHgeAAgeQAAgjAFghQAGggAGgaIALguQAGgUAAgJQAAgGgEgCQgDgCgGAAIgKABIgNABIgQABIgPAAQgNAAAAgHQAAgHAJgCQAIgDAOgDIAZgFQAZgHAQgKQARgKALgPQAMgPAIgTQAHgUAIgZQAHgVAHgJQAHgKAJABQAIgBADAHQAEAFAAAKQAAAJgEAQIgHAfIgHAhQgDAPAAAMQAAAGACAFQACAEAHAAIALAAIAMgCIAOgCIAOAAQAPAAAAAJQAAAFgEACQgEACgHAAIgMAAIgPADIgQACIgPAHQgKAEgGAHQgGAIgEAIQgGAMgHAVQgFAWgGAaQgGAagDAcQgEAcAAAbQAAAmAGAbQAHAbAKARQALASAQAIQAPAJASAAQAOAAAKgFQAKgEAGgGQAHgHACgHQADgJAAgHQAAgJgFgHIgLgMQgHgHgFgHQgFgHAAgLQAAgOAJgJQAJgKAQAAQAHAAAHADQAGACAFAGQAFAFADAJQADAJAAAMQAAAUgGAVQgGAUgOAQQgOARgVAKQgWAKggAAQgiAAgcgOg");
	this.shape_13.setTransform(-21.025,-79.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABlD/QgMgFgIgHQgJgHgFgJQgHgIgDgIQgKgTgFgWIgIgsQgGAJgKANQgLANgPAMQgPAMgWAJQgUAIgaAAQgcAAgTgIQgVgIgMgNQgNgOgGgSQgFgSgBgVQABgVAHgWQAIgXATgSQASgRAfgLQAdgLArAAIATABIARACIAMACIAIABIgGg8IgDgbIgDgcIgEgcIgDgaQgGgbgQgQQgQgQgaAAQgOAAgKAFQgKAFgIAIQgHAHgDAKQgEAKAAAJQAAALAFAHQAFAGAHAGIAQAKQAIAEAIAHQAGAGAFAIQAFAJABANQAAARgMALQgMAKgRAAQgNAAgLgFQgMgFgIgKQgJgKgEgPQgGgOAAgUQABgWAGgVQAGgVANgQQANgRAVgJQATgKAdAAQAXAAATAGQAQAGAOALQAOAKAKANQAKAOAGAPQAHAPAEAPIAIAdIAEAWIAGAhIAHAoIAGAqIAHArIAHAlIAEAdIAEARIAEAWQACALAFAKQAEAJAFAGQAHAGAJAAQAFAAAEgCQAEgDADgEIADgKIAAgLIAAgNIAAgMIABgJQACgEAEAAQADAAADAFQADAEABAGIABALIAAAJQAAAMgBAQQgDAPgGAPQgHAOgPAKQgPAJgSAAQgSAAgMgFgAhLACQgRAFgLALQgMAKgGAQQgHAPAAAVQAAASAGANQAGAMAKAHQAJAHANACQALADALAAQATAAAPgFQAQgGAMgHQAMgIAIgHIAJgJIgEgrIgCgRIgBgPIgDgMIgBgHIgIgCIgNgDIgSgCIgUgBQgSAAgQAEg");
	this.shape_14.setTransform(-53.85,-71.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ADZCeQgJgFgLgHIgVgNQgLgHgJgEQgPgHgLgEIgVgGIgNgFQgEgDAAgEQAAgEADgCIAKgEQAHgCAGgGQAGgHADgLIAEgNIADgRIACgUIAAgSIgBgXQgBgNgDgLQgFgLgIgHQgHgIgOAAQgJAAgHADQgHADgFAFQgFAFgDAFIgGALQgGAPgDAWQgDAUAAAVQAAAVAHANQAHAMAMAGIAGADQACACAAADQAAAHgLAAIgPgCIgTgEIgXgEQgKgCgMAAIgPAAIgQABIgNgBQgGgCAAgEQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAgBIAFgBIAHgCIAIgCQAHgDAFgIQAFgIADgKIADgYIABgbIgBgXQgBgMgDgMQgFgLgIgHQgHgIgOAAQgIAAgHADQgGAEgGAFQgEAGgEAHQgEAHgCAHQgCAHgDATQgDATgBAfQAAAZAEATQAEASAKAIQAIAFAHADIAPADIALADQAEACAAAEQAAACgDACQgEACgJAAIgPgBIgUgDIgWgCIgVgCIgRABIgRABIgQABIgSABIgMgBIgHgCIgCgDIgBgDQAAgEAEgCQAFgDAGgBIANgCIAPgDQAIgCAHgIQAIgJAAgQIgCgkIgEglIgGghIgGgaQgEgMgIgHQgHgHgRAAIgJAAIgHAAQgGAAgEgCQgCgCAAgEQAAgFAFgBQADgCAJgCIAUgEQAMgDAQgHQAQgGAJgGIAQgLIAIgIQAEgDABAAQADAAADAKIAFAYIADAgIADAgQAEgGAGgKQAHgLAKgKQALgKAOgHQAPgHASAAQAPAAAMAFQAMAFAIAIQAIAIAGAKQAFAKACAKQAIgMAIgKQAJgLALgHQALgIANgEQANgFAPAAQAXAAAOAIQAPAIAJAOQAHANADARQADARAAARIgBAeIgCAdIgCAdIgBAYQAAALABAKQACAJADAJQAFAJAHAFQAFAGAGADIAJAGQAEADAAAEQAAAEgDACQgDACgFAAQgGAAgKgFg");
	this.shape_15.setTransform(-100.1,-74.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA+D9IgWgDIgXgEQgMgBgNgBIgWABIgTACIgQABIgPABIgLgBQgEgCAAgFQAAgFAFgBIALgDIAOgEQAGgCAGgDQAFgEAEgGQAEgGABgKIACgoIABgnIAAgmIAAgiIAAgkIAAgaQgBgSgDgKQgEgLgGgFQgGgEgKgCIgWgDIgGgCQgDgCAAgEQAAgGALgCIANgBIATgCIAXgFIAbgKQAOgGALgGIAQgLIAKgJQADgEADAAQADABAAAHIgBASIgDAZIgGAxIgFA1IgFA4IgEAzIgDApIgBAaIABASIAEALIAFAIIAFAFIAIAEIAKADIALACIAJACIAMADQAFAAAAAEQAAAHgPAAIgVgCgAgKioQgIgBgGgGQgGgEgEgJQgEgIAAgMQAAgOAEgIQAEgJAGgFQAHgFAHgCQAHgDAGAAQAUAAANALQAMALAAAUQAAAOgEAJQgEAIgHAGQgHAFgHACQgJACgHAAQgGAAgHgCg");
	this.shape_16.setTransform(-136.475,-83.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AC7DmIgSgMQgMgHgPgIQgQgJgWgHQgQgFgRgDQgRgEgWgBQgNgBAAgGQAAgGAJAAIAOAAIASgBQAOgBAIgIQAKgHAFgVIACgUIACgbIADgdIAAgcIAAgbQgBgPgCgRQgCgRgDgQQgFgQgIgNQgHgNgMgHQgMgJgRAAQgPAAgMAIQgLAHgJAOQgKANgHASQgHARgDAWQgEAWgBAWQgCAXABAXQgBATACASIAEAhQACAOAEAMQADAMAFAGQAGAJAJAFIALAGIAKAEQADACABACQAAACgEACQgEACgGAAIgQgBIgTgDIgTgCIgUgCIgVABIgTABIgRACIgMAAQgOAAAAgIQAAgEADgCQABgCAHgBIAJAAIAIgBIAIgBIAKgBQAMgBADgHQAFgGAAgMQAAgTgEgcQgDgcgGghIgNhGIgRhMQgEgUgGgKQgFgKgLAAQgEAAgGACIgLAEIgKAFIgKABQgGAAAAgFQAAgFADgCIAIgDIAWgKQALgGANgKQANgLALgLIARgWIAMgQQAEgHADAAQADAAADAKQACAIADAPIAGAhIAFAmIANBZQACgMAFgPQAEgPAHgQQAIgQAKgQQALgPANgNQANgMASgHQARgIAVAAQAbAAATAKQAUAKAMASQANARAGAZQAGAZAAAdQAAAagDAaIgGA0IgHAyQgDAXAAAVQAAAMADAKQABAJAFAIQAFAHAHAGIANAKIAMAJQAFAFgBAFQAAADgCADQgBACgFAAQgFAAgIgFg");
	this.shape_17.setTransform(-168.25,-74.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAnFGQgCgCAAgDQAAgFACgCQADgDAHgDIAIgCIALgDIAOgEIAMgFQAHgEAGgHQAFgGAAgNIAAgIIgCgIIgNgyIgNgwIgNgqIgLggQgIgVgKgKQgLgLgNgGIgLgEIgSgHIgYgIIgZgJIgXgGIgSgFIgQA0IgQAxIgMAnIgHAYIgEARIgBANQAAALADAGQADAHAFAFQAFAEAHAEIANAGIALAHQAEADAAAFQAAADgCACQgDACgGABQgGAAgJgDIgUgIIgXgIIgZgJIgUgFIgVgDIgRgDIgNgBQgJgBgDgBQgEgDAAgFQAAgDACgCQACgCAGgBIAIABIAMAAQARAAALgCQALgCAIgFQAIgEAFgHQAFgHAEgJIAKgYIANgiIAOglIAOglIAKgfIAHgTIAIgaIALgkIANgoIAMgpIAJgkQADgQAAgJQAAgHgEgFQgEgEgJgBIgRACIgTACIgTACIgRABQgNAAAAgKQAAgHANgCIATgBIAXgFIAYgFQAMgEALgFQASgJANgIIAVgPIAOgLQAGgFADABQADAAADAFIAGAPIAGAQIAEALIARA0IAUA9IAXBEIAXBIIAYBEIAWBCIAUA5IAQAtQAJAXAIAOQAIANAJAJQAJAHALAEQALAEAPAEQAKABAAAHQAAADgEABQgDACgFAAIgUgBIgbAAIgbABIgdACQgYABgUAEIgkAIIgcAHQgNADgHAAQgEAAgCgBgAghjYIgFAKIgFALIgEAMIgwCYIAcAKIAjAMIAgAJQAOACAHAAQAEAAADgCQADgCAAgHQAAgFgDgOIgIggIgKglIgKgkIgIgcIgEgMIgDgMIgFgQIgFgNQgDgGgCAAIgDAEg");
	this.shape_18.setTransform(-217.075,-78.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("A7GBYQazlebaFe");
	this.shape_19.setTransform(-74.45,3.7206);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248.9,-136.2,496.8,272.4);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("ABqABIAAgBQAAgqgQgTQgQgUgaAAQgTAAgLARIAACJIABABQAKAVAZAFIhrAAQAXgEAMgWIABgBIAAhHIAAgBIAAgBQAAgpgQgUQgQgUgVAAIgBAAQgXAAgLARIAACJIABABQAKAVAYAFIhrAAQAXgEAMgWIAAgBIAAiHQAAgFgCgCQgEgDgHgCIgWgEIA5gUIAPgGIAAAPIABAAQAVgOAUgBQAXABASAOQAMAHAIANQAQgTAKgHQAOgJAVAAIABAAQAYABASAOQATAPAKAXQAMAZAAAaIAAACIAAA+QAAAEACACQAEADAHACIAWADIg5AWIgPAEg");
	this.shape.setTransform(205.275,154.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AgoBbQgTgOgLgXQgLgYAAgcQAAgdALgYQALgZATgNQASgOAWgBQAWABATAOQATANALAZQALAYAAAbQAAAcgLAZQgLAXgTAPQgSANgXAAQgVAAgTgNgAgdg9QgMAVAAAoQAAApAJAUQAMAaAWAAQAUAAALgeQAKgXAAghIAAgBQAAgmgOgXQgNgUgQAAIAAAAQgRAAgMAUg");
	this.shape_1.setTransform(176.475,154.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AAEBoQgYAAgSgNQgTgOgMgYQgLgZABgcQgBgbALgYQALgZAUgNQASgOAWgBIAAAAQAWABATAOQAUANAIATIACAGIABABQADAJAAAIQAAAKgHAIQgHAIgKAAQgKAAgHgIQgHgHAAgKQAAgKAHgIQAEgDAFgDIgJgLQgLgNgRgBIgBAAQgYgBgMAVQgNATAAAqIAAAAQAAArAQAVQARATARAAIABAAQAWAAAQgTQAHgJAFgNIAWAGIgCAFQgJAWgVAQQgSANgaAAg");
	this.shape_2.setTransform(156.1,154.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AgQASQgHgIAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAIQgHAGgKAAQgJAAgHgGg");
	this.shape_3.setTransform(139.875,162.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("Ag0COQAXgEAMgWIAAgBIAAjYQAAgEgCgCQgFgDgIgCIgUgDIA3gWIAQgEIAAEAIAAABQAKAWAZAEg");
	this.shape_4.setTransform(127.65,149.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("Ag1COQAXgEAMgWIAAgBIAAiHQAAgEgBgDQgEgCgJgCIgVgEQAOgGAqgPIAPgFIAACwIABABQAKAWAYAEgAgQhkQgHgHAAgKQAAgKAHgIQAHgGAJAAQAKAAAHAGQAHAIAAAKQAAAKgHAHQgHAIgKgBQgJABgHgIg");
	this.shape_5.setTransform(115.45,149.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066CC").s().p("Ag4BbQgTgOgLgXQgKgYAAgfQAAgbALgYQALgYATgNQATgOAZgBQAUABAfAKQAtAQAMAGIgVADQgIACgEAEQgCABAAAFIAABxQAAAFACACQAEADAHABIAWAFQgMAFgtAPQgfALgUAAQgZAAgUgNgAgvg8QgJAVAAAnQAAApAJAUQAMAaAVAAIAGAAQAOAAAOgOIACgDQADgDAAgKIAAhxQAAgKgCgDIgCgCQgPgOgOgBIgGAAQgVABgMAZg");
	this.shape_6.setTransform(98.925,154.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066CC").s().p("ABqABIAAgBQAAgqgQgTQgQgUgaAAQgTAAgLARIAACJIABABQAKAVAZAFIhrAAQAXgEAMgWIABgBIAAhHIAAgBIAAgBQAAgpgQgUQgQgUgVAAIgBAAQgXAAgLARIAACJIABABQAKAVAYAFIhrAAQAXgEAMgWIAAgBIAAiHQAAgFgCgCQgEgDgHgCIgWgEIA5gUIAPgGIAAAPIABAAQAVgOAUgBQAXABASAOQAMAHAIANQAQgTAKgHQAOgJAVAAIABAAQAYABASAOQATAPAKAXQAMAZAAAaIAAACIAAA+QAAAEACACQAEADAHACIAWADIg5AWIgPAEg");
	this.shape_7.setTransform(69.375,154.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066CC").s().p("AgbCPQgdgDgPgPQgIgIAAgKQAAgLAHgGQAHgIAKAAQAKAAAHAIQAIAJAAAJQAAAJgHAGQAEACAHABQAGgBAKgCQARgEAIgLQAKgPAAgcIAAgDIAAgIQgSAMgVAAQgXAAgSgNQgTgOgLgYQgLgYAAgeQAAgbALgYQALgYATgNQATgOAagBQATABAfAKQAuARALAFIgVADQgIACgEAEQgCABAAAFIAACcQgDApgcAVQgbASgaABIgFAAgAgvhiQgJAUAAAqQAAAoAMAUQAMAUAYAAQASAAAKgPQAFgHAAgGIAAgBIAAhtQAAgKgCgDIgCgCQgPgOgRgBIgDAAQgVABgMAZg");
	this.shape_8.setTransform(40.425,157.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066CC").s().p("AgvCCQgTgLgOgTQgOgTgIgaQgIgaAAgdQAAgbAIgaQAIgbAOgSQAOgUATgLQAUgLAVAAQAVAAATAOQATAOALAZQALAWAAAeIAABMIAAABQAKAVAaAFIhIAAIAAgGQgIAEgIACIgLABIgNgBQgSgCgPgQQgLgLgFgQQgDgKAAgMIAAgHQACgUAGgKQAGgLAOgIQAQgKAMAAQANABAPAGIAGAEQgCglgMgNQgNgOgRAAQgUAAgNAMQgQAOgIAgQgHAeAAAcIAAACQAAAdAHAaQAJAcARAWQALAOAWAAQASAAARgOIATAOQgIAGgIAEQgTAMgUAAQgVAAgUgLgAgHgpQgGAFgEAMQgDAHAAAOIAAAHIAAAKQACARAJAIQAJAKAKAAIAFAAQAOgBAKgGIAAg9QgBgLgIgJQgJgJgLAAQgIAAgJAHg");
	this.shape_9.setTransform(17.575,157.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066CC").s().p("AgzCMIgDAAQgWAAgRgSQgIgJAAgJQAAgKAHgHQAHgHAKAAQAKAAAHAIQAHAIAAAKQAAAIgGAHQAFACAFAAQAHAAAFgFIAFgGIATgxIhAivIAAAAIgBgCQgMgVgWgEIBrAAQgjAQAAAIIAAACIABABIAtB9IAyh9IAAgBIABgDQgBgLgjgMIBcAAQgXAEgMAWIAAABIhWDYIgCAGQgNAcgaACIgCAAg");
	this.shape_10.setTransform(-6.925,158.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066CC").s().p("AAEBoQgYAAgTgNQgSgOgMgYQgLgZABgcQgBgbALgYQAMgYASgOQATgOAWgBQAVAAAUANQAOAIAKASQAIANABAPQAAAhgeAUQgYASgiAAIgagCQAFAUAIAMQANATAUAAIABAAQAWAAAQgTQAGgJAGgOIAWAHIgCAEQgQAcgOALQgXANgVAAgAgcg+QgKAPgDAXIgBAbIABAMIAiAAIALgBQATgEAHgKQALgSAAgTQAAgVgLgMQgKgKgRgCIAAAAQgUAAgLAUg");
	this.shape_11.setTransform(-27.6,154.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066CC").s().p("Ag0COQAXgEAMgWIAAgBIAAjYQAAgEgCgCQgFgDgIgCIgUgDIA3gWIAQgEIAAEAIAAABQAKAWAZAEg");
	this.shape_12.setTransform(-43.8,149.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066CC").s().p("Ag1COQAXgEAMgWIAAgBIAAjYQAAgEgCgCQgEgDgHgCIgWgDIA4gWIAPgEIAAEAIABABQAKAWAYAEg");
	this.shape_13.setTransform(-56,149.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066CC").s().p("Ag4BbQgTgOgLgXQgKgYAAgfQAAgbALgYQALgYATgNQATgOAZgBQAUABAfAKQAtAQAMAGIgVADQgIACgEAEQgCABAAAFIAABxQAAAFACACQAEADAHABIAWAFQgMAFgtAPQgfALgUAAQgZAAgUgNgAgvg8QgJAVAAAnQAAApAJAUQAMAaAVAAIAGAAQAOAAAOgOIACgDQADgDAAgKIAAhxQAAgKgCgDIgCgCQgPgOgOgBIgGAAQgVABgMAZg");
	this.shape_14.setTransform(-72.525,154.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066CC").s().p("AhNhLIAAgBIgBgBQgMgVgWgFIBrAAQgjAQAAAJIAAABIABACIAwBuIAxhuIAAgCIAAgCQAAgLgjgNIBaAAQgXAFgMAVIAAACIhNCzg");
	this.shape_15.setTransform(-94.875,154.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066CC").s().p("AhgCPQAXgFAMgVIAAgCIAAjRQAAgEgCgCQgEgEgIgCIgVgDQAMgGAsgQQAggKAVgBIACAAQAVABAUAOQATANALAYQALAYAAAbQAAAegLAYQgLAYgTAOQgTANgWAAQgVAAgSgMIAAA9IAAACQAKAUAYAGgAgUhtIgCACQgCADAAAKIAABtIAAABQAAAGAFAHQAKAPASAAIABAAQAXAAAMgUQAMgUAAgoQAAgqgKgUQgMgZgXgBQgRABgPAOg");
	this.shape_16.setTransform(-117.175,157.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AACgnIg+CTIhPizIAAgBIgBgCQgMgVgXgEIBsAAQgjAQgBAIIABACIAAACIAzBsIA+iPIA+CQIAwhtIAAgCIAAgCQAAgLgjgMIBZgBQgWAEgMAWIgBACIhMCzg");
	this.shape_17.setTransform(-144.45,154.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0066CC").s().p("AAEBoQgYAAgTgNQgSgOgLgYQgLgZAAgcQAAgbALgYQALgYASgOQATgOAWgBQAWAAASANQAOAIALASQAIANABAPQAAAhgdAUQgZASgiAAIgagCQAFAUAIAMQANATAUAAIABAAQAWAAARgTQAFgJAGgOIAWAHIgCAEQgPAcgPALQgXANgVAAgAgdg+QgJAPgDAXIAAAbIAAAMIAiAAIALgBQATgEAHgKQALgSAAgTQAAgVgLgMQgJgKgSgCIAAAAQgTAAgNAUg");
	this.shape_18.setTransform(-171.35,154.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0066CC").s().p("AhaBmQAXgEALgWIAAgBIAAiBQAAgEgCgCQgDgDgIgCIgVgEQAMgGAsgPQAggLAVAAIABAAQAfAAAWAVQATAVAAAWIAAABQAAAKgIAIQgGAHgLAAQgKAAgHgHQgHgHAAgKIAAgBQAAgKAHgHQAHgHAJAAQgBgIgRgJQgJgFgNAAIgEAAQgVACgMAJIgFAFQgCACAAAKIAACBIAAABQAKAVAXAFg");
	this.shape_19.setTransform(-190.6,153.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0066CC").s().p("AgOCRQgWAAgTgOQgTgOgLgYQgLgXAAgcQAAgeALgXQALgZATgNQASgOAXAAQAVAAASANIAAg1QAAgEgCgCQgDgCgKgCIgTgFIA4gVIAPgFIAADxQAAAFACACQADACAJADIAVAEIg5AVQgfALgVAAIgCAAgAgsgVQgMAUAAAoQAAAqAJAUQAMAaAYAAQARAAAPgOIACgDQACgEAAgJIAAhuQAAgGgFgHQgKgPgTAAIAAAAQgXAAgMAUg");
	this.shape_20.setTransform(-210.925,150.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0066CC").s().p("AAsABIAAgBQAAgpgQgUQgQgUgUAAIgBAAQgXAAgLARIAACJIABABQAKAVAYAFIhrAAQAXgEAMgWIAAgBIAAiHQAAgFgCgCQgEgCgHgDIgWgEIA5gUIAPgGIAAAPIABAAQASgOAXgBQAWABASAOQATANALAZQALAYAAAbIAAACIAAA+QAAAEADACQAEADAHACQARADAFAAQgLAGguAQIgPAEg");
	this.shape_21.setTransform(-234.275,154.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066CC").s().p("Ag4BbQgTgOgLgXQgKgYAAgfQAAgbALgYQALgYATgNQATgOAZgBQAUABAfAKQAtAQAMAGIgVADQgIACgEAEQgCABAAAFIAABxQAAAFACACQAEADAHABIAWAFQgMAFgtAPQgfALgUAAQgZAAgUgNgAgvg8QgJAVAAAnQAAApAJAUQAMAaAVAAIAGAAQAOAAAOgOIACgDQADgDAAgKIAAhxQAAgKgCgDIgCgCQgPgOgOgBIgGAAQgVABgMAZg");
	this.shape_22.setTransform(-257.025,154.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag1CPQAXgFAMgVIABgCIAAiPIgoAAIgBAAQgYABgMANIAig3IgBAKQAAAMANAAIABAAIAAAAIAeAAIAAg1QAAgEgDgDQgDgDgJgCIgVgDQARgIAngNIAPgGIAABfIAoAAIACAAQAXgBAMgNIghA2IABgJQAAgMgOAAIAAAAIgBAAIgeAAIAACPIABACQAKAUAZAGg");
	this.shape_23.setTransform(-56.175,104.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag4BaQgTgNgLgYQgKgXAAgfQAAgcALgYQALgXATgNQATgPAZAAQAUAAAfAMQAtAPAMAFIgVAEQgIADgEACQgCACAAAFIAABxQAAAFACACQAEADAHACIAWADQgMAGgtAPQgfAMgUAAQgZAAgUgPgAgvg8QgJAUAAAoQAAApAJAUQAMAaAVAAIAGAAQAOAAAOgPIACgCQADgDAAgKIAAhxQAAgJgCgEIgCgDQgPgOgOAAIgGAAQgVAAgMAag");
	this.shape_24.setTransform(-75.125,108.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAEBpQgYAAgTgPQgSgNgMgYQgLgZABgcQgBgbALgZQAMgYASgNQATgPAWAAQAVAAAUANQAOAIAKASQAIANABAPQAAAhgeAUQgYASgiAAIgagBQAFASAIAMQANAVAUgBIABAAQAWABAQgVQAGgHAGgOIAWAGIgCAEQgQAcgOAKQgXAPgVAAgAgcg/QgKAQgDAWIgBAcIABAMIAiABIALgBQATgFAHgKQALgSAAgTQAAgVgLgMQgKgLgRgBIAAAAQgUAAgLATg");
	this.shape_25.setTransform(-108.15,108.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("ABqABIAAgBQAAgqgQgUQgQgTgaAAQgTAAgLARIAACIIABACQAKAVAZAFIhrAAQAXgFAMgVIABgCIAAhHIAAAAIAAgBQAAgpgQgVQgQgTgVAAIgBAAQgXAAgLARIAACIIABACQAKAVAYAFIhrAAQAXgFAMgVIAAgCIAAiHQAAgEgCgCQgEgDgHgBIgWgFIA5gVIAPgFIAAAPIABAAQAVgPAUAAQAXAAASAPQAMAIAIALQAQgSAKgHQAOgJAVAAIABAAQAYAAASAPQATAPAKAWQAMAaAAAaIAAABIAAA+QAAAFACACQAEADAHABIAWAFIg5AVIgPAFg");
	this.shape_26.setTransform(-136.025,108.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag0CPQAWgFANgVIAAgCIAAjXQgBgFgCgCQgDgDgJgCIgUgDIA3gVIAQgGIAAEBIAAACQAKAUAZAGg");
	this.shape_27.setTransform(-171.8,104.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag1CPQAYgFALgVIAAgCIAAiHQAAgEgBgCQgFgDgIgCIgVgEQAOgGAqgPIAPgFIAACwIABACQAKAUAYAGgAgQhjQgHgIAAgKQAAgKAHgHQAHgIAJAAQAKAAAHAIQAHAHAAAKQAAAKgHAIQgHAGgKAAQgJAAgHgGg");
	this.shape_28.setTransform(-184,104.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag4BaQgTgNgLgYQgKgXAAgfQAAgcALgYQALgXATgNQATgPAZAAQAUAAAfAMQAtAPAMAFIgVAEQgIADgEACQgCACAAAFIAABxQAAAFACACQAEADAHACIAWADQgMAGgtAPQgfAMgUAAQgZAAgUgPgAgvg8QgJAUAAAoQAAApAJAUQAMAaAVAAIAGAAQAOAAAOgPIACgCQADgDAAgKIAAhxQAAgJgCgEIgCgDQgPgOgOAAIgGAAQgVAAgMAag");
	this.shape_29.setTransform(-200.525,108.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("ABqABIAAgBQAAgqgQgUQgQgTgaAAQgTAAgLARIAACIIABACQAKAVAZAFIhrAAQAXgFAMgVIABgCIAAhHIAAAAIAAgBQAAgpgQgVQgQgTgVAAIgBAAQgXAAgLARIAACIIABACQAKAVAYAFIhrAAQAXgFAMgVIAAgCIAAiHQAAgEgCgCQgEgDgHgBIgWgFIA5gVIAPgFIAAAPIABAAQAVgPAUAAQAXAAASAPQAMAIAIALQAQgSAKgHQAOgJAVAAIABAAQAYAAASAPQATAPAKAWQAMAaAAAaIAAABIAAA+QAAAFACACQAEADAHABIAWAFIg5AVIgPAFg");
	this.shape_30.setTransform(-230.075,108.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAFBpQgZAAgSgPQgUgNgLgYQgKgZgBgcQABgbAKgZQALgYAUgNQASgPAWAAQAVAAAUANQAOAIALASQAHANABAPQAAAhgeAUQgZASggAAIgbgBQAFASAHAMQAOAVAUgBIAAAAQAYABAPgVQAHgHAFgOIAVAGIgBAEQgPAcgOAKQgYAPgVAAgAgcg/QgKAQgDAWIgBAcIABAMIAiABIAMgBQASgFAHgKQALgSAAgTQAAgVgLgMQgJgLgSgBIAAAAQgUAAgLATg");
	this.shape_31.setTransform(-258.7,108.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAEBpQgYgBgTgOQgSgNgLgZQgMgYABgcQgBgbAMgYQALgZASgOQATgOAWABQAWAAASAMQAOAIALASQAIANABAPQAAAhgdAUQgZASgiAAIgagCQAFAUAIALQANAVAUAAIABAAQAWAAARgVQAFgHAGgPIAWAHIgCAEQgQAdgOAJQgXAOgVABgAgdg/QgJAQgDAXIgBAbIABAMIAiAAIALAAQATgFAHgKQALgSAAgTQAAgVgLgMQgKgLgRgBIAAAAQgUAAgMATg");
	this.shape_32.setTransform(240.5,63.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag3BTQgNgLgEgIIgCgEQgCgEAAgFQAAgKAIgHQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAKgHAIIgEADIADACQAQAMAVAAIABAAQARABAMgKQAKgIABgUIAAgEQgBgTgSgGIgxgPQgdgIgHggIgBgLQAAgSAPgSQARgWAfABQAeAAAUATQAHAHAEAGQADAGAAAHQAAAKgHAHQgHAHgKAAQgKAAgIgHQgHgIAAgKQAAgKAHgHIAEgCQgLgHgPABIAAAAQgMAAgKAJQgIAIAAAQIAAADQAAAPAQAGIArAMQATAIAKAHQARAPABAeQgCAXgTAUQgQAQgmABQggAAgZgWg");
	this.shape_33.setTransform(221.075,63.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag4BaQgTgNgLgYQgKgXAAgfQAAgbALgZQALgXATgOQATgOAZABQAUgBAfAMQAtAPAMAFIgVAFQgIACgEACQgCACAAAFIAAByQAAAEACACQAEADAHACIAWADQgMAGgtAQQgfALgUAAQgZgBgUgOgAgvg8QgJAVAAAnQAAApAJAUQAMAaAVAAIAGAAQAOAAAOgPIACgCQADgDAAgJIAAhyQAAgKgCgCIgCgEQgPgOgOABIgGAAQgVgBgMAag");
	this.shape_34.setTransform(201.325,63.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAFBpQgZgBgSgOQgUgNgKgZQgMgYAAgcQAAgbAMgYQAKgZAUgOQASgOAWABQAWAAASAMQAOAIAMASQAHANABAPQAAAhgdAUQgZASgiAAIgagCQAFAUAHALQAOAVAUAAIAAAAQAXAAARgVQAFgHAGgPIAVAHIgBAEQgPAdgOAJQgYAOgVABgAgdg/QgJAQgCAXIgBAbIAAAMIAiAAIAMAAQASgFAIgKQAKgSAAgTQAAgVgLgMQgJgLgRgBIgBAAQgTAAgNATg");
	this.shape_35.setTransform(179.45,63.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag1COQAXgEAMgWIAAgBIAAjXQAAgFgCgCQgEgDgHgBIgWgFIA4gUIAPgGIAAEBIABABQAKAWAYAEg");
	this.shape_36.setTransform(163.25,59.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhgCOQAXgEAMgVIAAgCIAAjRQAAgFgCgCQgEgCgIgCIgVgFQAMgFAsgPQAggMAVABIACAAQAVgBAUAOQATAOALAXQALAZAAAbQAAAegLAXQgLAZgTANQgTAOgWABQgVAAgSgNIAAA9IAAACQAKAUAYAFgAgUhuIgCAEQgCACAAAKIAABsIAAACQAAAGAFAIQAKAOASAAIABAAQAXAAAMgUQAMgVAAgoQAAgpgKgUQgMgagXABQgRgBgPAOg");
	this.shape_37.setTransform(145.425,67.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgoBaQgTgNgLgYQgLgXAAgbQAAgeALgYQALgZATgOQASgOAWABQAWgBATAOQATAOALAZQALAYAAAbQAAAcgLAYQgLAYgTAOQgSAOgXABQgVgBgTgOgAgdg9QgMAVAAAoQAAApAJAUQAMAaAWAAQAUAAALgdQAKgZAAggIAAgBQAAglgOgYQgNgUgQAAIAAAAQgRAAgMAUg");
	this.shape_38.setTransform(113.525,63.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhiABQAIBBATAbIADAFQADAEAMAIQAVAPAdAAIABAAIAMAAQAcgGAOgXQAKgRAAgTIAAgFQgBgXgegNIg/gcQgvgWAAgqIAAgEQABgdAUgSQAUgUAfAAIABAAQAdAAASAXIACAAQAOgBAFgWIAABrQgLgtgMgQIgGgIIgKgJQgOgLgOAAIAAAAQgSAAgMAKQgMAMAAATIAAACQAAAZAjAPIBCAeQAqATADAwIAAAIQgGAjgZAXQgZAYgoABIgCAAQgMgBgZgHIgjgPIgCgBQgTACgGAWg");
	this.shape_39.setTransform(91.125,59.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgQARQgHgGAAgLQAAgJAHgHQAHgIAJABQAKgBAHAIQAHAHAAAJQAAALgHAGQgHAIgKAAQgJAAgHgIg");
	this.shape_40.setTransform(61.725,71.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag1COQAXgEAMgWIABgBIAAiPIgoAAIgBAAQgYACgMAMIAig3IgBAKQAAAMANAAIABAAIAAAAIAeAAIAAg1QAAgEgDgDQgDgDgJgBIgVgFQARgHAngNIAPgGIAABfIAoAAIACAAQAXgBAMgNIghA2IABgJQAAgMgOAAIAAAAIgBAAIgeAAIAACPIABABQAKAWAZAEg");
	this.shape_41.setTransform(47.075,59.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag3BTQgNgLgEgIIgCgEQgCgEAAgFQAAgKAIgHQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAKgHAIIgEADIADACQAQAMAVAAIABAAQARABAMgKQAKgIABgUIAAgEQgBgTgSgGIgxgPQgdgIgHggIgBgLQAAgSAPgSQARgWAfABQAeAAAUATQAHAHAEAGQADAGAAAHQAAAKgHAHQgHAHgKAAQgKAAgIgHQgHgIAAgKQAAgKAHgHIAEgCQgLgHgPABIAAAAQgMAAgKAJQgIAIAAAQIAAADQAAAPAQAGIArAMQATAIAKAHQARAPABAeQgCAXgTAUQgQAQgmABQggAAgZgWg");
	this.shape_42.setTransform(29.225,63.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag4BaQgTgNgLgYQgKgXAAgfQAAgbALgZQALgXATgOQATgOAZABQAUgBAfAMQAtAPAMAFIgVAFQgIACgEACQgCACAAAFIAAByQAAAEACACQAEADAHACIAWADQgMAGgtAQQgfALgUAAQgZgBgUgOgAgvg8QgJAVAAAnQAAApAJAUQAMAaAVAAIAGAAQAOAAAOgPIACgCQADgDAAgJIAAhyQAAgKgCgCIgCgEQgPgOgOABIgGAAQgVgBgMAag");
	this.shape_43.setTransform(9.475,63.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhgCOQAXgEAMgVIAAgCIAAjRQAAgFgCgCQgEgCgIgCIgVgFQAMgFAsgPQAggMAVABIACAAQAVgBAUAOQATAOALAXQALAZAAAbQAAAegLAXQgLAZgTANQgTAOgWABQgVAAgSgNIAAA9IAAACQAKAUAYAFgAgUhuIgCAEQgCACAAAKIAABsIAAACQAAAGAFAIQAKAOASAAIABAAQAXAAAMgUQAMgVAAgoQAAgpgKgUQgMgagXABQgRgBgPAOg");
	this.shape_44.setTransform(-14.025,67.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAFBpQgZgBgSgOQgUgNgLgZQgKgYgBgcQABgbAKgYQALgZAUgOQASgOAWABQAVAAAUAMQAOAIALASQAHANABAPQAAAhgeAUQgZASggAAIgbgCQAFAUAHALQAOAVAUAAIAAAAQAYAAAPgVQAHgHAFgPIAVAHIgBAEQgPAdgOAJQgYAOgVABgAgcg/QgKAQgCAXIgCAbIABAMIAiAAIAMAAQASgFAIgKQAKgSAAgTQAAgVgLgMQgKgLgQgBIgBAAQgUAAgLATg");
	this.shape_45.setTransform(-45.75,63.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAsApIAAgBQAAgpgQgUQgQgUgUAAIgBAAQgXAAgLARIAACJIABABQAKAVAYAFIhrAAQAXgEAMgWIAAgBIAAjYQAAgEgCgCQgEgDgHgCIgWgEIA5gVIAPgFIAABfIABAAQASgOAXAAQAWAAASAOQATANALAZQALAXAAAcIAAACIAAA+QAAAEADACQAEADAHACQARAEAFAAQgLAFguAQIgPAFg");
	this.shape_46.setTransform(-67.425,59.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ag1COQAXgEAMgWIABgBIAAiPIgoAAIgBAAQgYACgMAMIAig3IgBAKQAAAMANAAIABAAIAAAAIAeAAIAAg1QAAgEgDgDQgDgDgJgBIgVgFQARgHAngNIAPgGIAABfIAoAAIACAAQAXgBAMgNIghA2IABgJQAAgMgOAAIAAAAIgBAAIgeAAIAACPIABABQAKAWAZAEg");
	this.shape_47.setTransform(-88.275,59.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAsABIAAgBQAAgpgQgVQgQgTgUAAIgBAAQgXAAgLARIAACIIABACQAKAVAYAFIhrAAQAXgEAMgWIAAgCIAAiHQAAgEgCgCQgEgDgHgCIgWgDIA5gWIAPgEIAAAOIABgBQASgOAXABQAWgBASAOQATAOALAZQALAYAAAbIAAACIAAA9QAAAFADACQAEADAHACQARADAFAAQgLAFguARIgPAFg");
	this.shape_48.setTransform(-119.525,63.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag0COQAWgEANgWIAAgBIAAiHQAAgFgDgCQgEgDgIgBIgUgEQANgGAqgPIAQgFIAACwIAAABQAKAWAZAEgAgQhjQgHgIAAgKQAAgKAHgIQAHgGAJgBQAKABAHAGQAHAIAAAKQAAAKgHAIQgHAHgKAAQgJAAgHgHg");
	this.shape_49.setTransform(-137.95,59.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag3BTQgNgLgEgIIgCgEQgCgEAAgFQAAgKAIgHQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAKgHAIIgEADIADACQAQAMAVAAIABAAQARABAMgKQAKgIABgUIAAgEQgBgTgSgGIgxgPQgdgIgHggIgBgLQAAgSAPgSQARgWAfABQAeAAAUATQAHAHAEAGQADAGAAAHQAAAKgHAHQgHAHgKAAQgKAAgIgHQgHgIAAgKQAAgKAHgHIAEgCQgLgHgPABIAAAAQgMAAgKAJQgIAIAAAQIAAADQAAAPAQAGIArAMQATAIAKAHQARAPABAeQgCAXgTAUQgQAQgmABQggAAgZgWg");
	this.shape_50.setTransform(-164.525,63.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("ABqABIAAgBQAAgqgQgUQgQgTgaAAQgTAAgLARIAACIIABACQAKAVAZAFIhrAAQAXgEAMgWIABgCIAAhGIAAgBIAAgBQAAgpgQgVQgQgTgVAAIgBAAQgXAAgLARIAACIIABACQAKAVAYAFIhrAAQAXgEAMgWIAAgCIAAiHQAAgEgCgCQgEgDgHgCIgWgDIA5gWIAPgEIAAAOIABgBQAVgOAUABQAXgBASAOQAMAJAIAMQAQgTAKgHQAOgIAVAAIABAAQAYgBASAOQATAQAKAXQAMAYAAAbIAAACIAAA9QAAAFACACQAEADAHACIAWADIg5AWIgPAFg");
	this.shape_51.setTransform(-191.625,63.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhaBmQAWgEANgWIAAgBIAAiBQgBgEgCgCQgDgDgIgCIgVgEQAMgGAsgPQAggLAVAAIABAAQAfAAAWAVQATAVgBAWIAAABQABAKgIAIQgGAHgLAAQgKAAgHgHQgHgHAAgKIAAgBQAAgKAHgHQAHgHAJAAQgBgIgRgJQgJgFgNAAIgEAAQgVACgLAJIgGAFQgCACAAAKIAACBIAAABQAKAVAYAFg");
	this.shape_52.setTransform(-219.3,63.575);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgoBaQgTgNgLgYQgLgXAAgbQAAgeALgYQALgZATgOQASgOAWABQAWgBATAOQATAOALAZQALAYAAAbQAAAcgLAYQgLAYgTAOQgSAOgXABQgVgBgTgOgAgdg9QgMAVAAAoQAAApAJAUQAMAaAWAAQAUAAALgdQAKgZAAggIAAgBQAAglgOgYQgNgUgQAAIAAAAQgRAAgMAUg");
	this.shape_53.setTransform(-239.475,63.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AhaCOQAWgEANgWIAAgBIAAjRQgBgEgCgCQgDgEgIgCIgVgDQALgGAtgPQAggMAVAAIABAAQAfAAAWAWQATAVgBAVIAAACQABAJgIAJQgGAGgLAAQgKAAgHgGQgGgIAAgJIAAgBQAAgKAGgHQAHgHAJAAQgCgJgQgIQgFgDgRgDIgEAAQgWADgKAJIgGAEQgCADAAAKIAABQIAkAAIABAAQAXgBANgNIgiA1IABgJQAAgMgNAAIgBAAIAAAAIgaAAIAABvIAAABQAKAWAYAEg");
	this.shape_54.setTransform(-258.9,59.55);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag0COQAXgEAMgWIAAgBIAAjYQAAgEgCgCQgFgDgIgCIgUgDIA3gWIAQgEIAAEAIAAABQAKAWAZAEg");
	this.shape_55.setTransform(205.05,14.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag1COQAXgEAMgWIAAgBIAAiHQAAgEgBgDQgEgCgJgCIgVgEQAOgGAqgPIAPgFIAACwIABABQAKAWAYAEgAgQhkQgHgHAAgKQAAgKAHgIQAHgGAJAAQAKAAAHAGQAHAIAAAKQAAAKgHAHQgHAIgKgBQgJABgHgIg");
	this.shape_56.setTransform(192.85,14.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4BbQgTgOgLgXQgKgYAAgfQAAgbALgYQALgYATgNQATgOAZgBQAUABAfAKQAtAQAMAGIgVADQgIACgEAEQgCABAAAFIAABxQAAAFACACQAEADAHABIAWAFQgMAFgtAPQgfALgUAAQgZAAgUgNgAgvg8QgJAVAAAnQAAApAJAUQAMAaAVAAIAGAAQAOAAAOgOIACgDQADgDAAgKIAAhxQAAgKgCgDIgCgCQgPgOgOgBIgGAAQgVABgMAZg");
	this.shape_57.setTransform(176.325,18.65);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("ABqABIAAgBQAAgqgQgTQgQgUgaAAQgTAAgLARIAACJIABABQAKAVAZAFIhrAAQAXgEAMgWIABgBIAAhHIAAgBIAAgBQAAgpgQgUQgQgUgVAAIgBAAQgXAAgLARIAACJIABABQAKAVAYAFIhrAAQAXgEAMgWIAAgBIAAiHQAAgFgCgCQgEgDgHgCIgWgDIA5gVIAPgGIAAAPIABAAQAVgOAUgBQAXABASAOQAMAHAIANQAQgTAKgHQAOgJAVAAIABAAQAYABASAOQATAPAKAXQAMAZAAAaIAAACIAAA+QAAAEACACQAEADAHACIAWADIg5AWIgPAEg");
	this.shape_58.setTransform(146.775,18.65);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAFBoQgZAAgSgNQgUgOgKgYQgMgZAAgcQAAgbAMgYQAKgYAUgOQASgOAWgBQAWAAATANQANAIAMASQAHANABAPQAAAhgeAUQgYASghAAIgbgCQAFAUAHAMQAOATAUABIAAAAQAXgBARgTQAGgJAFgOIAVAHIgBAEQgQAcgNALQgYANgVAAgAgdg+QgJAPgCAXIgBAbIAAAMIAiAAIAMgBQASgEAIgKQAKgSAAgTQAAgVgLgMQgKgKgQgCIgBAAQgTAAgNAUg");
	this.shape_59.setTransform(118.15,18.65);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAsApIAAgBQAAgpgQgUQgQgUgUAAIgBAAQgXAAgLARIAACJIABABQAKAVAYAFIhrAAQAXgEAMgWIAAgBIAAjYQAAgEgCgCQgEgDgHgCIgWgEIA5gVIAPgFIAABfIABAAQASgOAXAAQAWAAASAOQATANALAZQALAXAAAcIAAACIAAA+QAAAEADACQAEADAHACQARAEAFAAQgLAFguAQIgPAFg");
	this.shape_60.setTransform(85.325,14.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("Ag1COQAXgEAMgWIABgBIAAiPIgoAAIgBAAQgYABgMANIAig2IgBAJQAAAMANAAIABAAIAAAAIAeAAIAAg2QAAgEgDgCQgDgCgJgDIgVgDQARgIAngOIAPgEIAABeIAoAAIACAAQAXgBAMgNIghA3IABgKQAAgMgOAAIAAAAIgBAAIgeAAIAACPIABABQAKAWAZAEg");
	this.shape_61.setTransform(64.475,14.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Ag1COQAXgEAMgWIAAgBIAAiHQAAgEgCgDQgDgCgJgCIgVgEQAOgGAqgPIAPgFIAACwIABABQAKAWAYAEgAgQhkQgHgHAAgKQAAgKAHgIQAHgGAJAAQAKAAAHAGQAHAIAAAKQAAAKgHAHQgHAIgKgBQgJABgHgIg");
	this.shape_62.setTransform(49.85,14.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AACgnIg/CTIhOizIgBgBIAAgCQgMgVgXgEIBsAAQgkAQAAAIIABACIABACIAxBsIA/iPIA+CQIAvhtIABgCIAAgCQABgLgkgMIBZgBQgWAEgMAWIAAACIhOCzg");
	this.shape_63.setTransform(26.95,18.65);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("Ag3BTQgNgLgEgIIgCgEQgCgEAAgFQAAgKAIgHQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAKgHAIIgEADIADACQAQAMAVAAIABAAQARAAAMgJQAKgIABgUIAAgDQgBgVgSgFIgxgQQgdgGgHggIgBgLQAAgTAPgSQARgWAfAAQAeAAAUAUQAHAGAEAIQADAFAAAGQAAAKgHAHQgHAIgKAAQgKAAgIgIQgHgHAAgKQAAgKAHgHIAEgCQgLgHgPAAIAAAAQgMABgKAIQgIAJAAAQIAAACQAAAQAQAHIArALQATAHAKAIQARAPABAfQgCAWgTAUQgQAQgmAAQggAAgZgVg");
	this.shape_64.setTransform(-10.325,18.65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAEBoQgYAAgSgNQgUgOgLgYQgLgZAAgcQAAgbALgYQALgYAUgOQASgOAWgBQAVAAAUANQAOAIAKASQAIANABAPQAAAhgeAUQgZASggAAIgbgCQAFAUAHAMQAOATAUABIABAAQAXgBAPgTQAHgJAFgOIAWAHIgCAEQgQAcgOALQgXANgVAAgAgcg+QgKAPgDAXIgBAbIABAMIAiAAIALgBQATgEAHgKQALgSAAgTQAAgVgLgMQgJgKgSgCIAAAAQgUAAgLAUg");
	this.shape_65.setTransform(-29.75,18.65);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAsBbIgBAAQgSANgXAAQgWAAgSgNQgTgOgLgYQgLgZAAgcIAAAAIAAg+QAAgFgDgCQgEgCgHgDIgWgDIA5gVIAPgGIAABoIAAAAQAAAqAQAVQAQATAUAAIABAAQAXAAALgRIAAiIIgBgCQgKgUgYgGIBrAAQgXAEgMAWIAAACIAACHQAAAEACACQAEADAHACQARADAFAAQgLAGguAQIgPAEg");
	this.shape_66.setTransform(-52.175,18.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("Ag3BTQgNgLgEgIIgCgEQgCgEAAgFQAAgKAIgHQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAKgHAIIgEADIADACQAQAMAVAAIABAAQARAAAMgJQAKgIABgUIAAgDQgBgVgSgFIgxgQQgdgGgHggIgBgLQAAgTAPgSQARgWAfAAQAeAAAUAUQAHAGAEAIQADAFAAAGQAAAKgHAHQgHAIgKAAQgKAAgIgIQgHgHAAgKQAAgKAHgHIAEgCQgLgHgPAAIAAAAQgMABgKAIQgIAJAAAQIAAACQAAAQAQAHIArALQATAHAKAIQARAPABAfQgCAWgTAUQgQAQgmAAQggAAgZgVg");
	this.shape_67.setTransform(-73.075,18.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("Ag3BTQgNgLgEgIIgCgEQgCgEAAgFQAAgKAIgHQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAKgHAIIgEADIADACQAQAMAVAAIABAAQARAAAMgJQAKgIABgUIAAgDQgBgVgSgFIgxgQQgdgGgHggIgBgLQAAgTAPgSQARgWAfAAQAeAAAUAUQAHAGAEAIQADAFAAAGQAAAKgHAHQgHAIgKAAQgKAAgIgIQgHgHAAgKQAAgKAHgHIAEgCQgLgHgPAAIAAAAQgMABgKAIQgIAJAAAQIAAACQAAAQAQAHIArALQATAHAKAIQARAPABAfQgCAWgTAUQgQAQgmAAQggAAgZgVg");
	this.shape_68.setTransform(-91.725,18.65);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("Ag1COQAYgEAMgWIAAgBIAAiHQAAgEgCgDQgFgCgIgCIgVgEQAOgGAqgPIAPgFIAACwIABABQAKAWAZAEgAgQhkQgHgHAAgKQAAgKAHgIQAHgGAJAAQAKAAAHAGQAHAIAAAKQAAAKgHAHQgHAIgKgBQgJABgHgIg");
	this.shape_69.setTransform(-107.15,14.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgOCRQgWAAgTgOQgTgOgLgYQgLgXAAgcQAAgeALgXQALgZATgNQASgOAXAAQAVAAASANIAAg1QAAgEgCgCQgDgCgKgCIgTgFIA4gVIAPgFIAADxQAAAFACACQADACAJADIAVAEIg5AVQgfALgVAAIgCAAgAgsgVQgMAUAAAoQAAAqAJAUQAMAaAYAAQARAAAPgOIACgDQACgEAAgJIAAhuQAAgGgFgHQgKgPgTAAIAAAAQgXAAgMAUg");
	this.shape_70.setTransform(-134.825,14.625);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("Ag4BbQgTgOgLgXQgKgYAAgfQAAgbALgYQALgYATgNQATgOAZgBQAUABAfAKQAtAQAMAGIgVADQgIACgEAEQgCABAAAFIAABxQAAAFACACQAEADAHABIAWAFQgMAFgtAPQgfALgUAAQgZAAgUgNgAgvg8QgJAVAAAnQAAApAJAUQAMAaAVAAIAGAAQAOAAAOgOIACgDQADgDAAgKIAAhxQAAgKgCgDIgCgCQgPgOgOgBIgGAAQgVABgMAZg");
	this.shape_71.setTransform(-157.025,18.65);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAsApIAAgBQAAgpgQgUQgQgUgUAAIgBAAQgXAAgLARIAACJIABABQAKAVAYAFIhrAAQAXgEAMgWIAAgBIAAjYQAAgEgCgCQgEgDgHgCIgWgEIA5gVIAPgFIAABfIABAAQASgOAXAAQAWAAASAOQATANALAZQALAXAAAcIAAACIAAA+QAAAEADACQAEADAHACQARAEAFAAQgLAFguAQIgPAFg");
	this.shape_72.setTransform(-180.375,14.625);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAFBoQgZAAgSgNQgUgOgKgYQgMgZAAgcQAAgbAMgYQAKgYAUgOQASgOAWgBQAWAAASANQAOAIAMASQAHANABAPQAAAhgeAUQgYASghAAIgbgCQAFAUAHAMQAOATAUABIAAAAQAXgBARgTQAGgJAFgOIAVAHIgBAEQgQAcgNALQgYANgVAAgAgdg+QgJAPgCAXIgBAbIAAAMIAiAAIAMgBQASgEAIgKQAKgSAAgTQAAgVgLgMQgKgKgQgCIgBAAQgTAAgNAUg");
	this.shape_73.setTransform(-213.95,18.65);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AhNhLIAAgBIgBgBQgMgVgWgFIBrAAQgjAQAAAJIAAABIABACIAwBuIAxhuIAAgCIAAgCQAAgLgjgNIBaAAQgXAFgMAVIAAACIhNCzg");
	this.shape_74.setTransform(-234.625,19.025);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgPAqIAAhTIAfAAIAABTg");
	this.shape_75.setTransform(-250.525,4.325);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("Ag1CMQAXgEAMgWIABgBIAAjhIgBgBQgMgWgXgEIBrAAQgZAFgKAVIgBABIAADhIABABQAKAVAZAFg");
	this.shape_76.setTransform(-262.325,14.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgeCpQgMgPAAgWQAAgMAEgLQADgJAGgIQAGgHAJgFQAJgDALAAQAOAAAIAEQAJAFAGAHQAGAIACAIQABAKAAAIQAAANgDALQgEAKgGAHQgIAIgIADQgJAEgLAAQgVAAgMgOgAgUhMQgKgDgGgGQgHgHgEgKQgEgLgBgOQAAgYAPgPQANgQAYAAQAKAAAIADQAJADAHAGQAHAHAEAJQAEAJAAANQAAAcgPAPQgOAQgVAAQgKAAgJgDg");
	this.shape_77.setTransform(85.75,-107.85);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgcELQgcgPgRgZQgPgWgHgeQgHgdAAgeQAAgkAFghQAGggAGgaIALgvQAGgUAAgIQAAgHgEgBQgDgBgGgBIgKABIgNAAIgQABIgPABQgNAAAAgHQAAgHAJgCQAIgEAOgCIAZgGQAZgFAQgLQARgKALgPQAMgPAIgTQAHgUAIgZQAHgWAHgIQAHgJAJAAQAIAAADAFQAEAHAAAJQAAAJgEAQIgHAfIgHAhQgDAQAAALQAAAGACAFQACAEAHAAIALAAIAMgCIAOgCIAOAAQAPAAAAAJQAAAFgEACQgEACgHAAIgMAAIgPACIgQAEIgPAFQgKAFgGAIQgGAHgEAHQgGANgHAVQgFAWgGAaQgGAZgDAdQgEAcAAAcQAAAlAGAbQAHAbAKASQALARAQAJQAPAHASABQAOAAAKgFQAKgEAGgGQAHgHACgIQADgHAAgIQAAgJgFgHIgLgMQgHgGgFgIQgFgHAAgLQAAgOAJgKQAJgJAQAAQAHAAAHADQAGACAFAGQAFAFADAJQADAJAAALQAAAVgGAVQgGAUgOAQQgOARgVAKQgWALgggBQgiAAgcgOg");
	this.shape_78.setTransform(61.225,-118.85);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("Ag1C6QgcgNgVgYQgUgZgMgjQgLgjAAgsQAAgUADgUQAEgVAHgTQAHgTAIgQQAJgQAKgMQAPgTAQgMQAQgNAQgHQARgIARgDQAQgDATAAQAUAAARAFQASAGANAKQANALAHAOQAIAOAAASQAAAQgFAMQgFALgHAIQgHAHgKADQgJADgIAAQgLAAgJgDQgLgEgGgHQgIgHgDgLQgFgMAAgOIgBgVQgBgKgEgHQgEgIgHgFQgHgFgLAAQgOAAgOAKQgOAIgMASQgLASgHAbQgHAbAAAjQAAAqAIAhQAJAiAQAXQAQAYAYAMQAXAMAdAAQAUAAAPgGQAPgHAKgLQAKgMAHgPQAEgPAAgRQAAgSgEgMIgJgVIgJgOQgFgFAAgFQAAgFAFAAQAFAAAJAGQAIAFAIAKQAIALAGAPQAFAQAAATQABAggLAYQgLAZgSAQQgSARgaAJQgZAIgdAAQgiAAgcgNg");
	this.shape_79.setTransform(29.85,-116.725);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("ABmD/QgNgFgIgHQgJgHgFgJQgGgIgEgIQgKgTgFgWIgJgsQgEAJgLANQgLANgPAMQgPAMgWAJQgUAIgaAAQgcAAgUgIQgTgIgNgNQgMgOgHgSQgFgSAAgVQAAgVAIgWQAIgXASgSQASgRAfgLQAdgLArAAIATABIARACIAMACIAHABIgEg8IgEgbIgDgcIgDgcIgFgaQgFgbgQgQQgRgQgZAAQgNAAgLAFQgKAFgIAIQgHAHgEAKQgDAKAAAJQAAALAFAHQAFAGAIAGIAPAKQAJAEAGAHQAIAGAEAIQAGAJgBANQAAARgLALQgMAKgRAAQgNAAgLgFQgMgFgIgKQgJgKgFgPQgEgOAAgUQgBgWAHgVQAGgVANgQQANgRAUgJQAVgKAcAAQAYAAARAGQARAGAPALQANAKAKANQAJAOAHAPQAGAPAFAPIAHAdIAFAWIAGAhIAGAoIAIAqIAHArIAFAlIAGAdIACARIAFAWQADALAEAKQADAJAGAGQAHAGAJAAQAFAAAEgCQAEgDADgEIACgKIABgLIAAgNIAAgMIABgJQABgEAFAAQAEAAACAFQACAEABAGIACALIAAAJQAAAMgCAQQgCAPgHAPQgGAOgOAKQgQAJgTAAQgQAAgMgFgAhMACQgPAFgMALQgLAKgHAQQgHAPAAAVQAAASAGANQAGAMAKAHQAKAHALACQAMADAMAAQARAAAQgFQARgGALgHQAMgIAIgHIAKgJIgFgrIgCgRIgBgPIgCgMIgBgHIgJgCIgOgDIgSgCIgTgBQgTAAgQAEg");
	this.shape_80.setTransform(-3.15,-110.675);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgcELQgcgPgRgZQgPgWgHgeQgHgdAAgeQAAgkAFghQAGggAGgaIALgvQAGgUAAgIQAAgHgEgBQgDgBgGgBIgKABIgNAAIgQABIgPABQgNAAAAgHQAAgHAJgCQAIgEAOgCIAZgGQAZgFAQgLQARgKALgPQAMgPAIgTQAHgUAIgZQAHgWAHgIQAHgJAJAAQAIAAADAFQAEAHAAAJQAAAJgEAQIgHAfIgHAhQgDAQAAALQAAAGACAFQACAEAHAAIALAAIAMgCIAOgCIAOAAQAPAAAAAJQAAAFgEACQgEACgHAAIgMAAIgPACIgQAEIgPAFQgKAFgGAIQgGAHgEAHQgGANgHAVQgFAWgGAaQgGAZgDAdQgEAcAAAcQAAAlAGAbQAHAbAKASQALARAQAJQAPAHASABQAOAAAKgFQAKgEAGgGQAHgHACgIQADgHAAgIQAAgJgFgHIgLgMQgHgGgFgIQgFgHAAgLQAAgOAJgKQAJgJAQAAQAHAAAHADQAGACAFAGQAFAFADAJQADAJAAALQAAAVgGAVQgGAUgOAQQgOARgVAKQgWALgggBQgiAAgcgOg");
	this.shape_81.setTransform(-39.575,-118.85);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AC7DmIgTgMQgLgHgQgIQgPgJgWgHQgRgFgQgDQgRgEgWgBQgMgBAAgGQgBgGAJAAIANAAIASgBQAOgBAKgIQAJgHAEgVIADgUIADgbIABgdIABgcIgBgbQAAgPgBgRQgDgRgEgQQgEgQgHgNQgIgNgMgHQgMgJgRAAQgPAAgMAIQgLAHgKAOQgJANgHASQgHARgDAWQgEAWgBAWQgCAXAAAXQAAATACASIAEAhQADAOADAMQADAMAFAGQAHAJAHAFIANAGIAKAEQAAABABAAQAAAAABABQAAAAAAABQAAABAAAAQAAACgDACQgEACgGAAIgQgBIgSgDIgUgCIgUgCIgUABIgTABIgSACIgMAAQgOAAAAgIQAAgEACgCQADgCAFgBIAJAAIAIgBIAJgBIAKgBQALgBAFgHQADgGAAgMQAAgTgCgcQgEgcgGghIgNhGIgRhMQgEgUgGgKQgFgKgKAAQgGAAgFACIgLAEIgLAFIgJABQgHAAAAgFQAAgFAFgCIAHgDIAVgKQAMgGANgKQANgLAKgLIASgWIAMgQQAEgHADAAQADAAACAKQADAIADAPIAGAhIAGAmIAMBZQACgMAEgPQAEgPAIgQQAHgQALgQQALgPAMgNQAPgMARgHQARgIAWAAQAaAAATAKQAUAKAMASQANARAGAZQAGAZAAAdQAAAagDAaIgHA0IgGAyQgDAXAAAVQAAAMACAKQACAJAEAIQAFAHAIAGIAOAKIALAJQAFAFAAAFQAAADgDADQgBACgEAAQgHAAgHgFg");
	this.shape_82.setTransform(-76.05,-113.675);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("Ag7CeQgfgLgXgWQgYgVgOgfQgOgfAAgnQAAglAMggQAMghAXgWQAWgXAggLQAggNAmAAQAjAAAdAMQAdAMAWAVQAVAWAMAfQAMAeAAAnQAAAsgOAgQgPAhgYAUQgXAVgdAKQgdAKgcAAQgggBgfgKgAghiQQgOAKgKARQgJARgFAXQgEAXAAAZQAAAUACAUQADAWAFATQAFAUAIARQAHAQALANQAKANAOAHQAMAIARgBQAVAAAPgJQAOgKAJgQQAJgPAEgUQADgTAAgUQAAgwgHgjQgHgkgMgYQgNgXgRgNQgRgLgUAAQgTAAgPAKg");
	this.shape_83.setTransform(-115.425,-113.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgrFOQgjgHgfgPQgggPgcgWQgbgXgVgfQgUgggMgoQgMgpAAgyQAAg7ANguQANgtAVghQAVghAdgVQAbgWAfgNQAfgNAggFQAfgGAbAAQAVABASABIAgAEIAaADIAWACQASAAAMgHQAMgIAGgWIAFgcIADgYQACgLACgGQADgHAFAAQAFAAABAFIABANIAAARIgBAeQAAAiADAXQACAZAEARQADASAEAMIAHAWIAFARQAEAJAAAHQAAAGgFAAQgEgBgFgEIgLgMIgLgOIgKgNQgQgVgQgRQgRgQgVgMQgUgLgZgGQgagGggAAQgjAAggAOQggAPgYAdQgYAdgNAsQgPAsAAA6QAAA4AKAqQAKAqAQAhQAQAfAWAXQAVAVAXAOQAXANAXAHQAYAFAWAAQAhAAAZgIQAagHAUgOQATgOAPgRQAOgRAJgTQAKgUAFgTQAGgUACgRIADgUIACgUQAAgJACgFQABgGAEABQAKgBAAAkIgBAYQgCAPgEASQgEATgHAUQgIAUgMAUQgMATgRATQgSARgYAOQgYAOggAIQggAIgoAAQghAAgjgHg");
	this.shape_84.setTransform(-160.475,-118.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(1,1,1).p("AwZBVQQ/lUP0FU");
	this.shape_85.setTransform(-42.025,-52.4775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270.8,-175.5,541.7,351.1);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.106)").s().p("AhlFgQgSgHgNgMQgNgMgHgRQgHgRAAgVQAAgWAHgSQAGgTAMgNQALgOAQgHQAPgIATAAQAPAAAMAFQALAFAIAIQAHAIAEALQAEAKAAALQAAAJgDAJQgDAIgFAGQgGAGgIAEQgJADgKAAQgMAAgHgEQgIgEgFgFQgFgGgDgGIgGgNIgGgKQgDgDgFAAQgGAAgEAEQgFAEgDAHQgEAHgBAIQgCAJAAAJQAAARAGAOQAGAOALAKQAKAJAPAGQAPAFARAAQAeAAAWgNQAWgNAQgVQARgUALgYQALgZAHgWIALgnIAEgWQAKg+ADguQADgsAAgaIAAgPIgBgMIAAgJIgGAQIgHAPIgJARQgGALgKALQgJAJgNAIQgNAIgQAGQgPAFgSAAQgfAAgXgNQgXgNgQgVQgRgWgLgcQgLgdgHgeQgIgfgFgeIgLg5QgCgLgFgEQgEgDgGAAIgNABIgLACQgDAAgCgCQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgGAHgCIAcgIIAXgIIATgHIATgJQAWgLAQgKIAcgRIAUgMQAJgEAGAAQADAAACABQACACAAADQAAAFgFAEIgNAJQgKAFgOALQgJAHgFAIQgGAIgCAKQgDAJAAAMIgBAYQABAaADAaQADAZAFAWQAFAWAGASQAGARAGAMQAMAaASAPQATAPAZAAQASAAAOgJQANgJAKgOQAJgOAGgSQAGgSAEgTQADgTABgRIACgfQAAgjgGgSQgGgSgLgHIgLgGIgLgDIgMgDIgIgCQgIgCgDgDQgDgCAAgFQAAgFAEgDQADgDAFAAIAcACQARABAXAAIAcgBIAegEIAagFIASgFIAIgCIAFgBQAEAAADACQADADAAADQAAAEgBADIgFAEIgQALQgIAEgEAJQgDAHgCALIgCAaIgDAkIgDAyQgDAggEAlQgEAkgHAnQgHAogKAqQgKAqgOArQgPAsgTAjQgTAigXAYQgYAZgaANQgcAMgeAAQgWAAgSgGg");
	this.shape.setTransform(210.125,59.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.106)").s().p("AgvC3QgfgOgWgYQgVgYgMgiQgLgiAAgoQAAgjAIgdQAIgeANgXQAOgXARgSQASgRATgLQAUgLAUgGQATgFATAAQATAAAVAFQATAFARAMQARAMALATQAKAUAAAdQAAAagHATQgIATgMAOQgMAPgQAIQgQAJgQAFQgRAGgPACQgQACgLAAQgRAAgQgDQgRgCgJgDQABAcAIAZQAHAaANATQAOATASAMQAVALAaAAQASAAAPgGQANgGAIgLQAJgLAFgOQAEgOAAgPIgBgTQgCgKgDgJIgEgKIgBgHQAAgHAHAAQADAAAFADQADADAFAHQAEAIAFAOQAEANgBAOQAAAagIAVQgIAUgRAOQgPANgWAIQgWAHgcAAQgoAAgfgNgAgCimQgQAIgNAUQgNAUgJAjQgJAhAAAzIAVAFQAMACASAAQATAAASgIQARgHAMgNQAMgPAHgTQAHgUAAgYQAAgWgFgOQgFgPgHgJQgIgIgKgEQgKgEgKAAQgOAAgOAIg");
	this.shape_1.setTransform(170.5,40.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.106)").s().p("Ag8FJQgFgCAAgHQAAgJAOAAIAUgBQALgCAIgCQAGgDADgDQADgEACgEIACgLIABgKIgBgUIgCghIgCgpIgFguIgDgwIgFgsIgDgnIgDgbIgEghIgDgiIgEghIgEgcQgDgMgFgHQgEgHgLAAQgIAAgLAEIgVAIIgUAJQgKAEgGAAQgEAAgDgCQgDgCAAgFQAAgGAHgGIAIgEIAOgHIAWgMQAMgHATgMQASgNAQgPIAbgbIAUgZIAMgSIAGgJQADgDACAAQADAAABAEIAAAIIAAATIAAAiIABAqIABAsIACBFIAEBRIAEBSIAFBPIAEBBIADArQABAVAEAMQAEAMAIAHQAIAHALAEIAcAIQAFACADACQABACAAADQAAADgDACQgCADgHAAIgMgBIgXgCIgcgCIgegBIgZABIgYADIgXACIgSABQgEAAgFgBg");
	this.shape_2.setTransform(140.15,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.106)").s().p("Ag8FJQgFgCAAgHQAAgJAOAAIAVgBQALgCAHgCQAGgDADgDQADgEACgEIADgLIAAgKIAAgUIgDghIgCgpIgEguIgFgwIgEgsIgEgnIgCgbIgDghIgEgiIgEghIgEgcQgCgMgFgHQgGgHgJAAQgJAAgKAEIgWAIIgVAJQgKAEgFAAQgEAAgCgCQgEgCAAgFQAAgGAHgGIAIgEIAPgHIAVgMQAMgHASgMQAUgNAPgPIAbgbIAUgZIANgSIAGgJQABgDADAAQADAAABAEIABAIIAAATIAAAiIAAAqIABAsIACBFIAEBRIAEBSIAFBPIAEBBIACArQACAVAEAMQAFAMAHAHQAHAHAMAEIAbAIQAHACABACQACACAAADQAAADgDACQgCADgHAAIgMgBIgXgCIgcgCIgegBIgZABIgYADIgXACIgRABQgGAAgEgBg");
	this.shape_3.setTransform(114.65,28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.106)").s().p("ABmD/QgNgFgIgHQgJgHgGgJQgFgIgEgIQgKgTgFgWIgJgsQgEAJgLANQgLANgPAMQgQAMgUAJQgVAIgZAAQgdAAgUgIQgTgIgNgNQgNgOgFgSQgHgSABgVQgBgVAJgWQAHgXATgSQATgRAdgLQAegLArAAIATABIARACIAMACIAHABIgEg8IgDgbIgEgcIgDgcIgFgaQgFgbgQgQQgQgQgaAAQgNAAgLAFQgLAFgGAIQgIAHgEAKQgDAKAAAJQAAALAFAHQAFAGAIAGIAPAKQAJAEAGAHQAHAGAGAIQAEAJAAANQAAARgLALQgMAKgRAAQgNAAgLgFQgLgFgJgKQgIgKgGgPQgEgOAAgUQAAgWAGgVQAGgVANgQQANgRAUgJQAVgKAcAAQAYAAARAGQASAGAOALQANAKAKANQAJAOAHAPQAGAPAFAPIAHAdIAFAWIAGAhIAGAoIAIAqIAHArIAFAlIAFAdIADARIAFAWQADALAEAKQADAJAHAGQAFAGAKAAQAFAAAEgCQAEgDACgEIADgKIACgLIgBgNIAAgMIABgJQABgEAFAAQADAAADAFQADAEAAAGIACALIABAJQgBAMgCAQQgCAPgHAPQgGAOgPAKQgOAJgUAAQgQAAgMgFgAhMACQgPAFgMALQgLAKgIAQQgGAPAAAVQAAASAGANQAGAMAKAHQAJAHAMACQAMADAMAAQARAAARgFQAPgGAMgHQAMgIAIgHIAJgJIgEgrIgCgRIgCgPIgBgMIgBgHIgJgCIgOgDIgSgCIgTgBQgTAAgQAEg");
	this.shape_4.setTransform(86.6,43.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.106)").s().p("AAcENQgFgIgIgOIgPgiIgSgrIgOghIgUgxIgZg6Igbg9Igbg6QgPgcgMgUQgOgWgPgQQgPgQgZgJQgOgFgNgCQgNgCgQgBQgPgBgIgDQgIgDAAgHQAAgHAGgDQAHgDAPAAIAPABIAPAAIARABIASAAQAYAAAYgDQAYgDAVgEQAXgFATgFIAjgKIAagIQAKgDAEAAQAHAAAAAFQAAADgCACQgDACgLAEIgLAFIgPAGIgPAHIgOAHQgHADgDAGQgDAFAAAHQAAAHADAMIAJAbIANAfIAPAhIAQAgIAOAcIARAhIATAiIAUAjIASAeIAOAUQAGAIADAAQAEAAAEgIIALgUIAMgbIALgeIAJgbIAKghQAEgRADgPQADgPAAgJQAAgIgDgFQgEgFgFgCQgHgCgIgBIgSgBIgQABIgRAAQgPAAAAgJQAAgFADgCQAEgCAIgBIASgCIAfgEQASgDAUgFQAWgGAVgKQAZgMASgMIAdgWIAUgRQAIgGAGAAQAHAAAAAHQAAAGgIAIIgWAVIgfAgQgTASgTAbQgMAQgMAWQgMAVgMAZIgWAzIgYA0IgmBZIgYA9IgPAkQgFALgDAAQgEAAgFgIg");
	this.shape_5.setTransform(40.15,33.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.106)").s().p("AhmCwQgGgKgHgRIgQgnIgRguIgQguIgPgrIgMgjIgHgUQgFgLgHgFQgGgDgIAAQgJAAgIACQgIACgGAAIgHgCQgDgBAAgFQAAgGAFgCQAEgCAIgCIAQgEIAWgGIAZgIQANgEALgGQASgIANgHIAXgNIAQgJQAHgEAEAAQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQACABAAAEQAAADgDADIgHAEIgIAGIgIAFQgGAFgCAHQgCAHAAAHQAAAIAEARIAJAmIAMArIANAoIAKAeQAFALABAAQACAAAFgLIAMgbIAPgmIARgrIAPgpIANgfIAFgIQACgEADABQADgBADAEIAFAIIAOAbIASAiIASAjIARAfIANAWQAFAIACAAQACAAADgLIAIgaIAJglIAJgmIAGghIADgTQAAgHgDgCQgCgEgGABIgMABQgGABgHAAQgFAAgBgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgCQAGgCAPgBQAPAAAYgEQAZgFAQgFQAQgFAJgBQAIAAAAAHQAAAEgGADIgOAEIgSAGIgMAFQgFADgEAFQgEAEgDAGIgFAPIgGAXIgJAhIgLApIgMArIgMApIgNAjIgLAYQgGAJgEAAQgFAAgHgHQgHgIgIgLIgSgaIgSgfQgVglgXgtIgEANIgIAXIgMAeIgLAdIgKAaIgGAQIgMAeIgNAdQgGAOgGAIQgFAJgDAAQgEAAgGgLg");
	this.shape_6.setTransform(-37.825,45.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.106)").s().p("AgvC3QgfgOgWgYQgWgYgKgiQgMgiAAgoQAAgjAIgdQAIgeANgXQANgXASgSQARgRAUgLQAUgLAUgGQAUgFASAAQATAAAVAFQATAFARAMQAQAMAMATQAKAUAAAdQAAAagHATQgIATgMAOQgNAPgPAIQgQAJgQAFQgRAGgPACQgQACgLAAQgRAAgQgDQgRgCgJgDQACAcAHAZQAHAaANATQANATAUAMQATALAbAAQATAAAOgGQANgGAIgLQAJgLAFgOQAEgOAAgPIgBgTQgCgKgDgJIgEgKIAAgHQgBgHAHAAQADAAAEADQAFADADAHQAGAIADAOQAFANAAAOQAAAagJAVQgIAUgRAOQgPANgWAIQgWAHgdAAQgnAAgfgNgAgCimQgPAIgOAUQgNAUgIAjQgKAhABAzIAUAFQAMACARAAQAUAAASgIQAQgHANgNQAMgPAHgTQAHgUAAgYQAAgWgFgOQgEgPgIgJQgIgIgJgEQgLgEgKAAQgNAAgPAIg");
	this.shape_7.setTransform(-80.35,40.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.106)").s().p("AiUDyQgDgCAAgEQAAgFAFgCIAMgFIAOgDQAIgCAMgFQALgFAFgIQAEgJAAgRIgBgRIgCgeIgCgmIgEgqIgEgrIgDgnIgEgiIgCgYQgCgKgDgGQgCgGgEgEQgEgDgFAAQgFgCgGAAIgPAAIgEAAIgFgBIgEgCQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgEADgCIAIgCQASgCAOgEQAOgEAOgKQAIgHAKgLQAJgLAGgMQAEgJAFAAQAFAAABADIABAHIgBAMIAAAQIABAVQABAMADAJIADARQACAGACAAQABAAADgKIAIgaQAEgPAJgSQAHgSAMgPQANgQASgKQARgKAZAAQAWAAAQAIQAPAHAJAMQAJALAEAOQAEAOAAAMQAAASgFAOQgFAOgIAJQgJAJgKAFQgLAFgLAAQgUAAgMgKQgNgJAAgTQAAgJADgHQACgHAFgFQAEgFAHgDQAFgEAIgCQAPgFAGgGQAFgHAAgJQAAgFgCgFQgCgFgEgEQgFgEgGgDQgHgCgKAAQgUAAgPAKQgQAJgLAPQgLAQgHAUQgHAVgEAWQgFAWgCAXQgCAXAAATIACAmIADAqIAFApIAGAlIAEAcIADARQAEAQAIAGQAIAGAOAAIAMAAIAKgBQAJAAAAAHQAAAGgFACQgEACgLAAIgZABIgeABQgQAAgQACQgRACgQAEIgeAHIgYAGQgLACgGAAQgHAAgCgDg");
	this.shape_8.setTransform(-107.975,37.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.106)").s().p("AhjFNQgcgIgUgRQgVgQgMgbQgMgaAAgmQAAgiAMgZQAMgbAVgRQAVgTAcgJQAcgJAfAAQAhAAAVAEQAWAGANAFIAAhEIgChEIgCg/IgBg0IgCgkIgBgQIAAgLIgCgJQgCgEgCgCQgDgDgEAAQgFAAgHADIgNAFIgNAFQgGACgGAAIgGgBQgDgCAAgDQAAgFAEgCQADgDAGgDIALgEIAOgFIAUgKIAdgQIAbgSIASgNIAMgKQADgDADgBQADAAABAGIABANIgBA8IgBBCIgCBHIgCBIIgCBjIgCBZIgBBHIAAAtQAAARACALQADAKAFAIQAEAGAHAEIAMAGIASAEIAOADIAKACQAEABAAADQAAAGgIABIgQABIghgBQgVgCgbAAQgOAAgNABIgcADIghAEIgnABQggAAgcgIgAgzBdQgSAIgNAPQgMAPgGAVQgHAVAAAZQAAAbAGAXQAGAWAMAQQAMAQASAIQASAJAYAAQATAAANgGQAOgHAHgKQAHgKACgOQACgNAAgSIAAghIAAglIgBgmIgBgjQgLgFgQgEQgQgEgSAAQgXAAgSAIg");
	this.shape_9.setTransform(-143.325,25.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.106)").s().p("AC7DmIgTgMQgLgHgQgIQgPgJgWgHQgRgFgQgDQgRgEgWgBQgMgBAAgGQAAgGAIAAIANAAIASgBQAOgBAKgIQAJgHAEgVIADgUIADgbIABgdIABgcIgBgbQAAgPgBgRQgCgRgFgQQgEgQgHgNQgIgNgMgHQgMgJgRAAQgPAAgMAIQgLAHgKAOQgJANgHASQgHARgDAWQgEAWgBAWQgCAXAAAXQAAATACASIAEAhQADAOADAMQADAMAFAGQAHAJAHAFIANAGIAKAEQACACAAACQAAACgDACQgDACgHAAIgQgBIgSgDIgUgCIgUgCIgVABIgSABIgSACIgMAAQgOAAAAgIQAAgEACgCQACgCAGgBIAJAAIAIgBIAJgBIAKgBQAMgBAEgHQADgGAAgMQAAgTgDgcQgDgcgGghIgNhGIgRhMQgEgUgFgKQgGgKgKAAQgFAAgGACIgLAEIgLAFIgJABQgHAAAAgFQABgFAEgCIAHgDIAVgKQAMgGANgKQANgLAKgLIASgWIAMgQQAFgHACAAQADAAACAKQADAIADAPIAGAhIAFAmIANBZQACgMAEgPQAEgPAIgQQAHgQALgQQALgPAMgNQAPgMARgHQARgIAWAAQAaAAATAKQAUAKAMASQANARAGAZQAGAZAAAdQAAAagDAaIgHA0IgFAyQgEAXAAAVQAAAMACAKQADAJADAIQAFAHAIAGIANAKIAMAJQAEAFABAFQAAADgCADQgCACgEAAQgHAAgHgFg");
	this.shape_10.setTransform(-184.4,40.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.106)").s().p("AAnFGQgCgCAAgDQAAgFACgDQADgCAHgDIAIgCIALgDIAOgEIAMgFQAHgEAGgGQAFgHAAgMIAAgIIgCgJIgNgyIgNgwIgNgrIgLgfQgIgVgKgKQgLgLgNgGIgLgEIgSgHIgYgIIgZgJIgXgGIgSgFIgQA0IgQAxIgMAnIgHAYIgEARIgBANQAAALADAGQADAHAFAFQAFAFAHADIANAGIALAHQAEADAAAFQAAADgCADQgDACgGAAQgGgBgJgCIgUgHIgXgJIgZgJIgUgFIgVgDIgRgCIgNgCQgJgBgDgCQgEgBAAgGQAAgDACgCQACgDAGAAIAIABIAMABQARAAALgDQALgCAIgEQAIgFAFgHQAFgGAEgKIAKgYIANgiIAOglIAOglIAKgfIAHgUIAIgZIALgkIANgoIAMgpIAJgkQADgQAAgJQAAgHgEgFQgEgEgJAAIgRABIgTABIgTADIgRABQgNAAAAgKQAAgHANgCIATgCIAXgDIAYgHQAMgDALgGQASgIANgIIAVgPIAOgLQAGgFADABQADAAADAFIAGAPIAGAQIAEALIARA0IAUA+IAXBDIAXBHIAYBFIAWBBIAUA6IAQAuQAJAWAIAOQAIANAJAIQAJAJALADQALAFAPACQAKADAAAFQAAAEgEACQgDABgFAAIgUAAIgbAAIgbAAIgdACQgYABgUAFIgkAHIgcAHQgNADgHABQgEAAgCgCgAghjYIgFAJIgFAMIgEAMIgwCZIAcAJIAjALIAgAJQAOADAHAAQAEAAADgCQADgDAAgGQAAgFgDgOIgIggIgKglIgKgkIgIgcIgEgMIgDgMIgFgQIgFgNQgDgGgCABIgDADg");
	this.shape_11.setTransform(-233.225,36.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.106)").s().p("AgTBwQgJgJAAgPQAAgIACgHQACgHAFgEQAEgGAGgCQAGgDAHgBQAJAAAGAEQAGADADAFQAEAFACAGIABAMQAAAIgCAHQgDAHgFAFQgEAFgGACQgGADgHAAQgNAAgIgKgAgNgzQgGgCgFgEQgEgEgDgHQgDgHAAgKQAAgQAJgKQAKgKAPAAQAGAAAHACQAFACAFAEQAFAEACAGQACAHABAIQAAATgKAKQgJAKgPAAQgGAAgGgCg");
	this.shape_12.setTransform(78.55,-64.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.106)").s().p("AhkEwQAAgDADgCQACgCAFgCQALgFAHgEQAHgFAFgGQAEgHACgJQACgJABgNIAAgbIAAgkIAAgpIAAgsIAAgsIgBgoIAAghIgCgaIgBgJQgBgEgCgCQgCgCgDgBIgKgBIgLAAIgLACIgLAAIgJABIgGgBQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgEADgBIAIgCIARgCIAUgDQAJgCAHgEQAFgGAEgHQADgHABgJIADgSQACgVAEgVQAFgUAFgTQAGgTAJgPQAHgQAKgMQALgLANgHQANgGARAAQANAAAMAEQAMAEAJAJQAKAJAGAOQAFAOAAAUQAAASgEAOQgFAPgHAKQgJALgLAFQgKAGgOAAQgIAAgIgDQgGgDgFgEQgEgFgDgGQgCgGAAgHIABgKQABgFADgFQAEgFAFgEQAGgFAJgDQARgHAJgKQAHgKABgOIgCgKQgCgGgEgFQgEgFgIgEQgIgDgLAAQgOAAgLAIQgLAHgGANQgIAMgEAQQgEAQgCARIgEAhIAAAdIAAASQABAJACAHQACAHAFAFQAEAEAJAAIAPgBIAOgDIAOgDIAJgCQAHAAAAAFQAAAEgDABQgDACgHACIgJABIgJABIgNACIgQADQgHACgDACQgCACgDADQgCAEAAAGIgBAMIABAOIABAfIABApIABAxIACAxIABAsIABAiIABASQABAOAEAJQAFAJALAEIAHABIAGABIAHABIAJABQAGABADACQAEABAAAEQAAAFgFACQgGACgJAAIgOAAIgUAAQgVAAgRAEQgRAEgNAFQgNAFgIAEQgKAEgGAAQgGAAAAgEg");
	this.shape_13.setTransform(68.4,-77.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.106)").s().p("AgnBpQgVgHgPgPQgQgOgJgUQgKgVAAgaQAAgZAJgVQAHgVAPgPQAQgPAVgIQAVgIAZAAQAXAAATAHQAUAIAOAPQAPAOAIAUQAIAVAAAZQAAAegKAVQgKAWgPAOQgRANgSAHQgUAGgSAAQgWAAgUgHgAgVhgQgLAHgGALQgGAMgDAPQgDAPAAARIACAbQACAOADANQADANAFALQAFALAIAJQAHAIAIAFQAJAFALAAQAOAAAJgHQAKgGAGgKQAGgLADgNQACgNAAgNQAAgfgFgYQgFgYgIgQQgJgQgLgIQgLgHgOAAQgMAAgJAGg");
	this.shape_14.setTransform(46.15,-68.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.106)").s().p("AgnBpQgVgHgPgPQgQgOgKgUQgJgVAAgaQAAgZAIgVQAJgVAPgPQAPgPAVgIQAVgIAZAAQAXAAAUAHQATAIAOAPQAOAOAJAUQAIAVAAAZQAAAegKAVQgKAWgPAOQgRANgSAHQgTAGgTAAQgVAAgVgHgAgWhgQgJAHgHALQgGAMgDAPQgDAPAAARIABAbQADAOADANQADANAGALQAEALAIAJQAGAIAKAFQAHAFAMAAQAOAAAKgHQAJgGAGgKQAGgLACgNQADgNAAgNQAAgfgFgYQgEgYgJgQQgJgQgLgIQgLgHgNAAQgNAAgKAGg");
	this.shape_15.setTransform(9,-68.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.106)").s().p("AApCpIgOgCIgQgDIgQgBIgPAAIgNACIgKABIgKAAIgHgBQgEgBAAgDQAAgEAEAAIAHgDIAKgCQAEgBAEgCQADgDADgEQACgEABgHIABgaIABgbIAAgZIAAgXIAAgXIAAgSQgBgLgCgHQgCgHgEgDQgEgDgHgCIgPgCIgEgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgFAHAAIAIAAIANgCIAQgEQAIgCAJgEIARgIIAKgIIAHgGQAAAAABgBQABAAAAAAQABgBAAAAQAAAAABAAQACAAAAAGIgBALIgCARIgDAgIgEAkIgDAkIgDAiIgCAcIgBARIABANIADAHIADAFIAEADIAFADIAGACIAHACIAHABIAIABQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAFgKAAIgOgBgAgHhvQgFgBgEgEQgEgDgDgGQgDgGAAgHQAAgKADgFQADgGAEgEQAEgDAFgBIAJgCQANAAAJAHQAIAIAAANQAAAJgDAGQgDAGgEADQgFAEgFACIgKABIgJgBg");
	this.shape_16.setTransform(-10.325,-74.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.106)").s().p("AgoDbQgDgBAAgFQAAgFAJAAIAOgCQAIAAAEgCQAEgCADgCIACgGIACgGIAAgHIAAgOIgCgVIgBgcIgCgfIgEgfIgCgeIgCgZIgCgSIgDgXIgCgXIgCgVIgEgTQgBgIgDgEQgEgFgGAAQgGAAgHACIgOAGIgOAGQgHACgEABQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBQAAgEAFgDIAGgEIAJgEIAOgHIAUgOQANgJAKgJIASgTIAOgRIAHgLIAFgGQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABIABAFIAAAMIAAAYIAAAcIABAdIABAtIADA2IACA3IAEA1IACArIACAdQABAOADAIQACAIAGAEQAEAFAIADIASAFIAGADIABADIgBAEIgGABIgJAAIgQgBIgSgBIgUgBIgRABIgQABIgOACIgNAAIgGgBg");
	this.shape_17.setTransform(-27.4,-76.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.106)").s().p("AgnBpQgVgHgPgPQgQgOgKgUQgJgVAAgaQAAgZAIgVQAJgVAPgPQAPgPAVgIQAVgIAYAAQAYAAAUAHQATAIAPAPQAOAOAIAUQAIAVAAAZQAAAegKAVQgKAWgQAOQgPANgUAHQgSAGgTAAQgVAAgVgHgAgWhgQgKAHgGALQgGAMgDAPQgDAPAAARIABAbQACAOAEANQADANAGALQAEALAHAJQAIAIAJAFQAHAFALAAQAOAAALgHQAJgGAGgKQAGgLACgNQADgNAAgNQAAgfgFgYQgFgYgIgQQgJgQgLgIQgLgHgNAAQgNAAgKAGg");
	this.shape_18.setTransform(-46.7,-68.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.106)").s().p("AhkEwQAAgDADgCQADgCAFgCQAKgFAHgEQAHgFAEgGQAFgHACgJQACgJAAgNIABgbIAAgkIAAgpIgBgsIAAgsIAAgoIgBghIAAgaIgBgJQgBgEgDgCQgBgCgEgBIgJgBIgLAAIgNACIgLAAIgIABIgHgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgEADgBIAIgCIARgCIAUgDQAKgCAFgEQAGgGADgHQADgHACgJIADgSQADgVAEgVQADgUAHgTQAGgTAHgPQAIgQAJgMQALgLANgHQAOgGAQAAQANAAAMAEQANAEAKAJQAJAJAFAOQAGAOAAAUQAAASgFAOQgEAPgIAKQgIALgKAFQgLAGgOAAQgIAAgIgDQgGgDgFgEQgFgFgCgGQgCgGgBgHIACgKQABgFADgFQADgFAHgEQAFgFAJgDQARgHAIgKQAJgKgBgOIgBgKQgCgGgEgFQgFgFgHgEQgHgDgMAAQgPAAgKAIQgKAHgIANQgHAMgDAQQgFAQgCARQgDARAAAQIgBAdIABASQAAAJACAHQACAHAFAFQAEAEAJAAIAPgBIAPgDIAMgDIAKgCQAHAAAAAFQAAAEgDABQgDACgIACIgIABIgKABIgMACIgQADQgHACgDACQgCACgDADQgCAEgBAGIAAAMIAAAOIABAfIABApIACAxIACAxIABAsIAAAiIABASQACAOAFAJQAEAJAKAEIAHABIAHABIAHABIAJABQAGABAEACQADABAAAEQAAAFgFACQgFACgKAAIgPAAIgTAAQgVAAgRAEQgRAEgMAFQgNAFgKAEQgJAEgHAAQgFAAAAgEg");
	this.shape_19.setTransform(-63.05,-77.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.106)").s().p("AgSCyQgTgJgLgSQgKgPgFgUQgFgTAAgUQAAgYAEgVQADgXAFgQIAHgfQAEgNAAgGQAAgEgCgCIgHAAIgGAAIgJAAIgLABIgKAAQgJAAAAgEQAAgEAHgDIAOgDIARgEQARgEALgHQALgGAHgLQAIgKAFgMIAKgeQAFgPAFgGQAEgFAGgBQAGAAACAFQACADAAAHIgCAQIgFAVIgFAWQgCALAAAIQAAADACADQABADAFAAIAHAAIAIgCIAJgBIAJAAQAKAAAAAGQAAAEgCABQgDACgEAAIgIAAIgKABIgLACIgKAEQgHADgEAFIgHAKQgEAJgEANIgHAgIgGAkQgDATAAASQAAAZAEASQAFASAGAMQAIAMAKAFQAKAGAMgBQAKAAAGgDQAHgCAEgFQAEgEACgFQACgGAAgFQAAgGgDgEIgIgIIgIgJQgDgFAAgHQAAgJAGgHQAGgGAKgBQAFAAAEACQAFACADAEIAGAJQACAGAAAIQAAAOgFAOQgEANgJALQgJALgPAHQgOAGgVAAQgXAAgSgJg");
	this.shape_20.setTransform(-83.675,-71.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.106)").s().p("AhiCiIgCgEQAAgDADgCQADgCAFgCIAKgCIANgEQAHgDADgGQADgFAAgMIgBgMIgBgUIgCgZIgCgcIgCgdIgDgaIgCgWIgCgPQgBgIgCgDQgCgFgCgCQgDgCgDAAIgHgBIgKAAIgDAAIgDgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAIAFgCIAVgEQAKgDAJgGQAGgFAGgHQAGgIAEgIQADgGADAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAIABAFIgBAIIAAAKIABAPIACAOIADAKQAAACAAAAQABABAAABQAAAAAAABQAAAAABAAQABAAACgHIAFgRIAIgWQAFgMAIgLQAJgKAMgHQALgGARAAQAPgBAKAGQAKAFAGAIQAGAIADAIQACAKAAAHQAAANgDAKQgDAIgGAGQgFAHgHADQgHADgIAAQgNAAgIgHQgJgGAAgMQAAgGACgFQACgFADgDQADgEAEgCQAEgCAFgBQAKgEADgEQAEgEAAgGIgBgHIgEgFQgDgEgFgBQgFgCgGAAQgNAAgLAHQgKAFgHALQgIALgFANIgHAcQgDAPgBAQIgBAcIABAZIACAcIAEAbIADAYIACAUIADALQACAKAGAEQAFAEAJAAIAJAAIAGAAQAGAAAAAEQAAAEgDACIgKABIgRAAIgTABIgWABIgWAFIgUAEIgQAEIgLACQgFgBgBgBg");
	this.shape_21.setTransform(-102.075,-70.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.106)").s().p("AgnBpQgVgHgPgPQgQgOgJgUQgKgVAAgaQAAgZAJgVQAHgVAPgPQAPgPAWgIQAVgIAYAAQAYAAATAHQAUAIAPAPQANAOAJAUQAIAVAAAZQAAAegKAVQgKAWgQAOQgPANgUAHQgTAGgSAAQgVAAgVgHgAgWhgQgJAHgGALQgHAMgDAPQgDAPAAARIABAbQADAOADANQADANAFALQAFALAHAJQAHAIAJAFQAJAFAKAAQAOAAAKgHQAKgGAGgKQAGgLADgNQACgNAAgNQAAgfgFgYQgEgYgJgQQgIgQgLgIQgMgHgOAAQgMAAgKAGg");
	this.shape_22.setTransform(-126.05,-68.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.106)").s().p("AAyDQIgagFIgdgFQgQgCgQAAQgRAAgPACIgbAEIgWAEIgLACIgCAAIgDgBIgCgBIgBgDQAAgDADgBIAIgEIANgDIANgGQANgHAHgMQAHgMAEgPIADgVIACgeIADglIACgoIACglIAAghQAAgdgBgWQgCgVgGgNQgDgJgIgGQgHgGgJgDQgIgDgKgBIgSgBIgQgCQgDgCAAgEQgBgHAMAAIARABIAbABIAZgBIAcgDIAWgDIARgFIAPgEIANgEIAQgDIARgBQAPAAAPADQARADANAKQANAJAIAQQAIARAAAaQAAAYgFASQgGARgIANQgKANgMAJQgLAIgNAFQgNAFgMACQgNACgLAAQgPAAgMgBIgRgEIAAAYIABAYIAAAUIAAANIABAUIADAaIADAZQACANAEAIQADAJAHAHQAGAGAIAEQAHAEAIADIAPAEIAIABIAHACIAFACQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAADgDACQgCABgHAAQgIAAgLgCgAAVjCQgJAFgGAIQgFAHgDAMQgDALgBANIgCAXIAAAbIgBAeIAAAgIAQADIAXABQARAAAMgIQANgJAHgOQAIgOADgRQAEgSAAgSQAAgPgDgPQgCgOgGgKQgHgLgKgGQgLgHgOAAQgMAAgIAEg");
	this.shape_23.setTransform(-153.1,-68.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264,-110.3,528.1,220.7);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOB0QgFgGAAgJQAAgJAFgFQAGgGAIAAQAIAAAGAGQAGAFAAAJQAAAJgGAGQgGAGgIAAQgIAAgGgGgAgHBGIgMinIAAgDQAAgJAFgGQAGgGAIAAQAIAAAGAGQAGAGAAAJIAAADIgNCng");
	this.shape.setTransform(123.025,-23.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAlBMIgBAAQgPAMgTAAQgTAAgPgMQgQgLgJgVQgKgVAAgXIAAAAIAAg0QAAgFgCgBQgDgDgGgBIgSgEIAwgRIAMgEIAABXIAAAAQAAAkAOAQQANARAQAAIABAAQAUAAAJgOIAAhzIgBgBQgIgSgVgFIBaAAQgTAFgKASIAAABIAABxQAAAEACABQADADAGACIASADQgIAEgnAOIgNAEg");
	this.shape_1.setTransform(107.45,-20.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBMQgQgLgJgUQgKgUAAgXQAAgZAKgUQAJgVAQgMQAQgLASAAQATAAAQALQAPAMAKAVQAKAUAAAXQAAAXgKAVQgKAVgPALQgPAMgUAAQgRAAgRgMgAgYgzQgKARAAAiQAAAiAIARQAKAWARAAQARAAAKgZQAIgUAAgbIAAgBQAAgggMgTQgKgRgOAAIAAAAQgPAAgJARg");
	this.shape_2.setTransform(89.05,-20.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgrB2IgCAAQgTAAgPgPQgGgHAAgIQAAgJAGgGQAFgFAJgBQAIABAHAGQAGAHAAAJQAAAGgGAGQAFACADAAQAHAAAEgEIAEgGIAQgoIg2iUIAAAAIAAgCQgKgRgTgEIBaAAQgeANAAAHIAAACIABABIAmBpIAqhpIAAgBIABgCQgBgJgdgLIBNAAQgTAEgKASIgBABIhIC2IgCAEQgKAYgWACIgCAAg");
	this.shape_3.setTransform(71.525,-16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAkAjIAAgBQAAgigNgSQgNgQgRAAIgBAAQgTAAgJAPIAAByIAAACQAIARAVAEIhaAAQAUgEAKgSIAAgBIAAi2QAAgDgCgCQgDgCgHgCQgNgDgFAAIAwgSIANgEIAABQIAAgBQAQgLATAAQASAAAQALQAQAMAJAVQAKATAAAYIAAABIAAA0QAAAEABABQADADAHACIASADIgvASIgOAEg");
	this.shape_4.setTransform(43.45,-23.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgsB4QATgEAKgSIABgBIAAh4IgiAAIgBAAQgUAAgKALIAcguIgBAIQAAALAMgBIAAAAIABAAIAZAAIAAgtQAAgDgDgCQgCgCgIgCIgRgDQAOgGAhgMIAMgEIAABPIAiAAIABAAQAUgBAKgKIgcAuIABgIQAAgKgLAAIgBAAIgBAAIgZAAIAAB4IABACQAIARAVAEg");
	this.shape_5.setTransform(25.825,-23.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgsB4QATgEAKgSIABgBIAAhxQAAgFgCgBQgEgDgHgBIgRgEQALgEAkgNIAMgEIAACUIAAACQAJARAVAEgAgNhUQgHgGAAgIQAAgJAHgGQAFgGAIAAQAJAAAFAGQAGAGAAAJQAAAIgGAGQgFAHgJAAQgIAAgFgHg");
	this.shape_6.setTransform(13.5,-23.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AACggIg1B7IhCiXIAAAAIgBgCQgKgRgTgFIBaAAQgeAOAAAHIABACIAAABIAqBbIA1h4IA0B4IAohbIABgBIAAgDQAAgIgegLIBMgBQgUAFgKASIAAABIhBCXg");
	this.shape_7.setTransform(-5.775,-20.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXB3QgYgBgMgNQgHgHAAgJQAAgIAGgGQAFgGAJAAQAJAAAFAHQAGAHABAIQgBAHgFAGQAEACAFAAQAGAAAIgCQANgEAHgKQAKgMgBgXIAAgDIAAgHQgPALgSAAQgSAAgRgMQgPgLgJgVQgKgUAAgZQAAgXAKgUQAJgUAPgMQASgLAVAAQAQAAAaAJQAnANAJAFIgSADQgGABgDADQgCACgBADIAACEQgCAjgYARQgXAQgWAAIgEgBgAgnhSQgIAQAAAkQABAhAJARQALARAUAAQAOAAAJgMQAEgHAAgEIAAgCIAAhcQAAgHgCgDIgBgCQgMgMgPAAIgCAAQgSAAgKAWg");
	this.shape_8.setTransform(-38.15,-16.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAkABIAAgBQAAgigNgSQgNgQgRAAIgBAAQgTAAgJAPIAAByIAAACQAIARAVAEIhaAAQAUgEAKgSIAAgBIAAhxQAAgFgCgBQgDgDgHgBIgSgEIAwgRIANgEIAAAMIAAgBQAQgLATAAQASAAAQALQAQAMAJAVQAKAUAAAXIAAABIAAA0QAAAEABABQADADAHACIASADIgvASIgOAEg");
	this.shape_9.setTransform(-57.8,-20.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgsB4QATgEAKgSIABgBIAAhxQAAgFgCgBQgEgDgHgBIgRgEQALgEAkgNIAMgEIAACUIAAACQAJARAVAEgAgNhUQgHgGAAgIQAAgJAHgGQAFgGAIAAQAJAAAFAGQAGAGAAAJQAAAIgGAGQgFAHgJAAQgIAAgFgHg");
	this.shape_10.setTransform(-73.35,-23.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFB4QAggIAAgJQAAgDgDgBIgBgCIgqguIgTAXIAAAXIAAACQAJARAVAEIhaAAQATgEAKgSIAAgBIAAi2QAAgDgCgCQgDgCgHgCIgRgDIAvgSIANgEIAACnIA/hNIABgCIABgCQAAgGgbgJIBJAAQgLAEgRATIgCABIg1BAIAXAAIA2A8IAAAAIABABQASAPANAEg");
	this.shape_11.setTransform(-87.825,-23.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhMBWQATgEAKgSIAAgBIAAhtQAAgDgCgCQgDgDgGgBQgOgDgEAAQALgFAkgNQAbgJASAAIABAAQAaAAASASQAQARAAATIAAABQAAAIgGAHQgGAGgIAAQgJAAgGgGQgGgGAAgJIAAAAQAAgJAGgGQAGgFAIAAQgBgHgPgIQgHgEgLAAIgEAAQgRACgKAHIgFAEQgBACAAAIIAABtIAAACQAIARAUAEg");
	this.shape_12.setTransform(-106.1,-20.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiBMQgQgLgJgUQgKgUAAgXQAAgZAKgUQAJgVAQgMQAQgLASAAQATAAAQALQAPAMAKAVQAKAUgBAXQABAXgKAVQgKAVgPALQgPAMgUAAQgRAAgRgMgAgYgzQgKARAAAiQAAAiAIARQAJAWATAAQARAAAJgZQAJgUAAgbIAAgBQAAgggNgTQgKgRgOAAIAAAAQgOAAgKARg");
	this.shape_13.setTransform(-123.1,-20.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AACggIg1B7IhCiXIAAAAIgBgCQgKgRgTgFIBaAAQgeAOAAAHIABACIAAABIAqBbIA1h4IA0B4IAohbIABgBIAAgDQAAgIgegLIBMgBQgUAFgKASIAAABIhBCXg");
	this.shape_14.setTransform(-145.875,-20.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiBMQgQgLgJgUQgKgUAAgXQAAgZAKgVQAJgUAQgLQAQgMASAAQATAAAQAMQAPALAKAUQAKAWAAAWQAAAXgKAVQgKAVgPALQgPAMgUAAQgRAAgRgMgAgYgzQgKARAAAiQAAAiAIARQAKAWARAAQARAAAKgZQAIgUAAgcIAAAAQABgfgNgVQgKgQgOAAIAAAAQgPAAgJARg");
	this.shape_15.setTransform(98.05,-58.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgsB4QATgDAKgTIABgBIAAh5IgiAAIgBAAQgUABgKAMIAcguIgBAHQAAALAMAAIAAAAIABAAIAZAAIAAgtQAAgEgDgCQgCgCgIgBIgRgEQAOgGAhgMIAMgEIAABQIAiAAIABAAQAUgCAKgKIgcAuIABgIQAAgLgLAAIgBAAIgBAAIgZAAIAAB5IABABQAIASAVAEg");
	this.shape_16.setTransform(82.175,-62.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMB6QgRAAgSgMQgPgLgJgVQgKgTAAgYQAAgZAKgUQAJgUAPgLQARgMASgBQASABAQAKIAAgrQAAgDgCgDQgCgCgJgBIgQgEIAvgSIAMgEIAADLQABADACACQACACAHACQANAEAFAAQgJAEgnAOQgaAJgSAAIgCAAgAglgSQgJARgBAiQAAAkAIAQQAKAWAUAAQAPAAAMgMIABgCQACgEABgHIAAhdQgBgEgEgHQgJgNgPAAIAAAAQgUABgKAQg");
	this.shape_17.setTransform(56.8,-61.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhMBWQATgDAKgTIABgBIAAhsQAAgEgCgCQgEgDgGAAQgOgEgEAAQALgFAlgNQAagJASAAIABAAQAZAAATARQAQATAAARIAAABQAAAJgGAGQgGAHgJAAQgIAAgGgGQgGgHAAgIIAAAAQAAgJAGgFQAGgGAHgBQAAgGgOgIQgIgEgLAAIgEAAQgRACgKAHIgFAEQgCACAAAJIAABsIAAABQAJASAUAEg");
	this.shape_18.setTransform(39.2,-58.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgvBMQgPgLgKgUQgJgUAAgaQAAgXAJgUQAKgUAPgLQARgMAVAAQARAAAaAJIAwASIgSAEQgGAAgDADQgDACAAAEIAABfQAAAEACABQADADAHABIASAEIgwASQgbAJgQAAQgVAAgRgMgAgngzQgIASAAAhQAAAjAIAQQAKAWARAAIAGAAQAMAAALgMIACgCQACgDABgIIAAhfQgBgJgCgCIgCgCQgLgMgMAAIgFAAQgSAAgKAVg");
	this.shape_19.setTransform(22.05,-58.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AACghIg1B7IhCiWIAAgBIgBgBQgKgSgTgDIBaAAQgeANAAAHIABABIAAACIAqBbIA1h5IA0B6IAohcIABgCIAAgBQAAgKgegKIBMAAQgUAEgKARIAAACIhBCWg");
	this.shape_20.setTransform(-1.975,-58.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhMBWQATgDAKgTIAAgBIAAhsQAAgEgCgCQgCgDgHAAQgOgEgEAAQAKgFAlgNQAbgJASAAIABAAQAZAAATARQAQATAAARIAAABQAAAJgGAGQgGAHgIAAQgJAAgGgGQgGgHAAgIIAAAAQAAgJAGgFQAGgGAIgBQgBgGgPgIQgHgEgLAAIgEAAQgRACgKAHIgEAEQgCACAAAJIAABsIAAABQAIASAUAEg");
	this.shape_21.setTransform(-23.85,-58.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgiBMQgQgLgJgUQgJgUAAgXQAAgZAJgVQAJgUAQgLQAQgMASAAQATAAAQAMQAPALAKAUQAJAWAAAWQAAAXgJAVQgKAVgPALQgPAMgUAAQgRAAgRgMgAgYgzQgKARAAAiQAAAiAIARQAJAWATAAQARAAAJgZQAJgUAAgcIAAAAQAAgfgNgVQgKgQgOAAIAAAAQgPAAgJARg");
	this.shape_22.setTransform(-40.85,-58.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhMB4QATgDAKgTIABgBIAAiwQAAgEgDgBQgCgDgHgCIgSgDQAKgEAmgOQAagJASAAIABAAQAaAAASASQAQASAAASIAAABQAAAIgGAGQgFAHgKAAQgIAAgFgGQgHgGAAgIIAAAAQAAgJAHgHQAFgFAHAAQgBgHgOgIQgEgDgPgBIgDAAQgSABgJAJIgFADQgCACAAAJIAABDIAfAAIABAAQAUgBAJgLIgbAtIAAgHQABgLgLAAIgBAAIgBAAIgWAAIAABeIAAABQAJASAUAEg");
	this.shape_23.setTransform(-57.2,-62.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFB4QAggIAAgJQAAgCgDgDIgBgBIgqguIgTAWIAAAYIAAABQAJASAVAEIhaAAQATgDAKgTIAAgBIAAi1QAAgEgCgCQgDgCgHgBIgRgEIAvgSIANgEIAACmIA/hMIABgBIABgDQAAgHgbgHIBJAAQgLADgRASIgCACIg1BBIAXAAIA2A6IAAABIABAAQASAQANAEg");
	this.shape_24.setTransform(-84.275,-62.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBMQgPgLgKgUQgJgUAAgXQAAgZAJgVQAKgUAPgLQAQgMASAAQATAAAQAMQAPALAKAUQAJAWAAAWQAAAXgJAVQgKAVgPALQgQAMgTAAQgRAAgRgMgAgYgzQgKARAAAiQAAAiAHARQAKAWATAAQAQAAAKgZQAJgUAAgcIAAAAQAAgfgNgVQgKgQgOAAIAAAAQgPAAgJARg");
	this.shape_25.setTransform(-103.5,-58.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgiBMQgPgLgKgUQgKgUABgXQgBgZAKgVQAKgUAPgLQAQgMASAAQATAAAQAMQAQALAJAUQAJAWAAAWQAAAXgJAVQgJAVgQALQgPAMgUAAQgRAAgRgMgAgYgzQgKARAAAiQAAAiAHARQALAWARAAQASAAAJgZQAJgUgBgcIAAAAQAAgfgMgVQgKgQgOAAIAAAAQgOAAgKARg");
	this.shape_26.setTransform(-120.8,-58.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgsB4QATgDAKgTIAAgBIAAi1QAAgEgCgCQgDgCgGgBIgSgEIAugSIAOgEIAADYIAAABQAIASAVAEg");
	this.shape_27.setTransform(-134.6,-62.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgsB2QAUgDAJgTIAAgBIAAi9IAAgBQgJgSgUgEIBZAAQgUAEgJASIgBABIAAC9IABABQAJASAUAEg");
	this.shape_28.setTransform(-154.6,-61.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhlFgQgSgHgNgMQgNgMgHgRQgHgRAAgVQAAgWAHgSQAGgTAMgNQALgOAQgHQAPgIATAAQAPAAAMAFQALAFAIAIQAHAIAEALQAEAKAAALQAAAJgDAJQgDAIgFAGQgGAGgIAEQgJADgKAAQgMAAgHgEQgIgEgFgFQgFgGgDgGIgGgNIgGgKQgDgDgFAAQgGAAgEAEQgFAEgDAHQgEAHgBAIQgCAJAAAJQAAARAGAOQAGAOALAKQAKAJAPAGQAPAFARAAQAeAAAWgNQAWgNAQgVQARgUALgYQALgZAHgWIALgnIAEgWQAKg+ADguQADgsAAgaIAAgPIgBgMIAAgJIgGAQIgHAPIgJARQgGALgKALQgJAJgNAIQgNAIgQAGQgPAFgSAAQgfAAgXgNQgXgNgQgVQgRgWgLgcQgLgdgHgeQgIgfgFgeIgLg5QgCgLgFgEQgEgDgGAAIgNABIgLACQgDAAgCgCQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgGAHgCIAcgIIAXgIIATgHIATgJQAWgLAQgKIAcgRIAUgMQAJgEAGAAQADAAACABQACACAAADQAAAFgFAEIgNAJQgKAFgOALQgJAHgFAIQgGAIgCAKQgDAJAAAMIgBAYQABAaADAaQADAZAFAWQAFAWAGASQAGARAGAMQAMAaASAPQATAPAZAAQASAAAOgJQANgJAKgOQAJgOAGgSQAGgSAEgTQADgTABgRIACgfQAAgjgGgSQgGgSgLgHIgLgGIgLgDIgMgDIgIgCQgIgCgDgDQgDgCAAgFQAAgFAEgDQADgDAFAAIAcACQARABAXAAIAcgBIAegEIAagFIASgFIAIgCIAFgBQAEAAADACQADADAAADQAAAEgBADIgFAEIgQALQgIAEgEAJQgDAHgCALIgCAaIgDAkIgDAyQgDAggEAlQgEAkgHAnQgHAogKAqQgKAqgOArQgPAsgTAjQgTAigXAYQgYAZgaANQgcAMgeAAQgWAAgSgGg");
	this.shape_29.setTransform(210.125,-143.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgvC3QgfgOgWgYQgVgYgMgiQgLgiAAgoQAAgjAIgdQAIgeANgXQAOgXARgSQASgRATgLQAUgLAUgGQATgFATAAQATAAAVAFQATAFARAMQARAMALATQAKAUAAAdQAAAagHATQgIATgMAOQgMAPgQAIQgQAJgQAFQgRAGgPACQgQACgLAAQgRAAgQgDQgRgCgJgDQABAcAIAZQAHAaANATQAOATASAMQAVALAaAAQASAAAPgGQANgGAIgLQAJgLAFgOQAEgOAAgPIgBgTQgCgKgDgJIgEgKIgBgHQAAgHAHAAQADAAAFADQADADAFAHQAEAIAFAOQAEANgBAOQAAAagIAVQgIAUgRAOQgPANgWAIQgWAHgcAAQgoAAgfgNgAgCimQgQAIgNAUQgNAUgJAjQgJAhAAAzIAVAFQAMACASAAQATAAASgIQARgHAMgNQAMgPAHgTQAHgUAAgYQAAgWgFgOQgFgPgHgJQgIgIgKgEQgKgEgKAAQgOAAgOAIg");
	this.shape_30.setTransform(170.5,-162.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag8FJQgFgCAAgHQAAgJAOAAIAUgBQALgBAIgDQAGgDADgDQADgEACgEIACgKIABgLIgBgUIgCghIgCgpIgFguIgDgvIgFgtIgDgnIgDgbIgEghIgDgiIgEghIgEgcQgDgMgFgHQgEgHgLAAQgIAAgLAEIgVAJIgUAIQgKADgGABQgEgBgDgBQgDgCAAgFQAAgGAHgFIAIgFIAOgHIAWgMQAMgHATgMQASgOAQgOIAbgbIAUgaIAMgSIAGgIQADgDACAAQADAAABAEIAAAIIAAASIAAAjIABArIABAsIACBEIAEBQIAEBTIAFBPIAEBBIADArQABAVAEAMQAEAMAIAHQAIAHALAEIAcAIQAFACADACQABACAAADQAAADgDADQgCACgHAAIgMgBIgXgCIgcgCIgegBIgZABIgYADIgXACIgSABQgEAAgFgBg");
	this.shape_31.setTransform(140.15,-174.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag8FJQgFgCAAgHQAAgJAOAAIAVgBQALgBAHgDQAGgDADgDQADgEACgEIADgKIAAgLIAAgUIgDghIgCgpIgEguIgFgvIgEgtIgEgnIgCgbIgDghIgEgiIgEghIgEgcQgCgMgFgHQgGgHgJAAQgJAAgKAEIgWAJIgVAIQgKADgFABQgEgBgCgBQgEgCAAgFQAAgGAHgFIAIgFIAPgHIAVgMQAMgHASgMQAUgOAPgOIAbgbIAUgaIANgSIAGgIQABgDADAAQADAAABAEIABAIIAAASIAAAjIAAArIABAsIACBEIAEBQIAEBTIAFBPIAEBBIACArQACAVAEAMQAFAMAHAHQAHAHAMAEIAbAIQAHACABACQACACAAADQAAADgDADQgCACgHAAIgMgBIgXgCIgcgCIgegBIgZABIgYADIgXACIgRABQgGAAgEgBg");
	this.shape_32.setTransform(114.65,-174.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ABmD/QgNgFgIgHQgJgHgGgJQgFgIgEgIQgKgTgFgWIgJgsQgEAJgLANQgLANgPAMQgQAMgUAJQgVAIgZAAQgdAAgUgIQgTgIgNgNQgNgOgFgSQgHgSABgVQgBgVAJgWQAHgXATgSQATgRAdgLQAegLArAAIATABIARACIAMACIAHABIgEg8IgDgbIgEgcIgDgcIgFgaQgFgbgQgQQgQgQgaAAQgNAAgLAFQgLAFgGAIQgIAHgEAKQgDAKAAAJQAAALAFAHQAFAGAIAGIAPAKQAJAEAGAHQAHAGAGAIQAEAJAAANQAAARgLALQgMAKgRAAQgNAAgLgFQgLgFgJgKQgIgKgGgPQgEgOAAgUQAAgWAGgVQAGgVANgQQANgRAUgJQAVgKAcAAQAYAAARAGQASAGAOALQANAKAKANQAJAOAHAPQAGAPAFAPIAHAdIAFAWIAGAhIAGAoIAIAqIAHArIAFAlIAFAdIADARIAFAWQADALAEAKQADAJAHAGQAFAGAKAAQAFAAAEgCQAEgDACgEIADgKIACgLIgBgNIAAgMIABgJQABgEAFAAQADAAADAFQADAEAAAGIACALIABAJQgBAMgCAQQgCAPgHAPQgGAOgPAKQgOAJgUAAQgQAAgMgFgAhMACQgPAFgMALQgLAKgIAQQgGAPAAAVQAAASAGANQAGAMAKAHQAJAHAMACQAMADAMAAQARAAARgFQAPgGAMgHQAMgIAIgHIAJgJIgEgrIgCgRIgCgPIgBgMIgBgHIgJgCIgOgDIgSgCIgTgBQgTAAgQAEg");
	this.shape_33.setTransform(86.6,-159.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAcENQgFgIgIgOIgPgiIgSgrIgOghIgUgxIgZg6Igbg9Igbg6QgPgcgMgUQgOgWgPgQQgPgQgZgJQgOgFgNgCQgNgCgQgBQgPgBgIgDQgIgDAAgHQAAgHAGgDQAHgDAPAAIAPABIAPAAIARABIASAAQAYAAAYgDQAYgDAVgEQAXgFATgFIAjgKIAagIQAKgDAEAAQAHAAAAAFQAAADgCACQgDACgLAEIgLAFIgPAGIgPAHIgOAHQgHADgDAGQgDAFAAAHQAAAHADAMIAJAbIANAfIAPAhIAQAgIAOAcIARAhIATAiIAUAjIASAeIAOAUQAGAIADAAQAEAAAEgIIALgUIAMgbIALgeIAJgbIAKghQAEgRADgPQADgPAAgJQAAgIgDgFQgEgFgFgCQgHgCgIgBIgSgBIgQABIgRAAQgPAAAAgJQAAgFADgCQAEgCAIgBIASgCIAfgEQASgDAUgFQAWgGAVgKQAZgMASgMIAdgWIAUgRQAIgGAGAAQAHAAAAAHQAAAGgIAIIgWAVIgfAgQgTASgTAbQgMAQgMAWQgMAVgMAZIgWAzIgYA0IgmBZIgYA9IgPAkQgFALgDAAQgEAAgFgIg");
	this.shape_34.setTransform(40.15,-169.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhmCwQgGgKgHgRIgQgnIgRguIgQgvIgPgqIgMgjIgHgVQgFgKgHgFQgGgDgIAAQgJAAgIACQgIACgGAAIgHgCQgDgCAAgDQAAgHAFgCQAEgDAIgCIAQgDIAWgGIAZgIQANgEALgGQASgHANgIIAXgNIAQgJQAHgEAEABQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQACABAAAEQAAADgDACIgHAGIgIAFIgIAFQgGAGgCAGQgCAHAAAHQAAAIAEARIAJAnIAMAqIANAoIAKAdQAFANABAAQACAAAFgMIAMgcIAPglIARgsIAPgoIANggIAFgHQACgDADAAQADAAADADIAFAHIAOAcIASAiIASAjIARAfIANAWQAFAIACAAQACAAADgKIAIgbIAJglIAJgmIAGggIADgUQAAgHgDgCQgCgDgGgBIgMABQgGACgHAAQgFAAgBgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgCQAGgCAPAAQAPgBAYgFQAZgEAQgFQAQgGAJAAQAIABAAAFQAAAFgGADIgOAEIgSAFIgMAGQgFADgEAFQgEAEgDAHIgFAOIgGAXIgJAiIgLAoIgMArIgMApIgNAjIgLAYQgGAJgEAAQgFAAgHgHQgHgHgIgMIgSgaIgSgfQgVgkgXguIgEAMIgIAZIgMAcIgLAeIgKAaIgGAQIgMAeIgNAeQgGANgGAIQgFAJgDAAQgEAAgGgLg");
	this.shape_35.setTransform(-37.825,-157.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgvC3QgfgOgWgYQgWgYgKgiQgMgiAAgoQAAgjAIgdQAIgeANgXQANgXASgSQARgRAUgLQAUgLAUgGQAUgFASAAQATAAAVAFQATAFARAMQAQAMAMATQAKAUAAAdQAAAagHATQgIATgMAOQgNAPgPAIQgQAJgQAFQgRAGgPACQgQACgLAAQgRAAgQgDQgRgCgJgDQACAcAHAZQAHAaANATQANATAUAMQATALAbAAQATAAAOgGQANgGAIgLQAJgLAFgOQAEgOAAgPIgBgTQgCgKgDgJIgEgKIAAgHQgBgHAHAAQADAAAEADQAFADADAHQAGAIADAOQAFANAAAOQAAAagJAVQgIAUgRAOQgPANgWAIQgWAHgdAAQgnAAgfgNgAgCimQgPAIgOAUQgNAUgIAjQgKAhABAzIAUAFQAMACARAAQAUAAASgIQAQgHANgNQAMgPAHgTQAHgUAAgYQAAgWgFgOQgEgPgIgJQgIgIgJgEQgLgEgKAAQgNAAgPAIg");
	this.shape_36.setTransform(-80.35,-162.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AiUDyQgDgCAAgEQAAgFAFgCIAMgFIAOgDQAIgCAMgFQALgFAFgIQAEgJAAgRIgBgRIgCgeIgCgmIgEgqIgEgrIgDgnIgEgiIgCgYQgCgKgDgGQgCgGgEgEQgEgDgFAAQgFgCgGAAIgPAAIgEAAIgFgBIgEgCQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgEADgCIAIgCQASgCAOgEQAOgEAOgKQAIgHAKgLQAJgLAGgMQAEgJAFAAQAFAAABADIABAHIgBAMIAAAQIABAVQABAMADAJIADARQACAGACAAQABAAADgKIAIgaQAEgPAJgSQAHgSAMgPQANgQASgKQARgKAZAAQAWAAAQAIQAPAHAJAMQAJALAEAOQAEAOAAAMQAAASgFAOQgFAOgIAJQgJAJgKAFQgLAFgLAAQgUAAgMgKQgNgJAAgTQAAgJADgHQACgHAFgFQAEgFAHgDQAFgEAIgCQAPgFAGgGQAFgHAAgJQAAgFgCgFQgCgFgEgEQgFgEgGgDQgHgCgKAAQgUAAgPAKQgQAJgLAPQgLAQgHAUQgHAVgEAWQgFAWgCAXQgCAXAAATIACAmIADAqIAFApIAGAlIAEAcIADARQAEAQAIAGQAIAGAOAAIAMAAIAKgBQAJAAAAAHQAAAGgFACQgEACgLAAIgZABIgeABQgQAAgQACQgRACgQAEIgeAHIgYAGQgLACgGAAQgHAAgCgDg");
	this.shape_37.setTransform(-107.975,-165.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhjFNQgcgIgUgRQgVgQgMgaQgMgbAAgmQAAghAMgaQAMgbAVgSQAVgRAcgKQAcgJAfAAQAhAAAVAEQAWAGANAGIAAhGIgChDIgCg/IgBgzIgCglIgBgQIAAgKIgCgJQgCgEgCgDQgDgCgEAAQgFAAgHACIgNAFIgNAFQgGACgGAAIgGgBQgDgCAAgDQAAgFAEgCQADgDAGgDIALgEIAOgGIAUgJIAdgQIAbgSIASgNIAMgKQADgEADAAQADABABAFIABANIgBA7IgBBDIgCBHIgCBIIgCBjIgCBZIgBBHIAAAtQAAARACALQADALAFAHQAEAGAHAEIAMAGIASAFIAOACIAKABQAEACAAAEQAAAFgIABIgQABIghgBQgVgCgbAAQgOAAgNABIgcAEIghADIgnAAQggAAgcgHgAgzBdQgSAIgNAPQgMAPgGAUQgHAWAAAZQAAAcAGAWQAGAWAMAQQAMAQASAJQASAIAYAAQATAAANgGQAOgHAHgKQAHgKACgOQACgNAAgSIAAghIAAglIgBgmIgBgjQgLgGgQgDQgQgEgSAAQgXAAgSAIg");
	this.shape_38.setTransform(-143.325,-177.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AC7DmIgTgMQgLgHgQgIQgPgJgWgHQgRgFgQgDQgRgEgWgBQgMgBAAgGQAAgGAIAAIANAAIASgBQAOgBAKgIQAJgHAEgVIADgUIADgbIABgdIABgcIgBgbQAAgPgBgRQgCgRgFgQQgEgQgHgNQgIgNgMgHQgMgJgRAAQgPAAgMAIQgLAHgKAOQgJANgHASQgHARgDAWQgEAWgBAWQgCAXAAAXQAAATACASIAEAhQADAOADAMQADAMAFAGQAHAJAHAFIANAGIAKAEQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQAAACgDACQgDACgHAAIgQgBIgSgDIgUgCIgUgCIgVABIgSABIgSACIgMAAQgOAAAAgIQAAgEACgCQACgCAGgBIAJAAIAIgBIAJgBIAKgBQAMgBAEgHQADgGAAgMQAAgTgDgcQgDgcgGghIgNhGIgRhMQgEgUgFgKQgGgKgKAAQgFAAgGACIgLAEIgLAFIgJABQgHAAAAgFQABgFAEgCIAHgDIAVgKQAMgGANgKQANgLAKgLIASgWIAMgQQAFgHACAAQADAAACAKQADAIADAPIAGAhIAFAmIANBZQACgMAEgPQAEgPAIgQQAHgQALgQQALgPAMgNQAPgMARgHQARgIAWAAQAaAAATAKQAUAKAMASQANARAGAZQAGAZAAAdQAAAagDAaIgHA0IgFAyQgEAXAAAVQAAAMACAKQADAJADAIQAFAHAIAGIANAKIAMAJQAEAFABAFQAAADgCADQgCACgEAAQgHAAgHgFg");
	this.shape_39.setTransform(-184.4,-162.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAnFGQgCgCAAgEQAAgEACgDQADgCAHgCIAIgDIALgDIAOgEIAMgFQAHgEAGgGQAFgHAAgMIAAgIIgCgJIgNgyIgNgwIgNgrIgLgfQgIgUgKgLQgLgLgNgGIgLgFIgSgGIgYgIIgZgJIgXgFIgSgHIgQA1IgQAxIgMAnIgHAYIgEARIgBANQAAAKADAIQADAGAFAFQAFAFAHADIANAHIALAGQAEADAAAFQAAADgCADQgDABgGAAQgGAAgJgCIgUgHIgXgJIgZgJIgUgFIgVgEIgRgBIgNgCQgJgBgDgCQgEgCAAgEQAAgEACgCQACgCAGAAIAIAAIAMABQARgBALgCQALgCAIgEQAIgFAFgGQAFgIAEgJIAKgZIANghIAOgmIAOglIAKgdIAHgVIAIgYIALgkIANgqIAMgoIAJgjQADgRAAgJQAAgHgEgFQgEgEgJAAIgRAAIgTACIgTADIgRABQgNAAAAgJQAAgJANgBIATgCIAXgDIAYgHQAMgDALgGQASgHANgJIAVgPIAOgLQAGgEADgBQADAAADAHIAGAOIAGAPIAEAMIARA0IAUA+IAXBDIAXBHIAYBFIAWBBIAUA6IAQAuQAJAWAIAOQAIAOAJAHQAJAIALAFQALADAPADQAKACAAAGQAAAEgEACQgDABgFAAIgUAAIgbAAIgbAAIgdABQgYACgUAFIgkAIIgcAGQgNAEgHAAQgEgBgCgBgAghjYIgFAJIgFAMIgEAMIgwCZIAcAJIAjALIAgAJQAOAEAHAAQAEAAADgDQADgDAAgGQAAgFgDgOIgIgfIgKglIgKglIgIgcIgEgMIgDgMIgFgQIgFgNQgDgFgCAAIgDADg");
	this.shape_40.setTransform(-233.225,-166.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgTBxQgJgLAAgOQAAgIACgHQACgHAFgEQAEgFAGgEQAGgCAHAAQAJgBAGAEQAGADADAFQAEAFACAGIABAMQAAAJgCAGQgDAHgFAFQgEAFgFACQgHADgHAAQgOAAgHgJgAgNgzQgGgCgFgEQgEgEgDgHQgDgHAAgKQAAgQAJgKQAJgKAQAAQAGAAAHACQAGACAEAEQAFAEACAHQACAFABAJQAAATgKAKQgJALgOAAQgHgBgGgCg");
	this.shape_41.setTransform(86.55,-267.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhkEwQAAgDADgCQACgCAFgCQALgFAHgEQAHgFAFgGQAEgHACgJQACgJABgNIAAgbIAAgkIAAgpIAAgsIAAgsIgBgoIgBghIgBgaIgBgJQgBgEgBgCQgCgCgEgBIgKgBIgLAAIgLACIgMAAIgIABIgGgBQgBgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEADgBIAIgCIARgCIAUgDQAJgCAHgEQAFgGAEgHQACgHACgJIADgSQADgVADgVQAEgUAGgTQAHgTAIgPQAHgQAKgMQAKgLANgHQAOgGARAAQANAAAMAEQAMAEAJAJQAKAJAGAOQAFAOAAAUQAAASgEAOQgFAPgIAKQgHALgMAFQgKAGgOAAQgJAAgGgDQgHgDgFgEQgEgFgDgGQgCgGAAgHIABgKQABgFADgFQAEgFAFgEQAGgFAJgDQARgHAJgKQAHgKABgOIgCgKQgCgGgEgFQgFgFgHgEQgIgDgLAAQgOAAgLAIQgLAHgGANQgIAMgEAQQgEAQgCARIgEAhIAAAdIAAASQABAJACAHQACAHAFAFQAEAEAJAAIAPgBIAOgDIANgDIAKgCQAHAAAAAFQAAAEgDABQgDACgHACIgIABIgKABIgNACIgQADQgGACgEACQgCACgCADQgDAEAAAGIgBAMIABAOIABAfIABApIABAxIACAxIABAsIAAAiIACASQABAOAEAJQAFAJALAEIAHABIAGABIAHABIAJABQAGABADACQAEABAAAEQAAAFgFACQgFACgKAAIgOAAIgUAAQgWAAgQAEQgRAEgMAFQgOAFgIAEQgKAEgGAAQgGAAAAgEg");
	this.shape_42.setTransform(76.4,-279.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgnBpQgUgHgQgPQgQgOgJgUQgKgVAAgaQAAgZAJgVQAHgVAPgPQAPgPAWgIQAVgIAZAAQAXAAATAHQAUAIAOAPQAOAOAJAUQAIAVAAAZQAAAegKAVQgKAWgPAOQgRANgSAHQgUAGgSAAQgWAAgUgHgAgVhgQgLAHgFALQgHAMgDAPQgDAPAAARIACAbQACAOADANQADANAFALQAFALAIAJQAHAIAIAFQAJAFALAAQANAAAKgHQAKgGAGgKQAGgLADgNQACgNAAgNQAAgfgFgYQgFgYgIgQQgIgQgLgIQgMgHgOAAQgMAAgJAGg");
	this.shape_43.setTransform(54.15,-271.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgnBpQgUgHgQgPQgQgOgKgUQgJgVAAgaQAAgZAIgVQAIgVAQgPQAPgPAVgIQAVgIAZAAQAXAAAUAHQATAIAOAPQAPAOAIAUQAIAVAAAZQAAAegKAVQgKAWgPAOQgQANgTAHQgUAGgSAAQgVAAgVgHgAgVhgQgKAHgHALQgGAMgDAPQgDAPAAARIACAbQACAOADANQADANAFALQAFALAIAJQAGAIAKAFQAHAFAMAAQAOAAAJgHQAKgGAGgKQAGgLACgNQADgNAAgNQAAgfgFgYQgEgYgJgQQgJgQgLgIQgLgHgOAAQgMAAgJAGg");
	this.shape_44.setTransform(17,-271.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AApCpIgOgDIgQgCIgQgBIgPABIgNABIgKABIgKAAIgHgBQgEgBAAgDQAAgDAEgBIAHgDIAKgCQAEgBAEgDQADgCADgEQACgEABgHIABgaIABgbIAAgZIAAgXIAAgXIAAgSQgBgMgCgGQgCgHgEgEQgEgCgHgBIgPgDIgEgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgEAHgBIAIgBIANgBIAQgEQAIgCAJgEIARgIIAKgIIAHgGQAAAAABgBQABAAAAAAQABgBAAAAQAAAAABAAQACAAAAAGIgBALIgCARIgDAhIgEAjIgDAlIgDAhIgCAcIgBARIABANIADAHIADAFIAEAEIAFACIAGACIAHACIAHABIAIABQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAFgKAAIgOgBgAgHhwQgFgBgEgDQgEgEgDgFQgDgFAAgJQAAgJADgFQADgGAEgEQAEgDAFgBIAJgCQANAAAJAHQAIAHAAAOQAAAJgDAGQgDAGgEADQgFAEgFABIgKACIgJgCg");
	this.shape_45.setTransform(-2.325,-277.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgoDbQgDgBAAgFQAAgFAJAAIAOgBQAIgBAEgCQAFgBACgDIACgGIACgGIAAgHIAAgOIgCgVIgBgcIgCgfIgEgfIgCgeIgCgZIgDgSIgCgXIgCgWIgCgWIgEgTQgBgIgDgEQgEgFgGAAQgGAAgHADIgOAFIgOAGQgHADgEgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBQAAgEAFgDIAFgEIAKgEIAOgHIAUgOQANgIAKgKIASgTIANgRIAIgLIAFgGQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAFIAAANIABAWIAAAdIABAeIABAtIADA2IACA2IAEA1IACArIACAdQABAOADAIQADAIAFAEQAEAGAJACIASAFIAFADIABADIgCAEIgFABIgJAAIgQgBIgSgBIgUgBIgRABIgQABIgPABIgMABIgGgBg");
	this.shape_46.setTransform(-19.4,-279.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgnBpQgVgHgPgPQgQgOgKgUQgJgVAAgaQAAgZAIgVQAJgVAPgPQAPgPAVgIQAVgIAZAAQAXAAAUAHQATAIAOAPQAOAOAJAUQAIAVAAAZQAAAegKAVQgKAWgPAOQgRANgTAHQgSAGgTAAQgVAAgVgHgAgWhgQgJAHgHALQgGAMgDAPQgDAPAAARIABAbQADAOADANQADANAGALQAEALAIAJQAGAIAKAFQAHAFAMAAQAOAAAKgHQAJgGAGgKQAGgLACgNQADgNAAgNQAAgfgFgYQgEgYgJgQQgJgQgLgIQgLgHgNAAQgNAAgKAGg");
	this.shape_47.setTransform(-38.7,-271.225);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhkEwQAAgDADgCQADgCAFgCQAKgFAHgEQAHgFAEgGQAFgHACgJQACgJAAgNIABgbIAAgkIAAgpIgBgsIAAgsIAAgoIAAghIgBgaIgBgJQgCgEgCgCQgCgCgDgBIgJgBIgMAAIgMACIgKAAIgJABIgHgBQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEADgBIAIgCIARgCIAUgDQAJgCAGgEQAGgGADgHQADgHACgJIADgSQADgVAEgVQADgUAHgTQAGgTAHgPQAIgQAJgMQAMgLANgHQANgGAQAAQANAAAMAEQANAEAJAJQAKAJAFAOQAGAOAAAUQAAASgFAOQgEAPgHAKQgJALgKAFQgLAGgOAAQgIAAgIgDQgGgDgFgEQgFgFgCgGQgCgGgBgHIACgKQABgFADgFQADgFAHgEQAFgFAJgDQARgHAIgKQAJgKgBgOIgBgKQgCgGgEgFQgFgFgHgEQgHgDgMAAQgPAAgKAIQgKAHgIANQgHAMgDAQQgFAQgCARIgDAhIgBAdIABASQAAAJACAHQACAHAFAFQAEAEAJAAIAPgBIAOgDIAOgDIAJgCQAHAAAAAFQAAAEgDABQgDACgIACIgIABIgKABIgMACIgQADQgGACgEACQgDACgCADQgCAEgBAGIAAAMIAAAOIABAfIABApIACAxIACAxIABAsIABAiIAAASQACAOAFAJQAEAJAKAEIAHABIAHABIAHABIAJABQAGABAEACQADABAAAEQAAAFgFACQgFACgKAAIgPAAIgTAAQgWAAgQAEQgRAEgNAFQgNAFgJAEQgJAEgHAAQgFAAAAgEg");
	this.shape_48.setTransform(-55.05,-279.775);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgSCyQgTgKgLgRQgKgPgFgUQgFgTAAgUQAAgXAEgWQADgXAFgQIAHgfQAEgNAAgGQAAgFgCgBIgHAAIgGAAIgJAAIgLABIgKAAQgJAAAAgEQAAgEAHgDIAOgDIARgEQARgEALgHQALgHAHgKQAIgJAFgNIAKgeQAFgPAFgGQAEgFAGAAQAGAAACADQACAEAAAHIgCAQIgFAVIgFAWQgCAKAAAJQAAADACADQABADAFAAIAHAAIAIgBIAJgBIAJgBQAKAAAAAGQAAAEgCABQgDABgEABIgIAAIgKABIgLACIgKAEQgHADgEAFIgHAKQgEAJgEANIgHAgIgGAkQgDATAAASQAAAZAEASQAFASAGALQAIANAKAFQAKAGAMAAQAKgBAGgDQAHgCAEgFQAEgEACgFQACgGAAgFQAAgGgDgEIgIgJIgIgIQgDgFAAgHQAAgKAGgGQAGgHAKAAQAFAAAEADQAFABADADIAGAKQACAGAAAIQAAANgFAPQgEANgJALQgJALgPAHQgOAGgVAAQgXAAgSgJg");
	this.shape_49.setTransform(-75.675,-274.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhiCiIgCgEQAAgDADgCQADgCAFgBIAKgDIANgEQAHgDADgGQADgFAAgMIgBgLIgBgVIgCgYIgCgdIgCgdIgDgaIgCgWIgCgQQgBgGgCgEQgCgFgCgCQgDgCgDAAIgHgBIgKAAIgDAAIgDgBQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAFgCIAVgEQAKgDAJgHQAGgEAGgHQAGgIAEgIQADgGADAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAABIABAEIgBAIIAAAKIABAPIACAOIADALQAAABAAAAQABABAAABQAAAAAAABQABAAAAAAQABAAACgHIAFgRIAIgWQAFgMAIgLQAJgJAMgHQALgIARABQAPgBAKAGQAKAFAGAIQAGAIADAJQACAIAAAJQAAAMgDAJQgDAJgGAHQgFAFgHAEQgHADgIAAQgNAAgIgHQgJgFAAgNQAAgHACgEQACgFADgDQADgEAEgBQAEgDAFgBQAKgEADgEQAEgEAAgGIgBgHIgEgFQgDgDgFgCQgFgCgGAAQgNAAgLAHQgKAFgHALQgIALgFANIgHAcQgDAQgBAPIgBAcIABAZIACAcIAEAbIADAZIACATIADAKQACALAGAFQAFADAJAAIAJAAIAGAAQAGAAAAAFQAAADgDABIgKACIgRAAIgTABIgWACIgWADIgUAGIgQADIgLABQgFABgBgCg");
	this.shape_50.setTransform(-94.075,-273.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgnBpQgVgHgPgPQgQgOgJgUQgKgVAAgaQAAgZAIgVQAJgVAOgPQAPgPAWgIQAVgIAYAAQAYAAATAHQAUAIAPAPQANAOAJAUQAIAVAAAZQAAAegKAVQgKAWgQAOQgPANgUAHQgSAGgTAAQgWAAgUgHgAgWhgQgJAHgGALQgHAMgDAPQgDAPAAARIABAbQACAOAEANQADANAGALQAEALAHAJQAHAIAJAFQAIAFALAAQAOAAALgHQAJgGAGgKQAGgLADgNQACgNAAgNQAAgfgFgYQgFgYgIgQQgJgQgKgIQgMgHgNAAQgNAAgKAGg");
	this.shape_51.setTransform(-118.05,-271.225);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAyDQIgagFIgdgFQgQgCgQAAQgRAAgQACIgbAEIgVAEIgLACIgCAAIgDgBIgCgBIgBgDQAAgDADgBIAIgEIANgDIANgGQANgHAHgMQAHgMADgPIAEgVIACgeIADglIACgoIACglIAAghQAAgdgBgWQgCgVgFgNQgEgJgIgGQgHgGgIgDQgJgDgJgBIgTgBIgQgCQgDgCAAgEQAAgHALAAIARABIAbABIAZgBIAcgDIAWgDIARgFIAPgEIANgEIAQgDIARgBQAPAAAPADQARADANAKQANAJAIAQQAJARAAAaQgBAYgFASQgGARgIANQgKANgMAJQgMAIgMAFQgMAFgNACQgNACgLAAQgPAAgMgBIgRgEIAAAYIABAYIAAAUIAAANIABAUIADAaIADAZQABANAFAIQAEAJAGAHQAGAGAHAEQAIAEAIADIAQAEIAHABIAHACIAFACQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAADgDACQgCABgHAAQgHAAgMgCgAAVjCQgJAFgGAIQgFAHgDAMQgCALgCANIgCAXIAAAbIgBAeIAAAgIAQADIAXABQARAAANgIQAMgJAHgOQAIgOADgRQAEgSAAgSQAAgPgDgPQgCgOgHgKQgGgLgKgGQgLgHgOAAQgMAAgIAEg");
	this.shape_52.setTransform(-145.1,-271.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1).p("A0nA6QUnjmUoDm");
	this.shape_53.setTransform(-30.025,-229.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264,-313,528.1,311.2);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.chip_papercopy4();
	this.instance.setTransform(-960,-960);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-960,1920,1920);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG();
	this.instance.setTransform(-960,-960);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-960,1920,1920);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.content_tile();
	this.instance.setTransform(-319,-369);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319,-369,638,738);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Button_bar();
	this.instance.setTransform(-349,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-349,-103,698,206);


(lib.Contact = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Contact_button();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159,160);


(lib.Art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Art_button();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.Animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.animation_button();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161,162);


(lib.Witch_char = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// text
	this.instance = new lib.Tween28("synched",0);
	this.instance.setTransform(576.85,-40.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1));

	// Image
	this.instance_1 = new lib.Tween24("synched",0);
	this.instance_1.setTransform(540,432);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,-195.6,1198.6000000000001,1059.6);


(lib.UI_bars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_8 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Layer_1
	this.instance = new lib.Tween21("synched",0);
	this.instance.setTransform(270,335);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,540,670);


(lib.Tween38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Andrew Valley", "72px 'Henny Penny'", "#403122");
	this.text.lineHeight = 130;
	this.text.lineWidth = 516;
	this.text.parent = this;
	this.text.setTransform(-268.8,207.55);

	this.instance = new lib.Tween12("synched",0);
	this.instance.setTransform(0,-165.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270.8,-341.2,541.7,682.5);


(lib.slug = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// text
	this.instance = new lib.Tween37("synched",0);
	this.instance.setTransform(270,-38);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1));

	// image
	this.instance_1 = new lib.Tween36("synched",0);
	this.instance_1.setTransform(270,270);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-105.8,540,645.8);


(lib.shroom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// text
	this.instance = new lib.Tween35("synched",0);
	this.instance.setTransform(264.95,3.15);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1));

	// image
	this.instance_1 = new lib.Tween34("synched",0);
	this.instance_1.setTransform(270,270);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-65.7,540,605.7);


(lib.Previous_button_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween20("synched",0);
	this.instance.setTransform(78.5,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157,158);


(lib.Next_button_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween19("synched",0);
	this.instance.setTransform(79,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.Home_content = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_14 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// text
	this.instance = new lib.Tween10("synched",0);
	this.instance.setTransform(310.1,361.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},5).wait(1));

	// text_ds
	this.instance_1 = new lib.Tween11("synched",0);
	this.instance_1.setTransform(330.1,179.05);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({alpha:1},5).wait(1));

	// panel
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(319,369,0.2,1,0,0,0,0.2,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.4,scaleX:1,x:319.1,alpha:0.6797},8).to({startPosition:0},1).to({startPosition:0},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,638,738);


(lib.Ducky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// text
	this.instance = new lib.Tween33("synched",0);
	this.instance.setTransform(256.95,-32.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1));

	// image
	this.instance_1 = new lib.Tween31("synched",0);
	this.instance_1.setTransform(270,270);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-98.6,540,638.6);


(lib.Diner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// text
	this.instance = new lib.Tween30("synched",0);
	this.instance.setTransform(265.9,-81.25);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1));

	// diner
	this.instance_1 = new lib.Tween29("synched",0);
	this.instance_1.setTransform(270,152);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-150.5,540,454.5);


(lib.Contact_content = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_14 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Text
	this.instance = new lib.Tween38("synched",0);
	this.instance.setTransform(327,354.95);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},6).wait(1));

	// panel
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(319,369,0.2,1,0,0,0,0.2,0);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,scaleX:1,alpha:1},8).to({startPosition:0},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,638,738);


(lib.Art_content = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_8 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Next_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			var frameNumber = this.currentFrame;
		
			if (frameNumber == 37)
			{
				var isPlaying =true;
				this.gotoAndPlay(9);
			}
			else
			{
				var isPlaying =true;
				this.gotoAndPlay(frameNumber + 5);
			}
		}
		
			
			
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Previous_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			var frameNumberback = this.currentFrame;
			
			if (frameNumberback == 12)
			{
				var isPlaying =true;
				this.gotoAndPlay(34);
			}
			else
			{
				var isPlaying =true;
				this.gotoAndPlay(frameNumberback - 5);
			}
			
			
		}
		
		
		/* Code to get the frame number of the current frame
		*/
	}
	this.frame_12 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}
	this.frame_17 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}
	this.frame_22 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}
	this.frame_27 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}
	this.frame_32 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}
	this.frame_37 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(4).call(this.frame_12).wait(5).call(this.frame_17).wait(5).call(this.frame_22).wait(5).call(this.frame_27).wait(5).call(this.frame_32).wait(5).call(this.frame_37).wait(1));

	// Content
	this.instance = new lib.UI_bars();
	this.instance.setTransform(316,335,1,1,0,0,0,270,335);

	this.instance_1 = new lib.Witch_char();
	this.instance_1.setTransform(318,388,0.5,0.5,0,0,0,540,432);

	this.instance_2 = new lib.Diner();
	this.instance_2.setTransform(310,376,1,1,0,0,0,270,152);

	this.instance_3 = new lib.Ducky();
	this.instance_3.setTransform(312,406,1,1,0,0,0,270,270);

	this.instance_4 = new lib.shroom();
	this.instance_4.setTransform(316.05,387.95,1,1,0,0,0,270,270);

	this.instance_5 = new lib.slug();
	this.instance_5.setTransform(312,399.95,1,1,0,0,0,270,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).wait(5));

	// right_btn
	this.Next_btn = new lib.Next_button_1();
	this.Next_btn.name = "Next_btn";
	this.Next_btn.setTransform(772,394,1,1,0,0,0,79,79);
	this.Next_btn.alpha = 0;
	new cjs.ButtonHelper(this.Next_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Next_btn).to({alpha:1},8).wait(30));

	// left_btn
	this.Previous_btn = new lib.Previous_button_1();
	this.Previous_btn.name = "Previous_btn";
	this.Previous_btn.setTransform(-133.5,394,1,1,0,0,0,78.5,79);
	this.Previous_btn.alpha = 0;
	new cjs.ButtonHelper(this.Previous_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Previous_btn).to({alpha:1},8).wait(30));

	// tile
	this.instance_6 = new lib.Tween3("synched",0);
	this.instance_6.setTransform(318.95,369,1,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0,x:319,alpha:0.6797},8).to({startPosition:0},6).to({startPosition:0},10).to({startPosition:0},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212,0,1063,738);


(lib.Animation_content = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_14 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer_2
	this.instance = new lib.Tween15("synched",0);
	this.instance.setTransform(374.85,214.45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween16("synched",0);
	this.instance_1.setTransform(374.85,214.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance_1}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({_off:true,alpha:1},6).wait(1));

	// Layer_1
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(319,369,0.2,1,0,0,0,0.2,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0,scaleX:1,alpha:0.6797},8).to({startPosition:0},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,638,738);


// stage content:
(lib.Portfolio_site = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [44,53,63,73,83];
	// timeline functions:
	this.frame_44 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Contact_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			if (isPlaying == true)
			{
				return	
			}
			else
			{
			var isPlaying = true;
			this.gotoAndPlay(55);
			}
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Art_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			if (isPlaying == true)
			{
				return	
			}
			else
			{
			var isPlaying = true;
			this.gotoAndPlay(65);
			}
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Animation_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			if (isPlaying == true)
			{
				return	
			}
			else
			{
			var isPlaying = true;
			this.gotoAndPlay(75);
			}
		}
	}
	this.frame_53 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}
	this.frame_63 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}
	this.frame_73 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}
	this.frame_83 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		var isPlaying = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(9).call(this.frame_53).wait(10).call(this.frame_63).wait(10).call(this.frame_73).wait(10).call(this.frame_83).wait(1));

	// animation_button
	this.Animation_btn = new lib.Animation();
	this.Animation_btn.name = "Animation_btn";
	this.Animation_btn.setTransform(746.5,99,1,1,0,0,0,80.5,81);
	this.Animation_btn.alpha = 0;
	new cjs.ButtonHelper(this.Animation_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Animation_btn).to({regX:80.7,regY:81.5,scaleX:0.5,scaleY:0.5},23).to({regX:80.8,regY:81.7,scaleX:1,scaleY:1,x:746.6,y:99.1,alpha:1},10).wait(51));

	// Art_button
	this.Art_btn = new lib.Art();
	this.Art_btn.name = "Art_btn";
	this.Art_btn.setTransform(965,100,1,1,0,0,0,79,79);
	this.Art_btn.alpha = 0;
	new cjs.ButtonHelper(this.Art_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Art_btn).to({regX:79.4,regY:79.5,scaleX:0.5,scaleY:0.5},29).to({regX:79.5,regY:79.7,scaleX:1,scaleY:1,x:965.1,y:100.05,alpha:1},10).wait(45));

	// Contact_button
	this.Contact_btn = new lib.Contact();
	this.Contact_btn.name = "Contact_btn";
	this.Contact_btn.setTransform(1182.5,100,1,1,0,0,0,79.5,80);
	this.Contact_btn.alpha = 0;
	new cjs.ButtonHelper(this.Contact_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Contact_btn).to({regX:79.9,regY:80.5,scaleX:0.5,scaleY:0.5},34).to({regX:80,regY:80.7,scaleX:1,scaleY:1,x:1182.6,y:100.05,alpha:1},10).wait(40));

	// Button_bar
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(960,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:103},23).to({startPosition:0},10).to({startPosition:0},11).to({startPosition:0},29).to({startPosition:0},10).wait(1));

	// content_tile
	this.instance_1 = new lib.Home_content();
	this.instance_1.setTransform(960,591,1,1,0,0,0,319,369);

	this.instance_2 = new lib.Contact_content();
	this.instance_2.setTransform(960,591,1,1,0,0,0,319,369);

	this.instance_3 = new lib.Art_content();
	this.instance_3.setTransform(960,591,1,1,0,0,0,319,369);

	this.instance_4 = new lib.Animation_content();
	this.instance_4.setTransform(960,591,1,1,0,0,0,319,369);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},44).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_4}]},10).wait(10));

	// BG
	this.instance_5 = new lib.Tween4("synched",0);
	this.instance_5.setTransform(960,960);
	this.instance_5.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},23).to({startPosition:0},10).to({startPosition:0},11).to({startPosition:0},29).to({startPosition:0},10).wait(1));

	// chip_paper_copy_4
	this.instance_6 = new lib.Tween5("synched",0);
	this.instance_6.setTransform(960,960);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:0},23).to({startPosition:0},10).to({startPosition:0},11).to({startPosition:0},29).to({startPosition:0},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,657,960,1263);
// library properties:
lib.properties = {
	id: '76753FF88B08964EA5C37984DD38427E',
	width: 1920,
	height: 1920,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animation_button.png", id:"animation_button"},
		{src:"images/Art_button.png", id:"Art_button"},
		{src:"images/BG.jpg", id:"BG"},
		{src:"images/Button_bar.png", id:"Button_bar"},
		{src:"images/chip_papercopy4.jpg", id:"chip_papercopy4"},
		{src:"images/Contact_button.png", id:"Contact_button"},
		{src:"images/content_tile.png", id:"content_tile"},
		{src:"images/hilooski_diner.png", id:"hilooski_diner"},
		{src:"images/Next_button.png", id:"Next_button"},
		{src:"images/Previous_button.png", id:"Previous_button"},
		{src:"images/Rubberducky.png", id:"Rubberducky"},
		{src:"images/Sharoom.png", id:"Sharoom"},
		{src:"images/slugger.png", id:"slugger"},
		{src:"images/UI_Bars.png", id:"UI_Bars"},
		{src:"images/witchy.png", id:"witchy"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['76753FF88B08964EA5C37984DD38427E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;