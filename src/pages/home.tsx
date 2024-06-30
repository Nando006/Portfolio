import Container01 from "../components/Container01";
import Container02 from "../components/Container02";

export default function Home() {
   const scrollToContext = () => {
      const nextSection = document.getElementById('next-section');
      if (nextSection) {
         nextSection.scrollIntoView({ behavior: 'smooth' });
      };
   };

   return (
      <div className="w-full">
         <section className="h-screen flex flex-col justify-center items-center relative">
            <Container01 />
            <div
               className="absolute bottom-5 text-3xl cursor-pointer"
               onClick={scrollToContext}
            >
               <img
                  src="/svgs/arrow.svg"
                  alt="Arrow"
                  className="w-12 animate-bounce"
               />
            </div>
         </section>
         <section
            id="next-section"
            className="flex justify-center items-center"
         >
            <div>
               <Container02 />
            </div>
         </section>
      </div>
   );
};