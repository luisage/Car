// components/Header/ModalResetPassword.tsx
'use client'
import { useState } from 'react';
import { X, ShieldCheck, Lock } from 'lucide-react';
import { updatePassword } from '../../actions/auth/actions';
import { toast } from 'sonner';

export default function ModalResetPassword({ userId, onClose }: { userId: number, onClose: () => void }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    const currentPass = formData.get('currentPassword') as string;
    const newPass = formData.get('newPassword') as string;
    const confirm = formData.get('confirmPassword') as string;

    if (newPass !== confirm) {
      toast.error("Las nuevas contraseñas no coinciden");
      return;
    }

    if (newPass.length < 6) {
      toast.error("La nueva contraseña debe tener al menos 6 caracteres");
      return;
    }

    setLoading(true);
    try {
      const result = await updatePassword(userId, currentPass, newPass);
      
      if (result.success) {
        toast.success("¡Contraseña actualizada correctamente!");
        onClose();
      } else {
        toast.error(result.error || "Error al actualizar");
      }
    } catch (error) {
      toast.error("Hubo un fallo en la conexión");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <form action={handleSubmit} className="relative bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Lock className="text-blue-600" size={20} />
            <h2 className="text-xl font-bold">Seguridad</h2>
          </div>
          <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Contraseña Actual</label>
            <input 
              name="currentPassword" 
              type="password" 
              required 
              className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
              placeholder="••••••••"
            />
          </div>

          <hr className="border-gray-100 my-2" />

          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Nueva Contraseña</label>
            <input 
              name="newPassword" 
              type="password" 
              required 
              className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Mínimo 6 caracteres"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Confirmar Nueva Contraseña</label>
            <input 
              name="confirmPassword" 
              type="password" 
              required 
              className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Repite la contraseña"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button type="button" onClick={onClose} className="flex-1 py-2.5 border rounded-xl hover:bg-gray-50 text-sm font-medium">
            Cancelar
          </button>
          <button 
            type="submit" 
            disabled={loading}
            className={`flex-1 py-2.5 rounded-xl font-bold text-white transition-all shadow-lg ${
              loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-100'
            }`}
          >
            {loading ? 'Verificando...' : 'Actualizar'}
          </button>
        </div>
      </form>
    </div>
  );
}