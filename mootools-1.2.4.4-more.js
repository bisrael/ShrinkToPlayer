//MooTools More, <http://mootools.net/more>. Copyright (c) 2006-2009 Aaron Newton <http://clientcide.com/>, Valerio Proietti <http://mad4milk.net> & the MooTools team <http://mootools.net/developers>, MIT Style License.

MooTools.More={version:"1.2.4.4",build:"6f6057dc645fdb7547689183b2311063bd653ddf"};Element.implement({measure:function(e){var g=function(h){return !!(!h||h.offsetHeight||h.offsetWidth);
};if(g(this)){return e.apply(this);}var d=this.getParent(),f=[],b=[];while(!g(d)&&d!=document.body){b.push(d.expose());d=d.getParent();}var c=this.expose();
var a=e.apply(this);c();b.each(function(h){h();});return a;},expose:function(){if(this.getStyle("display")!="none"){return $empty;}var a=this.style.cssText;
this.setStyles({display:"block",position:"absolute",visibility:"hidden"});return function(){this.style.cssText=a;}.bind(this);},getDimensions:function(a){a=$merge({computeSize:false},a);
var f={};var d=function(g,e){return(e.computeSize)?g.getComputedSize(e):g.getSize();};var b=this.getParent("body");if(b&&this.getStyle("display")=="none"){f=this.measure(function(){return d(this,a);
});}else{if(b){try{f=d(this,a);}catch(c){}}else{f={x:0,y:0};}}return $chk(f.x)?$extend(f,{width:f.x,height:f.y}):$extend(f,{x:f.width,y:f.height});},getComputedSize:function(a){a=$merge({styles:["padding","border"],plains:{height:["top","bottom"],width:["left","right"]},mode:"both"},a);
var c={width:0,height:0};switch(a.mode){case"vertical":delete c.width;delete a.plains.width;break;case"horizontal":delete c.height;delete a.plains.height;
break;}var b=[];$each(a.plains,function(g,f){g.each(function(h){a.styles.each(function(i){b.push((i=="border")?i+"-"+h+"-width":i+"-"+h);});});});var e={};
b.each(function(f){e[f]=this.getComputedStyle(f);},this);var d=[];$each(a.plains,function(g,f){var h=f.capitalize();c["total"+h]=c["computed"+h]=0;g.each(function(i){c["computed"+i.capitalize()]=0;
b.each(function(k,j){if(k.test(i)){e[k]=e[k].toInt()||0;c["total"+h]=c["total"+h]+e[k];c["computed"+i.capitalize()]=c["computed"+i.capitalize()]+e[k];}if(k.test(i)&&f!=k&&(k.test("border")||k.test("padding"))&&!d.contains(k)){d.push(k);
c["computed"+h]=c["computed"+h]-e[k];}});});});["Width","Height"].each(function(g){var f=g.toLowerCase();if(!$chk(c[f])){return;}c[f]=c[f]+this["offset"+g]+c["computed"+g];
c["total"+g]=c[f]+c["total"+g];delete c["computed"+g];},this);return $extend(e,c);}});