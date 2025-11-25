import React from 'react';

export default function ProjectForm({ formData, handleChange, nextStep, prevStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 mt-8">Simulador de NFO</h2>

      {/* Primeiro Grupo */}
      <div>
        <div>
          <label className="block text-sm font-medium mb-1">Setor de atividade</label>
          <select
            id="setor"
            value={formData.setor || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Selecione</option>
            <option value="agropecuaria">Agropecuária</option>
            <option value="industria">Indústria</option>
            <option value="servicos">Serviços</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 mt-6">Modalidade do crédito</label>
          <select
            id="modalidade"
            value={formData.modalidade || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Selecione</option>
            <option value="Investimento-Amazônia Empresarial">Investimento - Amazônia Empresarial</option>
            <option value="financiamento">Financiamento</option>
            <option value="investimento">Investimento</option>
          </select>
        </div>
      </div>

      {/* Receita e Localização */}
      <div>
        <label className="block text-sm font-medium mb-1">Receita Bruta Anual</label>
        <input
          type="text"
          id="receitaBrutaAnual"
          value={formData.receitaBrutaAnual || ''}
          onChange={handleChange}
          placeholder="R$ 0,00"
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Estado</label>
          <select
            id="estadoProjeto"
            value={formData.estadoProjeto || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Selecione</option>
            <option value="Amazonas">Amazonas</option>
            <option value="Amapá">Amapá</option>
            <option value="Rondônia">Rondônia</option>
            <option value="Roraima">Roraima</option>
            <option value="Tocantins">Tocantins</option>
            <option value="Acre">Acre</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Município</label>
          <select
            id="municipioProjeto"
            value={formData.municipioProjeto || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Selecione</option>
            <option value="Amaturá">Amaturá</option>
            <option value="Calçoene">Calçoene</option>
            <option value="Boa Vista">Boa Vista</option>
            <option value="Palmas">Palmas</option>
            <option value="Rio Branco">Rio Branco</option>
          </select>
        </div>
      </div>

      {/* Valores */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Valor do Projeto</label>
          <input
            type="text"
            id="valorDoProjeto"
            value={formData.valorDoProjeto || ''}
            onChange={handleChange}
            placeholder="R$ 0,00"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Valor Financiado</label>
          <input
            type="number"
            id="valorFinanciado"
            value={formData.valorFinanciado || ''}
            onChange={handleChange}
            placeholder="R$ 0,00"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          <span className="text-gray-400 text-sm mt-1 block">
            Limite financiável: 170.000,00
          </span>
        </div>
      </div>

      {/* Prazo e Carência */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Prazo em meses</label>
          <input
            type="number"
            id="prazo"
            value={formData.prazo || ''}
            onChange={handleChange}
            placeholder="Ex: 60"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Carência em meses</label>
          <input
            type="number"
            id="carencia"
            value={formData.carencia || ''}
            onChange={handleChange}
            placeholder="Ex: 12"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
      </div>

      {/* Índice e Sistema */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Índice de Correção</label>
          <select
            id="indiceCorrecao"
            value={formData.indiceCorrecao || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Selecione</option>
            <option value="IPCA">Pré Fixado</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Sistema de Amortização</label>
          <select
            id="sistemaAmortizacao"
            value={formData.sistemaAmortizacao || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Selecione</option>
            <option value="SAC">SAC</option>
            <option value="PRICE">PRICE</option>
            <option value="PERCENTUAL">PERCENTUAL</option>
            <option value="MIXTO">MIXTO</option>
          </select>
        </div>
      </div>

      {/* Checkbox */}
      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          id="descontoPontualidade"
          checked={formData.descontoPontualidade || false}
          onChange={handleChange}
          className="w-5 h-5 accent-green-600 cursor-pointer"
        />
        <label htmlFor="descontoPontualidade" className="ml-2 text-sm text-gray-700 cursor-pointer select-none">
          Adicionar 15% desconto de pontualidade
        </label>
      </div>

      {/* Botões */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-md transition-all"
        >
          → Seguir
        </button>
      </div>
    </form>
  );
}
