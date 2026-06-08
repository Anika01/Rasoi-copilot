"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FamilyPage() {
      const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [showResult, setShowResult] = useState(false);
    const router = useRouter();
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-xl">
       <h1 className="mb-8 text-4xl font-bold">
    Build Your Personalized Meal Plan
  </h1>
<p></p>
  <p className="mb-8 text-gray-600">
    Tell us a little about your household and health goals.
    We'll create a practical Indian meal plan tailored for you.
  </p>


      <div className="space-y-5">

  <div>
    <label className="block mb-1 font-medium">Name</label>
  <input
  type="text"
  placeholder="Enter your name"
  className="w-full rounded border p-3"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
  </div>

  <div>
    <label className="block mb-1 font-medium">Age</label>
  <input
  type="number"
  placeholder="Enter your age"
  className="w-full rounded border p-3"
  value={age}
  onChange={(e) => setAge(e.target.value)}
/>
  </div>
<div>
  <label className="block mb-1 font-medium">
    City
  </label>

<input
  type="text"
  placeholder="Pune"
  className="w-full rounded border p-3"
  value={city}
  onChange={(e) => setCity(e.target.value)}
/>
</div>
 <div>
  <label className="block mb-1 font-medium">
    Who are you planning meals for?
  </label>

  <select className="w-full rounded border p-3">
    <option>Just Me</option>
    <option>Me + Partner</option>
    <option>Family with Toddler</option>
    <option>Family with Children</option>
    <option>Multi-generation Family</option>
  </select>
</div>

  <div>
    <label className="block mb-1 font-medium">
      Diet Preference
    </label>
    <select className="w-full rounded border p-3">
      <option>Vegetarian</option>
      <option>Vegan</option>
      <option>Eggetarian</option>
    </select>
  </div>

  <div>
    <label className="block mb-1 font-medium">
      What should your meal plan focus on?
    </label>
 <select
  className="w-full rounded border p-3"
  value={goal}
  onChange={(e) => setGoal(e.target.value)}
>
  <option value="">Select Goal</option>
  <option>High Protein</option>
  <option>Hair Growth</option>
  <option>Skin Health</option>
  <option>Hydration</option>
  <option>Weight Loss</option>
  <option>Weight Gain</option>
  <option>Gut Health</option>
  <option>Better Energy</option>
</select>
  </div>

  <button
   onClick={() => {
    console.log(name);
    console.log(city);
    console.log(goal);

    router.push(
      `/results?name=${name}&city=${city}&goal=${goal}`
    );
  }}
  className="w-full rounded bg-black p-3 text-white"
>
  Create My Meal Plan
</button>

</div>

</div>
</main>
  );
}
