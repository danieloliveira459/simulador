import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import BasicForm from './components/BasicForm';
import ProjectForm from './components/ProjectForm';
import ResultScreen from './components/ResultScreen';


export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [id]: type === 'checkbox' ? checked : value }));
  };

  const nextStep = () => setStep((p) => Math.min(p + 1, 3));
  const prevStep = () => setStep((p) => Math.max(p - 1, 1));

  const valorFinanciado = Number(formData.valorFinanciado || 0);
  const jurosAnual = 0.0796;
  const prazoMeses = Number(formData.prazo || 0);
  const totalJuros = valorFinanciado * jurosAnual * (prazoMeses / 12);
  const totalPago = valorFinanciado + totalJuros;
  const primeiraParcela = prazoMeses > 0 ? totalPago / prazoMeses : 0;

  const baixarPDF = () => {
    const element = document.getElementById('resultScreen');
    if (!element) return;
    // html2pdf is loaded via CDN and available as window.html2pdf
    const opt = { margin: 0.5, filename: 'simulacao_fno.pdf', html2canvas: { scale: 2 } };
    window.html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="bg-gray-50 h-screen flex items-center justify-center p-4">
      <div className="flex w-full max-w-6xl shadow-lg bg-white rounded-2xl overflow-hidden">
        <ProgressBar step={step} setStep={setStep} />
        <div className="w-3/4 p-8 relative">
          {step === 1 && (
            <BasicForm formData={formData} handleChange={handleChange} nextStep={nextStep} />
          )}
          {step === 2 && (
            <ProjectForm
              formData={formData}
              handleChange={handleChange}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 3 && (
            <div id="resultScreen">
              <ResultScreen
                valorFinanciado={valorFinanciado}
                totalPago={totalPago}
                primeiraParcela={primeiraParcela}
                totalJuros={totalJuros}
              />
              <div className="flex justify-end">
                <button
                  onClick={baixarPDF}
                  className="bg-green-600 text-white px-6 py-2 rounded-full mt-4 hover:bg-green-700"
                >
                  Baixar Simulação Completa
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

