import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Flame, Hash } from 'lucide-react';

const joinedChannels = [
  {
    id: 1,
    name: 'cs-101-intro-to-cs',
    latestMessage: 'Prof. Evans just posted the slides for Lecture 5.',
    unreadCount: 2,
  },
  {
    id: 2,
    name: 'senior-project-helios',
    latestMessage: 'Can someone review my PR for the sensor module?',
    unreadCount: 0,
  },
  {
    id: 3,
    name: 'memes-and-shitposting',
    latestMessage: 'You guys see the new cat video?',
    unreadCount: 15,
  },
];

const recommendedChannels = [
  {
    id: 4,
    name: 'machine-learning-club',
    description: 'Discussions on AI, ML, and data science projects.',
    imageUrl: 'https://picsum.photos/seed/mlclub/600/400',
    imageHint: 'AI abstract',
  },
  {
    id: 5,
    name: 'campus-photography',
    description: 'Share your best shots from around campus.',
    imageUrl: 'https://picsum.photos/seed/photoclub/600/400',
    imageHint: 'camera lens',
  },
];

export default function ChannelsPage() {
  return (
    <div className="container mx-auto px-4 py-8 pb-32">
      <header className="text-center my-12 md:my-16">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Channels
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Join course channels, study groups, and Q&A forums.
        </p>
      </header>

      <main className="max-w-3xl mx-auto space-y-12">
        <Input
          placeholder="Search for channels..."
          className="bg-card/60 backdrop-blur-lg border-white/10"
        />

        <section>
          <h2 className="font-headline text-2xl font-semibold mb-4">
            Your Channels
          </h2>
          <div className="space-y-2">
            {joinedChannels.map(channel => (
              <Card
                key={channel.id}
                className="bg-card/60 backdrop-blur-lg border-white/10 shadow-lg rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-card/80 transition-colors"
              >
                <Avatar className="h-10 w-10 border">
                  <AvatarFallback className="bg-transparent">
                    <Hash className="text-muted-foreground" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold">{channel.name}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    {channel.latestMessage}
                  </p>
                </div>
                {channel.unreadCount > 0 && (
                  <div className="bg-primary text-primary-foreground text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                    {channel.unreadCount}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-headline text-2xl font-semibold mb-4 flex items-center gap-2">
            <Flame className="text-primary" />
            Popular Channels
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {recommendedChannels.map(channel => (
              <Card
                key={channel.id}
                className="bg-card/60 backdrop-blur-lg border-white/10 shadow-lg rounded-2xl overflow-hidden cursor-pointer group"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <img
                      src={channel.imageUrl}
                      alt={channel.name}
                      className="object-cover w-full h-full"
                      data-ai-hint={channel.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold font-headline">{channel.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {channel.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
