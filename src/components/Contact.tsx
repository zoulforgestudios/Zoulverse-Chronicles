import { useState } from 'react';
import { Mail, Send, Twitter, Instagram, Youtube, Globe } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="w-6 h-6" />, url: '#' },
    { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, url: '#' },
    { name: 'YouTube', icon: <Youtube className="w-6 h-6" />, url: '#' },
    { name: 'Website', icon: <Globe className="w-6 h-6" />, url: '#' }
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Cinzel'] text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] bg-clip-text text-transparent">
            Contact & Community
          </h2>
          <p className="font-['Bebas_Neue'] text-xl text-gray-400 tracking-wider">
            Join the Zoulverse Journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-2xl p-8 border border-[#8A5DFF]/20">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-[#8A5DFF]" />
              <h3 className="font-['Cinzel'] text-2xl text-white">
                Get in Touch
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-['Bebas_Neue'] text-sm text-gray-400 mb-2 tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0E1120] border border-[#8A5DFF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8A5DFF] transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block font-['Bebas_Neue'] text-sm text-gray-400 mb-2 tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0E1120] border border-[#8A5DFF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8A5DFF] transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block font-['Bebas_Neue'] text-sm text-gray-400 mb-2 tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0E1120] border border-[#8A5DFF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8A5DFF] transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] rounded-lg text-white font-['Bebas_Neue'] text-lg tracking-wider hover:shadow-[0_0_20px_rgba(138,93,255,0.5)] transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>

            {submitted && (
              <p className="mt-4 text-center text-[#FFD46A] font-['Bebas_Neue'] tracking-wider">
                ✨ Message sent! We'll get back to you soon!
              </p>
            )}
          </div>

          {/* Community & Social */}
          <div className="space-y-8">
            {/* Call to Action */}
            <div className="bg-gradient-to-br from-[#8A5DFF]/10 to-[#24C3FF]/10 rounded-2xl p-8 border border-[#8A5DFF]/30">
              <h3 className="font-['Cinzel'] text-2xl mb-4 text-white">
                Join the Zoulverse Community
              </h3>
              <p className="font-['Lora'] text-gray-400 mb-6">
                Connect with fellow readers, share fan theories, create art, and be part of the growing Zoulverse universe. Every soul matters in our community.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-[#8A5DFF]/20 rounded-full text-[#8A5DFF] font-['Bebas_Neue'] text-sm tracking-wider">
                  Fan Theories
                </span>
                <span className="px-4 py-2 bg-[#24C3FF]/20 rounded-full text-[#24C3FF] font-['Bebas_Neue'] text-sm tracking-wider">
                  Fan Art
                </span>
                <span className="px-4 py-2 bg-[#FFD46A]/20 rounded-full text-[#FFD46A] font-['Bebas_Neue'] text-sm tracking-wider">
                  Discussions
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-2xl p-8 border border-[#8A5DFF]/20">
              <h3 className="font-['Cinzel'] text-2xl mb-6 text-white">
                Follow Zoul Forge Studios
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center justify-center gap-3 p-4 bg-[#0E1120] rounded-lg border border-[#8A5DFF]/20 hover:border-[#8A5DFF]/50 hover:shadow-[0_0_15px_rgba(138,93,255,0.3)] transition-all group"
                  >
                    <div className="text-[#8A5DFF] group-hover:text-[#24C3FF] transition-colors">
                      {social.icon}
                    </div>
                    <span className="font-['Bebas_Neue'] text-gray-400 group-hover:text-white transition-colors tracking-wider">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Creator Note */}
            <div className="bg-gradient-to-br from-[#FFD46A]/10 to-[#8A5DFF]/10 rounded-2xl p-8 border border-[#FFD46A]/30">
              <p className="font-['Lora'] text-gray-300 italic text-center">
                "Thank you for being part of the Zoulverse. Every reader, every comment, every share helps this universe grow. The story has just begun."
              </p>
              <p className="font-['Cinzel'] text-[#FFD46A] text-center mt-4">
                — Zoulzx, Creator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
