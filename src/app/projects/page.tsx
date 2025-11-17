'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Project Helios',
    latestUpdate: 'Deployed v1.1 to production.',
    progress: 90,
    members: [
      { name: 'A', src: 'https://picsum.photos/seed/member1/40/40' },
      { name: 'B', src: 'https://picsum.photos/seed/member2/40/40' },
      { name: 'C', src: 'https://picsum.photos/seed/member3/40/40' },
    ],
    status: 'active',
  },
  {
    id: 2,
    title: 'Campus Mobile App',
    latestUpdate: 'Finalizing UI mockups in Figma.',
    progress: 30,
    members: [
      { name: 'D', src: 'https://picsum.photos/seed/member4/40/40' },
      { name: 'E', src: 'https://picsum.photos/seed/member5/40/40' },
    ],
    status: 'active',
  },
  {
    id: 3,
    title: 'Alumni Network Platform',
    latestUpdate: 'Project completed.',
    progress: 100,
    members: [
      { name: 'F', src: 'https://picsum.photos/seed/member6/40/40' },
      { name: 'G', src: 'https://picsum.photos/seed/member7/40/40' },
    ],
    status: 'archived',
  },
];

export default function ProjectsPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto px-4 py-8 pb-32">
      <header className="text-center my-12 md:my-16">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Projects
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Collaborate, manage, and showcase your work.
        </p>
      </header>

      <main className="max-w-4xl mx-auto relative">
        <Tabs defaultValue="active">
          <TabsList className="mb-8 bg-transparent p-0">
            <TabsTrigger
              value="active"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full"
            >
              Active
            </TabsTrigger>
            <TabsTrigger
              value="archived"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full"
            >
              Archived
            </TabsTrigger>
            <TabsTrigger
              value="invitations"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full"
            >
              Invitations
            </TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <ProjectList
              projects={projects.filter(p => p.status === 'active')}
            />
          </TabsContent>
          <TabsContent value="archived">
            <ProjectList
              projects={projects.filter(p => p.status === 'archived')}
            />
          </TabsContent>
          <TabsContent value="invitations">
            <div className="flex justify-center items-center h-48 bg-card/60 backdrop-blur-lg border-white/10 shadow-lg rounded-2xl">
              <p className="text-muted-foreground">No pending invitations.</p>
            </div>
          </TabsContent>
        </Tabs>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button className="fixed bottom-24 right-8 h-16 w-16 rounded-2xl shadow-lg z-40">
              <Plus size={32} />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="rounded-t-2xl h-auto border-t-2 bg-background/80 backdrop-blur-xl"
          >
            <div className="mx-auto w-full max-w-lg">
              <SheetHeader className="text-left">
                <SheetTitle className="font-headline text-2xl">
                  Create a New Project
                </SheetTitle>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <Input placeholder="Project Title" className="bg-background/80" />
                <Input placeholder="Invite members..." className="bg-background/80" />
                <Button className="w-full" onClick={() => setOpen(false)}>
                  Create Project
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </main>
    </div>
  );
}

function ProjectList({ projects }: { projects: (typeof projects)[0][] }) {
  if (projects.length === 0) {
    return (
      <div className="flex justify-center items-center h-48 bg-card/60 backdrop-blur-lg border-white/10 shadow-lg rounded-2xl">
        <p className="text-muted-foreground">No projects in this category.</p>
      </div>
    );
  }
  return (
    <div className="space-y-4">
      {projects.map(project => (
        <Card
          key={project.id}
          className="bg-card/60 backdrop-blur-lg border-white/10 shadow-lg rounded-2xl cursor-pointer hover:bg-card/80 transition-colors"
        >
          <CardHeader>
            <CardTitle className="font-headline text-xl">
              {project.title}
            </CardTitle>
            <CardDescription>{project.latestUpdate}</CardDescription>
          </CardHeader>
          <div className="px-6 pb-6">
            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                {project.members.map(member => (
                  <Avatar key={member.name} className="h-8 w-8 border-2">
                    <AvatarImage src={member.src} />
                    <AvatarFallback>{member.name}</AvatarFallback>

                  </Avatar>
                ))}
              </div>
              <span className="text-xs font-semibold text-muted-foreground">
                {project.progress}%
              </span>
            </div>
            <Progress value={project.progress} className="mt-3 h-2" />
          </div>
        </Card>
      ))}
    </div>
  );
}
