import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">
        Rasoi Copilot
      </h1>

      <p className="mt-4 text-lg">
        Personalized family meal planning for Indian families
      </p>

     <Link
  href="/family"
  className="mt-8 rounded-lg bg-black px-6 py-3 text-white"
>
  Create My Family Meal Plan
</Link>
    </main>
  );
}