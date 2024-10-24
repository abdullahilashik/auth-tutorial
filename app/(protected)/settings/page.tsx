import { auth } from '@/auth'
import React from 'react'

const SettingsPage = async () => {
    const session = await auth();
    console.log('Session: ', session);
  return (
    <div>SettingsPage</div>
  )
}

export default SettingsPage