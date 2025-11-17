'use client';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit } from 'lucide-react';

const featuredProjects = [
  {
    id: 1,
    title: 'Project Helios',
    description: 'Solar-powered weather station with data analysis dashboard.',
    imageUrl: 'https://picsum.photos/seed/helios/600/400',
    imageHint: 'solar panel circuit',
  },
  {
    id: 2,
    title: 'Portfolio Website v2',
    description: 'Personal portfolio built with Next.js and Framer Motion.',
    imageUrl: 'https://picsum.photos/seed/portfolio/600/400',
    imageHint: 'website design code',
  },
  {
    id: 3,
    title: '3D Printed Drone Frame',
    description: 'Custom lightweight drone frame designed in Fusion 360.',
    imageUrl: 'https://picsum.photos/seed/drone/600/400',
    imageHint: '3d printer drone',
  },
];

const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'Firebase',
  'Next.js',
  'Tailwind CSS',
  'Figma',
  'Fusion 360',
];

export default function ProfilePage() {
  return (
    <div className="pb-32">
      <header className="relative h-48 md:h-64">
        <Image
          src="https://picsum.photos/seed/banner/1200/400"
          alt="Profile banner"
          fill
          className="object-cover"
          data-ai-hint="abstract texture"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
          <Avatar className="h-32 w-32 border-4 border-background">
            <AvatarImage src="https://picsum.photos/seed/user-profile/128/128" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        <Button
          size="icon"
          variant="secondary"
          className="absolute bottom-4 right-4 z-10"
        >
          <Edit size={18} />
        </Button>
      </header>

      <div className="container mx-auto px-4 pt-20 text-center">
        <h1 className="font-headline text-3xl font-bold">Jane Doe</h1>
        <p className="text-muted-foreground mt-1">
          B.S. in Computer Science @ State University
        </p>
        <p className="max-w-2xl mx-auto mt-4 text-foreground/90">
          Aspiring full-stack developer and IoT enthusiast. Passionate about
          building useful applications and learning new technologies.
        </p>
      </div>

      <main className="container mx-auto px-4 mt-12 space-y-12">
        <section>
          <h2 className="font-headline text-2xl font-semibold mb-4 text-center">
            Featured Projects
          </h2>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {featuredProjects.map(project => (
                <CarouselItem
                  key={project.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="bg-card/60 backdrop-blur-lg border-white/10 shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src={project.imageUrl}
                        alt={project.description}
                        width={600}
                        height={400}
                        className="aspect-video object-cover"
                        data-ai-hint={project.imageHint}
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="font-headline text-lg">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-14 hidden md:flex" />
            <CarouselNext className="mr-14 hidden md:flex" />
          </Carousel>
        </section>

        <section className="max-w-3xl mx-auto">
          <Tabs defaultValue="skills">
            <TabsList className="grid w-full grid-cols-3 bg-card/60 backdrop-blur-lg">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="skills">
              <Card className="bg-card/60 backdrop-blur-lg border-white/10 shadow-lg rounded-2xl">
                <CardContent className="p-6 flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <div
                      key={skill}
                      className="text-sm font-semibold text-secondary px-3 py-1 rounded-full bg-secondary/10"
                    >
                      {skill}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience">
              <Card className="bg-card/60 backdrop-blur-lg border-white/10 shadow-lg rounded-2xl">
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">
                    Experience section coming soon.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="education">
              <Card className="bg-card/60 backdrop-blur-lg border-white/10 shadow-lg rounded-2xl">
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">
                    Education section coming soon.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  );
}
