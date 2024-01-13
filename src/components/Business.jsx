import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue icon__img`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain " />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-green-500 text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-gray-900 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={`${layout.section} ${styles.paddingX}`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Únete a nosotros, <br className="sm:block hidden" /> y se un agente del cambio
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Tu participación es la clave para forjar un impacto significativo en el nuestro Pais. Únete a nuestra comunidad de agentes del cambio y sé la fuerza motriz hacia un futuro mejor. 
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
