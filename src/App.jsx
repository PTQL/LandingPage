import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero,Home } from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} ${styles.colorText}`}>
        <Navbar />
      </div>
    </div> */}

    <div className={`${styles.flexStart} relative`}>
      <div className={`${styles.boxWidth}`}>
        <Home />
      </div>
    </div>
    
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Stats />
        {/* <Billing /> */}
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
