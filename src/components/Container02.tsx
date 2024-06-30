import { skill } from '../../data/SwiperCarrosel';
import Experiencias from './Experiencias';
import SwiperCarrosel from './SwiperCarrosel';

export default function Container02() {

   return (
      <div className="items-center max-w-[1030px] min-[655px]:pb-5">
         <div className="bg-neutral-900/20 min-[655px]:p-8 min-[655px]:rounded-[50px]">
            <div className="bg-neutral-900/10 min-[655px]:p-8 min-[655px]:rounded-[50px]">
               <div className="bg-neutral-700 min-[655px]:p-10 min-[655px]:rounded-[50px]">
                  <div className="flex flex-row items-center">
                     <img
                        src="/eu.png"
                        alt="Foto"
                        className="w-40"
                     />
                     <div>
                        <span className="text-xl min-[324px]:text-3xl font-bold bg-gradient-to-r from-[#fd3c1a] to-[#ffb061] bg-clip-text text-transparent text-shadow-orange font-serif">
                           Olá! Meu nome é Fernando
                        </span>
                        <p className="hidden min-[655px]:block">
                           Programador front-end & back-end, aberto a desafios e novas oportunidades!
                        </p>
                     </div>
                  </div>
                  <div className="space-y-12 flex flex-col items-center">
                     <div className="w-[250px] min-[408px]:w-[400px] min-[715px]:w-[500px] min-[815px]:w-[600px] min-[915px]:w-[700px] min-[1017px]:w-[800px]">
                        <SwiperCarrosel
                           data={skill}
                           title="Hard & Soft Skills"
                        />
                     </div>
                     <div className="px-5 min-[655px]:px-0">
                        <Experiencias />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div >
   );
};