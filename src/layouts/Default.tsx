import { Outlet } from "react-router-dom";

export default function Default() {
   return (
      <div className="w-screen h-screen bg-neutral-800 text-neutral-100">
         <Outlet />
      </div>
   );
};