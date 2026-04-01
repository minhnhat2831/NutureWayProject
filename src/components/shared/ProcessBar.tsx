interface Props {
    value? : number
}

export default function ProcessBar({
    value
}:Props) {
    if(value === undefined) return
    const percentage = Math.min(100, Math.max(0, value));
    return (<>
        <div className={`w-full h-3 z-0 bg-blue-50 rounded-3xl mb-4`}>
            <div style={{ width: `${percentage}%` }}
            className={`transition-all duration-800 ease-in-out h-3 rounded-3xl z-10 bg-blue-600`}></div>
        </div>
    </>)
}