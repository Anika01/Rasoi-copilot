"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FamilyPage() {
      
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [householdType, setHouseholdType] = useState("");
const [dietPreference, setDietPreference] = useState("");
const [challenge, setChallenge] = useState("");
  
  const [goal, setGoal] = useState("");

    const router = useRouter();
    const handleSpecialNeedChange = (value: string) => {
  setSpecialNeeds((prev) =>
    prev.includes(value)
      ? prev.filter((item) => item !== value)
      : [...prev, value]
  );
};
    const [specialNeeds, setSpecialNeeds] = useState<string[]>([]);
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
    Your Age
  </label>

  <input
    type="number"
    placeholder="30"
    className="w-full rounded border p-3"
    value={age}
    onChange={(e) => setAge(e.target.value)}
  />
</div>
 <div>
  <label className="block mb-1 font-medium">
    Who are you planning meals for?
  </label>

 <select
  className="w-full rounded border p-3"
  value={householdType}
  onChange={(e) => setHouseholdType(e.target.value)}
>
  <option value="">Select Household Type</option>
  <option>Just Me</option>
  <option>Couple</option>
  <option>Family with Children</option>
  <option>Multi-generation Family</option>
</select>
<div>
  <label className="block mb-2 font-medium">
    Anyone in your household?
  </label>

  <div className="space-y-2">
    <label className="block">
      <input
  type="checkbox"
  className="mr-2"
  onChange={() =>
    handleSpecialNeedChange("Toddler")
  }
/>
      Toddler (1–5 years)
    </label>

    <label className="block">
      <input
  type="checkbox"
  className="mr-2"
  onChange={() =>
    handleSpecialNeedChange("Pregnant Woman")
  }
/>  
      Pregnant Woman
    </label>

    <label className="block">
     <input
  type="checkbox"
  className="mr-2"
  onChange={() =>
    handleSpecialNeedChange("Breastfeeding Mother")
  }
/>
      Breastfeeding Mother
    </label>

    <label className="block">
      <input
  type="checkbox"
  className="mr-2"
  onChange={() =>
    handleSpecialNeedChange("Senior Citizen")
  }
/>
      Senior Citizen
    </label>
    <label className="block">
  <input
  type="checkbox"
  className="mr-2"
  onChange={() =>
    handleSpecialNeedChange("None")
  }
/>
  None of the Above
</label>
  </div>
</div>
</div>

  <div>
    <label className="block mb-1 font-medium">
      Diet Preference
    </label>
    <select
  className="w-full rounded border p-3"
  value={dietPreference}
  onChange={(e) => setDietPreference(e.target.value)}
>
  <option value="">Select Preference</option>
  <option>Vegetarian</option>
  <option>Eggetarian</option>
  <option>Vegan</option>
</select>
      
  </div>

  <div>
    <label className="block mb-1 font-medium">
      What is the primary meal plan goal for your household?
    </label>
 <select
  className="w-full rounded border p-3"
  value={goal}
  onChange={(e) => setGoal(e.target.value)}
>
  <option value="">Select Goal</option>

<option value="Skin Health">
  General Family Health
</option>

<option value="High Protein">
  High Protein Meals
</option>

<option value="High Protein">
  Weight Management
</option>

<option value="Hair Growth">
  Hair & Skin Health
</option>

<option value="High Protein">
  Better Energy Throughout the Day
</option>

<option value="Skin Health">
  Easy & Practical Home Cooking
</option>
</select>
  </div>
<div>
  <label className="block mb-1 font-medium">
    What's your biggest meal planning challenge?
  </label>

  <select
    className="w-full rounded border p-3"
    value={challenge}
    onChange={(e) => setChallenge(e.target.value)}
  >
    <option value="">Select Challenge</option>
    <option>Running out of meal ideas</option>
    <option>Need healthier meals</option>
    <option>Need more protein</option>
    <option>Managing different family needs</option>
    <option>Planning groceries</option>
    <option>Reducing cooking effort</option>
  </select>
</div>
  <button
   onClick={() => {
    console.log(name);
    console.log(city);
    console.log(goal);

router.push(
  `/results?city=${city}&age=${age}&householdType=${householdType}&dietPreference=${dietPreference}&goal=${goal}&challenge=${challenge}&specialNeeds=${specialNeeds.join(",")}`
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
