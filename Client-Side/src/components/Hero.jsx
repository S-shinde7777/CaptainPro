import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="tag">
          Restaurant Pos system
        </span>

        <h1>
         Run Your Restaurant 
          <br />
         Smarter with CaptainPro

        </h1>

        <p>
          Manage Orders, Billing, Kitchen,
          Inventory and Staff from one powerful dashboard.
        </p>

        <div className="hero-buttons">
          <button className="primary">
            Get Started
          </button>

          <button className="secondary">
            Live Demo
          </button>
        </div>

      </div>

      <div className="hero-right">

        <div className="image-box">
          
        </div>

      </div>

    </section>
  );
}

export default Hero;