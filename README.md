# 🏋️ FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Pick a lift, lock it into today's plan, and watch the week's work add up.

🔗 **Live Site:** 
📦 **Repository:** https://github.com/orjodasutshab/fitlog-a6

---

## 📖 About the Project

FitLog is a workout library and daily planning app. Users can browse a library of 12 workouts fetched live from an API, view full details for each lift, and build a "Today's Plan" (capped at 5 lifts) or save workouts for later. Progress is tracked live through navbar badge counters and a metrics dashboard on the My Plan page.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js 16** (App Router) | Page routing, dynamic routes, rendering |
| **TypeScript** | Type-safe components and data models |
| **Tailwind CSS + daisyUI** | Styling, theming and responsive layout |
| **lucide-react** | Icon set used across the UI |
| **react-hot-toast** | Toast notifications for user actions |
| **React Context API** | Global state for plan/saved workouts |

## ✨ Key Features

1. 🏠 **Responsive Workout Library** — All 12 workouts fetched from the API and displayed in a responsive 3-column grid, with a loading spinner while data loads.
2. 🔀 **Sort Functionality** — Sort the library or plan list by Duration, Calories, or Rating with a single dropdown.
3. 📄 **Dynamic Workout Details Page** — Each workout has its own page with equipment, difficulty, sets/reps, and step-by-step instructions.
4. ✅ **Plan & Save System** — Add any workout to Today's Plan (capped at 5) or Save for Later, with instant navbar badge updates and toast confirmations.
5. 📊 **My Plan Dashboard** — Live metrics (exercises, minutes, calories), tabbed views for Plan/Saved, Mark as Done, and one-click removal.
6. 🚫 **Custom 404 Page** — A branded not-found page for any invalid route.
7. 📱 **Fully Responsive** — Clean layout across mobile, tablet, and desktop.

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/orjodasutshab/fitlog-a6.git
cd fitlog-a6
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── app/             # Routes: home, workout/[id], my-plan, not-found
├── components/      # Navbar, Footer, WorkoutCard, Stats, Tags, etc.
├── context/          # PlanProvider (global plan/saved state)
└── lib/              # API helpers, types, sort logic
```

## 🙋 Author

**Orjo Das Utshab**
GitHub: [@orjodasutshab](https://github.com/orjodasutshab)

---

> Built as part of the B14-A6 Fit Log assignment.
