'use client'
import { useState, useRef, useEffect } from 'react';
import { LogOut, Key, User } from 'lucide-react';
//import { logout } from '../../actions/auth/actions';
import ModalResetPassword from './ModalResetPassword';
import { signOut } from 'next-auth/react'

export default function Header({ user }: { user: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Iniciales del usuario
  const iniciales = user?.name ? user.name.substring(0, 2).toUpperCase() : 'U';

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          Dashboard / General
        </h2>

        <div className="relative" ref={menuRef}>
          {/* Avatar Círculo */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white text-sm font-bold transition-all shadow-md focus:ring-2 focus:ring-blue-300 outline-none"
          >
            {iniciales}
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-2 animate-in fade-in zoom-in duration-150">
              <div className="px-4 py-2 border-b border-gray-50 mb-1">
                <p className="text-xs text-gray-400 font-bold uppercase">Usuario</p>
                <p className="text-sm font-medium text-gray-800">{user?.name} {user?.apellido}</p>
              </div>

              <button
                onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
              >
                <Key size={16} className="text-blue-500" />
                Restablecer contraseña
              </button>

              <button
                onClick={() => signOut({ callbackUrl: '/login' })}
                //onClick={() => logout()}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut size={16} />
                Cerrar sesión  
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Modal de Contraseña */}
      {isModalOpen && (
        <ModalResetPassword 
          userId={user.id} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
}