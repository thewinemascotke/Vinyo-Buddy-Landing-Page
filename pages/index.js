import Head from 'next/head'
import Footer from '@components/Footer'
import styles from '@styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vinyo Buddy - Your AI Sommelier for the Kenyan Palate</title>
        <meta name="description" content="Meet Vinyo Buddy, your AI wine expert designed for Kenyan food pairings. Get instant wine recommendations, pairing tips, and expert advice right in the aisle." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <img src="/logo.jpg" alt="The Wine Mascot Ke Logo" className={styles.logo} />
              <h1 className={styles.heroTitle}>
                Vinyo Buddy
              </h1>
              <p className={styles.heroByline}>
                by The Wine Mascot Ke
              </p>
              <p className={styles.heroSubtitle}>
                Your AI Sommelier for the Kenyan Palate. Instant wine wisdom, perfect pairings, and expert advice tailored for Kenyan cuisine. All in the palm of your hand.
              </p>
              <button className={styles.ctaButton}>
                Chat with Vinyo Buddy
              </button>
            </div>
          </div>
        </section>

        <section className={styles.howItWorks}>
          <div className="container">
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <div className={styles.stepsGrid}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h3>Ask About Wine</h3>
                <p>Type in a wine name, grape, or region and get instant information.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h3>Get Expert Info</h3>
                <p>Learn tasting notes, origins, and quality insights in seconds.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3>Find Perfect Pairings</h3>
                <p>Discover wines that complement Kenyan dishes like nyama choma, pilau, and more.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.whyVinyo}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Why Vinyo Buddy?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefit}>
                <h3>🛒 Your Aisle Helper</h3>
                <p>Stuck at the supermarket? Get quick, reliable answers right where you shop.</p>
              </div>
              <div className={styles.benefit}>
                <h3>🎯 Personalized Advice</h3>
                <p>Get recommendations that match your taste, budget, and occasion.</p>
              </div>
              <div className={styles.benefit}>
                <h3>🇰🇪 Kenyan-First</h3>
                <p>Wine pairing advice designed specifically for Kenyan cuisine and palates.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2>Ready to Elevate Your Wine Experience?</h2>
              <p>Start chatting with Vinyo Buddy now and discover your perfect wine match.</p>
              <button className={styles.ctaButton}>
                Get Started
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
