import { navOptions } from "@/configuration/navOptions";

export default function NavBar(){
    return <div className="flex flex-col items-end w-full  absolute z-10">
        <div className="w-full h-[13px] bg-purple-700"></div>
        <nav className=" flex gap-10 m-5 mr-20 text-purple-700  text-2xl font-light tracking-[4px]">{navOptions.map(option => <a href={ option.scrollId} className="hover:text-purple-500">{ option.name}</a>)}</nav>
    </div>
}