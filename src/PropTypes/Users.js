import React, { useState } from 'react'
import User from './User';

const Users = () => {
    const [user, setUser] = useState({
        id : 1703035,
        name : "anisul islam"
    })
  return (
    <div>
        <User user = {user} />
    </div>
  )
}

User.propTypes = {
    //key -value
    user:PropTypes.object.isRequired,
}

export default Users