import useConversation from "../zustand/useConversation";

export default function Conversation({ conversation, emoji, lastIndex }) {
    const {selectedConversation, setSelectedConversation} = useConversation()
    const isSelected = selectedConversation?._id === conversation._id

    const handleClick = () => {
        setSelectedConversation(conversation)
    }

    return (
        <>
        <div
            className={`flex gap-3 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
            ${isSelected && 'bg-sky-500'}`}
            onClick={handleClick}
        >
            <div className={`avatar online`}>
            <div className="w-12 rounded-full">
                <img src={conversation.profilePicture} alt="user avatar" />
            </div>
            </div>
            <div className="flex flex-col flex-1">
            <div className="flex justify-between">
                <p className="font-semibold text-lg text-gray-200">
                {conversation.fullName}
                </p>
                <span className="text-xl">{emoji}</span>
            </div>
            </div>
        </div>
        {!lastIndex && <div className="divider m-0" />}
        </>
    );
}
