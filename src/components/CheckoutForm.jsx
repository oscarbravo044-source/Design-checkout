import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Lock, MapPin, CreditCard, Calendar, Shield } from 'lucide-react';
import { PaymentForm } from './PaymentForm';

interface CheckoutFormProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isProcessing: boolean;
  productDetails: {
    name: string;
    price: string;
    id: string;
  };
}

export function CheckoutForm({ formData, onInputChange, onSubmit, isProcessing, productDetails }: CheckoutFormProps) {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const total = parseFloat(productDetails.price) * 1.1; // Include 10% processing fee

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Account Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
      >
        <h2 className="text-white mb-6">Account Information</h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-blue-100 mb-2" htmlFor="firstName">
              First Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
              <input
                id="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => onInputChange('firstName', e.target.value)}
                onFocus={() => setFocusedField('firstName')}
                onBlur={() => setFocusedField(null)}
                className={`w-full bg-black/30 border ${
                  focusedField === 'firstName' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/20'
                } rounded-lg px-10 py-3 text-white placeholder-blue-300/50 focus:outline-none transition-all duration-300`}
                placeholder="John"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-blue-100 mb-2" htmlFor="lastName">
              Last Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
              <input
                id="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => onInputChange('lastName', e.target.value)}
                onFocus={() => setFocusedField('lastName')}
                onBlur={() => setFocusedField(null)}
                className={`w-full bg-black/30 border ${
                  focusedField === 'lastName' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/20'
                } rounded-lg px-10 py-3 text-white placeholder-blue-300/50 focus:outline-none transition-all duration-300`}
                placeholder="Doe"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-blue-100 mb-2" htmlFor="email">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => onInputChange('email', e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className={`w-full bg-black/30 border ${
                focusedField === 'email' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/20'
              } rounded-lg px-10 py-3 text-white placeholder-blue-300/50 focus:outline-none transition-all duration-300`}
              placeholder="john.doe@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-blue-100 mb-2" htmlFor="password">
            Create Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
            <input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => onInputChange('password', e.target.value)}
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
              className={`w-full bg-black/30 border ${
                focusedField === 'password' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/20'
              } rounded-lg px-10 py-3 text-white placeholder-blue-300/50 focus:outline-none transition-all duration-300`}
              placeholder="••••••••"
            />
          </div>
          <p className="text-blue-300/70 text-sm mt-2">Must be at least 8 characters</p>
        </div>
      </motion.div>

      {/* Billing Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
      >
        <h2 className="text-white mb-6">Billing Address</h2>
        
        <div className="mb-4">
          <label className="block text-blue-100 mb-2" htmlFor="address">
            Street Address
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
            <input
              id="address"
              type="text"
              required
              value={formData.address}
              onChange={(e) => onInputChange('address', e.target.value)}
              onFocus={() => setFocusedField('address')}
              onBlur={() => setFocusedField(null)}
              className={`w-full bg-black/30 border ${
                focusedField === 'address' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/20'
              } rounded-lg px-10 py-3 text-white placeholder-blue-300/50 focus:outline-none transition-all duration-300`}
              placeholder="123 Main Street"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-blue-100 mb-2" htmlFor="city">
              City
            </label>
            <input
              id="city"
              type="text"
              required
              value={formData.city}
              onChange={(e) => onInputChange('city', e.target.value)}
              onFocus={() => setFocusedField('city')}
              onBlur={() => setFocusedField(null)}
              className={`w-full bg-black/30 border ${
                focusedField === 'city' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/20'
              } rounded-lg px-4 py-3 text-white placeholder-blue-300/50 focus:outline-none transition-all duration-300`}
              placeholder="New York"
            />
          </div>
          
          <div>
            <label className="block text-blue-100 mb-2" htmlFor="state">
              State
            </label>
            <input
              id="state"
              type="text"
              required
              value={formData.state}
              onChange={(e) => onInputChange('state', e.target.value)}
              onFocus={() => setFocusedField('state')}
              onBlur={() => setFocusedField(null)}
              className={`w-full bg-black/30 border ${
                focusedField === 'state' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/20'
              } rounded-lg px-4 py-3 text-white placeholder-blue-300/50 focus:outline-none transition-all duration-300`}
              placeholder="NY"
            />
          </div>
          
          <div>
            <label className="block text-blue-100 mb-2" htmlFor="zipCode">
              ZIP Code
            </label>
            <input
              id="zipCode"
              type="text"
              required
              value={formData.zipCode}
              onChange={(e) => onInputChange('zipCode', e.target.value)}
              onFocus={() => setFocusedField('zipCode')}
              onBlur={() => setFocusedField(null)}
              className={`w-full bg-black/30 border ${
                focusedField === 'zipCode' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-white/20'
              } rounded-lg px-4 py-3 text-white placeholder-blue-300/50 focus:outline-none transition-all duration-300`}
              placeholder="10001"
            />
          </div>
        </div>
      </motion.div>

      {/* Payment Information */}
      <PaymentForm
        formData={formData}
        onInputChange={onInputChange}
        focusedField={focusedField}
        setFocusedField={setFocusedField}
      />

      {/* Terms and Submit */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-start gap-3 mb-6">
          <input
            type="checkbox"
            id="terms"
            required
            className="mt-1 w-5 h-5 rounded border-blue-400 bg-black/30 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
          />
          <label htmlFor="terms" className="text-blue-200 text-sm">
            I agree to the <a href="#" className="text-blue-400 hover:text-blue-300 underline">Terms of Service</a> and{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>
          </label>
        </div>

        <motion.button
          type="submit"
          disabled={isProcessing}
          whileHover={{ scale: isProcessing ? 1 : 1.02 }}
          whileTap={{ scale: isProcessing ? 1 : 0.98 }}
          className={`w-full py-4 rounded-xl text-white transition-all duration-300 ${
            isProcessing
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]'
          }`}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing Payment...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              Complete Purchase - ${total.toFixed(2)}
            </span>
          )}
        </motion.button>

        <p className="text-center text-blue-300/70 text-sm mt-4">
          🔒 Your payment information is encrypted and secure
        </p>
      </motion.div>
    </form>
  );
}
