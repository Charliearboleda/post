// DEPENDENCIES
import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { auth } from '../firebase'
const AuthContext = React.createContext()


export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [ allUsers, setAllUsers ] = useState([])
    const [ posts, setPosts ] = useState([])
    const [ currentUser, setCurrentUser ] = useState({})
    const [ loading, setLoading ] = useState(true)

    function getUsers() {
        axios
            .get(
                'https://post-ga-api.herokuapp.com/api/users'
            ).then(
                (response) => {
                    setAllUsers(response.data)
                }
            )

    }

    function getPosts() {
        axios
            .get(
                'https://post-ga-api.herokuapp.com/api/posts'
            ).then(
                (response) => {
                    setPosts(
                        {
                            posts: response.data
                        }
                    )
                },
                (err) => console.log(err)
            )
        // AXIOS END =====
    }

    function deletePost(event) {
        axios
            .delete(
                'https://post-ga-api.herokuapp.com/api/posts/' + event.target.value
            ).then(
                (response) => {
                    getPosts()
                }
            )
        // AXIOS END =====
    }

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email){
        return currentUser.updateEmail(email)
    }

    function updatePassword(password){
        return currentUser.updatePassword(password)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])

    const value = {
        currentUser,
        setCurrentUser,
        allUsers,
        setAllUsers,
        getUsers,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        signup,
        posts,
        setPosts,
        getPosts,
        deletePost
    }

    return (
        <div>
            <AuthContext.Provider value={ value }>
                { !loading && children }
            </AuthContext.Provider>
        </div>
    )
}
