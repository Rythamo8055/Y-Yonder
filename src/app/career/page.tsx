'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { Bookmark, Building, Filter, MapPin } from 'lucide-react';
import { useState } from 'react';

const jobPostings = [
  {
    id: 1,
    title: 'Software Engineering Intern',
    company: 'Innovate Inc.',
    location: 'Remote',
    type: 'Internship',
  },
  {
    id: 2,
    title: 'Frontend Developer (React)',
    company: 'Creative Solutions',
    location: 'New York, NY',
    type: 'Full-time',
  },
  {
    id: 3,
    title: 'Data Analyst Intern',
    company: 'DataDriven Corp.',
    location: 'Chicago, IL',
    type: 'Internship',
  },
  {
    id: 4,
    title: 'UX/UI Designer',
    company: 'UserFirst Design',
    location: 'San Francisco, CA',
    type: 'Full-time',
  },
  {
    id: 5,
    title: 'Backend Engineer (Node.js)',
    company: 'ScaleFast',
    location: 'Remote',
    type: 'Full-time',
  },
];

export default function CareerLaunchpadPage() {
  const [bookmarked, setBookmarked] = useState<number[]>([]);

  const toggleBookmark = (id: number) => {
    setBookmarked(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-32">
      <header className="text-center my-12 md:my-16">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Career Launchpad
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Discover internships and job opportunities tailored for you.
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="flex gap-4 mb-8">
          <Input
            placeholder="Search by role, company, keyword..."
            className="bg-card/60 backdrop-blur-lg border-white/10"
          />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0">
                <Filter size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="rounded-t-2xl h-3/4 border-t-2 bg-background/80 backdrop-blur-xl"
            >
              <div className="mx-auto w-full max-w-md">
                <SheetHeader className="text-center">
                  <SheetTitle className="font-headline text-2xl">
                    Filter Opportunities
                  </SheetTitle>
                  <SheetDescription>
                    Refine your search to find the perfect fit.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-8 space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Job Type</h3>
                    <div className="flex gap-2">
                      <Button variant="secondary" size="sm">
                        Internship
                      </Button>
                      <Button variant="outline" size="sm">
                        Full-time
                      </Button>
                      <Button variant="outline" size="sm">
                        Part-time
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Experience Level (Years)</h3>
                    <Slider defaultValue={[1]} max={10} step={1} />
                  </div>
                  <Button size="lg" className="w-full">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="space-y-4">
          {jobPostings.map(job => (
            <Card
              key={job.id}
              className="bg-card/60 backdrop-blur-lg border-white/10 shadow-lg rounded-2xl"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-headline text-xl">
                      {job.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1.5">
                        <Building size={14} /> {job.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {job.location}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleBookmark(job.id)}
                  >
                    <Bookmark
                      size={20}
                      className={
                        bookmarked.includes(job.id)
                          ? 'text-primary fill-primary'
                          : ''
                      }
                    />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary px-3 py-1 rounded-full bg-secondary/10">
                    {job.type}
                  </span>
                  <Button>Apply</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
