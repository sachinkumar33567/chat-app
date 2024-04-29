import {IoSearchSharp} from 'react-icons/io5'

export default function SearchInput() {
    return <form className="flex items-center gap-2">
        <input
        className="input input-bordered rounded-lg"
        type="text"
        placeholder="Search..."
        />
        <button
        className="btn btn-circle bg-sky-500 text-white"
        type="submit"
        >
            <IoSearchSharp className='h-5 w-5 outline-none' />
        </button>
    </form>
}
