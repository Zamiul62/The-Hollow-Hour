import {notFound} from "next/navigation";import Link from "next/link";import {getAll,getStory,toHtml,fmt,related} from "@/lib/content";import {SITE,cat} from "@/lib/site";import AdSlot from "@/components/AdSlot";import StoryCard from "@/components/StoryCard";
export const generateStaticParams=()=>getAll().map(s=>({slug:s.slug}));
export function generateMetadata({params}:{params:{slug:string}}){const s=getStory(params.slug);if(!s)return {};
 return {title:s.title,description:s.description,alternates:{canonical:s.canonical||`/story/${s.slug}`},openGraph:{type:"article",title:s.title,description:s.description,images:[s.image],publishedTime:s.date},twitter:{card:"summary_large_image"}}}
export default function Story({params}:{params:{slug:string}}){
 const all=getAll(),s=getStory(params.slug);if(!s)notFound();const i=all.indexOf(s),prev=all[i+1],next=all[i-1],c=cat(s.category),url=`${SITE.url}/story/${s.slug}`;
 const ld=[{"@context":"https://schema.org","@type":"BlogPosting",headline:s.title,description:s.description,image:SITE.url+s.image,datePublished:s.date,dateModified:s.updated||s.date,author:{"@type":"Person",name:s.author},publisher:{"@type":"Organization",name:SITE.name},mainEntityOfPage:url},
 {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[["Home",SITE.url],[c?.name||"",`${SITE.url}/category/${s.category}`],[s.title,url]].map(([name,item],n)=>({"@type":"ListItem",position:n+1,name,item}))}];
 const enc=encodeURIComponent;
 return <article className="mx-auto max-w-2xl">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
 <nav aria-label="Breadcrumb" className="text-sm text-mute"><Link href="/">Home</Link> / <Link href={`/category/${s.category}`}>{c?.name}</Link></nav>
 <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-white md:text-5xl">{s.title}</h1>
 {s.subtitle&&<p className="mt-3 text-xl text-mute">{s.subtitle}</p>}
 <p className="mt-4 text-sm text-mute">By {s.author}. Published {fmt(s.date)}{s.updated&&`, updated ${fmt(s.updated)}`}. {s.minutes} min read.</p>
 {s.fiction&&<p role="note" className="mt-4 border border-lamp p-3 text-sm text-lamp">This is a work of fiction. Names, events and places are invented.</p>}
 <img src={s.image} alt={s.alt} className="mt-6 w-full" />
 <div className="prose-story mt-6" dangerouslySetInnerHTML={{__html:toHtml(s.body)}}/>
 <AdSlot slot="article-mid"/>
 {s.sources.length>0&&<section className="mt-8"><h2 className="font-serif text-xl text-white">Sources</h2><ul className="mt-2 list-disc pl-5 text-mute">{s.sources.map(x=><li key={x.url}><a className="text-lamp underline" href={x.url} rel="noopener noreferrer">{x.title}</a></li>)}</ul></section>}
 <p className="mt-8 flex flex-wrap gap-4 text-sm">Share: <a className="text-lamp" href={`https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(s.title)}`}>X</a><a className="text-lamp" href={`https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`}>Facebook</a><a className="text-lamp" href={`https://www.reddit.com/submit?url=${enc(url)}&title=${enc(s.title)}`}>Reddit</a></p>
 <p className="mt-4 flex flex-wrap gap-2 text-sm">{s.tags.map(t=><Link key={t} href={`/search?tag=${enc(t)}`} className="rounded bg-slate px-2 py-1">#{t}</Link>)}</p>
 <p className="mt-4 text-sm text-mute">Spotted an error? <Link className="text-lamp underline" href="/corrections">Send a correction</Link>.</p>
 <nav aria-label="More stories" className="mt-10 flex justify-between gap-4 text-sm">{prev?<Link href={`/story/${prev.slug}`}>Older: {prev.title}</Link>:<span/>}{next&&<Link href={`/story/${next.slug}`}>Newer: {next.title}</Link>}</nav>
 {related(s,all).length>0&&<section className="mt-12"><h2 className="mb-4 font-serif text-2xl text-white">Related stories</h2><div className="grid gap-6">{related(s,all).map(r=><StoryCard key={r.slug} s={r}/>)}</div></section>}
 </article>}
