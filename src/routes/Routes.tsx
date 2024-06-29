import { BrowserRouter, Routes as Group, Route } from "react-router-dom";
import Default from "../layouts/Default";
import Home from "../pages/home";

export default function Routes() {
   return (
      <BrowserRouter>
         <Group>
            <Route path="/" element={<Default />}>
               <Route index element={<Home />} />
            </Route>
         </Group>
      </BrowserRouter>
   );
};