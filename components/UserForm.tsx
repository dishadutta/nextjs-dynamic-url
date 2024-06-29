'use client'
import { useState } from 'react'

const UserForm = () => {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [employment, setEmployment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const userData = { name, details, employment }
    if (name) {
      localStorage.setItem(name, JSON.stringify(userData))
      window.location.href = `/${name}`
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label htmlFor='name' className='block'>
          Name:
        </label>
        <input
          id='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='border p-2 w-full'
        />
      </div>
      <div>
        <label htmlFor='details' className='block'>
          Details:
        </label>
        <textarea
          id='details'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className='border p-2 w-full'
        />
      </div>
      <div>
        <label htmlFor='employment' className='block'>
          Employment:
        </label>
        <input
          id='employment'
          type='text'
          value={employment}
          onChange={(e) => setEmployment(e.target.value)}
          className='border p-2 w-full'
        />
      </div>
      <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
        Submit
      </button>
    </form>
  )
}

export default UserForm
