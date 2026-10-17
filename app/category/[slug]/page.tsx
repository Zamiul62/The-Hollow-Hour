import {notFound} from "next/navigation";import {getAll} from "@/lib/content";import {CATEGORIES,cat} from "@/lib/site";import StoryCard from "@/components/StoryCard";
export const generateStaticParams=()=>CATEGORIES.map(c=>({slug:c.slug}));
export const generateMetadata=({params}:{params:{slug:string}})=>{const c=cat(params.slug);return {title:c?.name,description:c?.desc,alternates:{canonical:`/category/${params.slug}`}}};
export default function Cat({params}:{params:{slug:string}}){const c=cat(params.slug);if(!c)notFound();const l=getAll().filter(s=>s.category===c.slug);
 return <><h1 className="font-serif text-4xl font-bold text-white">{c.name}</h1><p className="mt-2 max-w-2xl text-mute">{c.desc}</p>
 {l.length?<div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{l.map(s=><StoryCard key={s.slug} s={s}/>)}</div>:<p className="mt-8">No stories here yet.</p>}</>}
