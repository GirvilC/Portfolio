import{c as p,d as u,f as l,g,h as f,i as h}from"./chunk-3FIW63JG.js";import{Eb as a,Fb as d,Pa as v,Ra as i,Y as _,ab as x,dc as b,ec as A,fb as c,gc as M,jc as C,mb as o,qb as n,rb as r,sb as m,vb as I,wa as y,yb as P}from"./chunk-WOHVJBQU.js";function w(t,s){if(t&1&&(n(0,"div",4),m(1,"div",5),n(2,"div",6)(3,"div",7),m(4,"img",8),n(5,"div")(6,"h3",9),a(7),r(),n(8,"span",10),a(9),r(),m(10,"br"),n(11,"span",11),a(12),r()()()()()),t&2){let e=s.$implicit;i(4),P("alt",e.structure),o("src",e.logo,v),i(3),d(e.titre),i(2),d(e.structure),i(3),d(e.date)}}function O(t,s){if(t&1&&(n(0,"div",2),c(1,w,13,5,"div",3),r()),t&2){let e=I();o("@fadeInStagger",void 0),i(),o("ngForOf",e.parcours)}}var E=class t{isBrowser;constructor(){this.isBrowser=C(_(y))}parcours=[{titre:"Alternance d\xE9veloppeur full stack",structure:"Capgemini Engineering",logo:"assets/ImageCapgeminiEngineering.png",date:"Septembre 2023 - Aujourd'hui"},{titre:"Master Ing\xE9nierie du Logiciel",structure:"ESIEA",logo:"assets/ImageEsiea.png",date:"Septembre 2023 - Aujourd'hui"},{titre:"Stage d\xE9veloppeur full stack",structure:"Capgemini Engineering",logo:"assets/ImageCapgeminiEngineering.png",date:"F\xE9vrier 2023 - Aout 2023"},{titre:"Bachelor en informatique",structure:"ESIEA",logo:"assets/ImageEsiea.png",date:"Septembre 2020 - F\xE9vrier 2023"},{titre:"Baccalaur\xE9at STI2D",structure:"Lyc\xE9e Antoine Bourdelle",logo:"assets/ImageLyceeBourdelle.jpg",date:"Septembre 2019 - Juillet 2020"}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-parcours"]],decls:3,vars:1,consts:[[1,"text-3xl","font-bold","mb-6"],["class","timeline-container",4,"ngIf"],[1,"timeline-container"],["class","timeline-item",4,"ngFor","ngForOf"],[1,"timeline-item"],[1,"timeline-dot"],[1,"timeline-content"],[1,"timeline-header"],[1,"logo",3,"src","alt"],[1,"title"],[1,"structure"],[1,"timeline-date"]],template:function(e,S){e&1&&(n(0,"h2",0),a(1,"Mon parcours"),r(),c(2,O,2,2,"div",1)),e&2&&(i(2),o("ngIf",S.isBrowser))},dependencies:[M,b,A],styles:[".timeline-container[_ngcontent-%COMP%]{position:relative;padding-left:2rem;border-left:3px solid #6200ea}.timeline-item[_ngcontent-%COMP%]{position:relative;margin-bottom:2rem}.timeline-dot[_ngcontent-%COMP%]{position:absolute;top:12px;left:-10px;width:16px;height:16px;background-color:#6200ea;border-radius:50%}.timeline-content[_ngcontent-%COMP%]{background-color:#fafafa;padding:1rem;border-radius:8px;box-shadow:0 2px 6px #00000014}.timeline-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.logo[_ngcontent-%COMP%]{width:150px;height:auto;margin-right:1rem;object-fit:contain}.title[_ngcontent-%COMP%]{font-weight:600;font-size:1.1rem}.structure[_ngcontent-%COMP%]{color:#555;font-size:.95rem}.timeline-date[_ngcontent-%COMP%]{color:#999;font-size:.9rem}.description[_ngcontent-%COMP%]{margin-top:.5rem}"],data:{animation:[p("fadeInStagger",[g(":enter",[f(".timeline-item",[l({opacity:0,transform:"translateY(20px)"}),h(150,[u("500ms ease-out",l({opacity:1,transform:"translateY(0)"}))])],{optional:!0})])])]}})};export{E as ParcoursComponent};
