import {SITE} from "@/lib/site";
// Renders nothing until NEXT_PUBLIC_ADS_ENABLED=true. Add the AdSense <script> in app/layout.tsx and fill `slot` when approved.
export default function AdSlot({slot,label="Advertisement"}:{slot?:string;label?:string}){
 if(!SITE.adsEnabled)return null;
 return <aside aria-label={label} className="my-10 min-h-[100px] border-y border-slate py-3 text-center text-xs text-mute"><span>{label}</span><div data-ad-slot={slot} /></aside>}
