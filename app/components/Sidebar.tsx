'use client'
import { signOut, useSession } from 'next-auth/react'
import { LogOut, User as UserIcon, Menu, X, Users, Settings, BarChart3, Home, BanknoteArrowDown, ClipboardClock } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const pathname = usePathname()
  const userRole = (session?.user as any)?.role

  // Verificamos si estamos en la sala de espera
  const isWaitingRoom = pathname === '/transcurso'

   useEffect(() => {
    if (!isWaitingRoom) {
      setIsVisible(true)
      return
    }

    let timeout: NodeJS.Timeout

    const handleMouseMove = () => {
      setIsVisible(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        if (!isOpen) setIsVisible(false) // No ocultar si el menú está abierto
      }, 2000) // Se oculta tras 3 segundos
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchstart', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchstart', handleMouseMove)
      clearTimeout(timeout)
    }
  }, [isWaitingRoom, isOpen])

     const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Botón Hamburguesa: Ahora se muestra en escritorio SI es Sala de Espera */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-md shadow-lg transition-all duration-500 ${
          isWaitingRoom ? 'flex' : 'md:hidden'
        } ${isVisible || isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay: Se activa en escritorio también si es Sala de Espera */}
      {isOpen && (
        <div 
          className={`fixed inset-0 bg-black/50 z-40 ${!isWaitingRoom && 'md:hidden'}`} 
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out
        /* Si NO es sala de espera, se comporta normal (fijo en MD) */
        ${!isWaitingRoom ? 'md:relative md:translate-x-0' : ''}
        /* Estado de apertura */
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col`}>
        
        <div className="p-6 text-white font-bold text-xl flex items-center gap-2 border-b border-slate-800">
          <div className="w-6 h-6 bg-blue-500 rounded"></div> AppDB
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <NavItem icon={<Home size={18} />} label="Home" active={pathname === '/'} />
          </Link>

          {userRole === 'ADMIN' && (
            <Link href="/usuarios" onClick={() => setIsOpen(false)}>
              <NavItem icon={<Users size={18} />} label="Usuarios" active={pathname === '/usuarios'} />
            </Link>
          )}

          {userRole === 'ADMIN' && (
            <Link href="/reportes" onClick={() => setIsOpen(false)}>
              <NavItem icon={<BarChart3 size={18} />} label="Reportes" active={pathname === '/reportes'} />
            </Link>
          )}

          <Link href="/clientes" onClick={() => setIsOpen(false)}>
            <NavItem icon={<ClipboardClock size={18} />} label="Clientes" active={pathname === '/clientes'} />
          </Link>

          <Link href="/ventas" onClick={() => setIsOpen(false)}>
            <NavItem icon={<BanknoteArrowDown size={18} />} label="Ventas" active={pathname === '/ventas'} />
          </Link>

          <Link href="/transcurso" onClick={() => setIsOpen(false)}>
            <NavItem icon={<ClipboardClock size={18} />} label="Sala de espera" active={pathname === '/transcurso'} />
          </Link>

          <Link href="/configuracion" onClick={() => setIsOpen(false)}>
            <NavItem icon={<Settings size={18} />} label="Configuración" active={pathname === '/configuracion'} />
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-4">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
              <UserIcon size={16} />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium text-white truncate">{session?.user?.name || 'Usuario'}</p>
              <p className="text-xs text-slate-500 truncate">{session?.user?.email}</p>
            </div>
          </div>
          
          <button 
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="w-full flex items-center gap-3 p-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut size={18} />
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </aside>
    </>
  )
}

function NavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`
      flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors
      ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'hover:bg-slate-800'}
    `}>
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  )
}