import React from 'react';

export default function ProgressBar({ step, setStep }) {
  const steps = ['Dados básicos', 'Seu projeto', 'Resultado'];
  return (
    <div className="w-1/4 bg-gray-100 p-6 flex flex-col justify-start space-y-8 mt-8">
      {steps.map((label, idx) => {
        const s = idx + 1;
        const active = s === step;
        const done = s < step;
        return (
          <div
            key={label}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setStep(s)}
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 font-semibold ${
                done
                  ? 'bg-green-500 border-green-500 text-white'
                  : active
                  ? 'border-green-500 text-green-500'
                  : 'border-gray-300 text-gray-400'
              }`}
            >
              {s}
            </div>
            <span className={`${done || active ? 'font-semibold text-gray-700' : 'text-gray-400'}`}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}