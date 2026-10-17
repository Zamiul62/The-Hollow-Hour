import {getAll} from "@/lib/content";import StoryCard from "@/components/StoryCard";
export const metadata={title:"Search",robots:{index:false}};
export default function Search({searchParams}:{searchParams:{q?:string;tag?:string}}){
 const q=(searchParams.q||"").toLowerCase().trim(),tag=searchParams.tag;
 const r=getAll().filter(s=>tag?s.tags.includes(tag):q&&(`${s.title} ${s.description} ${s.tags.join(" ")}`.toLowerCase().includes(q)));
 return <><h1 className="font-serif text-3xl text-white">{tag?`Tagged “${tag}”`:q?`Results for “${searchParams.q}”`:"Search"}</h1>
 {r.length?<div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{r.map(s=><StoryCard key={s.slug} s={s}/>)}</div>:<p className="mt-6 text-mute">{q||tag?"No matching stories. Try a shorter or different word.":"Type a word in the search box above."}</p>}</>}
