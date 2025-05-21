import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SidebarProvider } from './components/ui/sidebar'
import { AbunSidebar } from './components/Sidebar'
import { ArticlesTable } from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen flex bg-gray-50">
      <SidebarProvider>
        <AbunSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <ArticlesTable />
        </main>
      </SidebarProvider>
    </div>
  )
}

export default App
