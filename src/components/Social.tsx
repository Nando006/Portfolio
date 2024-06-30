export default function Social() {
   return (
      <div className="flex flex-row items-center space-x-2">
         <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 duration-200"
         >
            <img
               src="/svgs/email.svg"
               alt="Icon Email"
               className="w-12"
            />
         </a>
         <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 duration-200"
         >
            <img
               src="/svgs/linkedin.svg"
               alt="Icon Linkedin"
               className="w-12"
            />
         </a>
         <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 duration-200"
         >
            <img
               src="/svgs/github.svg"
               alt="Icon Github"
               className="w-12"
            />
         </a>
      </div>
   );
};