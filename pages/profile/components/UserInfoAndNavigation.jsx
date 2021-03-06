import React, { useState } from 'react'
import { StyledButton, UserInfoAndNavigationStyling } from '../styling'
import ProfileImage from './ProfileImage'
import { useAppContext } from '../../../providers/UserComponents'
import { UserAuth } from '../../../providers/AuthenticatedUser'

const UserInfoAndNavigation = () => {
  const [active, setActive] = useState('myDetails')
  const { userComponent, setUserComponent } = useAppContext();
  const { user, logout } = UserAuth();

  return (
    <UserInfoAndNavigationStyling>
      <div className='button-wrap'>
        <StyledButton onClick={() => setUserComponent('myDetails')}>My Details</StyledButton>
        <StyledButton onClick={() => setUserComponent('myImages')}>My Images</StyledButton>
        <StyledButton onClick={() => setUserComponent('uploadImages')}>Upload Images</StyledButton>
        <StyledButton onClick={() => setUserComponent('purchasedImages')}>Purchased Images</StyledButton>
      </div>
      <div className='profileImageUserInfoWrap'>
        <ProfileImage />
        <div>
          <h4>{user && user.displayName}</h4>
          <p>Update your profile picture and personal details.</p>
        </div>
      </div>
    </UserInfoAndNavigationStyling>
  )
}

export default UserInfoAndNavigation