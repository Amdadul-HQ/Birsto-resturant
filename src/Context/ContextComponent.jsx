import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import useAxiosCommon from "../Hooks/useAxiosCommon";

export const AuthContext= createContext(null)

const ContextComponent = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
    const facebookProvider = new FacebookAuthProvider()



    const createUser =(email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (name,photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }

    const logIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logInWithGitHub = () => {
        setLoading(true)
        return signInWithPopup(auth,gitHubProvider)
    }

    const loginWithFaceBook = () => {
        setLoading(true)
        return signInWithPopup(auth,facebookProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const axiosCommon = useAxiosCommon()

    useEffect( ()=> {
        const unsubcribe = onAuthStateChanged(auth,currentUser => {
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
                
                const userInfo = {
                    email:user?.email,
                    name:user?.displayName,
                    image:user?.photoURL
                }
                axiosCommon.post(`/user`,userInfo)
                axiosCommon.post('/jwt',userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('token',res.data.token)
                    }
                })
            }
            else{
                setUser(null)
                setLoading(false)
                localStorage.removeItem('token')
            }
        })
        return () => unsubcribe()
    },[axiosCommon, user])




    const info ={createUser,user,updateUser,loading,logIn,logOut,loginWithFaceBook,logInWithGitHub,logInWithGoogle}

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextComponent;