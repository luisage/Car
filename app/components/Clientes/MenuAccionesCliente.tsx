'use client'
import { useState } from 'react'
import { MoreVertical, Car, Edit } from 'lucide-react'
import ModalNuevoAuto from './ModalNuevoAuto'
import ModalEditarCliente from './ModalEditarCliente'

export default function MenuAccionesCliente({ cliente, modelos }: { cliente: any, modelos: any }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeModal, setActiveModal] = useState<'auto' | 'edit' | null>(null)

  return (
    <div className={isOpen ? "relative z-50" : ""}>
      {/* Botón de los tres puntos */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-1.5 hover:bg-gray-200 rounded-full transition-colors"
      >
        <MoreVertical size={18} className="text-gray-500" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-50 py-1 overflow-hidden">
            <button
              onClick={() => { setActiveModal('auto'); setIsOpen(false); }}
              className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
            >
              <Car size={16} className="text-blue-600" />
              Agregar Auto
            </button>
            <button
              onClick={() => { setActiveModal('edit'); setIsOpen(false); }}
              className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
            >
              <Edit size={16} className="text-orange-600" />
              Editar Cliente
            </button>
          </div>
        </>
      )}

      {/* Renderizado de Modales */}
      {activeModal === 'auto' && (
        <ModalNuevoAuto 
          clienteId={cliente.id} 
          modelos={modelos} 
          onClose={() => setActiveModal(null)} 
        />
      )}

      {activeModal === 'edit' && (
        <ModalEditarCliente 
          cliente={cliente} 
          onClose={() => setActiveModal(null)} 
        />
      )}
    </div>
  )
}