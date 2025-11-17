import { ContentCarousel } from '@/components/content-carousel';
import { NewsfeedSummarizer } from '@/components/newsfeed-summarizer';
import { BottomSheetButton } from '@/components/bottom-sheet-button';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 pb-32">
      <header className="text-center my-12 md:my-20">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">
          Yonder
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          A beautifully designed application with a touch of magic.
        </p>
      </header>

      <section className="my-16 md:my-24">
        <h2 className="font-headline text-3xl font-semibold mb-6 text-center">
          Featured Content
        </h2>
        <ContentCarousel />
      </section>

      <Separator className="my-16 md:my-24 max-w-sm mx-auto" />

      <section className="my-16 md:my-24">
        <NewsfeedSummarizer />
      </section>

      <Separator className="my-16 md:my-24 max-w-sm mx-auto" />

      <section className="my-16 md:my-24 flex justify-center">
        <BottomSheetButton />
      </section>
    </div>
  );
}
