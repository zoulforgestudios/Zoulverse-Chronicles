import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function LoreArchive() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const timeline = [
    {
      id: 1,
      era: "The Origin",
      title: "ZOUL Awakens",
      description: "In the void of nonexistence, ZOUL simply... was. The First Soul, eternal and infinite, begins to pulse with creative energy.",
      details: "From this first pulse, the concept of reality itself was born. Time began. Space expanded. Dimensions fractured into infinite possibilities."
    },
    {
      id: 2,
      era: "Age of Creation",
      title: "Birth of Light and Shadow",
      description: "ZOUL splits its essence, creating two fundamental forces that would shape all existence.",
      details: "Light—the force of creation, hope, and life. Shadow—the force of mystery, transformation, and necessary destruction. Neither good nor evil, both essential for balance."
    },
    {
      id: 3,
      era: "The Fracture",
      title: "Multiverse Formation",
      description: "Reality splits into countless branches, creating infinite universes, realms, and dimensions.",
      details: "Each reality follows different laws. Some flourish with life, others burn with chaos. Ancient beings emerge from the strongest realms, becoming guardians and destroyers."
    },
    {
      id: 4,
      era: "Age of Spirits",
      title: "Spirit Beasts Awaken",
      description: "Powerful soul entities take form as Spirit Beasts, seeking worthy hosts to bond with.",
      details: "Verse, Zyth, Xernes, and countless others emerge from concentrated soul energy. They search across dimensions for hosts who resonate with their essence."
    },
    {
      id: 5,
      era: "The Corruption",
      title: "Hadials Appear",
      description: "Shadow energy twists and corrupts, creating mindless monsters called Hadials that threaten all realms.",
      details: "These creatures hunt souls, consuming energy to grow stronger. They emerge from cracks between dimensions, spreading chaos wherever they appear."
    },
    {
      id: 6,
      era: "Modern Era",
      title: "Three Hosts Chosen",
      description: "In an ordinary town, three students are chosen by Spirit Beasts, awakening powers they don't understand.",
      details: "Veon, Zharc, and Xyla begin their transformation. None know the others' secrets. None understand the ancient forces awakening inside them."
    },
    {
      id: 7,
      era: "The Incomplete Heart",
      title: "Mark of ZOUL Appears",
      description: "Veon discovers a glowing mark on his palm—an incomplete heart that pulses with unknown power.",
      details: "Even Verse, his Spirit Beast, fears this symbol. It responds to ancient energies and draws the attention of something called the Zoul Guardian."
    },
    {
      id: 8,
      era: "Current Time",
      title: "The Guardian Watches",
      description: "A mysterious entity with one demon wing and one angel wing begins protecting Veon from the shadows.",
      details: "The Zoul Guardian destroys threats silently, bowing to Veon as if recognizing something within him. Its purpose remains unknown. Its power is absolute."
    }
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Cinzel'] text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] bg-clip-text text-transparent">
            Lore Archive
          </h2>
          <p className="font-['Bebas_Neue'] text-xl text-gray-400 tracking-wider">
            Timeline of the Zoulverse
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8A5DFF] via-[#24C3FF] to-[#FFD46A]" />

          {/* Timeline Events */}
          <div className="space-y-8">
            {timeline.map((event) => (
              <div key={event.id} className="relative pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-gradient-to-br from-[#8A5DFF] to-[#24C3FF] shadow-[0_0_15px_rgba(138,93,255,0.5)] border-4 border-[#0E1120]" />

                {/* Content Card */}
                <div className="bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-xl p-6 border border-[#8A5DFF]/20 hover:border-[#8A5DFF]/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(138,93,255,0.2)]">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#8A5DFF]/20 text-[#8A5DFF] font-['Bebas_Neue'] text-xs tracking-wider">
                      {event.era}
                    </span>
                  </div>

                  <h3 className="font-['Cinzel'] text-2xl mb-3 text-white">
                    {event.title}
                  </h3>

                  <p className="font-['Lora'] text-gray-400 mb-4">
                    {event.description}
                  </p>

                  <button
                    onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                    className="flex items-center gap-2 text-[#24C3FF] hover:text-[#FFD46A] transition-colors font-['Bebas_Neue'] text-sm tracking-wider"
                  >
                    {expandedEvent === event.id ? (
                      <>
                        Hide Details <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Show Details <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {expandedEvent === event.id && (
                    <div className="mt-4 pt-4 border-t border-[#8A5DFF]/20">
                      <p className="font-['Lora'] text-gray-300 italic">
                        {event.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
