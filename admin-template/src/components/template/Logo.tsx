export default function Logo() {
    return (
        <div className={`
            flex flex-col items-center justify-center
            h-10 w-10 rounded-full
            bg-white
        `}>
            <div className={`h-3 w-3 rounded-full bg-red-600`}></div>
            <div className={`flex flex-row mt-0.5`}>
                <div className={`h-3 w-3 rounded-full bg-yellow-500 mr-0.5`}></div>
                <div className={`h-3 w-3 rounded-full bg-green-600 ml-0.5 `}></div>
            </div>
        </div>
    )
}