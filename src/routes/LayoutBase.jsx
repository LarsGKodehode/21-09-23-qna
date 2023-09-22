import { Outlet } from "react-router-dom";

export function LayoutBase() {
  return (
    <div>
      <header>
        <h1>Dynamic Routes Test</h1>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>By Lars Gunnar</p>
      </footer>
    </div>
  )
}