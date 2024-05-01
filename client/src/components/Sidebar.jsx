import SearchInput from './SearchInput'
import Conversation from "./Conversation"
import {BiLogOut} from 'react-icons/bi'
import useSignout from '../hooks/useSignout'
import getRandomEmoji from '../utils/emojis'
import useGetConversations from '../hooks/useGetConversations'

export default function Sidebar() {
  const signout = useSignout()
  const {loading, conversations} = useGetConversations()

  return <div className='flex flex-col border-r border-slate-500 p-4'>
    {/* Search input */}
    <SearchInput />
    <div className="divider mt-1" />

    {/* Conversations */}
    <div className='overflow-auto'>
      {loading ?
      <span className='loading loading-spinner w-2xl mx-auto flex items-center my-4'></span> :
      conversations.map((conversation, index) => (
        <Conversation
        key={conversation._id}
        conversation={conversation}
        emoji={getRandomEmoji()}
        lastIndex={index === conversations.length - 1} />
      )) }
    </div>

    {/* Signout Button */}
    <div className='mt-auto'>
      <BiLogOut className='w-6 h-6 text-white cursor-pointer'
      onClick={signout} />
    </div>
  </div>
}
