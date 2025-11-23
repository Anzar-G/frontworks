import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, ScrollText } from 'lucide-react';
import { TERMS_CONDITIONS } from '../constants';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  packageName: string;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose, onAccept, packageName }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsChecked(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 bg-slate-900/80 transition-opacity backdrop-blur-sm" 
          aria-hidden="true"
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl w-full border border-slate-200">
          
          {/* Header */}
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-brand-100 p-2 rounded-lg text-brand-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-lg leading-6 font-bold text-slate-900" id="modal-title">
                  Syarat & Ketentuan Pemesanan
                </h3>
                <p className="text-xs text-slate-500">Mohon baca dengan teliti sebelum melanjutkan pemesanan paket <span className="font-bold text-brand-600">{packageName}</span></p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-white rounded-full p-2 text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="px-6 py-6 max-h-[60vh] overflow-y-auto bg-white custom-scrollbar">
            <div className="prose prose-sm max-w-none text-slate-600">
              {TERMS_CONDITIONS.map((term, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                    <ScrollText size={16} className="text-slate-400"/> {term.title}
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {term.content.map((point, idx) => (
                      <li key={idx} className="text-xs leading-relaxed">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Footer / Action */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3 w-full sm:w-auto">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="focus:ring-brand-500 h-5 w-5 text-brand-600 border-gray-300 rounded cursor-pointer"
                />
              </div>
              <div className="text-sm">
                <label htmlFor="terms" className="font-medium text-slate-700 cursor-pointer select-none">
                  Saya telah membaca & menyetujui S&K yang berlaku
                </label>
                <p className="text-xs text-slate-500">Anda tidak dapat melanjutkan tanpa menyetujui S&K.</p>
              </div>
            </div>

            <button
              type="button"
              disabled={!isChecked}
              onClick={onAccept}
              className={`w-full sm:w-auto inline-flex justify-center rounded-xl border border-transparent shadow-sm px-6 py-3 text-sm font-bold text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 ${
                isChecked 
                  ? 'bg-brand-600 hover:bg-brand-700 hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer' 
                  : 'bg-slate-300 cursor-not-allowed'
              }`}
            >
              Lanjut ke Pemesanan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
