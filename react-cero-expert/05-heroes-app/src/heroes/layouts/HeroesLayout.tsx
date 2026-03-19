import { Outlet } from "react-router"

export const HeroesLayout = () => {
  return (
    <div className="bg-blue-100 min-h-screen">
        <Outlet />
    </div>
  )
}
