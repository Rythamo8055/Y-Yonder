'use client';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Post = {
  id: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  timestamp: string;
  content: string;
  codeSnippet?: string;
  imageUrl?: string;
  imageHint?: string;
  likes: number;
  comments: number;
};

export function FeedPost({ post }: { post: Post }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (    
    <Card className="bg-card/60 backdrop-blur-lg border border-white/10 shadow-lg rounded-2xl animate-in fade-in slide-in-from-bottom-5 duration-500">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
          <AvatarFallback>
            {post.author.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-semibold">{post.author.name}</p>
          <p className="text-xs text-muted-foreground">{post.timestamp}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap">{post.content}</p>
        {post.codeSnippet && (
          <pre className="bg-black/70 text-white p-4 rounded-lg my-4 text-sm overflow-x-auto">
            <code>{post.codeSnippet}</code>
          </pre>
        )}
        {post.imageUrl && (
          <div className="mt-4 relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.imageHint || 'Post image'}
              fill
              className="object-cover"
              data-ai-hint={post.imageHint}
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex gap-4 text-muted-foreground">
          <Button variant="ghost" size="sm" className="flex items-center gap-2" onClick={handleLike}>
            <Heart size={18} className={cn('transition-all duration-300', isLiked ? 'text-red-500 fill-current' : '')} />
            <span>{post.likes + (isLiked ? 1 : 0)}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <MessageCircle size={18} />
            <span>{post.comments}</span>
          </Button>
        </div>
        <Button variant="ghost" size="icon">
          <Share2 size={18} />
        </Button>
      </CardFooter>
    </Card>
  );
}
