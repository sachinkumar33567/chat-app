export default function Conversation() {
  return <>
    <div className={`flex gap-3 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer`}>
        <div className={`avatar online`}>
            <div className="w-12 rounded-full">
                <img
                src="https://avatar.iran.liara.run/public/boy?username=dragon"
                alt="user avatar" />
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex justify-between">
                <p className="font-semibold text-lg text-gray-200">Shashank Singh</p>
                <span className="text-xl">😁</span>
            </div>
        </div>
    </div>
    {/* {!lastIndex && <div className="divider m-0" />} */}
    
  </>
}
