import{initMap as s}from"./index.-pu7Hjmw.js";import{x as n,d as r,j as m,u as p,k as c,o as i,c as l}from"./framework.BLc8f-zo.js";import"./theme.D95R1Xz7.js";const u=(t,e)=>{n(e,a=>{t.setMapStyle(a?"amap://styles/darkblue":"amap://styles/normal")},{immediate:!0})},y=r({__name:"index",setup(t){const e=m(),{isDark:a}=p();return c(async()=>{s(e.value,{center:[113.533339,22.794258],zooms:[3,18],zoom:11.5,viewMode:"3D"},{version:"2.0"}).then(o=>u(o,a))}),(o,f)=>(i(),l("div",{ref_key:"mapRef",ref:e},null,512))}});export{y as default};