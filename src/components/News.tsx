import { Calendar, Sparkles, BookOpen, Mail } from 'lucide-react';
import { useState } from 'react';

export function News() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const newsItems = [
    {
      id: 1,
      date: "November 21, 2025",
      category: "New Chapter",
      title: "Chapter 15: The Second Evolution Released!",
      description: "Veon's mark undergoes a dramatic transformation as the incomplete heart evolves. What ancient power is awakening within him?",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 2,
      date: "November 15, 2025",
      category: "Announcement",
      title: "Zoulverse Chronicles: Anime Adaptation in Development",
      description: "Exciting news! Discussions are underway to bring the Zoulverse to life as an animated series. Stay tuned for more updates!",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      id: 3,
      date: "November 10, 2025",
      category: "Lore Drop",
      title: "The Origin of the Zoul Guardian Revealed",
      description: "New lore has been added to the archive explaining the mysterious entity with one demon wing and one angel wing.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      id: 4,
      date: "November 1, 2025",
      category: "Community",
      title: "Fan Art Contest Winners Announced",
      description: "Thank you to everyone who submitted their amazing Zoulverse fan art! Check out the winning entries in our gallery.",
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Cinzel'] text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] bg-clip-text text-transparent">
            News & Updates
          </h2>
          <p className="font-['Bebas_Neue'] text-xl text-gray-400 tracking-wider">
            Stay Connected to the Zoulverse
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-12 bg-gradient-to-br from-[#8A5DFF]/10 to-[#24C3FF]/10 rounded-2xl p-8 border border-[#8A5DFF]/30">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-[#FFD46A]" />
            <h3 className="font-['Cinzel'] text-2xl text-white">
              Subscribe to Updates
            </h3>
          </div>
          <p className="font-['Lora'] text-gray-400 mb-6">
            Get notified about new chapters, lore drops, and exclusive Zoulverse content.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#0B0F29] border border-[#8A5DFF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8A5DFF] transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] rounded-lg text-white font-['Bebas_Neue'] tracking-wider hover:shadow-[0_0_20px_rgba(138,93,255,0.5)] transition-all"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="mt-4 text-[#FFD46A] font-['Bebas_Neue'] tracking-wider">
              ✨ Successfully subscribed! Thank you for joining the Zoulverse community!
            </p>
          )}
        </div>

        {/* News Items */}
        <div className="space-y-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-xl p-6 border border-[#8A5DFF]/20 hover:border-[#8A5DFF]/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(138,93,255,0.2)]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#8A5DFF]/20 to-[#24C3FF]/20 text-[#8A5DFF] group-hover:shadow-[0_0_15px_rgba(138,93,255,0.3)] transition-all">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-['Bebas_Neue'] text-xs text-gray-500 tracking-wider">
                      {item.date}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-[#24C3FF]/20 text-[#24C3FF] font-['Bebas_Neue'] text-xs tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-['Cinzel'] text-xl mb-2 text-white group-hover:text-[#8A5DFF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-['Lora'] text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
