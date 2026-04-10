interface ArticleCard {
    img : string
    text : string
    onClick : () => void
}

export default function ArticleCard({
    img,
    text,
    onClick
}:ArticleCard){
    return(<>
        <div className="min-w-40 h-40 rounded-3xl relative shadow-lg bg-violet-100" onClick={onClick}>
            <img src={img} className="w-full h-full rounded-3xl bg-orange-200 hover:bg-orange-300 cursor-pointer" />
            <p className="absolute bottom-0 p-4 wrap-break-word font-serif font-bold">{text}</p>
        </div>
    </>)
}