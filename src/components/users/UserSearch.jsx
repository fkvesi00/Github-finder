import React,{useState, useContext} from 'react';
import GithubContext from '../../context/github/GithubContext';

function UserSearch() {
    const [text, setText] = useState('')

    const {users, searchUsers} = useContext(GithubContext)

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text === ''){
            alert ('Please enter something')
        }else {
            searchUsers(text)

            setText('')
        }
        
    }


  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control relative'>
            <input 
              type='text'
              placeholder='Search'
              className='w-full pr-14 bg-gray-200 input input-lg text-black'
              onChange={handleTextChange}
              value={text}
            />
            <button
              type='submit' 
              className="absolute top-0 right-0 rounded-l-none btn btn-lg bg-gray-600"
              style={{ padding: '0.5rem 1rem' }}
            >
              Go
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div className="flex items-end justify-center">
        <button className='btn btn-ghost btn-lg bg-gray-500'>
          Clear
        </button>
      </div>
      )}
      
    </div>
  );
}

export default UserSearch;
