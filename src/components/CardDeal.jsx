import { sebasVSMar } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section id="product" className={`${layout.section} ${styles.marginX}`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Enfrentate al peligro <br className="sm:block hidden" /> como sebastian contra un mar lleno de basura
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={sebasVSMar} alt="billing" className="w-[60%] h-[100%] rounded-full" />
    </div>
  </section>
);

export default CardDeal;
