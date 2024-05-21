import { features } from "../constants";
import styles, { layout } from "../style";
import { ButtonComenzar } from "./ButtonComenzar";


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} `}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        ¿Qué vas a lograr?<br className="sm:block hidden" /> 
      </h2>
      <p className={`font-poppins font-normal text-white text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
        <div className="flex gap-3 ">
          
          <span className="text-3xl">🔥</span>
          <span >Aprenderás a tener conversaciones más fluidas con mujeres tanto en chat como en persona.</span>
        </div><br />
        <div className="flex gap-3 ">
        <span className="text-3xl">🔥</span>
          <span >Aumentarás tu confianza y seguridad, y volverte un conversador irresistible para las mujeres.</span>
        </div><br />
        <div className="flex gap-3 ">
        <span className="text-3xl">🔥</span>
          <span >Te dejarán menos en visto y si te dejan sabrás cómo manejarlo.</span>
        </div><br />
        <div className="flex gap-3 ">
        <span className="text-3xl">🔥</span>
          <span >Dominarás los principios para despertar el instinto SEXUAL de las MUJERES y llevarlas a tu CAMA.</span>
        </div><br />
        <div className="flex gap-3 ">
        <span className="text-3xl">🔥</span>
          <span >Eliminarás por completo el miedo al rechazo y las inseguridades generadas por el pasado.</span>
        </div><br />
        <div className="flex gap-3 ">
        <span className="text-3xl">🔥</span>
          <span >Lograrás que ellas te busquen a ti en vez de tú a ellas.</span>
        </div><br />
       
      </p>

      <ButtonComenzar styles={`mt-10`} />
     
    </div>

    <div className={`flex-1 flex  md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
