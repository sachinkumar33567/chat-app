import { useAuthContext } from "../context/AuthContext";

export default function Message({message}) {
  const {authUser} = useAuthContext()
  const fromMe = authUser._id === message.senderId
  
  return <div className={`chat ${fromMe? 'chat-end' : 'chat-start'}`}>
    <div>
        <p className={`bg-${fromMe? 'sky-500': 'slate-800'} shake}
        text-gray-200 rounded-md px-3 py-1`}>{message.message}</p>
        <p className={`text-xs text-gray-200 ${fromMe?'text-right':'text-left'}
        ${fromMe?'pr-1': 'pl-1'}`}>{extractTime(message.createdAt)}</p>
    </div>
  </div>
}


export function extractTime(dateString) {
	const date = new Date(dateString);
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	return `${hours}:${minutes}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
	return number.toString().padStart(2, "0");
}