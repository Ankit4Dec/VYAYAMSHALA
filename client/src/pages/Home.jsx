

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the best GYM in RENUKOOT</p>
              <h1>Welcome to VYAYAMSHALA</h1>
              <p>
                Welcome to our state-of-the-art gym, where fitness meets
                excellence. Our facility is designed to cater to all your
                fitness needs, whether you're a seasoned athlete or just
                beginning your fitness journey. With top-of-the-line equipment,
                expert trainers, and a wide variety of classes, we offer an
                environment that motivates and inspires. Our community is built
                on the principles of support, encouragement, and achieving
                personal bests. Join us today and discover a space where you can
                push your limits, reach your goals, and transform your life. At
                our gym, your fitness aspirations become reality. Let's get
                stronger together!
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">services</button>
                </a>
              </div>
            </div>

            {/* hero Images */}
            <img
              src="/image/gym.jpg"
              alt="Welcome to arena"
              height="500"
              width="500"
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

      {/* 3rd Section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero Images */}
          <img
            src="/image/gym3.jpg"
            alt="Welcome to arena"
            height="300"
            width="500"
          />
          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              We are here to help you achieve your fitness goals. Regardless of
              your starting point, our supportive staff and diverse range of
              equipment can empower you to reach your full potential. Get
              Started Today and unlock a healthier, happier you! We offer
              personalized guidance, a motivating community, and everything you
              need to make fitness a fun and rewarding part of your life.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">services</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
