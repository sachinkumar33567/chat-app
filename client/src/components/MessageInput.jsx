import { BsSend } from "react-icons/bs";
import { useState } from "react";
import useSendMessage from "../hooks/useSendMessage";

export default function MessageInput() {
  const [message, setMessage] = useState('')
  const {sendMessage} = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    await sendMessage(message)
  }

  return (
    <form onSubmit={handleSubmit} className="px-4 my-3">
      <div className="w-full relative">
        <input
          className="border text-sm rounded-lg block w-full p-2.5
                bg-gray-700 border-gray-600 text-white"
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute flex items-center end-0 inset-y-0 pe-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
}
