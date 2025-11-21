import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  onStartReading: () => void;
}

export function Hero({ onStartReading }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBuZWJ1bGElMjBzcGFjZXxlbnwxfHx8fDE3NjM2NTI1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cosmic Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1120]/50 via-[#0E1120]/80 to-[#0E1120]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-8 space-x-2">
          <Sparkles className="text-[#FFD46A] w-8 h-8 animate-pulse" />
          <Sparkles className="text-[#8A5DFF] w-12 h-12 animate-pulse delay-75" />
          <Sparkles className="text-[#24C3FF] w-8 h-8 animate-pulse delay-150" />
        </div>

        <h1 className="font-['Cinzel'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-[#8A5DFF] via-[#24C3FF] to-[#FFD46A] bg-clip-text text-transparent animate-fade-in">
          Welcome to the Zoulverse
        </h1>

        <p className="font-['Cinzel'] text-xl sm:text-2xl md:text-3xl mb-8 text-[#24C3FF] tracking-wide">
          Where Souls Forge Reality
        </p>

        {/* Intro Text */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4 text-gray-300 font-['Lora']">
          <p className="text-lg leading-relaxed">
            Welcome to the Zoulverse — a boundless multiverse forged from the essence of the First Soul, ZOUL.
            Here, creation and destruction breathe as living forces, shaping infinite realities, ancient realms, and celestial beings beyond imagination.
          </p>
          <p className="text-lg leading-relaxed">
            This is not just a story.
            This is a universe of souls, a cosmic mythology unfolding piece by piece.
          </p>
          <p className="text-lg leading-relaxed italic text-[#8A5DFF]">
            Begin your journey.
            Uncover the origins.
            Walk through light, shadow, and balance.
          </p>
          <p className="text-xl text-[#FFD46A] font-['Cinzel']">
            The Zoulverse awaits you.
          </p>
        </div>

        <button
          onClick={onStartReading}
          className="group relative px-8 py-4 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] rounded-full text-white font-['Bebas_Neue'] text-xl tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,93,255,0.6)] hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2">
            Start Reading
            <Sparkles className="w-5 h-5" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#24C3FF] to-[#FFD46A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#8A5DFF]/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#24C3FF]/10 blur-3xl animate-pulse delay-75" />
      </div>
    </section>
  );
}
