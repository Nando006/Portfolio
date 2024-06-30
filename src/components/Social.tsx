export default function Social() {
   const email = 'fsnando.012@outlook.com';
   const subject = 'Portfólio';
   const body = 'Olá, Venho do seu Portfólio \n\nEscreva sua mensagem aqui.';

   const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

   return (
      <div className="flex flex-row items-center space-x-2">
         <a
            href={mailtoLink}
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
            href="https://www.linkedin.com/in/nando006?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
            href="https://github.com/Nando006"
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