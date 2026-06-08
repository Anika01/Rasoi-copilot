
import { mealPlans } from "../../data/mealPlans";

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<{
    name?: string;
    city?: string;
    goal?: string;
  }>;
}) {
   const params = await searchParams;

const name = params.name;
const city = params.city;
const goal = params.goal;
const selectedPlan =
  mealPlans[goal as keyof typeof mealPlans];
 



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
    
  Your personalized {goal} meal plan is ready.
 Tailored as per your mentioned city (local food preferences): {city}
</p>

        <div className="rounded-lg border p-6">

          {selectedPlan &&
  Object.entries(selectedPlan).map(([day, meals]) => (
    <div
      key={day}
      className="mb-6 rounded-lg border p-4"
    >
      <h2 className="mb-3 text-2xl font-semibold capitalize">
        {day}
      </h2>

      <p>Breakfast: {meals.breakfast}</p>
      <p>Lunch: {meals.lunch}</p>
      <p>Dinner: {meals.dinner}</p>
    </div>
  ))}
        </div>

      </div>
    </main>
  );
}