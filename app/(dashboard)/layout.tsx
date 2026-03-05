'use client'
import Sidebar from '../components/Sidebar'
//import Header from '../components/Header'
import Header from '../components/Header/MenuHeader'
import { useSession } from 'next-auth/react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  const { data: session } = useSession()
  
  return (
    <div className="bg-gray-50 flex h-screen overflow-hidden w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header user={session?.user}/>
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}