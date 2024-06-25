export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Welcome to VYAYAMSHALA GYM</p>
              <h1>Why Choose VYAYAMSHALA ?</h1>
              <p>
                <b>Expert Trainers and Diverse Programs:</b> Benefit from
                personalized coaching by certified trainers and a variety of
                workout classes, including yoga, HIIT, and strength training,
                suitable for all fitness levels.
              </p>

              <p>
                <b>State-of-the-Art Facilities:</b> Enjoy access to the latest
                fitness equipment, modern amenities, and a clean, safe
                environment with 24/7 access for your convenience.
              </p>
              <p>
                <b>Holistic Support:</b> Receive comprehensive support with
                nutrition guidance from in-house experts and a community
                atmosphere that motivates and encourages you to achieve your
                fitness goals.
              </p>
              <p>
                <b>Flexible and Affordable Memberships:</b> Choose from a range
                of membership options tailored to fit different needs and
                budgets, ensuring top-quality fitness is accessible to everyone.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>

            {/* hero Images */}
            <img
              src="/image/g4.jpg"
              alt="Welcome to arena"
              height="400"
              width="600"
            />
          </div>
        </section>
      </main>

      {/* 2nd section */}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>certified trainers</p>
          </div>
          <div className="div1">
            <h2>100,00+</h2>
            <p>happy members</p>
          </div>
          <div className="div1">
            <h2>200+</h2>
            <p>fitness classes per month</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>gym access</p>
          </div>
        </div>
      </section>
    </>
  );
};
