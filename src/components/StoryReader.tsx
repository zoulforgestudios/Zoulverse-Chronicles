import { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Bookmark, BookmarkCheck } from 'lucide-react';
import { stories } from '../data/stories';

interface StoryReaderProps {
  storyId: number;
  onBack: () => void;
}

export function StoryReader({ storyId, onBack }: StoryReaderProps) {
  const story = stories.find(s => s.id === storyId);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [bookmarkedChapters, setBookmarkedChapters] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(`zoulverse-bookmark-${storyId}`);
    if (saved) {
      setBookmarkedChapters(JSON.parse(saved));
    }
    const lastChapter = localStorage.getItem(`zoulverse-last-chapter-${storyId}`);
    if (lastChapter) {
      setCurrentChapter(parseInt(lastChapter));
    }
  }, [storyId]);

  useEffect(() => {
    localStorage.setItem(`zoulverse-last-chapter-${storyId}`, currentChapter.toString());
  }, [currentChapter, storyId]);

  const toggleBookmark = () => {
    const chapterId = story!.chapters[currentChapter].id;
    let newBookmarks: number[];
    if (bookmarkedChapters.includes(chapterId)) {
      newBookmarks = bookmarkedChapters.filter(id => id !== chapterId);
    } else {
      newBookmarks = [...bookmarkedChapters, chapterId];
    }
    setBookmarkedChapters(newBookmarks);
    localStorage.setItem(`zoulverse-bookmark-${storyId}`, JSON.stringify(newBookmarks));
  };

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <p className="text-2xl text-gray-400 mb-4">Story not found</p>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-[#8A5DFF] rounded-lg text-white hover:bg-[#7347cc] transition-colors"
          >
            Back to Library
          </button>
        </div>
      </div>
    );
  }

  const currentChapterData = story.chapters[currentChapter];
  const isBookmarked = bookmarkedChapters.includes(currentChapterData.id);

  return (
    <div className="min-h-screen bg-[#0E1120] pt-16">
      {/* Header */}
      <div className="sticky top-16 z-40 bg-[#0B0F29]/95 backdrop-blur-md border-b border-[#8A5DFF]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-['Bebas_Neue'] tracking-wider">Back to Library</span>
            </button>
            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-lg transition-all ${
                isBookmarked
                  ? 'text-[#FFD46A] bg-[#FFD46A]/10'
                  : 'text-gray-400 hover:text-[#FFD46A] hover:bg-[#141A40]'
              }`}
            >
              {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
            </button>
          </div>
          
          <h1 className="font-['Cinzel'] text-2xl sm:text-3xl text-white mb-2 line-clamp-2">
            {story.title}
          </h1>
          <p className="font-['Bebas_Neue'] text-[#24C3FF] tracking-wider">
            {currentChapterData.title}
          </p>
        </div>
      </div>

      {/* Chapter Navigation Sidebar (Desktop) */}
      <div className="hidden lg:block fixed left-4 top-32 w-64 max-h-[calc(100vh-10rem)] overflow-y-auto bg-[#0B0F29] rounded-xl border border-[#8A5DFF]/20 p-4">
        <h3 className="font-['Bebas_Neue'] text-lg text-[#8A5DFF] mb-4 tracking-wider">
          Chapters
        </h3>
        <div className="space-y-2">
          {story.chapters.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => setCurrentChapter(index)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-all font-['Lora'] text-sm ${
                index === currentChapter
                  ? 'bg-[#8A5DFF] text-white'
                  : 'text-gray-400 hover:text-white hover:bg-[#141A40]'
              }`}
            >
              <div className="flex items-center gap-2">
                {bookmarkedChapters.includes(chapter.id) && (
                  <BookmarkCheck className="w-4 h-4 text-[#FFD46A]" />
                )}
                <span className="line-clamp-2">{chapter.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#0B0F29] rounded-2xl border border-[#8A5DFF]/20 p-6 sm:p-8 md:p-12 mb-8">
          <div className="font-['Lora'] text-base sm:text-lg leading-relaxed text-gray-300 whitespace-pre-line">
            {currentChapterData.content}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
            disabled={currentChapter === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-['Bebas_Neue'] tracking-wider transition-all ${
              currentChapter === 0
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-[#8A5DFF] text-white hover:shadow-[0_0_20px_rgba(138,93,255,0.5)]'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <span className="font-['Bebas_Neue'] text-gray-400 tracking-wider">
            {currentChapter + 1} / {story.chapters.length}
          </span>

          <button
            onClick={() => setCurrentChapter(Math.min(story.chapters.length - 1, currentChapter + 1))}
            disabled={currentChapter === story.chapters.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-['Bebas_Neue'] tracking-wider transition-all ${
              currentChapter === story.chapters.length - 1
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-[#8A5DFF] text-white hover:shadow-[0_0_20px_rgba(138,93,255,0.5)]'
            }`}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Chapter Navigation */}
        <div className="lg:hidden mt-8">
          <details className="bg-[#0B0F29] rounded-xl border border-[#8A5DFF]/20 p-4">
            <summary className="font-['Bebas_Neue'] text-lg text-[#8A5DFF] cursor-pointer tracking-wider">
              All Chapters
            </summary>
            <div className="mt-4 space-y-2">
              {story.chapters.map((chapter, index) => (
                <button
                  key={chapter.id}
                  onClick={() => setCurrentChapter(index)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all font-['Lora'] text-sm ${
                    index === currentChapter
                      ? 'bg-[#8A5DFF] text-white'
                      : 'text-gray-400 hover:text-white hover:bg-[#141A40]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {bookmarkedChapters.includes(chapter.id) && (
                      <BookmarkCheck className="w-4 h-4 text-[#FFD46A]" />
                    )}
                    <span>{chapter.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
