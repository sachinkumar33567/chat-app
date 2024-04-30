import SearchInput from './SearchInput'
import Conversation from "./Conversation"
import {BiLogOut} from 'react-icons/bi'
import useSignout from '../hooks/useSignout'

export default function Sidebar() {
  const signout = useSignout()

  return <div className='flex flex-col border-r border-slate-500 p-4'>
    {/* Search input */}
    <SearchInput />
    <div className="divider mt-1" />

    {/* Conversations */}
    <div className='overflow-auto'>
      {/* {getConversationsLoading ?
      <span className='loading loading-spinner w-2xl mx-auto flex items-center my-4'></span> :
      conversations.map((conversation, index) => (
        <Conversation
        key={conversation._id}
        conversation={conversation}
        emoji={getRandomEmoji()}
        lastIndex={index === conversations.length - 1} />
      )) } */}

      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />

    </div>

    {/* Signout Button */}
    <div className='mt-auto'>
      <BiLogOut className='w-6 h-6 text-white cursor-pointer'
      onClick={signout} />
    </div>
  </div>
}
