import React, {useState, useEffect} from 'react'
import {verifyUser} from '../redux/AuthCRUD'
import {useParams, useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import * as auth from '../redux/AuthRedux'

interface IParams {
  token: string
}

export function Verify() {
  const [loading, setLoading] = useState(false)
  const [resultMsg, setResultMsg] = useState('')
  const history = useHistory()

  const params: IParams = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    const redirectSignup = (type: string) => {
      if (type === 'Company') {
        history.push('/auth/setup/company')
      } else {
        history.push('/auth/setup/fund')
      }
    }

    const verify = async () => {
      verifyUser(params.token)
        .then(({data: {message, user}}) => {
          setLoading(false)
          setResultMsg(message)
          dispatch(auth.actions.setUserID(user._id))
          setTimeout(() => redirectSignup(user.profile.type), 2000)
        })
        .catch(() => {
          setLoading(false)
          setResultMsg('user verification has been failed')
        })
    }
    setLoading(true)
    setTimeout(verify, 1000)
  }, [params.token, dispatch, history])

  return (
    <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
      <div className='login-page'>
        <h1 className='mt-3 mb-5'>Email Confirmation</h1>
        {loading && <h5>Verifing your accout ...</h5>}
        {!loading && <h5>{resultMsg}</h5>}
      </div>
    </div>
  )
}
