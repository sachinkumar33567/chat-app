export default function Message() {
  const fromMe = true
  return <div className={`chat ${fromMe? 'chat-end' : 'chat-start'}`}>
    <div>
        <p className={`bg-${fromMe? 'sky-500': 'slate-800'} shake}
        text-gray-200 rounded-md px-3 py-1`}>Hello Sir, How are you doing? It's a good isn't it?</p>
        <p className={`text-xs text-gray-200 ${fromMe?'text-right':'text-left'}
        ${fromMe?'pr-1': 'pl-1'}`}>12:45</p>
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