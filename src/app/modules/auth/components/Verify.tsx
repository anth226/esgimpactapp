import React, {useState, useEffect} from 'react'
import {verifyUser} from '../redux/AuthCRUD'
import {useParams, Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import * as auth from '../redux/AuthRedux'

interface IParams {
  token: string
}

export function Verify() {
  const [loading, setLoading] = useState(false)
  const [resultMsg, setResultMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const params: IParams = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    const verify = async () => {
      verifyUser(params.token)
        .then(({data: {message, user}}) => {
          setLoading(false)
          setResultMsg(message)
          setSuccess(true)
          dispatch(auth.actions.setUserID(user._id))
        })
        .catch(() => {
          setLoading(false)
          setResultMsg('user verification has been failed')
        })
    }
    setLoading(true)
    setTimeout(verify, 1000)
  }, [params.token, dispatch])

  return (
    <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
      <div className='login-page'>
        <h1 className='mt-3 mb-5'>Email Confirmation</h1>
        {loading && <h5>Verifing your accout ...</h5>}
        {!loading && <h5>{resultMsg}</h5>}
        {success && (
          <div className='d-flex flex-stack pt-10 mt-5' style={{fontWeight: 'bold'}}>
            <Link className='mr-4' to={'/auth/setup/fund'}>
              Fund Setup
            </Link>
            <Link to={'/auth/setup/company'}>Company Setup</Link>
          </div>
        )}
      </div>
    </div>
  )
}
