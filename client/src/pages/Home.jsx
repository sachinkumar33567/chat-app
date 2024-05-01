import MessageContainer from "../components/MessageContainer";
import Sidebar from "../components/Sidebar";
import { useAuthContext } from "../context/AuthContext";

export default function Home() {
  const {authUser} = useAuthContext()

  return <div className="rounded-lg overflow-hidden">
    <div className="bg-slate-800 flex gap-4 py-2 pl-3 items-center">
      <img src={authUser.profilePicture} alt="user profile"
      className="w-12 rounded-full" />
      <div className="text-gray-300 font-semibold">
        <p className="text-md">{authUser.fullName}</p>
        <p className="text-sm">@{authUser.username}</p>
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
