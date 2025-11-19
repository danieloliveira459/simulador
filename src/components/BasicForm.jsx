import React from 'react';
import InputMask from "react-input-mask";

export default function BasicForm({ formData, handleChange, nextStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar validações extras se quiser
    nextStep();
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Simulador de FNO</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Qual é o seu nome?</label>
        <input
          type="text"
          id="nome"
          value={formData.nome || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Qual é o nome da sua empresa?</label>
        <input
          type="text"
          id="empresa"
          value={formData.empresa || ''}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Qual é o CNPJ da sua empresa?</label>
        <InputMask
          mask="99.999.999/9999-99"
          value={formData.cnpj}
          onChange={handleChange}
          required
        >
          {(inputProps) => (
            <input
              {...inputProps}
              type="text"
              name="cnpj"
              placeholder="00.000.000/0001-09"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          )}
        </InputMask>
      </div>

      <div className="flex flex-col md:flex-row gap-6 max-w-3xl">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">E-mail de contato</label>
          <input
            type="email"
            id="email"
            placeholder="seuemail@exemplo.com"
            value={formData.email || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Telefone</label>
          <InputMask
            mask="(99) 99999-9999"
            value={formData.telefone}
            onChange={handleChange}
            required
          >
            {(inputProps) => (
              <input
                {...inputProps}
                type="text"
                name="telefone"
                placeholder="(99) 99999-9999"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            )}
          </InputMask>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col w-1/2">
          <label htmlFor="estado" className="text-sm font-medium mb-1">Estado</label>
          <select
            id="estado"
            value={formData.estado || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Selecione</option>
            <option value="AM">AM</option>
            <option value="AP">AP</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="TO">TO</option>
          </select>
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="municipio" className="text-sm font-medium mb-1">Município</label>
          <select
            id="municipio"
            value={formData.municipio || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Selecione</option>
            <option value="Manaus">Manaus</option>
            <option value="Rio Branco">Rio Branco</option>
            <option value="Porto Velho">Porto Velho</option>
            <option value="Boa Vista">Boa Vista</option>
            <option value="Palmas">Palmas</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full mt-6 shadow-md transition-all"
        >
          → Seguir
        </button>
      </div>
    </form>
  );
}
