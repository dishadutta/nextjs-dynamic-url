'use client'
import { useEffect, useState } from 'react'

const UserPage = () => {
  const [userData, setUserData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const name = window.location.pathname.substring(1)
      const storedData = localStorage.getItem(name)
      if (storedData) {
        setUserData(JSON.parse(storedData))
      }
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (!userData) {
    return <p>No data found.</p>
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>
        User Information for {userData.name}
      </h1>
      <p>
        <strong>Details:</strong> {userData.details}
      </p>
      <p>
        <strong>Employment:</strong> {userData.employment}
      </p>
    </div>
  )
}

export default UserPage
