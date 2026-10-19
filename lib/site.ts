export const SITE={name:"The Hollow Hour",tagline:"True scares, unsolved mysteries and stories you'll want to send to someone.",
url:process.env.NEXT_PUBLIC_SITE_URL||"https://the-hollow-hour.vercel.app",adsEnabled:process.env.NEXT_PUBLIC_ADS_ENABLED==="true",adClient:process.env.NEXT_PUBLIC_ADSENSE_CLIENT||"",contactEmail:"hello@example.com"};
// Edit this list to add, rename or remove categories. No other code changes needed.
export const CATEGORIES=[
{slug:"horror",name:"Horror & True Scary Stories",desc:"Eerie encounters, haunted places and experiences people still can't explain."},
{slug:"mysteries",name:"Mysteries & Unexplained",desc:"Disappearances, unresolved cases and phenomena that resist easy answers."},
{slug:"real-stories",name:"Unbelievable Real Stories",desc:"Extraordinary things that really happened, with sources."},
{slug:"weird",name:"Weird & Fascinating",desc:"Bizarre discoveries, strange facts and curious human behavior."},
{slug:"dark-history",name:"Dark History",desc:"Disturbing, forgotten and unusual events from the past."},
{slug:"internet-mysteries",name:"Internet Mysteries",desc:"Strange online discoveries and digital puzzles."},
{slug:"fiction",name:"Fiction & Creepypasta",desc:"Original horror and suspense. Always labeled as fiction."},
{slug:"discoveries",name:"Mind-Blowing Discoveries",desc:"Science and facts that make you want to know more."}];
export const cat=(s:string)=>CATEGORIES.find(c=>c.slug===s);
