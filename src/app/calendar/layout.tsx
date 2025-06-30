import Sidebar from '@/componet/sidebar/sidebar'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
     <main className="flex bg-gray-100 h-full w-full">
        <Sidebar />
        {children}

        </main>
  )
}