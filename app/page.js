export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <img src="/assets/hero-dog.png" alt="Hero Dog" className="hero-image" />

        <div className="hero-overlay">
          <div className="hero-content">
            <h1 id="love">You're Loved</h1>
            <h1>
              Find Your <br /> Perfect Dog
            </h1>
            <p>
              Smart advice for choosing & caring for your furry friend. <br />
              Every Dog Deserves a Loving Home — Maybe Yours, <br />
              Find the One Who’ll Always Wait at the Door
            </p>

            <div className="hero-buttons">
              <a href="/pages/breed-details.html" className="btn1">
                I Know My Breed
              </a>
              <a href="/pages/quiz.html" className="btn2">
                Help Me Choose
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="overview">
        <p>
          🐾 Welcome to BreedLy <br />
          Your One-Stop Dog Companion, Whether you're a first-time dog parent or
          adding another furry friend to your family!
        </p>

        <h2>
          WHY CHOOSE <span>BREEDLY</span>?
        </h2>

        <div className="features">
          <div className="feature-card">
            <img src="/assets/paw.png" alt="Icon" />
            <h3>Breed Match</h3>
            <p>Find a dog that suits your lifestyle with smart recommendations.</p>
          </div>

          <div className="feature-card">
            <img src="/assets/book.png" alt="Icon" />
            <h3>Care Guides</h3>
            <p>
              Explore detailed profiles for each breed — size, grooming, nature,
              pros & cons.
            </p>
          </div>

          <div className="feature-card">
            <img src="/assets/budget.png" alt="Icon" />
            <h3>Real Expense</h3>
            <p>
              Get an estimate of your monthly dog care costs — food, vet, toys &
              grooming.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LEARN STRIP ================= */}
      <section className="learn-strip">
        <h2>What You’ll Learn</h2>

        <div className="learn-features">
          <div className="learn-box">
            <img src="/assets/turkey-leg.png" alt="Food Icon" />
            <h3>Feeding Plans</h3>
            <p>Know what to feed your dog, how much & best food options.</p>
          </div>

          <div className="learn-box">
            <img src="/assets/medicine.png" alt="Health Icon" />
            <h3>Health Care</h3>
            <p>Learn vaccines, common diseases & breed-specific health needs.</p>
          </div>

          <div className="learn-box">
            <img src="/assets/training.png" alt="Training Icon" />
            <h3>Training Guides</h3>
            <p>Easy steps for obedience training, commands & socialization.</p>
          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="gallery">
        <h2>Pup Gallery</h2>
        <p className="subline">“Wet noses, warm hearts.”</p>

        <div className="pet-cards">
          <div className="pet-card">
            <img src="/assets/images/cute1.jpg" alt="Penelope" />
            <div className="overlay">
              <p className="dog-name">Penelope</p>
              <span className="paw-hover">🐾</span>
            </div>
          </div>

          <div className="pet-card">
            <img src="/assets/images/cute2.jpg" alt="Gordo" />
            <div className="overlay">
              <p className="dog-name">Gordo</p>
              <span className="paw-hover">🐾</span>
            </div>
          </div>

          <div className="pet-card">
            <img src="/assets/images/cute3.jpg" alt="Baby Girl" />
            <div className="overlay">
              <p className="dog-name">Baby Girl</p>
              <span className="paw-hover">🐾</span>
            </div>
          </div>

          <div className="pet-card">
            <img src="/assets/images/cute4.jpg" alt="Marshmallow" />
            <div className="overlay">
              <p className="dog-name">Marshmallow</p>
              <span className="paw-hover">🐾</span>
            </div>
          </div>

          <div className="pet-card">
            <img src="/assets/images/cute5.webp" alt="Rio" />
            <div className="overlay">
              <p className="dog-name">Rio</p>
              <span className="paw-hover">🐾</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DOG FEEL SECTION ================= */}
      <section className="dog-feel">
        <div className="feel-container">
          <div className="feel-image">
            <div className="gradient-blob"></div>
            <img src="/assets/images/hug1.png" alt="Puppy love" />
            <div className="paw-bg">🐾</div>
          </div>

          <div className="feel-text">
            <h2>How Dogs Make Us Feel</h2>
            <p className="intro">
              Dogs aren’t just pets — they’re comfort, loyalty, and unconditional
              love.
            </p>
            <blockquote>
              “The world would be a nicer place if everyone loved as
              unconditionally as a dog.”
            </blockquote>
            <p className="author">— M.K. Clinton</p>
          </div>
        </div>
      </section>

      {/* ================= POPULAR BREEDS ================= */}
      <section className="breed-section">
        <h2>Popular Dog Breeds</h2>

        <div className="breed-cards">
          <div className="breed-card">
            <img src="/assets/images/germen.jpg" alt="German Shepherd" className="breed-img" />
            <div className="context align-left">
              <h3>German Shepherd – Loyal Guardian</h3>
              <p>
                Smart, fearless & devoted — German Shepherds form unbreakable
                bonds and thrive in loving homes.
              </p>
            </div>
          </div>

          <div className="breed-card">
            <img src="/assets/images/labro.webp" alt="Labrador" className="breed-img" />
            <div className="context align-right">
              <h3>Labrador – Joyful Companion</h3>
              <p>
                Labs bring sunshine with their playful, gentle and loving
                nature — perfect family dogs.
              </p>
            </div>
          </div>

          <div className="breed-card">
            <img src="/assets/images/huskyy.avif" alt="Husky" className="breed-img" />
            <div className="context align-left">
              <h3>Husky – Wild-Hearted Friend</h3>
              <p>
                Spirited wanderers with striking eyes — Huskies love adventure,
                companionship & open spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CARE TIPS ================= */}
      <section className="care-tips-alt">
        <h2>Love in Little Things</h2>
        <p className="intro-line">
          A healthy dog is a happy heart with paws — show love in small moments.
        </p>

        <div className="tips-alt-content">
          <img src="/assets/images/care.jpg" alt="Dog care" />

          <ul className="healthy-tips-list">
            <li>
              <span>🍲</span> Nourish them with thoughtful meals.
            </li>
            <li>
              <span>🌳</span> Walks build connection & joy.
            </li>
            <li>
              <span>🫧</span> Groom gently — it builds trust.
            </li>
            <li>
              <span>💬</span> Train with kindness — every “good boy” matters.
            </li>
          </ul>
        </div>
      </section>

      {/* ================= DOG FACTS ================= */}
      <section className="dog-facts">
        <h2>Why Dogs Steal Our Hearts</h2>

        <div className="fact-cards">
          <div className="fact-card">
            <p>
              🦴 Dogs have <strong>1,700 taste buds</strong> — yet still chew
              your slippers.
            </p>
          </div>

          <div className="fact-card">
            <p>
              💨 Greyhounds run <strong>45 mph</strong> — but slow down for
              cuddles.
            </p>
          </div>

          <div className="fact-card">
            <p>
              💗 Dogs can <strong>read emotions</strong> — because they love you.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="cta-final">
        <h2>🐶 Ready to Meet Your Match?</h2>
        <p>Your future best friend is just a tail-wag away.</p>
        <a className="cta-btn" href="/pages/quiz.html">
          Begin the Journey
        </a>
      </section>
    </>
  );
}
