javascript:(function(){function a(a,b,c,d){return{songId:a,date:b,isDuplicate:!1,isForcedDeleted:!1,isRemainedOriginal:!1,extraDeleteButton:null,get hasFinalState(){return this.isForcedDeleted||this.isRemainedOriginal},deleteMe:function(){this.isDuplicate=!0,d.style.background="#F2CDCF";(function(){c.click()})(),this.isForcedDeleted=!0,null!=this.extraDeleteButton&&(d.removeChild(this.extraDeleteButton),this.extraDeleteButton=null)},forcedDeleteIfDuplicated:function(){this.isDuplicate&&!this.isForcedDeleted&&this.deleteMe(!0)},remainMe:function(){d.style.background="#DDFFD9",this.isRemainedOriginal=!0}}}function b(a){h.push(a),h.length>d&&h.shift()}function c(){for(let a=0;a<h.length-1;++a){const b=h[a];for(let c=a+1;c<h.length;++c){const d=h[c];if(b.hasFinalState&&d.hasFinalState)continue;const i=Math.abs(d.date-b.date)/1e3/60,j=i<=f;j&&(b.forcedDeleteIfDuplicated(),d.forcedDeleteIfDuplicated());const k=b.songId===d.songId,l=c===a+1;k&&(i<=e||l&&g)&&(!d.isForcedDeleted&&(!d.isDuplicate||j)&&d.deleteMe(j),!b.isRemainedOriginal&&!b.isDuplicate&&b.remainMe())}}}const d=4,e=15,f=1,g=!1,h=[],j=document.querySelectorAll(".chartlist-row");for(let e=j.length-1;0<=e;--e){const f=j[e],g=f.querySelector(".chartlist-name").querySelector("a").innerText,i=f.querySelector(".chartlist-artist").querySelector("a").innerText,k=f.querySelector(".chartlist-timestamp").querySelector("span").getAttribute("title"),l=new Date(k.replace("pm"," pm").replace("am"," am")),m=f.querySelector(".more-item--delete"),n=a(g+" - "+i,l,m,f);b(n),(h.length===d||0===e)&&c()}})();