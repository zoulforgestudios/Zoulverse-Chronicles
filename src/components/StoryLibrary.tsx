import { ImageWithFallback } from './figma/ImageWithFallback';
import { BookOpen } from 'lucide-react';
import { stories } from '../data/stories';

interface StoryLibraryProps {
  onStorySelect: (storyId: number) => void;
}

export function StoryLibrary({ onStorySelect }: StoryLibraryProps) {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Cinzel'] text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] bg-clip-text text-transparent">
            Story Library
          </h2>
          <p className="font-['Bebas_Neue'] text-xl text-gray-400 tracking-wider">
            Explore the Chronicles of the Zoulverse
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group relative bg-gradient-to-br from-[#0B0F29] to-[#141A40] rounded-2xl overflow-hidden border border-[#8A5DFF]/20 hover:border-[#8A5DFF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,93,255,0.3)] hover:scale-105"
            >
              {/* Cover Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={story.cover}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F29] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-['Cinzel'] text-xl mb-3 text-white line-clamp-2">
                  {story.title}
                </h3>
                <p className="font-['Lora'] text-gray-400 text-sm mb-4 line-clamp-3">
                  {story.description}
                </p>

                {/* Chapter Count */}
                <div className="flex items-center gap-2 mb-4 text-[#24C3FF]">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-['Bebas_Neue'] text-sm tracking-wider">
                    {story.chapters.length} Chapters
                  </span>
                </div>

                {/* Read Button */}
                <button
                  onClick={() => onStorySelect(story.id)}
                  className="w-full py-3 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] rounded-lg text-white font-['Bebas_Neue'] text-lg tracking-wider hover:shadow-[0_0_20px_rgba(138,93,255,0.5)] transition-all duration-300 group-hover:from-[#24C3FF] group-hover:to-[#FFD46A]"
                >
                  Start Reading
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
