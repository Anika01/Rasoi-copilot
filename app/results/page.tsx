"use client";

import { useSearchParams } from "next/navigation";
import { mealPlans } from "../../data/mealPlans";


export default function ResultsPage() {
    const searchParams = useSearchParams();

const name = searchParams.get("name");
const city = searchParams.get("city");
const goal = searchParams.get("goal");
const selectedPlan =
  mealPlans[goal as keyof typeof mealPlans];

const monday = selectedPlan?.monday;    



  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-3xl">

        <h1 className="mb-6 text-4xl font-bold">
          Your Personalized Meal Plan
        </h1>
        <p className="mb-2 text-lg">
  Hey, {name} 👋
</p>

<p className="text-gray-600">
    
  Your personalized{goal} meal plan is ready.
  Also tailored as per your mentioned city: {city}
</p>

        <div className="rounded-lg border p-6">

          <h2 className="mb-4 text-2xl font-semibold">
            Monday
          </h2>
<p>Breakfast: {monday?.breakfast}</p>
<p>Lunch: {monday?.lunch}</p>
<p>Dinner: {monday?.dinner}</p>

        </div>

      </div>
    </main>
  );
}