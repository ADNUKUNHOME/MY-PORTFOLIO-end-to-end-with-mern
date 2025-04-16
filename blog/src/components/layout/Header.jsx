
const Header = () => {
    return (
        <div className="w-full sticky top-0 z-50 h-24 bg-transparent backdrop-blur-md border-b border-dashed border-b-slate-300 flex items-center justify-between p-6">
            <h1 className="text-white font-bold text-3xl">BLOGS</h1>
            <div className='px-5 py-1 md:px-8 md:py-2 font-bold text-lg bg-gray-400 hover:bg-amber-950 text-black hover:text-white cursor-pointer'>
                Home
            </div>
        </div>
    )
}


export default Header
