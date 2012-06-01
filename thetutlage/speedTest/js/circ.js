(function(a){a.fn.circMeter=function(b,c){var d=a(this);switch(typeof b){case"object":return d.each(function(c,d){if(a(d).data("meterInfo")===undefined){var e=a(d),f={phase:0,arch:360,minVal:0,maxVal:100,stepVal:10,startVal:0,actualVal:0};a.extend(f,b);f.phase=f.phase>180?-180+f.phase%180:f.phase<-180?180-f.phase%180:f.phase;f.startVal=b.startVal===undefined?f.minVal:b.startVal;if(e.css("position")=="static")e.css({position:"relative"});var g="<div></div><ul>";for(var c=f.minVal;c<=f.maxVal;c+=f.stepVal){if(f.arch==360&&c==f.maxVal)continue;g+="<li>"+c+"</li>"}g+="</ul>";e.prepend(g);g=undefined;e.find("ul").css({"list-style":"none"});e.find("ul li").css({position:"absolute",display:"inline-block"});e.find("div").css({width:e.width()/2,position:"absolute",left:e.width()/2-parseInt(e.find("div").css("border-right-width")),top:e.width()/2-parseInt(e.find("div").css("border-top-width"))-parseInt(e.find("div").css("height"))/2});var h=Math.PI*f.arch/180/(f.arch==360?e.find("ul>li").length:e.find("ul>li").length-1),i=Math.PI*(f.phase/180-1),j=Math.min(e.width(),e.height())/2.33;e.find("ul>li").each(function(b,c){a(c).css({left:e.width()/2+j*Math.cos(-i-h*b)-a(c).width()/2,top:e.height()/2+j*Math.sin(i+h*b)-a(c).height()/2})});h=i=undefined;var k=180+f.phase+Math.round((f.startVal-f.minVal)/(f.maxVal-f.minVal)*f.arch)%360;f.actualVal=k;e.data("meterInfo",f);e.find("div").css({"transform-origin":"0 50%","-o-transform-origin":"0 50%","-moz-transform-origin":"0 50%","-webkit-transform-origin":"0 50%","-moz-transform":"rotate("+k+"deg)","-o-transform":"rotate("+k+"deg)","-webkit-transform":"rotate("+k+"deg)",transform:"rotate("+k+"deg)"})}else a.error("you're trying to initialize again a meter")});break;case"number":return d.each(function(e,f){if(d.data("meterInfo")!==undefined){var g=a(f),h=g.data("meterInfo"),i=Math.round(h.arch*(b-h.minVal)/(h.maxVal-h.minVal));if(h.arch<360){var j=180+h.phase,k=180+h.phase+h.arch;if(b<0&&Math.abs((h.actualVal-j)%360)<Math.abs(i))i=j-h.actualVal;else if(b>0&&Math.abs((h.actualVal-k)%360)<Math.abs(i))i=k-h.actualVal;j=k=undefined}var l;g.find("div").animate({"z-index":g.find("div").css("z-index")},{step:function(a,b){l=h.actualVal+i*b.pos;g.find("div").css({"-moz-transform":"rotate("+l+"deg)","-o-transform":"rotate("+l+"deg)","-webkit-transform":"rotate("+l+"deg)",transform:"rotate("+l+"deg)"})},complete:function(){g.data("meterInfo").actualVal+=i;if(c!==undefined)c.apply()}})}else a.error("you're manipulating a Meter value without even initializing it")});break;case"undefined":var e=new Array;d.each(function(b,c){var d=a(c).data("meterInfo"),f;if(d!==undefined){f=Math.round(d.minVal+(d.maxVal-d.minVal)*(Math.abs(d.actualVal-180-d.phase)%d.arch)/d.arch);e.push(f)}else{e.push(null);console.warning("you're trying to read the Meter value of an item that is not a circMeter")}});return e.length==1?e[0]:e;break;default:a.error('the method "circMeter" received an argument of incorrect type');break}}})(jQuery)
