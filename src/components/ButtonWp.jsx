import { whatsapp } from "../assets";

export const ButtonWp = () => {
  return (
    <div>
      
      <a
        target="blank" href="https://wa.link/fnn35g"
        className={`py-2 px-5  md:py-2 md:px-6 font-poppins font-medium text-[18px] text-white bg-green-400 rounded-[10px] flex items-center gap-3 `}
      >
        <img src={whatsapp} alt="" />
        ¡Consultar con un ASESOR! 
      </a>
    </div>
  );
};
