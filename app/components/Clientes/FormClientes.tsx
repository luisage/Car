'use client'
import { useActionState, useEffect, useRef } from 'react'; // O useFormState de 'react-dom'
import { addClienteConAuto } from '../../actions/clientes/actions';
import { Servicio, TipoAuto } from '../../generated/prisma/client';
import ColorPickerInput from '../../components/Clientes/ColorPicker';
import SelectorTipoAuto from '../../components/SelectorTipoAuto/SelectorTipoAuto';

interface Props {
  servicios: Servicio[];
  modelos: TipoAuto[];
}

export default function FormCliente({ servicios, modelos}: Props) {
  // state contendrá el error o el success que devuelva la acción
  const [state, formAction, isPending] = useActionState(addClienteConAuto, null);
  const inputStyle = "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none";
  const formRef = useRef<HTMLFormElement>(null);

  // Si la operación fue exitosa, limpiamos los campos
  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold mb-2 text-blue-600">Nuevo Registro</h2>

      {/* BANNER DE ERROR */}
      {state?.error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded shadow-sm animate-pulse">
          <p className="text-red-700 text-sm font-medium">⚠️ {state.error}</p>
        </div>
      )}

      {/* INPUTS */}
      <p className="text-xs font-bold text-gray-400 uppercase">Datos del Cliente</p>
      <input name="nombre" placeholder="Nombre" className={inputStyle} required />
      <input name="apellido" placeholder="Apellido" className={inputStyle} required />
      <input name="celular" placeholder="Teléfono" className={inputStyle} required/>
      
      
      <p className="text-xs font-bold text-gray-400 uppercase mt-2">Datos del Auto</p>
      <input name="placa" placeholder="Placa" className={inputStyle} required />
      <input name="marca" placeholder="Marca (Ej: Toyota)" className={inputStyle} required />
      <input name="modelo" placeholder="Modelo (Ej: Corolla)" className={inputStyle} required />
      <div className="flex flex-col gap-1">
  <p className="text-xs font-bold text-gray-400 uppercase">Tipo de Carrocería</p>
  <SelectorTipoAuto modelos={modelos} />
</div>
      
      {/* Dentro de FormCliente.tsx */}
<div className="flex flex-col gap-1">
  <label className="text-xs font-bold text-gray-400 uppercase">Color del Vehículo</label>
  <ColorPickerInput defaultValue="#1e40af" />
</div>

      <select 
          name="servicioData" // Enviaremos un string con ID y Costo
          className="w-full p-2 border border-gray-300 rounded-md bg-white"
          required
        >
          <option value="">Seleccione un lavado</option>
          {servicios.map((s) => (
            <option key={s.id} value={`${s.id}|${s.costo}`}>
              {s.nombre} - ${s.costo.toString()}.00
            </option>
          ))}
        </select>
      
      <button 
        type="submit" 
        disabled={isPending}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 rounded-md transition-all"
      >
        {isPending ? 'Guardando...' : 'Registrar Cliente y Auto'}
      </button>
    </form>
  );
}

