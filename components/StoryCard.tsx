import Link from "next/link";import {Story,fmt} from "@/lib/content";import {cat} from "@/lib/site";
export default function StoryCard({s,big=false}:{s:Story;big?:boolean}){
 return <article className="card group"><Link href={`/story/${s.slug}`} className="block">
 <div className={`overflow-hidden bg-slate ${big?"aspect-[16/9]":"aspect-[4/3]"}`}><img src={s.image} alt={s.alt} loading={big?"eager":"lazy"} className="h-full w-full object-cover"/></div>
 <p className="mt-3 text-sm text-lamp">{cat(s.category)?.name}{s.fiction&&" (fiction)"}</p>
 <h3 className={`font-serif font-bold leading-tight text-white group-hover:underline ${big?"text-3xl md:text-5xl":"text-xl"}`}>{s.title}</h3>
 <p className="mt-2 text-mute">{s.description}</p>
 <p className="mt-2 text-sm text-mute">{fmt(s.date)}, {s.minutes} min read</p></Link></article>}
