import { Lock } from 'lucide-react';
import logo from 'figma:asset/89b6499f0b778773cf3028d95a90e0368f1eaa95.png';

export function CheckoutHeader() {
  return (
    <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img 
              src={logo} 
              alt="Elevate Funded Capital" 
              className="h-24 md:h-32"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.4))'
              }}
            />
            <div className="hidden sm:block">
              <h1 className="text-white mb-2">Complete Your Purchase</h1>
              <p className="text-blue-200">Secure checkout powered by industry-leading encryption</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-green-400">
            <Lock className="w-5 h-5" />
            <span className="text-sm">Secure Checkout</span>
          </div>
        </div>
        <div className="sm:hidden mt-4">
          <h1 className="text-white mb-2">Complete Your Purchase</h1>
          <p className="text-blue-200 text-sm">Secure checkout powered by industry-leading encryption</p>
        </div>
      </div>
    </div>
  );
}
