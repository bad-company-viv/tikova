import { useState } from 'react';
import { Fuel, Building2, Shield, Search, BarChart3, Zap, TrendingUp, ChevronDown, CheckCircle2, ArrowUp } from 'lucide-react';
import { useEffect } from 'react';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="tikova-site">
      {/* Header */}
      <header className="site-header">
        <div className="section-container header-container">
          <div className="logo-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/tikova-logo.png" alt="Tikova Logo" className="header-logo" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tagline animate-fade-in-1">Global Real Estate Investment & Development</div>
          <h1 className="hero-headline animate-fade-in-2">
            Investing, Developing, and Operating Commercial Real Estate Globally.
          </h1>
          <p className="hero-description animate-fade-in-3">
            Tikova is a leading real estate firm specializing in high-impact developments and strategic asset management. We create lasting value for institutional and accredited investors through disciplined execution and visionary design.
          </p>
          <p className="hero-subheadline animate-fade-in-4">
            Building Visions • Elevating Communities • Maximizing Value
          </p>
          <button
            className="hero-cta animate-fade-in-5"
            onClick={() => scrollToSection('investor-cta')}
          >
            Explore Opportunities
          </button>
          <p className="hero-disclaimer">
            Speaking to accredited investors only. All investments carry risk.
          </p>
        </div>
      </section>

      {/* The Mission & Vision Section */}
      <section className="problem-section bg-pattern">
        <div className="section-container">
          <h2 className="section-headline">
            Transforming Real Estate Through Innovation and Integrity.
          </h2>
          <p className="section-subtext">Building Visions. Elevating Communities.</p>
          <div className="two-column-layout">
            <div className="column">
              <div className="column-label">Our Mission</div>
              <p className="column-text">
                Building Visions, Elevating Communities, and Maximizing Value for Investors. We are dedicated to creating destination-grade properties that inspire and enrich the communities they serve.
              </p>
            </div>
            <div className="column">
              <div className="column-label">Our Vision</div>
              <p className="column-text">
                Harmonizing visionary design with practical execution to ensure every project fosters community growth, innovation, and lasting value for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Segments */}
      <section className="segments-section">
        <div className="section-container">
          <h2 className="section-headline white">
            Delivering Value at Every Stage of the Real Estate Lifecycle.
          </h2>
          <div className="segments-grid">
            <div className="segment-card">
              <div className="segment-icon">
                <Building2 size={40} strokeWidth={1} />
              </div>
              <h3 className="segment-headline">Investment Management</h3>
              <p className="segment-body">
                Strategic capital placement using a disciplined, data-driven approach. Focus includes Value-Add & Opportunistic Investments, Capital Raising & Structuring, and Portfolio Strategy.
              </p>
              <a
                href="#investor-cta"
                className="segment-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('investor-cta');
                }}
              >
                Learn More <span>→</span>
              </a>
            </div>

            <div className="segment-card">
              <div className="segment-icon">
                <Fuel size={40} strokeWidth={1} />
              </div>
              <h3 className="segment-headline">Real Estate Development</h3>
              <p className="segment-body">
                Creating sustainable properties for modern users. Core competencies include market analysis, site acquisition, strategic design, and project management oversight from ground-up.
              </p>
              <a
                href="#investor-cta"
                className="segment-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('investor-cta');
                }}
              >
                Learn More <span>→</span>
              </a>
            </div>

            <div className="segment-card">
              <div className="segment-icon">
                <Shield size={40} strokeWidth={1} />
              </div>
              <h3 className="segment-headline">Asset Management</h3>
              <p className="segment-body">
                Proactive, hands-on approach to enhance property value. Focuses on tenant relationship management, financial oversight, and disciplined capital expenditure planning.
              </p>
              <a
                href="#investor-cta"
                className="segment-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('investor-cta');
                }}
              >
                Learn More <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tikova - Trust Signals */}
      <section className="trust-section">
        <div className="section-container">
          <h2 className="section-headline">Why Invest with Tikova?</h2>
          <div className="trust-grid">
            <div className="trust-block">
              <div className="trust-stat">$1B+</div>
              <div className="trust-label">Proven Track Record</div>
              <p className="trust-description">
                Our leadership team has managed over $1.2 billion in aggregate investments across prestigious firms including Walker & Dunlop and LEM Capital.
              </p>
            </div>

            <div className="trust-block">
              <div className="trust-stat">Aligned</div>
              <div className="trust-label">Interests</div>
              <p className="trust-description">
                We invest alongside our partners in every project, ensuring absolute alignment and a shared commitment to delivering enduring value.
              </p>
            </div>

            <div className="trust-block">
              <div className="trust-stat">100%</div>
              <div className="trust-label">Transparency</div>
              <p className="trust-description">
                We prioritize timely, accurate reporting throughout every stage of the investment process, fostering trust and long-term partnership.
              </p>
            </div>

            <div className="trust-block">
              <div className="trust-stat">25y+</div>
              <div className="trust-label">Experience</div>
              <p className="trust-description">
                Deep market insights and a disciplined approach to risk management developed over two decades of institutional real estate leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategy Section */}
      <section className="strategy-section bg-pattern" id="strategy">
        <div className="section-container">
          <div className="strategy-header">
            <div className="column-label">Our Process</div>
            <h2 className="section-headline left">A Disciplined Approach to Value Creation</h2>
            <p className="strategy-intro">
              Tikova employs a rigorous, multi-phase investment methodology designed to mitigate risk while identifying high-yield opportunities in global commercial markets.
            </p>
          </div>

          <div className="strategy-grid">
            <div className="strategy-item">
              <div className="strategy-number">01</div>
              <div className="strategy-content">
                <div className="strategy-icon-box">
                  <Search size={28} className="strategy-icon" />
                </div>
                <h3 className="strategy-title">Strategic Sourcing</h3>
                <p className="strategy-description">
                  Leveraging a proprietary network of institutional relationships to identify off-market assets and emerging market trends before they reach the broader market.
                </p>
              </div>
            </div>

            <div className="strategy-item">
              <div className="strategy-number">02</div>
              <div className="strategy-content">
                <div className="strategy-icon-box">
                  <BarChart3 size={28} className="strategy-icon" />
                </div>
                <h3 className="strategy-title">Rigorous Analysis</h3>
                <p className="strategy-description">
                  Every opportunity undergoes exhaustive underwritting, stress-testing against market volatility, and thorough due diligence by our senior investment committee.
                </p>
              </div>
            </div>

            <div className="strategy-item">
              <div className="strategy-number">03</div>
              <div className="strategy-content">
                <div className="strategy-icon-box">
                  <Zap size={28} className="strategy-icon" />
                </div>
                <h3 className="strategy-title">Active Execution</h3>
                <p className="strategy-description">
                  From architectural vision to ground-up development and repositioning, we exercise precise control over every stage of the project lifecycle to ensure excellence.
                </p>
              </div>
            </div>

            <div className="strategy-item">
              <div className="strategy-number">04</div>
              <div className="strategy-content">
                <div className="strategy-icon-box">
                  <TrendingUp size={28} className="strategy-icon" />
                </div>
                <h3 className="strategy-title">Asset Optimization</h3>
                <p className="strategy-description">
                  Post-completion, we transition to institutional-grade management, focusing on operational efficiencies and strategic exits to maximize investor IRR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="testimonials-section bg-offwhite">
        <div className="section-container">
          <div className="testimonials-header">
            <div className="column-label">Validation</div>
            <h2 className="section-headline left">Institutional Trust</h2>
          </div>
          <div className="testimonials-grid">
            {[
              {
                quote: "Tikova's disciplined approach to risk management and their transparent reporting have set a new standard for our real estate allocations.",
                author: "David Chen",
                role: "Managing Director, Heritage Family Office"
              },
              {
                quote: "A rare combination of visionary design and operational excellence. They consistently deliver value at every stage of the lifecycle.",
                author: "Sarah Montgomery",
                role: "Global Real Estate Advisor, Savills"
              },
              {
                quote: "Their strategic presence in high-growth corridors has provided us with unique access to off-market opportunities that exceed standard market yields.",
                author: "Marcus Thorne",
                role: "Principal, Thorne Capital Partners"
              }
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-quote">"{t.quote}"</div>
                <div className="testimonial-footer">
                  <div className="testimonial-author">{t.author}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="global-section bg-navy">
        <div className="section-container">
          <div className="global-layout centered">
            <div className="global-content">
              <div className="column-label">Global Reach</div>
              <h2 className="section-headline white center">Market Leading Presence</h2>
              <p className="global-description">
                Tikova operates at the intersection of local expertise and global capital. Our strategic presence in primary financial hubs and high-growth technology corridors allows us to identify and execute on unique opportunities that others miss.
              </p>
              <div className="global-stats-grid">
                <div className="global-stat-item">
                  <div className="gs-value">12+</div>
                  <div className="gs-label">Primary Markets</div>
                </div>
                <div className="global-stat-item">
                  <div className="gs-value">$4.2B</div>
                  <div className="gs-label">Managed Assets</div>
                </div>
                <div className="global-stat-item">
                  <div className="gs-value">150+</div>
                  <div className="gs-label">Expert Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Founder Section */}
      <section className="founder-section">
        <div className="section-container">
          <div className="founder-layout">
            <div className="founder-image-column">
              <div className="founder-image-container">
                <img src="/Samuel.png" alt="Samuel Isaacson" className="founder-main-img" />

              </div>
              <p className="founder-caption">Samuel Isaacson — Founder & CEO</p>
            </div>
            <div className="founder-content-column">
              <div className="founder-label">Leadership</div>
              <h2 className="founder-headline">Strategic Vision. Deep Market Insights.</h2>
              <p className="founder-text">
                Samuel Isaacson brings over 20 years of institutional real estate expertise to Tikova. He oversees the firm's overall investment strategy, risk management, and capital operations with a disciplined focus on building sustainable growth and fostering community impact.
              </p>
              <p className="founder-text">
                Prior to founding Tikova, Samuel served as the President of Walker & Dunlop Investment Partners, where he was responsible for the platform's day-to-day operations and investment activities. His distinguished career also includes serving as Senior Vice President of Acquisitions for LEM Capital, where he managed over $1 billion in real estate transactions.
              </p>
              <div className="founder-credentials">
                <div className="credential-pill">Wharton MBA</div>
                <div className="credential-pill">Mitchell Hamline JD</div>
                <div className="credential-pill">BA Summa Cum Laude</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Meet the Team Section */}
      <section className="team-section bg-offwhite">
        <div className="section-container">
          <div className="team-header">
            <div className="column-label">Our People</div>
            <h2 className="section-headline left">Expert Leadership Team</h2>
          </div>

          <div className="team-grid">
            {[
              { name: "Rebecca Nelson", role: "Partner", bio: "Commercial real estate veteran specializing in portfolio strategy and stakeholder relations." },
              { name: "Crystal Dijoseph", role: "CFO", bio: "Oversees financial operations, capital structuring, and institutional reporting." },
              { name: "Eric Bryant", role: "Director of Accounting", bio: "Manages project-level financial controls and rigorous audit standards." }
            ].map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section bg-navy">
        <div className="section-container">
          <div className="values-header">
            <div className="column-label">Our Philosophy</div>
            <h2 className="section-headline white left">Foundational Principles</h2>
          </div>

          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <Shield size={32} />
              </div>
              <h3 className="value-title">Absolute Integrity</h3>
              <p className="value-text">
                We maintain the highest ethical standards in every transaction, ensuring complete transparency and absolute alignment of interests with our partners.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="value-title">Disciplined Execution</h3>
              <p className="value-text">
                Our approach is rooted in rigorous data-driven analysis and a conservative approach to risk, ensuring sustainable long-term value creation.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <Zap size={32} />
              </div>
              <h3 className="value-title">Visionary Innovation</h3>
              <p className="value-text">
                We embrace forward-thinking design and technology to create spaces that anticipate the future needs of communities and global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Dynamics Section */}
      <section className="dynamics-section">
        <div className="section-container">
          <div className="dynamics-header">
            <div className="column-label">Fund Metrics</div>
            <h2 className="section-headline left">Institutional Portfolio Dynamics</h2>
          </div>

          <div className="dynamics-grid">
            <div className="dynamic-box">
              <div className="dynamic-icon">
                <TrendingUp size={32} />
              </div>
              <h3 className="dynamic-title">Target Returns</h3>
              <div className="dynamic-value">15%—18%</div>
              <p className="dynamic-text">Projected net IRR across our multi-strategy real estate fund vehicles.</p>
            </div>

            <div className="dynamic-box">
              <div className="dynamic-icon">
                <Shield size={32} />
              </div>
              <h3 className="dynamic-title">Equity Multiple</h3>
              <div className="dynamic-value">1.8x—2.2x</div>
              <p className="dynamic-text">Target equity multiple on invested capital over a 5-year investment horizon.</p>
            </div>

            <div className="dynamic-box">
              <div className="dynamic-icon">
                <BarChart3 size={32} />
              </div>
              <h3 className="dynamic-title">Cash-on-Cash</h3>
              <div className="dynamic-value">7.5%—9%</div>
              <p className="dynamic-text">Stable annual preferred returns distributed quarterly to our partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section bg-pattern">
        <div className="section-container">
          <div className="faq-layout">
            <div className="faq-header">
              <div className="column-label">Inquiries</div>
              <h2 className="section-headline left">Frequently Asked Questions</h2>
              <p className="faq-intro">
                Addressing essential considerations for institutional and accredited investment partners.
              </p>
            </div>

            <div className="faq-accordion">
              {[
                {
                  q: "Who is eligible to invest with Tikova?",
                  a: "Tikova currently accepts investments exclusively from accredited investors as defined by SEC guidelines. This generally includes individuals with a net worth exceeding $1M (excluding primary residence) or an annual income exceeding $200k."
                },
                {
                  q: "What is the typical investment horizon?",
                  a: "Real estate is a long-term asset class. Our typical project lifecycle ranges from 3 to 7 years, depending on whether the strategy is ground-up development or value-add repositioning."
                },
                {
                  q: "How does Tikova manage jurisdictional risk?",
                  a: "We maintain a disciplined geographic focus on primary and high-growth secondary markets with strong demographic tailwinds, robust legal frameworks, and transparent exit environments."
                },
                {
                  q: "Does Tikova invest alongside its partners?",
                  a: "Yes. Absolute alignment is a core principle. Tikova and its leadership commit significant balance-sheet capital to every investment opportunity we offer to our partners."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-question">
                    {item.q}
                    <ChevronDown className={`faq-icon ${activeFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                  <div className="faq-answer">
                    <div className="faq-answer-content">
                      {item.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Lead Magnet + Investor CTA Section */}
      <section className="cta-section" id="investor-cta">
        <div className="section-container">
          <div className="cta-layout">
            <div className="lead-magnet-box">
              <h2 className="magnet-headline">Investment Overview</h2>
              <p className="magnet-body">
                Download a concise overview of Tikova's fund structure and leadership credentials for accredited investors.
              </p>
              {!formSubmitted ? (
                <form className="magnet-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <button type="submit" className="form-submit">
                    Send Overview →
                  </button>
                </form>
              ) : (
                <div className="form-success">
                  <CheckCircle2 color="var(--gold)" size={40} className="success-icon" />
                  <h3 className="success-title">Request Received</h3>
                  <p className="success-body">
                    The Tikova Investment Overview has been sent to your inbox. Please check your email shortly.
                  </p>
                </div>
              )}
            </div>

            <div className="contact-box">
              <h2 className="contact-headline">Direct Contact</h2>
              <p className="contact-body">
                For specific questions about fund structure or current opportunities, speak directly with our team.
              </p>
              <div className="contact-buttons">
                <a
                  href="https://tikova.com/investor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn primary"
                >
                  Investor Relations
                </a>
                <a
                  href="mailto:info@tikova.com"
                  className="contact-btn secondary"
                >
                  Email Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="partners-section bg-pattern">
        <div className="section-container">
          <div className="partners-header">
            <div className="column-label">Ecosystem</div>
            <h2 className="section-headline left">Strategic Partnerships</h2>
            <p className="partners-intro">
              Tikova collaborates with industry-leading institutions to deliver superior value across the real estate lifecycle.
            </p>
          </div>

          <div className="partners-grid">
            {[
              "Institutional Capital Group",
              "Global Architecture Studio",
              "Metropolitan Legal Partners",
              "Pacific Bank & Trust",
              "Urban Development Agency",
              "Precision Engineering Co."
            ].map((partner, index) => (
              <div key={index} className="partner-logo-box">
                <div className="partner-logo-placeholder">
                  <Building2 size={24} className="partner-logo-icon" />
                  <span className="partner-name">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Thesis Statement */}
      <section className="thesis-section bg-pattern">
        <div className="section-container">
          <p className="thesis-line">Building Visions.</p>
          <p className="thesis-line">Elevating Communities.</p>
          <p className="thesis-line">Maximizing Value.</p>
          <div className="thesis-rule"></div>
          <p className="thesis-subtitle">Transforming Real Estate Since 2022</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ background: 'var(--navy)' }}>
        <div className="section-container">
          <div className="footer-layout">
            <div className="footer-column">
              <div className="footer-logo-container">
                <img src="/tikova-logo.png" alt="Tikova Logo" className="footer-logo-img" />
              </div>
              <p className="footer-tagline">
                Investing, developing, and operating commercial real estate globally.
              </p>
            </div>

            <div className="footer-column">
              <div className="footer-section-label">NAVIGATION</div>
              <nav className="footer-nav">
                <a href="#" className="footer-link">Home</a>
                <a href="#" className="footer-link">Who We Are</a>
                <a href="https://tikova.com/investor" target="_blank" rel="noopener noreferrer" className="footer-link">Investor Relations</a>
              </nav>
            </div>

            <div className="footer-column">
              <div className="footer-section-label">CONTACT</div>
              <div className="footer-contact">
                2850 Quarry Lake Dr Suite 160<br />
                Pikesville, MD 21209<br />
                P: 410-645-0321<br />
                E: info@tikova.com
              </div>
            </div>


          </div>

          <div className="footer-bottom">
            <p>© 2026 Tikova. All rights reserved.</p>
            <div className="footer-credits-pill">
              <a href="https://fabulousmedia.in" target="_blank" rel="noopener noreferrer" className="credit-link">
                <img src="/sitecredits/fabulous.png" alt="Fabulous Media" className="credit-logo-img fab" />
              </a>
              <div className="credit-divider"></div>
              <a href="https://gocommercially.com" target="_blank" rel="noopener noreferrer" className="credit-link">
                <img src="/sitecredits/gocomercially.svg" alt="Go Commercially" className="credit-logo-img go" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
