export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center my-12 md:my-20">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">
          Profile
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Your personal space.
        </p>
      </header>
      <div className="flex justify-center items-center h-96">
        <p className="text-foreground/60">Profile content will be here.</p>
      </div>
    </div>
  );
}
