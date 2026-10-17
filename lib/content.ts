import fs from "fs";import path from "path";import matter from "gray-matter";import {marked} from "marked";
export type Story={slug:string;title:string;subtitle?:string;description:string;category:string;tags:string[];author:string;date:string;updated?:string;image:string;alt:string;featured:boolean;fiction:boolean;sources:{title:string;url:string}[];canonical?:string;body:string;minutes:number};
const read=(d:string)=>fs.readdirSync(path.join(process.cwd(),d)).filter(f=>f.endsWith(".md")).map(f=>{const {data,content}=matter(fs.readFileSync(path.join(process.cwd(),d,f),"utf8"));return {data,content,file:f.replace(/\.md$/,"")}});
export function getAll():Story[]{
 const show=process.env.SHOW_DRAFTS==="true";
 return read("content/stories").filter(({data})=>data.status==="published"||show)
 .map(({data,content,file})=>({slug:data.slug||file,title:data.title,subtitle:data.subtitle,description:data.description,category:data.category,tags:data.tags||[],author:data.author||"Editorial Team",
 date:new Date(data.date).toISOString(),updated:data.updated?new Date(data.updated).toISOString():undefined,image:data.image,alt:data.alt||data.title,featured:!!data.featured,fiction:data.category==="fiction"||!!data.fiction,
 sources:data.sources||[],canonical:data.canonical,body:content,minutes:Math.max(1,Math.round(content.split(/\s+/).length/220))}))
 .sort((a,b)=>b.date.localeCompare(a.date));}
export const getStory=(s:string)=>getAll().find(x=>x.slug===s);
export const getPage=(slug:string)=>{try{const {data,content}=matter(fs.readFileSync(path.join(process.cwd(),"content/pages",slug+".md"),"utf8"));return {title:data.title as string,description:data.description as string,html:marked.parse(content,{async:false}) as string}}catch{return null}};
export const pageSlugs=()=>read("content/pages").map(p=>p.file);
export const toHtml=(b:string)=>marked.parse(b,{async:false}) as string;
export const fmt=(d:string)=>new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});
export const related=(s:Story,all:Story[])=>all.filter(x=>x.slug!==s.slug).map(x=>({x,n:(x.category===s.category?2:0)+x.tags.filter(t=>s.tags.includes(t)).length})).filter(r=>r.n>0).sort((a,b)=>b.n-a.n).slice(0,3).map(r=>r.x);
