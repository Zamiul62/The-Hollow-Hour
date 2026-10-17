import {MetadataRoute} from "next";import {getAll,pageSlugs} from "@/lib/content";import {SITE,CATEGORIES} from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{const u=SITE.url;return [{url:u},...CATEGORIES.map(c=>({url:`${u}/category/${c.slug}`})),...pageSlugs().map(p=>({url:`${u}/${p}`})),...getAll().map(s=>({url:`${u}/story/${s.slug}`,lastModified:s.updated||s.date}))]}
