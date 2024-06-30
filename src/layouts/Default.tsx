import { Outlet } from "react-router-dom";

export default function Default() {
   return (
      <div className="bg-neutral-800 text-neutral-100 font-poppins tracking-wider">
         <Outlet />
      </div>
   );
};