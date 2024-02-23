import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const intialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, intialState)

    //get search results
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })

        const reposnse = await fetch(`https://api.github.com/search/users?q=filip`, {
            headers: {
                Authorization : `token ${GITHUB_TOKEN}`,
            },
        })

        const {items} = await reposnse.json()

        dispatch({
            type:'GET_USERS',
            payload:items
        })
    }

    //set loading to true
    const setLoading = () => dispatch({type:'SET_LOADING'})

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
    }}>
    {children}
    </GithubContext.Provider>
}

export default GithubContext