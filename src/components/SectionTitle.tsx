export default function SectionTitle({ title }: {title: string}) {
    return <div className="w-full bg-purple-800 text-white p-10 px-20 text-3xl flex items-center gap-10">
        <div className="font-bold uppercase">{title}</div>
        <div className="w-full bg-white h-1"/>
    </div>
}