import type { Config } from "tailwindcss";
export default { content:["./app/**/*.tsx","./components/**/*.tsx"],
theme:{extend:{colors:{ink:"#0f1416",slate:"#1a2326",fog:"#d4dcde",mute:"#8b9a9e",lamp:"#e9c46a"},
fontFamily:{serif:["'Iowan Old Style'","Palatino","Georgia","serif"],sans:["system-ui","-apple-system","Segoe UI","sans-serif"]}}},plugins:[]} satisfies Config;
