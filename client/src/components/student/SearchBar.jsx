import React ,{useState} from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {


  const navigate = useNavigate()
const [input, setInput] = useState(data?data:"")
const onSearchHandler =(e)=>{
e.preventDefault()
navigate("/course-list/"+input)
}

  return (
    <form onSubmit={onSearchHandler} className='flex bg-white items-center justify-between w-[30%] border-[1px] px-2  border-gray-400 border-solid py-1 rounded-md'>
     <div className='flex items-center gap-1'>
      <img src={assets.search_icon} alt="search_icon" />
      <input onChange={e=>setInput(e.target.value)} value={input} className='placeholder:text-gray-400 focus:text-black outline:none focus:outline-none w-max' type="text" placeholder='Search for Courses' />
      </div>
      <button className='bg-blue-600 hover:border-[1px] hover:border-black hover:text-blue-600 hover:bg-white text-white rounded-md px-5 py-2' type='submit'>Search</button>
    </form>
  )
}

export default SearchBar