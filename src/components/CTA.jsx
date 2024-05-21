import styles from "../style";
import { ButtonComenzar } from "./ButtonComenzar";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[60px] w-full md:text-4xl text-3xl'>Garantía de sastifacción <span>🔥</span></h2>
      <p className={`font-poppins font-normal text-gray-400 text-lg leading-[30.8px] max-w-[470px] mt-5`}>
      Estamos tan convencidos de la calidad del contenido que si en los primeros 7 días el libro no cumple tus expectativas, te devolvemos el 100% de tu dinero. De esta manera, no corres ningún riesgo y te aseguras de haber hecho una buena inversión.

      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <ButtonComenzar />
    </div>
  </section>
);

export default CTA;
