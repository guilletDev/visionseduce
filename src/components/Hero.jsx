import styles from "../style";
import { discount, portada } from "../assets";
import { ButtonWp } from "./ButtonWp";
import { ButtonComenzar } from "./ButtonComenzar";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-yellow-600">Cupos</span> Limitados{" "}
            {/* <span className="text-red-600">40% Off</span>  */}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gray-300 ss:leading-[100.8px] leading-[75px]">
          ¡Descubre como conquistar a cualquier mujer con {" "}
            <span className="text-yellow-600">"Seducción Prohibida 🔥"!</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[48px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-xl text-gray-400`}>
        Encontrarás estrategias probadas, consejos prácticos para desatar todo tu  <strong className="text-white">POTENCIAL SEDUCTOR</strong>  y a generar 
        una <strong className="text-white">ATRACCIÓN</strong>  genuina desde el primer encuentro.
        </p>

        <div className="mt-8 flex gap-6 ">
          <div className="mt-5" >
            <ButtonComenzar />
         </div>
        {/*  <div  >
          <ButtonWp /> 
        </div> */}
        </div>
        
      </div>

      

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={portada} alt="billing" className="w-[80%] h-[80%] mt-4  md:w-[80%] md:h-[100%] relative z-[5] md:rounded-md" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  );
};

export default Hero;
