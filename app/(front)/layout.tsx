import Header from '@/components/front/Header'
import React from 'react'

export default function FrontLayout({children}: {children:React.ReactNode}) {
  return (
    <div className='bg-gradient-to-b from-gray-50 to-white min-h-screen'><Header/>{children}</div>
  )
}
