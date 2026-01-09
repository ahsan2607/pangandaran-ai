import { Box } from '@chakra-ui/react'
import React from 'react'
import { UserProfile } from './UserProfile'
import { ProfileOption } from './ProfileOption'

export const ProfileInterface: React.FC = () => {
  return (
    <Box spaceY={8}>
        <UserProfile></UserProfile>
        <ProfileOption></ProfileOption>
    </Box>
  )
}
