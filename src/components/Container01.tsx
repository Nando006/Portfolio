import { Typewriter } from "react-simple-typewriter";
import Social from "./Social";

export default function Container01() {
   const textTyped = [
      "Software Developer!",
      "Back-end & Front-end!",
      "Cursando Engenharia de Software"
   ];

   return (
      <div className="w-full flex flex-col items-center space-y-8">
         <div>
            <img
               src="/nome.png"
               alt="Nome"
               className="w-[300px]"
            />
         </div>
         <div className="font-thin text-center text-3xl">
            <Typewriter
               words={textTyped}
               loop={0} // 0 para loop infinito
               cursor
               typeSpeed={90}
               deleteSpeed={50}
               delaySpeed={1000}
            />
         </div>
         <div>
            <Social />
         </div>
      </div>
   );
};