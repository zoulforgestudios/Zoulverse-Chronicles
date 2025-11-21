import { ImageWithFallback } from './figma/ImageWithFallback';

export function Characters() {
  const characters = [
    {
      name: "ZOUL",
      title: "The First Soul",
      image: "https://images.unsplash.com/photo-1736678595826-2d3e0b94638c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0aWNhbCUyMGNvc21pYyUyMGVuZXJneXxlbnwxfHx8fDE3NjM3NDU5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      powers: "Omnipotent Soul Energy, Reality Manipulation, Creation & Destruction",
      role: "The Origin of All Existence",
      lore: "ZOUL is not a being, but the essence itself. All souls, all realities, all dimensions stem from ZOUL's infinite energy. It exists beyond time and comprehension."
    },
    {
      name: "Veon (VZX)",
      title: "Bearer of the Incomplete Heart",
      image: "https://images.unsplash.com/photo-1604305526688-935181d17565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMHB1cnBsZXxlbnwxfHx8fDE3NjM2NjMyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      powers: "Purple Soul Energy, Reality Wishes, Verse (Lion Spirit)",
      role: "The Mysterious Vessel",
      lore: "Veon carries a mark that even Verse doesn't understand. His incomplete heart symbol reacts to ancient energies, and the Zoul Guardian bows to him. His true purpose remains hidden."
    },
    {
      name: "Zharc (Zulfire)",
      title: "The Flame Writer",
      image: "https://images.unsplash.com/photo-1762217235246-4235328d882b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeSUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NjM3NDU5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      powers: "Red-Gold Fire Manipulation, Zyth (Tiger Spirit), Volcanic Strength",
      role: "The Creative Warrior",
      lore: "A talented writer with terrible drawing skills, Zharc was chosen by Zyth, the Flaming Tiger. His fire burns with the intensity of molten lava and volcanic fury."
    },
    {
      name: "Xyla (Xanthara)",
      title: "The Lightbearer",
      image: "https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBuZWJ1bGElMjBzcGFjZXxlbnwxfHx8fDE3NjM2NTI1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      powers: "Golden Light Energy, Xernes (Leopard Spirit), Photon Speed",
      role: "The Radiant Guardian",
      lore: "Cheerful and energetic, Xyla was chosen by Xernes, the Glowing Leopard. Her light can heal, protect, and cut through darkness with blinding precision."
    },
    {
      name: "Verse",
      title: "The Soul Lion",
      image: "https://images.unsplash.com/photo-1604305526688-935181d17565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMHB1cnBsZXxlbnwxfHx8fDE3NjM2NjMyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      powers: "Soul Energy Projection, Purple Lightning, Ancient Wisdom",
      role: "Spirit Beast Partner of Veon",
      lore: "A majestic lion of green-gold energy who chose Veon as his host. Even Verse fears the incomplete heart mark, recognizing it as something beyond his realm."
    },
    {
      name: "Zyth",
      title: "The Flame Tiger",
      image: "https://images.unsplash.com/photo-1762217235246-4235328d882b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeSUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NjM3NDU5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      powers: "Volcanic Fire, Heat Manipulation, Explosive Combat",
      role: "Spirit Beast Partner of Zharc",
      lore: "A fierce and violent tiger spirit wreathed in flames. Zyth's power burns with the intensity of molten earth, granting Zharc devastating offensive abilities."
    },
    {
      name: "Xernes",
      title: "The Light Leopard",
      image: "https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBuZWJ1bGElMjBzcGFjZXxlbnwxfHx8fDE3NjM2NTI1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      powers: "Radiant Light, Healing Energy, Photon Manipulation",
      role: "Spirit Beast Partner of Xyla",
      lore: "An elegant leopard made of pure golden light. Xernes is gentle yet powerful, offering Xyla both protection and incredible speed."
    },
    {
      name: "The Zoul Guardian",
      title: "The Skull Reaper",
      image: "https://images.unsplash.com/photo-1736678595826-2d3e0b94638c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0aWNhbCUyMGNvc21pYyUyMGVuZXJneXxlbnwxfHx8fDE3NjM3NDU5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      powers: "Absolute Protection, Soul Purification, Reality Erasure",
      role: "Protector of the Vessel",
      lore: "A mysterious entity with one demon wing, one angel wing, and a cracked purple halo. It watches over Veon silently, destroying threats before they reach him. Its true nature remains unknown."
    }
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Cinzel'] text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] bg-clip-text text-transparent">
            Characters
          </h2>
          <p className="font-['Bebas_Neue'] text-xl text-gray-400 tracking-wider">
            Meet the Souls of the Zoulverse
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {characters.map((character, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-2xl overflow-hidden border border-[#8A5DFF]/20 hover:border-[#8A5DFF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,93,255,0.3)] hover:scale-105"
            >
              {/* Character Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F29] via-transparent to-transparent" />
              </div>

              {/* Character Info */}
              <div className="p-6">
                <h3 className="font-['Cinzel'] text-2xl mb-1 text-white">
                  {character.name}
                </h3>
                <p className="font-['Bebas_Neue'] text-sm text-[#24C3FF] mb-4 tracking-wider">
                  {character.title}
                </p>

                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-['Bebas_Neue'] text-xs text-[#FFD46A] mb-1 tracking-wider">
                      Powers
                    </h4>
                    <p className="font-['Lora'] text-sm text-gray-400">
                      {character.powers}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-['Bebas_Neue'] text-xs text-[#FFD46A] mb-1 tracking-wider">
                      Role
                    </h4>
                    <p className="font-['Lora'] text-sm text-gray-400">
                      {character.role}
                    </p>
                  </div>
                </div>

                <p className="font-['Lora'] text-sm text-gray-500 italic">
                  {character.lore}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
