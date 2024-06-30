import { experiencia } from "../../data/Experiencia";

export default function Experiencias() {
   return (
      <div>
         <span className="hidden min-[331px]:block text-xl min-[487px]:text-3xl font-bold bg-gradient-to-r from-[#fd3c1a] to-[#ffb061] relative bg-clip-text text-transparent text-shadow-orange font-serif pl-[50px] before:absolute before:bg-[#fd3c1a] before:w-[40px] before:h-[4px] before:bottom-1/2 before:left-[0px]">
            Minhas Experiências
         </span>
         <span className="block min-[331px]:hidden text-xl min-[487px]:text-3xl font-bold bg-gradient-to-r from-[#fd3c1a] to-[#ffb061] relative bg-clip-text text-transparent text-shadow-orange font-serif pl-[50px] before:absolute before:bg-[#fd3c1a] before:w-[40px] before:h-[4px] before:bottom-1/2 before:left-[0px]">
            Experiências
         </span>
         <div className="py-5 px-5 space-y-5 relative before:absolute before:bg-[#fd3c1a] before:h-full before:w-[4px] before:left-0 before:bottom-[15px] before:min-[487px]:bottom-[20px]">
            {
               experiencia.map((item, index) => (
                  <div className="space-y-4" key={index}>
                     <div>
                        <span className="text-md min-[487px]:text-xl font-bold text-neutral-300 relative before:absolute before:bg-[#fd3c1a] before:h-[20px] before:w-[20px] before:rounded-full before:left-[-28.5px] before:bottom-[5px] before:border-2 before:border-white">
                           {item.title}
                        </span>
                        <p className="font-kanit text-sm text-neutral-400 px-2">
                           {item.date}
                        </p>
                     </div>
                     <div className="font-light text-xs p-3 bg-neutral-800/50 rounded-xl text-neutral-300 space-y-2">
                        {
                           item.paragrafo.map((item, index) => (
                              <p key={index}>{item.p}</p>
                           ))
                        }
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   );
};