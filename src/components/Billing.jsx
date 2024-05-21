import { mockups } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className= {`${layout.sectionReverse} mb-12`} >
    <div className={layout.sectionImgReverse}>
      <div className="flex flex-col">
        <img src={mockups} alt="" className="w-[100%] h-[100%] md:w-[70%]] md:h-[450px] relative z-[5] rounded-md" />
        <h2 className="text-white text-center mt-8 text-5xl font-poppins font-semibold">¡Te llevaras <span className="text-yellow-400 text-5xl">5 libros!</span>  </h2>
      </div>
      
      

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Éste programa digital es para ti si: <br className="sm:block hidden" />
      </h2>
      <p className={`font-poppins font-normal text-white text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
      <div className="flex gap-3 ">
          
        <span className="text-xl text-yellow-500">1</span>
          <span >¿Tienes una baja autoestima, poca confianza y esto es una barrera para ligar con las mujeres?</span>
      </div><br />
        <div className="flex gap-3 ">
        <span className="text-xl text-yellow-500">2</span>
          <span >¿Te quedas sin palabras cuando hablas con una mujer linda o te quedas mudo con la que te gusta?</span>
        </div><br />
        <div className="flex gap-3 ">
        <span className="text-xl text-yellow-500">3</span>
          <span >¿Eres introvertido con las chicas y estás cansado de dejar pasar oportunidades amorosas en tu vida?</span>
        </div><br />
        <div className="flex gap-3 ">
        <span className="text-xl text-yellow-500">4</span>
          <span >¿Has tenido malas experiencias en tu pasado y esto te ha generado miedos e inseguridades?</span>
        </div><br />
        <div className="flex gap-3 ">
        <span className="text-xl text-yellow-500">5</span>
          <span >¿Estás cansado de estar soltero y de no tener opciones disponibles?</span>
        </div><br />
        <div className="flex gap-3 ">
        <span className="text-xl text-yellow-500">6</span>
          <span >¿Sientes algún tipo de presión social por tus amigos,familia o conocidos?</span>
        </div><br />

        
        
      </p>

      
    </div>
  </section>
);

export default Billing;
