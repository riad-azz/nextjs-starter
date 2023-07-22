import ThemeButton from "@/components/ThemeButton";

export default async function Home() {
  return (
    <main className="flex flex-col gap-4 dark:bg-red-600 p-4">
      <h1 className="text-3xl md:text-4xl">Hello Next.js Template!!</h1>
      <ThemeButton />
    </main>
  );
}
