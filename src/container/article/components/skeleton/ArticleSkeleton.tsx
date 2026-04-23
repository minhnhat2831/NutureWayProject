export default function ArticleSkeleton(){
    return(<>
        <div className="min-w-40 h-40 rounded-3xl relative shadow-lg bg-violet-100 animate-pulse">
            <img src={''} className="w-full h-full rounded-3xl bg-[#cecece] opacity-50" />
            <div className="absolute bottom-13 left-2 p-1 w-[70%] h-1 bg-[#cecece]" />
            <div className="absolute bottom-8 left-2 p-1 w-[50%] h-1 bg-[#cecece]" />
        </div>
    </>)
}