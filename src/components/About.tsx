import { Sparkles, Layers, Heart, Zap } from 'lucide-react';

export function About() {
  const sections = [
    {
      title: "Origin of the Soul",
      icon: <Sparkles className="w-8 h-8" />,
      content: "In the beginning, there was only ZOUL—the First Soul, the essence of all existence. From ZOUL's infinite energy, reality itself was born, splitting into countless dimensions, realms, and universes."
    },
    {
      title: "Creation of ZOUL",
      icon: <Layers className="w-8 h-8" />,
      content: "ZOUL did not create itself—it simply was. Eternal, boundless, and without origin. It exists beyond time, beyond space, beyond comprehension. ZOUL is creation and destruction, light and shadow, beginning and end."
    },
    {
      title: "Light, Shadow, and Balance",
      icon: <Heart className="w-8 h-8" />,
      content: "From ZOUL emerged two fundamental forces: Light—the power of creation, hope, and life. Shadow—the power of destruction, mystery, and transformation. Neither good nor evil, both necessary for existence to continue."
    },
    {
      title: "Multiverse Structure",
      icon: <Zap className="w-8 h-8" />,
      content: "The Zoulverse consists of infinite Realities—parallel universes with different laws. Ancient Realms—dimensions where powerful beings reside. And Hidden Dimensions—spaces between spaces where souls travel and evolve."
    }
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Cinzel'] text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] bg-clip-text text-transparent">
            About the Zoulverse
          </h2>
          <p className="font-['Bebas_Neue'] text-xl text-gray-400 tracking-wider">
            Understanding the Cosmic Mythology
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-2xl p-8 border border-[#8A5DFF]/20 hover:border-[#8A5DFF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,93,255,0.2)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#8A5DFF]/20 to-[#24C3FF]/20 text-[#8A5DFF] group-hover:shadow-[0_0_20px_rgba(138,93,255,0.3)] transition-all">
                  {section.icon}
                </div>
                <h3 className="font-['Cinzel'] text-2xl text-white">
                  {section.title}
                </h3>
              </div>
              <p className="font-['Lora'] text-gray-400 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Extended Lore */}
        <div className="bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-2xl p-8 border border-[#FFD46A]/20">
          <h3 className="font-['Cinzel'] text-3xl mb-6 text-center bg-gradient-to-r from-[#FFD46A] to-[#8A5DFF] bg-clip-text text-transparent">
            The Prophecy of Three
          </h3>
          <div className="font-['Lora'] text-gray-300 space-y-4 leading-relaxed text-center max-w-3xl mx-auto">
            <p>
              "When the shadows grow bold and light begins to fade, three souls will awaken bearing ancient marks. One carries the incomplete heart—a vessel for power beyond comprehension."
            </p>
            <p>
              "Together they will stand against the darkness. Apart, they will fall. United, they will forge a new reality."
            </p>
            <p className="text-[#FFD46A] italic">
              "The Zoulverse awaits its chosen three."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
