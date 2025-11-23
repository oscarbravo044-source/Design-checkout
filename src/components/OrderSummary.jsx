import { Check } from 'lucide-react';

interface OrderSummaryProps {
  productDetails: {
    name: string;
    price: string;
    id: string;
  };
}

export function OrderSummary({ productDetails }: OrderSummaryProps) {
  const selectedPlan = {
    name: productDetails.name,
    price: parseFloat(productDetails.price),
    features: [
      'Up to $200,000 in trading capital',
      '80% profit split',
      'Instant funding',
      'No time limits',
      'Free retake if you fail',
      '24/7 support',
    ],
  };

  const tax = selectedPlan.price * 0.1; // 10% processing fee
  const total = selectedPlan.price + tax;

  return (
    <div className="sticky top-8">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
        <h2 className="text-white mb-6">Order Summary</h2>
        
        <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-xl p-4 mb-6 border border-blue-400/20">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-white mb-2">{selectedPlan.name}</h3>
              <p className="text-blue-200 text-sm">One-time payment</p>
            </div>
            <div className="text-white">${selectedPlan.price}</div>
          </div>
          
          <div className="space-y-2">
            {selectedPlan.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-blue-100 text-sm">
                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
          <div className="flex justify-between text-blue-200">
            <span>Subtotal</span>
            <span>${selectedPlan.price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-blue-200">
            <span>Processing Fee</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex justify-between text-white mb-6">
          <span>Total</span>
          <span className="text-2xl">${total.toFixed(2)}</span>
        </div>

        <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-3 text-center">
          <p className="text-green-400 text-sm">🎉 Limited time offer - Save $100</p>
        </div>
      </div>
    </div>
  );
}
