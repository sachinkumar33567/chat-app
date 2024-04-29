import MessageContainer from "../components/MessageContainer";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return <div className="rounded-lg overflow-hidden">
    <div className="bg-slate-800 flex gap-4 py-2 pl-3 items-center">
      <img src="https://avatar.iran.liara.run/public/boy?username=dragon" alt="user profile"
      className="w-12 rounded-full" />
      <div className="text-gray-300 font-semibold">
        <p className="text-md">Aman Mishra</p>
        <p className="text-sm">@aman075</p>
      </div>
    </div>

    <div className="flex sm:h-[450px] md:h-[550px] bg-gray-400
    bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      {/* Sidebar */}
      <Sidebar />

      {/* Message container */}
      <MessageContainer />
    </div>
  </div>
}
