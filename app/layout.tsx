import { Analytics } from "@vercel/analytics/next";import "./globals.css";import type {Metadata} from "next";import Link from "next/link";import {SITE,CATEGORIES} from "@/lib/site";
export const metadata:Metadata={metadataBase:new URL(SITE.url),title:{default:`${SITE.name}: ${SITE.tagline}`,template:`%s | ${SITE.name}`},description:SITE.tagline,openGraph:{siteName:SITE.name,type:"website"},twitter:{card:"summary_large_image"}};
export default function Root({children}:{children:React.ReactNode}){
 const ld={"@context":"https://schema.org","@graph":[{"@type":"Organization",name:SITE.name,url:SITE.url},{"@type":"WebSite",name:SITE.name,url:SITE.url,potentialAction:{"@type":"SearchAction",target:`${SITE.url}/search?q={q}`,"query-input":"required name=q"}}]};
 return <html lang="en"><body className="min-h-screen">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
 <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:bg-lamp focus:p-2 focus:text-ink">Skip to content</a>
 <header className="border-b border-slate"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
 <Link href="/" className="font-serif text-2xl font-bold text-white">The Hollow <span className="text-lamp">Hour</span></Link>
 <form action="/search" role="search" className="flex"><label htmlFor="q" className="sr-only">Search stories</label><input id="q" name="q" placeholder="Search stories" className="w-40 rounded-l bg-slate px-3 py-2 text-sm md:w-64"/><button className="rounded-r bg-lamp px-3 text-sm font-semibold text-ink">Search</button></form></div>
 <nav aria-label="Categories" className="mx-auto max-w-6xl overflow-x-auto px-4 pb-3"><ul className="flex gap-5 whitespace-nowrap text-sm">{CATEGORIES.map(c=><li key={c.slug}><Link className="text-mute hover:text-white" href={`/category/${c.slug}`}>{c.name}</Link></li>)}</ul></nav></header>
 <main id="main" className="mx-auto max-w-6xl px-4 py-8">{children}</main>
 <footer className="mt-16 border-t border-slate"><div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-4 py-8 text-sm text-mute">
 {["about","contact","privacy","terms","editorial-policy","corrections","fiction-and-fact"].map(p=><Link key={p} href={`/${p}`} className="hover:text-white">{p.replace(/-/g," ")}</Link>)}
 <span className="w-full">© {new Date().getFullYear()} {SITE.name}. Fiction is always labeled as fiction.</span></div></footer><Analytics /></body></html>}
