import { FeedPost } from '@/components/feed-post';
import { Separator } from '@/components/ui/separator';
import { NewsfeedSummarizer } from '@/components/newsfeed-summarizer';
import { BottomSheetButton } from '@/components/bottom-sheet-button';
import { ContentCarousel } from '@/components/content-carousel';

const posts = [
  {
    id: 'post-1',
    author: {
      name: 'Jane Doe',
      avatarUrl: 'https://picsum.photos/seed/avatar1/40/40',
    },
    timestamp: '2h ago',
    content:
      'Just pushed the initial commit for our senior project, "Helios"! It\'s a solar-powered weather station using a Raspberry Pi. Super excited to see this come to life. Check out the repo! #cs #iot #raspberrypi',
    codeSnippet: 'git commit -m "Initial commit: Project Helios setup"',
    likes: 12,
    comments: 3,
  },
  {
    id: 'post-2',
    author: {
      name: 'John Smith',
      avatarUrl: 'https://picsum.photos/seed/avatar2/40/40',
    },
    timestamp: '5h ago',
    content:
      'Anyone in CHEM-102 having trouble with the latest problem set? The thermodynamics questions are tricky. I\'m thinking of starting a study group in the library tomorrow around 2 PM.',
    likes: 25,
    comments: 8,
  },
  {
    id: 'post-3',
    author: {
      name: 'Campus Events',
      avatarUrl: 'https://picsum.photos/seed/avatar3/40/40',
    },
    timestamp: '1d ago',
    content:
      'Don\'t forget! The Annual Engineering Career Fair is this Friday in the main hall. Over 50 companies will be there, including Google, NASA, and Tesla. Bring your resumes!',
    imageUrl:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjYXJlZXIlMjBmYWlyfGVufDB8fHx8MTc2MzM3MjM2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'career fair',
    likes: 120,
    comments: 15,
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 pb-32">
      <header className="text-center my-12 md:my-20">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">
          Yonder
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          The essential digital ecosystem for students.
        </p>
      </header>

      <section className="mb-16">
        <ContentCarousel />
      </section>

      <main className="max-w-2xl mx-auto space-y-12">
        <section>
          <h2 className="font-headline text-3xl font-semibold mb-6">
            AI Summarizer
          </h2>
          <NewsfeedSummarizer />
        </section>

        <Separator />

        <section>
          <h2 className="font-headline text-3xl font-semibold mb-6">
            Component Demo
          </h2>
          <BottomSheetButton />
        </section>

        <Separator />
        
        <section>
          <h2 className="font-headline text-3xl font-semibold mb-6">The Hub</h2>
          <div className="flex flex-col gap-8">
            {posts.map(post => (
              <FeedPost key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}