import React from 'react'
import PropTypes from "prop-types"

const User = (props) => {
    console.log(props.user);
  return (
    <div>
       <h3>{props.user.id}</h3>
       <h3>{props.user.id}</h3>
    </div>
  )
}

User.propTypes = {
    user: PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
    })
}

// User.propTypes = {
//     //key-value
//     userName : PropTypes.string,
//     userId : PropTypes.number,
// }
// User.defaultProps = {
//     userName : 'default name',
//     userId : 0
// }
export default User