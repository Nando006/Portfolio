import { Outlet } from "react-router-dom";

export default function Default() {
   return (
      <div className="min-w-screen bg-neutral-800 text-neutral-100 font-roboto tracking-wider overflow-y-scroll">
         <Outlet />
      </div>
   );
};