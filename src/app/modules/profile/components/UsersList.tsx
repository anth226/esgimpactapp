import {FC} from 'react'
import {UserModel} from '../../auth/models/UserModel'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {OverlayTrigger, Tooltip} from 'react-bootstrap-v5'

type Props = {
  users?: Array<UserModel>
}

const UsersList: FC<Props> = ({users = undefined}) => {
  return (
    <>
      {users &&
        users.map((user, i) => {
          return (
            <OverlayTrigger
              key={`${i}-${user}`}
              placement='top'
              overlay={<Tooltip id='tooltip-user-name'>{user.profile?.first_name}</Tooltip>}
            >
              <div className='symbol symbol-35px symbol-circle'>
                {user.profile?.picture && (
                  <img src={toAbsoluteUrl(user.profile?.picture)} alt='Pic' />
                )}
                {user.email && (
                  <span className='symbol-label bg-primary text-inverse-primary fw-bolder'>
                    {user.email}
                  </span>
                )}
              </div>
            </OverlayTrigger>
          )
        })}
    </>
  )
}

export {UsersList}
