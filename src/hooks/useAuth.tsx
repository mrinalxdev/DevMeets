import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom' 
import { onAuthStateChanged } from 'firebase/auth'
import { setUser } from '../app/slices/AuthSlice'
import { firebaseAuth } from '../lib/firebase'

const useAuth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
        if(!currentUser) navigate('/login')
        else {
            dispatch(setUser({
                uid: currentUser.uid,
                email: currentUser.email,
                name: currentUser.displayName,
            }))
        }
    })
    return () => unsubscribe()
  }, [dispatch, navigate])
  
}

export default useAuth