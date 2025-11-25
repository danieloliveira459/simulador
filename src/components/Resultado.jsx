import React from 'react';

export default function Resultado({ valorFinanciado, totalPago, primeiraParcela, totalJuros }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Resultado</h2>
      <div className="flex gap-4 mb-6">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full ">Pequeno Porte</span>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full ">Município Prioritário</span>
        <span className="border border-green-500 text-green-500 px-3 py-1 rounded-full">
          Taxa de juros: 7,96% a.a. + IPCA (Pós Fixada)
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <h3 className="font-bold text-xl">R$ {Number(valorFinanciado || 0).toFixed(2)}</h3>
          <p>Valor financiado</p>
        </div>
        <div className="border rounded p-4">
          <h3 className="font-bold text-xl">R$ {Number(totalPago || 0).toFixed(2)}</h3>
          <p>Total pago</p>
        </div>
        <div className="border rounded p-4">
          <h3 className="font-bold text-xl">R$ {Number(primeiraParcela || 0).toFixed(2)}</h3>
          <p>Primeira parcela após carência</p>
        </div>
        <div className="border rounded p-4">
          <h3 className="font-bold text-xl">R$ {Number(totalJuros || 0).toFixed(2)}</h3>
          <p>Total de juros</p>
        </div>
      </div>
    </div>
  );
}
