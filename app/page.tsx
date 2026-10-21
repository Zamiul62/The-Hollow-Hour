import {getAll} from "@/lib/content";import {CATEGORIES} from "@/lib/site";import StoryCard from "@/components/StoryCard";import Link from "next/link";
export default function Home(){
 const all=getAll();const hero=all.find(s=>s.featured)||all[0];const rest=all.filter(s=>s!==hero);
 if(!hero)return <p>No stories published yet. Add a Markdown file to content/stories.</p>;
 return <>
 <section aria-label="Featured story"><StoryCard s={hero} big/></section>
 <section className="mt-14"><h2 className="mb-5 font-serif text-2xl text-white">Latest</h2><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{rest.slice(0,8).map(s=><StoryCard key={s.slug} s={s}/>)}</div></section>
 {CATEGORIES.map(c=>{const l=all.filter(s=>s.category===c.slug).slice(0,3);return l.length?<section key={c.slug} className="mt-14"><div className="mb-5 flex items-baseline justify-between"><h2 className="font-serif text-2xl text-white">{c.name}</h2><Link className="text-sm text-lamp" href={`/category/${c.slug}`}>See all</Link></div><div className="grid gap-8 sm:grid-cols-3">{l.map(s=><StoryCard key={s.slug} s={s}/>)}</div></section>:null})}
 <section className="mt-16 rounded bg-slate p-8"><h2 className="font-serif text-2xl text-white">Get new stories by email</h2><p className="mt-2 text-mute">Newsletter signup is not connected yet. Connect a free provider (Buttondown, MailerLite) and replace this block.</p></section></>}
