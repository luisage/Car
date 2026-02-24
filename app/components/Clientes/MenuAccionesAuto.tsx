'use client'
import { useState } from 'react'
import { MoreHorizontal, Edit3 } from 'lucide-react'
import ModalEditarAuto from './ModalEditarAuto'

export default function MenuAccionesAuto({ auto, modelos }: { auto: any, modelos: any[] }) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={showDropdown ? "relative z-50" : ""}>
      <button 
        onClick={() => setShowDropdown(!showDropdown)}
        className="p-1 hover:bg-gray-100 rounded transition-colors text-gray-400 hover:text-gray-600"
      >
        <MoreHorizontal size={16} />
      </button>

      {showDropdown && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShowDropdown(false)} />
          <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50 py-1">
            <button
              onClick={() => { setShowModal(true); setShowDropdown(false); }}
              className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50 flex items-center gap-2"
            >
              <Edit3 size={14} className="text-blue-500" /> Editar Auto
            </button>
          </div>
        </>
      )}

      {showModal && (
        <ModalEditarAuto 
          auto={auto} 
          modelos={modelos} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  )
}