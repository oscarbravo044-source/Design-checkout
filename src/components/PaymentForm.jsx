import { motion } from 'motion/react';
import { CreditCard, Calendar, Lock } from 'lucide-react';

interface PaymentFormProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
  focusedField: string | null;
  setFocusedField: (field: string | null) => void;
}

export function PaymentForm({ formData, onInputChange, focusedField, setFocusedField }: PaymentFormProps) {
  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    return formatted.substring(0, 19); // Max 16 digits + 3 spaces
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  const handleCardNumberChange = (value: string) => {
    onInputChange('cardNumber', formatCardNumber(value));
  };

  const handleExpiryDateChange = (value: string) => {
    onInputChange('expiryDate', formatExpiryDate(value));
  };

  const handleCvvChange = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    onInputChange('cvv', cleaned.substring(0, 4));
  };

  const getCardType = (number: string) => {
    const cleaned = number.replace(/\s/g, '');
    if (cleaned.startsWith('4')) return 'visa';
    if (cleaned.startsWith('5')) return 'mastercard';
    if (cleaned.startsWith('3')) return 'amex';
    return 'card';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white">Payment Details</h2>
        <div className="flex gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="Visa"
            className="h-6 opacity-70"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="Mastercard"
            className="h-6 opacity-70"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
            alt="Amex"
            className="h-6 opacity-70"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-blue-100 mb-2" htmlFor="cardNumber">
          Card Number
        </label>
        <div className="relative">
          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
          <input
            id="cardNumber"
            type="text"
            required
            value={formData.cardNumber}
            onChange={(e) => handleCardNumberChange(e.target.value)}
            onFocus={() => setFocusedField('cardNumber')}
            onBlur={() => setFocusedField(null)}
            className={`w-full bg-black/30 border ${
              focusedField === 'cardNumber' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/20'
            } rounded-lg px-10 py-3 text-white placeholder-blue-300/50 focus:outline-none transition-all duration-300`}
            placeholder="1234 5678 9012 3456"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-blue-100 mb-2" htmlFor="cardName">
          Cardholder Name
        </label>
        <div className="relative">
          <input
            id="cardName"
            type="text"
            required
            value={formData.cardName}
            onChange={(e) => onInputChange('cardName', e.target.value.toUpperCase())}
            onFocus={() => setFocusedField('cardName')}
            onBlur={() => setFocusedField(null)}
            className={`w-full bg-black/30 border ${
              focusedField === 'cardName' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/20'
            } rounded-lg px-4 py-3 text-white placeholder-blue-300/50 focus:outline-none transition-all duration-300`}
            placeholder="JOHN DOE"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-blue-100 mb-2" htmlFor="expiryDate">
            Expiry Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
            <input
              id="expiryDate"
              type="text"
              required
              value={formData.expiryDate}
              onChange={(e) => handleExpiryDateChange(e.target.value)}
              onFocus={() => setFocusedField('expiryDate')}
              onBlur={() => setFocusedField(null)}
              className={`w-full bg-black/30 border ${
                focusedField === 'expiryDate' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/20'
              } rounded-lg px-10 py-3 text-white placeholder-blue-300/50 focus:outline-none transition-all duration-300`}
              placeholder="MM/YY"
            />
          </div>
        </div>

        <div>
          <label className="block text-blue-100 mb-2" htmlFor="cvv">
            CVV
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
            <input
              id="cvv"
              type="text"
              required
              value={formData.cvv}
              onChange={(e) => handleCvvChange(e.target.value)}
              onFocus={() => setFocusedField('cvv')}
              onBlur={() => setFocusedField(null)}
              className={`w-full bg-black/30 border ${
                focusedField === 'cvv' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/20'
              } rounded-lg px-10 py-3 text-white placeholder-blue-300/50 focus:outline-none transition-all duration-300`}
              placeholder="123"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 bg-blue-900/20 border border-blue-400/30 rounded-lg p-3 flex items-start gap-3">
        <Lock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <p className="text-blue-200 text-sm">
          Your payment is secured with 256-bit SSL encryption. We never store your full card details.
        </p>
      </div>
    </motion.div>
  );
}
