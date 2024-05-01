import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from "../hooks/useGetConversations";
import useConversation from "../zustand/useConversation";

export default function SearchInput() {
  const [name, setName] = useState('')
  const {conversations} = useGetConversations()
  const {setSelectedConversation} = useConversation()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    const conversation = conversations.find(c => (
      c.fullName.toLowerCase().includes(name.toLowerCase())
    ))
    if (conversation) {
      setSelectedConversation(conversation)
      setName('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2"
    >
      <input
        className="input input-bordered rounded-lg"
        type="text"
        placeholder="Search..."
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button className="btn btn-circle bg-sky-500 text-white" type="submit">
        <IoSearchSharp className="h-5 w-5 outline-none" />
      </button>
    </form>
  );
}
