import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import Home5 from "@/components/homes/home-5";
import Hero1 from "@/components/homes/home-5/heros/Hero1";
import { ligitNavigation } from "@/data/menu";
import ParallaxContainer from "@/components/common/ParallaxContainer";

export const metadata = {
  title:
    "Ligit — Legal AI Assistant",
  description:
    "Ligit — Your Intelligent Legal AI Assistant",
};

export default function Home() {
  return (
    <>
      <div className="theme-elegant">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header5 links={ligitNavigation} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="home-section bg-dark-alpha-30 parallax-5 light-content z-index-1 scrollSpysection"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-elegant/scales_of_justice_hero.jpg)",
                  backgroundPosition: "top center",
                  backgroundSize: "cover",
                }}
                id="home"
              >
                <Hero1 />
              </ParallaxContainer>

              <Home5 dark onePage />
            </main>
            <footer className="bg-dark-2 light-content footer z-index-1 position-relative">
              <Footer5 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
