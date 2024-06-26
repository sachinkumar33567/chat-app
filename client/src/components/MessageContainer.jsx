import { TiMessages } from "react-icons/ti";
import Message from "./Message";
import { useAuthContext } from "../context/AuthContext";
import useConversation from "../zustand/useConversation";
import { useEffect, useRef } from "react";
import MessageInput from "./MessageInput";
import useGetMessages from "../hooks/useGetMessages";
import useListenMessages from "../hooks/useListenMessages";

export default function MessageContainer() {
  const { authUser } = useAuthContext();
  const { selectedConversation, setSelectedConversation } = useConversation();
  const {loading, messages} = useGetMessages()
  const lastMessageRef = useRef()
  useListenMessages()

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  useEffect(() => {
    setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({behavior: 'smooth'})
    }, 100)
  }, [messages])

  return (
    <div className="w-[460px] flex flex-col">
      {!selectedConversation ? (
        <div className="flex items-center justify-center w-full h-full">
          <div
            className="px-4 text-center sm:text-lg md:text-xl text-gray-200
            font-semibold flex flex-col gap-2 items-center"
          >
            <p>Welcome 👋 {authUser.fullName}</p>
            <p>Select a chat to start messaging</p>
            <TiMessages className="text-4xl md:text-6xl text-center" />
          </div>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2">
            <span className="lable-text">To: </span>
            <span className="text-gray-900 font-semibold">
              {selectedConversation.fullName}
            </span>
          </div>

          {/* Messages */}
          <div className="px-4 flex-1 overflow-auto">
            {loading ? 
              <span className="loading loading-spinner flex items-center w-2xl mx-auto my-6"></span> :
              messages.map(message => (
                  <div key={message._id} ref={lastMessageRef}>
                      <Message message={message} />
                  </div>
              )) }
            {!loading && messages.length === 0 && <div
              className="h-[400px] w-full flex justify-center items-center">
                  <div className="w-[240px] flex flex-col gap-2 text-center
                  font-semibold bg-slate-800 py-12 text-gray-400 rounded-lg">
                      <h2 className="text-xl">No messages here yet...</h2>
                      <p className="text-lg">Send a message to start conversation.</p>
                  </div>
              </div>}
          </div>

          {/* Message Input */}
          <MessageInput />
        </>
      )}
    </div>
  );
}
