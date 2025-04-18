import{a as I}from"./chunk-JCUMCQG6.js";import{a as k}from"./chunk-GULWAFQX.js";import{e as S,g as M,i as H}from"./chunk-UTSOOUCC.js";import{a as D,b as L,c as h,d as O}from"./chunk-T7VJBTIQ.js";import"./chunk-ROJXZQAC.js";import{Eb as s,Fb as g,Gb as u,Jb as f,Kb as v,Lb as E,Oa as c,Ra as a,Wa as x,ab as C,d as _,dc as T,ec as b,fb as p,fc as y,gc as R,mb as o,qb as l,rb as n,sb as d,vb as m}from"./chunk-WOHVJBQU.js";var z=t=>["/competence",t],P=t=>["/realisation",t];function V(t,r){if(t&1&&(l(0,"mat-card",3)(1,"mat-card-title"),s(2,"Introduction"),n(),l(3,"mat-card-content"),d(4,"p",4),n()()),t&2){let e=m();a(4),o("innerHTML",e.realisation==null?null:e.realisation.introduction,c)}}function N(t,r){if(t&1&&(l(0,"mat-card",3)(1,"mat-card-title"),s(2,"Objectif"),n(),l(3,"mat-card-content"),d(4,"p",4),n()()),t&2){let e=m();a(4),o("innerHTML",e.realisation==null?null:e.realisation.objectif,c)}}function q(t,r){if(t&1&&(l(0,"mat-card",3)(1,"mat-card-title"),s(2,"Contexte Humain"),n(),l(3,"mat-card-content"),d(4,"p",4),n()()),t&2){let e=m();a(4),o("innerHTML",e.realisation==null?null:e.realisation.cHumain,c)}}function A(t,r){if(t&1&&(l(0,"mat-card",3)(1,"mat-card-title"),s(2,"Contexte Technique"),n(),l(3,"mat-card-content"),d(4,"p",4),n()()),t&2){let e=m();a(4),o("innerHTML",e.realisation==null?null:e.realisation.cTechnique,c)}}function w(t,r){if(t&1&&(l(0,"mat-card",3)(1,"mat-card-title"),s(2,"Enjeux et Risques"),n(),l(3,"mat-card-content"),d(4,"p",4),n()()),t&2){let e=m();a(4),o("innerHTML",e.realisation==null?null:e.realisation.enjeu,c)}}function $(t,r){if(t&1&&(l(0,"mat-card",3)(1,"mat-card-title"),s(2,"Organisation"),n(),l(3,"mat-card-content"),d(4,"p",4),n()()),t&2){let e=m();a(4),o("innerHTML",e.realisation==null?null:e.realisation.organisation,c)}}function B(t,r){if(t&1&&(l(0,"mat-card",3)(1,"mat-card-title"),s(2,"R\xE9alisation"),n(),l(3,"mat-card-content"),d(4,"p",4),n()()),t&2){let e=m();a(4),o("innerHTML",e.realisation==null?null:e.realisation.realisation,c)}}function U(t,r){if(t&1&&(l(0,"mat-card",3)(1,"mat-card-title"),s(2,"Fin du projet"),n(),l(3,"mat-card-content"),d(4,"p",4),n()()),t&2){let e=m();a(4),o("innerHTML",e.realisation==null?null:e.realisation.fin,c)}}function G(t,r){if(t&1&&(l(0,"mat-card",3)(1,"mat-card-title"),s(2,"Ce que je retiens"),n(),l(3,"mat-card-content"),d(4,"p",4),n()()),t&2){let e=m();a(4),o("innerHTML",e.realisation==null?null:e.realisation.retiens,c)}}function J(t,r){if(t&1&&(l(0,"a",7),s(1),n()),t&2){let e=r.$implicit,i=m(2);o("routerLink",f(2,z,e)),a(),u(" Voir ",i.getTitreCompetence(e)," ")}}function K(t,r){if(t&1&&(l(0,"mat-card",3)(1,"mat-card-title"),s(2,"Comp\xE9tences associ\xE9es"),n(),l(3,"mat-card-content")(4,"div",5),p(5,J,2,4,"a",6),n()()()),t&2){let e=m();a(5),o("ngForOf",e.realisation.liensVersCompetences)}}function Q(t,r){if(t&1&&(l(0,"a",7),s(1),v(2,"titlecase"),n()),t&2){let e=r.$implicit;o("routerLink",f(4,P,e)),a(),u(" Voir ",E(2,2,e)," ")}}function W(t,r){if(t&1&&(l(0,"mat-card",3)(1,"mat-card-title"),s(2,"R\xE9alisations associ\xE9es"),n(),l(3,"mat-card-content")(4,"div",5),p(5,Q,3,6,"a",6),n()()()),t&2){let e=m();a(5),o("ngForOf",e.realisation.liensVersRealisations)}}var F=class t{constructor(r){this.route=r;this.sub=this.route.paramMap.subscribe(e=>{let i=e.get("id");this.realisation=k.find(j=>j.id===i)||null})}realisation=null;sub=new _;getTitreCompetence(r){let e=I.find(i=>i.id===r);return e?e.titre:r}static \u0275fac=function(e){return new(e||t)(x(S))};static \u0275cmp=C({type:t,selectors:[["app-realisation-details"]],decls:14,vars:12,consts:[[1,"container"],[1,"text-2xl","font-bold","mb-6"],["class","mb-4",4,"ngIf"],[1,"mb-4"],[3,"innerHTML"],[1,"liens"],["class","btn-liens",3,"routerLink",4,"ngFor","ngForOf"],[1,"btn-liens",3,"routerLink"]],template:function(e,i){e&1&&(l(0,"div",0)(1,"h2",1),s(2),n(),p(3,V,5,1,"mat-card",2)(4,N,5,1,"mat-card",2)(5,q,5,1,"mat-card",2)(6,A,5,1,"mat-card",2)(7,w,5,1,"mat-card",2)(8,$,5,1,"mat-card",2)(9,B,5,1,"mat-card",2)(10,U,5,1,"mat-card",2)(11,G,5,1,"mat-card",2)(12,K,6,1,"mat-card",2)(13,W,6,1,"mat-card",2),n()),e&2&&(a(2),g(i.realisation==null?null:i.realisation.titre),a(),o("ngIf",i.realisation==null?null:i.realisation.introduction),a(),o("ngIf",i.realisation==null?null:i.realisation.objectif),a(),o("ngIf",i.realisation==null?null:i.realisation.cHumain),a(),o("ngIf",i.realisation==null?null:i.realisation.cTechnique),a(),o("ngIf",i.realisation==null?null:i.realisation.enjeu),a(),o("ngIf",i.realisation==null?null:i.realisation.organisation),a(),o("ngIf",i.realisation==null?null:i.realisation.realisation),a(),o("ngIf",i.realisation==null?null:i.realisation.fin),a(),o("ngIf",i.realisation==null?null:i.realisation.retiens),a(),o("ngIf",i.realisation&&(i.realisation==null||i.realisation.liensVersCompetences==null?null:i.realisation.liensVersCompetences.length)),a(),o("ngIf",i.realisation&&(i.realisation==null||i.realisation.liensVersRealisations==null?null:i.realisation.liensVersRealisations.length)))},dependencies:[R,T,b,y,H,M,O,D,h,L],styles:['@charset "UTF-8";.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;padding:16px}mat-card[_ngcontent-%COMP%]{background-color:#f8f9fa;color:#212529;border-radius:12px;box-shadow:0 2px 10px #0000001a;padding:16px}h1[_ngcontent-%COMP%]{margin-bottom:2rem;color:#8e24aa}.btn-liens[_ngcontent-%COMP%]{display:inline-block;margin:.25rem;padding:.5rem 1rem;background-color:#f3e5f5;color:#4a148c;text-decoration:none;border-radius:4px;transition:background-color .2s ease}.btn-liens[_ngcontent-%COMP%]:hover{background-color:#e1bee7}']})};export{F as RealisationDetailsComponent};
