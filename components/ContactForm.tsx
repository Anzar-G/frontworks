import React, { useState, useEffect } from 'react';
import { Send, AlertCircle, CheckCircle, MessageSquare, ShieldCheck } from 'lucide-react';
import { ContactFormData } from '../types';
import { SERVICE_TYPES, PRICING_PACKAGES } from '../constants';
import TermsModal from './TermsModal';

interface ContactFormProps {
  initialServiceType?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialServiceType }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    serviceType: '',
    description: '',
    budget: ''
  });

  // State for Terms Agreement Checkbox
  // If coming from "Pilih Paket", they already agreed in the Modal, so default to true.
  // If manual, default to false.
  const [agreedToTerms, setAgreedToTerms] = useState(!!initialServiceType);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  // Auto-fill service type when passed from props (e.g. from Pricing section)
  useEffect(() => {
    if (initialServiceType) {
      setFormData(prev => ({ ...prev, serviceType: initialServiceType }));
      setAgreedToTerms(true);
    }
  }, [initialServiceType]);

  // Auto-fill Budget based on Service Type (Logic works for both Manual and Button selection)
  useEffect(() => {
    // Exact match lookup thanks to updated constants.tsx
    const selectedPkg = PRICING_PACKAGES.find(pkg => pkg.name === formData.serviceType);
    
    if (selectedPkg) {
      // If a standard package is selected (found in pricing), set the budget automatically
      setFormData(prev => ({ ...prev, budget: selectedPkg.price }));
    } else if (formData.serviceType === 'Konsultasi Custom') {
      // If custom, clear the budget IF it was previously set to a package price
      setFormData(prev => {
        if (prev.budget.startsWith('Mulai Rp')) {
          return { ...prev, budget: '' };
        }
        return prev;
      });
    } else {
        // Reset if nothing selected or switching to empty
         setFormData(prev => ({ ...prev, budget: '' }));
    }
  }, [formData.serviceType]);

  const [errors, setErrors] = useState<Partial<ContactFormData> & { terms?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    let tempErrors: Partial<ContactFormData> & { terms?: string } = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Nama lengkap wajib diisi.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email wajib diisi.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Format email tidak valid.';
      isValid = false;
    }

    if (!formData.serviceType) {
      tempErrors.serviceType = 'Silakan pilih jenis layanan.';
      isValid = false;
    }

    // Validation logic for budget if Custom
    if (formData.serviceType === 'Konsultasi Custom' && !formData.budget.trim()) {
        tempErrors.budget = 'Mohon isi estimasi anggaran untuk proyek custom.';
        isValid = false;
    }

    if (!formData.description.trim() || formData.description.length < 20) {
      tempErrors.description = 'Deskripsi minimal 20 karakter.';
      isValid = false;
    }

    if (!agreedToTerms) {
      tempErrors.terms = 'Anda harus menyetujui Syarat & Ketentuan.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call/processing
      setIsSubmitted(true);
    }
  };

  const handleWhatsAppRedirect = () => {
    const phone = "6282221025449"; // Ganti dengan nomor asli
    const text = 
      `Subjek: Minat pada Jasa Pembuatan Web - ${formData.serviceType || '-'}\n\n` +
      `Kepada Tim VoxFactum\n\n` +
      `Saya menulis pesan ini untuk menyatakan ketertarikan saya pada layanan pengembangan web yang Anda tawarkan.\n\n` +
      `Berikut adalah detail informasi dan kebutuhan awal saya:\n\n` +
      `Nama: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Layanan yang Diminati: ${formData.serviceType}\n` +
      `Estimasi Anggaran: ${formData.budget}\n` +
      `Deskripsi Proyek Awal: ${formData.description}\n\n` +
      `Saya sangat antusias untuk berdiskusi lebih lanjut mengenai potensi kolaborasi dan bagaimana keahlian VoxFactum dapat membantu mewujudkan visi proyek saya. Mohon informasinya mengenai langkah selanjutnya.\n` +
      `Terima kasih atas waktu dan perhatiannya.\n\n` +
      `Hormat saya, ${formData.name}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
  };

  // Helper to determine if budget input should be disabled
  // It is disabled if the service type matches one of the preset packages
  const isBudgetDisabled = PRICING_PACKAGES.some(pkg => pkg.name === formData.serviceType);

  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Mulai Proyek Anda</h2>
          <p className="mt-4 text-lg text-slate-500">
            Isi formulir di bawah ini untuk konsultasi awal. Tombol WhatsApp akan muncul setelah data tervalidasi.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-6">
              
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-200'} focus:outline-none focus:ring-4 transition-all`}
                  placeholder="Masukkan nama anda"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14}/> {errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Alamat Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-200'} focus:outline-none focus:ring-4 transition-all`}
                  placeholder="nama@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14}/> {errors.email}</p>}
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Jenis Layanan *</label>
                <div className="relative">
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.serviceType ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-200'} focus:outline-none focus:ring-4 transition-all appearance-none bg-white`}
                  >
                    <option value="">Pilih layanan...</option>
                    {SERVICE_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                     <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
                {errors.serviceType && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14}/> {errors.serviceType}</p>}
              </div>

              {/* Budget (Auto-filled or Custom) */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {isBudgetDisabled ? 'Harga Paket (Otomatis)' : 'Estimasi Anggaran *'}
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  disabled={isBudgetDisabled}
                  className={`w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-4 focus:ring-brand-200 transition-all ${
                    isBudgetDisabled ? 'bg-slate-100 text-slate-500 cursor-not-allowed font-semibold' : 'bg-white text-slate-900'
                  }`}
                  placeholder={isBudgetDisabled ? "Pilih layanan dahulu..." : "Contoh: Rp 5.000.000 - Rp 10.000.000"}
                />
                 {errors.budget && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14}/> {errors.budget}</p>}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Deskripsi Kebutuhan *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.description ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-200'} focus:outline-none focus:ring-4 transition-all`}
                  placeholder="Ceritakan detail proyek atau masalah yang ingin diselesaikan..."
                ></textarea>
                {errors.description && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14}/> {errors.description}</p>}
              </div>

              {/* Terms & Conditions Checkbox */}
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
                <div className="flex items-center h-5 mt-0.5">
                  <input
                    id="form-terms"
                    name="form-terms"
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => {
                      setAgreedToTerms(e.target.checked);
                      if (e.target.checked) setErrors(prev => ({ ...prev, terms: '' }));
                    }}
                    className="focus:ring-brand-500 h-5 w-5 text-brand-600 border-gray-300 rounded cursor-pointer"
                  />
                </div>
                <div className="text-sm">
                  <label htmlFor="form-terms" className="font-medium text-slate-700 cursor-pointer select-none">
                    Saya telah membaca & menyetujui Syarat & Ketentuan
                  </label>
                  <p className="text-xs text-slate-500 mt-1">
                    Dengan mengirim formulir ini, Anda menyetujui semua kebijakan yang berlaku dalam pengerjaan proyek.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsTermsModalOpen(true)}
                    className="mt-2 text-xs font-medium text-brand-600 hover:text-brand-700 underline"
                  >
                    Lihat Syarat & Ketentuan lengkap
                  </button>
                  {errors.terms && <p className="mt-2 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14}/> {errors.terms}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors shadow-lg flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                Kirim & Validasi
              </button>
            </form>
          ) : (
            <div className="p-10 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600 w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Terima Kasih, {formData.name}!</h3>
              <p className="text-slate-600 mb-8">
                Formulir anda telah berhasil divalidasi. Silakan klik tombol di bawah untuk melanjutkan diskusi langsung via WhatsApp dengan data yang sudah terisi.
              </p>
              
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-[#25D366] text-white font-bold py-4 rounded-lg hover:bg-[#20bd5a] transition-colors shadow-lg flex justify-center items-center gap-2 transform hover:scale-[1.02] duration-200"
              >
                <MessageSquare size={20} />
                Lanjut ke WhatsApp
              </button>
              
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-slate-400 hover:text-slate-600 text-sm underline"
              >
                Edit Formulir
              </button>
            </div>
          )}
        </div>
      </div>
      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        onAccept={() => {
          setIsTermsModalOpen(false);
          setAgreedToTerms(true);
          setErrors(prev => ({ ...prev, terms: '' }));
        }}
        packageName={formData.serviceType || 'Layanan Web'}
      />
    </section>
  );
};

export default ContactForm;
