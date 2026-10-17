import {notFound} from "next/navigation";import {getPage,pageSlugs} from "@/lib/content";
export const dynamicParams=false;export const generateStaticParams=()=>pageSlugs().map(page=>({page}));
export const generateMetadata=({params}:{params:{page:string}})=>{const p=getPage(params.page);return {title:p?.title,description:p?.description}};
export default function P({params}:{params:{page:string}}){const p=getPage(params.page);if(!p)notFound();
 return <article><h1 className="font-serif text-4xl font-bold text-white">{p.title}</h1><div className="prose-story mt-6" dangerouslySetInnerHTML={{__html:p.html}}/></article>}
