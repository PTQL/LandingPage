import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.marginX} pb-4 pr-4 pl-4 bg-green-400 rounded-md`}>
    <div className="flex justify-center items-center">
      <h2 className="font-poppins font-semibold text-sky-50 text-4xl leading-8 mb-10 mt-12">
       Hemos colaborado con
      </h2>
    </div>

    <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-10 mb-6`}>
  {stats.map((stat) => (
    <div key={stat.id} className={`flex-1 flex flex-col justify-start items-center m-3`} >
      <h4 className="font-poppins font-semibold text-[40.89px] leading-[43.16px] text-green-500 mb-2">
        {stat.value}
      </h4>
      <p className="font-poppins font-semibold text-[20.45px] leading-[21.58px] uppercase text-sky-50 text-center">
        {stat.title}
      </p>
    </div>
  ))}
</div>



    
  </section>
);

export default Stats;
