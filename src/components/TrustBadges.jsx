import { Shield, Lock, Award, Clock } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'SSL Secured',
      description: '256-bit encryption',
    },
    {
      icon: Lock,
      title: 'PCI Compliant',
      description: 'Industry standard security',
    },
    {
      icon: Award,
      title: 'Money Back Guarantee',
      description: '30-day refund policy',
    },
    {
      icon: Clock,
      title: 'Instant Access',
      description: 'Immediate activation',
    },
  ];

  return (
    <div className="mt-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white text-sm mb-1">{badge.title}</h3>
              <p className="text-blue-300/70 text-xs">{badge.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <p className="text-blue-300/70 text-sm">
          © 2025 Elevate Funded Capital. All rights reserved. Questions?{' '}
          <a href="#" className="text-blue-400 hover:text-blue-300 underline">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
}
