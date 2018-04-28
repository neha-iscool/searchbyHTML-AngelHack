var h = function(a,b){
    function c() {}
    c.prototype = b.prototype;
    a.f = b.prototype;
    a.prototype = new c;
    a.e = function(a,c,g){
        return b.prototype[c].apply(a, Array.prototype)
    }
}

var l = function(){
    this.d = this.c = this.url = this.b = this.title = ""
},
m = function(){
    this.a = [];
    this.parseError = !1
},

n = function(a)