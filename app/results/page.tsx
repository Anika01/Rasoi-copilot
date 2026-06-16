
import { mealPlans } from "../../data/mealPlans";

export default async function ResultsPage({
  searchParams,
}: {
 searchParams: Promise<{
  city?: string;
  age?: string;
  householdType?: string;
  dietPreference?: string;
  challenge?: string;
  specialNeeds?: string;
  goal?: string;
}>;
}) {
 const params = await searchParams;

const city = params.city;
const age = params.age;
const householdType = params.householdType;
const dietPreference = params.dietPreference;
const challenge = params.challenge;
const specialNeeds = params.specialNeeds;
const goal = params.goal;
console.log(
  "API KEY FOUND:",
  !!process.env.ANTHROPIC_API_KEY
);

const aiPrompt = `
Create a 7-day Indian home-cooking meal plan.

City: ${city}
Age: ${age}

Household Type: ${householdType}

Special Needs: ${specialNeeds || "None"}

Diet Preference: ${dietPreference}

Goal: ${goal}

Biggest Challenge: ${challenge}

Requirements:
- Indian home-cooked meals
- Practical weekday cooking
- Family-friendly
- Include breakfast, lunch and dinner
- Include a shopping list
`;
searchParams: Promise<{
  city?: string;
  age?: string;
  householdType?: string;
  dietPreference?: string;
  challenge?: string;
  goal?: string;
}>;
const selectedPlan =
  mealPlans[goal as keyof typeof mealPlans];
  const shoppingList = selectedPlan?.shoppingList;
 
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-3xl">

        <h1 className="mb-6 text-4xl font-bold">
          Your Personalized Meal Plan
        </h1>
        <p >
  Hey, 👋
</p>

<p className="text-gray-600">
    
  Your personalized {goal} meal plan is ready.
 Tailored as per your mentioned city (local food preferences): {city}
</p>
<div className="mt-6 mb-8 rounded-lg border bg-gray-50 p-5">
  <h2 className="mb-4 text-xl font-semibold">
    Household Summary
  </h2>

  <p>📍 City: {city}</p>
  <p>🎂 Age: {age}</p>
  <p>👨‍👩‍👧 Household: {householdType}</p>
  <p>🥬 Diet Preference: {dietPreference}</p>
  <p>🎯 Selected Goal Plan: {goal}</p>
  <p>💡 Challenge: {challenge}</p>
  <p>❤️ Special Needs: {specialNeeds || "None"}</p>
  <hr className="my-4" />

<h3 className="mb-2 font-semibold">
  How this plan was created
</h3>

<p>✓ Tailored for {householdType}</p>
<p>✓ Based on a {dietPreference} diet</p>
<p>✓ Focused on {goal}</p>
<p>✓ Designed to help with: {challenge}</p>
<p>✓ Adjusted for location: {city}</p>
</div>
<div className="mt-6 rounded-lg border bg-blue-50 p-5">
  <h2 className="mb-3 text-xl font-semibold">
    AI Prompt Preview
  </h2>

  <pre className="whitespace-pre-wrap text-sm">
    {aiPrompt}
  </pre>
</div>
        <div className="rounded-lg border p-6">

         {selectedPlan &&
  Object.entries(selectedPlan)
    .filter(([day]) => day !== "shoppingList")
    .map(([day, meals]) => (
    <div
      key={day}
      className="mb-6 rounded-lg border p-4"
    >
      <h2 className="mb-3 text-2xl font-semibold capitalize">
        {day}
      </h2>

      <p>Breakfast: {(meals as any).breakfast}</p>
<p>Lunch: {(meals as any).lunch}</p>
<p>Dinner: {(meals as any).dinner}</p>
    </div>
  ))}
  <div className="mt-8 rounded-lg border bg-green-50 p-6">
  <h2 className="mb-4 text-2xl font-semibold">
    Recommendations For Your Goal
  </h2>

  {goal === "High Protein" && (
    <>
      <p>✓ Include protein in every meal</p>
      <p>✓ Prioritize paneer, tofu, dal and legumes</p>
      <p>✓ Add curd or milk for extra protein</p>
    </>
  )}

  {goal === "Hair Growth" && (
    <>
      <p>✓ Include iron-rich foods daily</p>
      <p>✓ Add seeds, nuts and leafy vegetables</p>
      <p>✓ Prioritize protein for healthy hair growth</p>
    </>
  )}

  {goal === "Skin Health" && (
    <>
      <p>✓ Increase fruits and vegetables</p>
      <p>✓ Stay hydrated throughout the day</p>
      <p>✓ Include healthy fats and seeds</p>
    </>
  )}
</div>
  {shoppingList && (
  <div className="mt-8 rounded-lg border p-6">
    <h2 className="mb-4 text-2xl font-semibold">
      Weekly Shopping List
    </h2>

    <ul className="list-disc pl-5">
      {shoppingList.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
)}
        </div>

      </div>
    </main>
  );
}