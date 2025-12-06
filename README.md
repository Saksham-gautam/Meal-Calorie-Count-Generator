# Meal Calorie Count Generator Frontend

A production-ready frontend interface for the Meal Calorie Count Generator, built with Next.js 14, Tailwind CSS, shadcn/ui, and Zustand.

## 🚀 Features

- **Authentication**: Secure Register and Login flows with JWT handling.
- **Calorie Lookup**: Real-time calorie estimation for dishes using USDA data.
- **Dashboard**: Protected area for calorie tracking.
- **Meal History**: Tracks your recent searches (Bonus).
- **Dark Mode**: Fully supported dark/light theme switching.
- **Responsive**: Mobile-first design.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand (Persisted)
- **Validation**: Zod + React Hook Form
- **Language**: TypeScript

## 🏁 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd meal-calorie-frontend-antigravity
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Configure Environment**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Ensure `NEXT_PUBLIC_API_BASE_URL` is set to your backend URL (default: `https://flybackend-misty-feather-6458.fly.dev/`).

4. **Run Development Server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## 🧪 Testing (Bonus)

Running unit tests:
```bash
pnpm test
```

## 🐳 Docker (Bonus)

Build and run with Docker:
```bash
docker build -t meal-calorie-frontend .
docker run -p 3000:3000 meal-calorie-frontend
```

## 📸 Screenshots

*(Add screenshots here)*

## 📝 Decisions & Trade-offs

- **AuthGuard**: Implemented as a client-side wrapper in `layout.tsx` for simplicity in this SPA-like architecture. For SSR protection, Middleware would be the next step.
- **Zustand Persistence**: Used `persist` middleware to keep the user logged in across reloads, backed by `localStorage`.
- **API Integration**: Direct calls via Axios with interceptors to handle JWT injection automatically.
