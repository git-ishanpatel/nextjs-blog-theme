import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Image from 'next/image';

export default function Index({ globalData }) {
  return (
    <Layout>
      <SEO 
        title="Vector Academy - Leading Tuition Classes in Nagpur" 
        description="Premier coaching institute in Pardi, Nagpur offering quality education for students. Expert faculty, proven results, and personalized attention." 
      />
      <Header name={globalData.name} />
      <main className="w-full">
        <section className="hero-section relative mb-24 overflow-hidden">
          <div className="hero-image-wrapper relative w-full">
            <Image 
              src="/images/hero.jpg" 
              alt="Vector Academy Students" 
              width={1600} 
              height={600}
              className="hero-image w-full h-auto object-cover"
              priority
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content text-center max-w-5xl mx-auto px-6 py-12">
            <h1 className="hero-title mb-6">
              Welcome to Vector Academy
            </h1>
            <p className="hero-subtitle mb-8">
              Shaping Future Leaders Through Quality Education
            </p>
            <p className="hero-description">
              Vector Academy is a premier coaching institute in Nagpur, dedicated to providing exceptional education and guidance to students. With experienced faculty and proven teaching methodologies, we help students achieve their academic goals and excel in their chosen fields.
            </p>
          </div>
        </section>

        <section className="section-spacing">
          <h2 className="section-title">Why Choose Vector Academy?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3 className="feature-title">Expert Faculty</h3>
              <p className="feature-description">Experienced and dedicated teachers committed to student success with personalized attention and mentorship.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Proven Results</h3>
              <p className="feature-description">Track record of excellent results with students consistently achieving top scores and gaining admission to premier institutions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3 className="feature-title">Modern Teaching Methods</h3>
              <p className="feature-description">Interactive learning environment with innovative teaching techniques, regular assessments, and comprehensive study materials.</p>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <h2 className="section-title">Our Courses</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
            <div className="course-card">
              <h3 className="course-title">Class 8th - 10th</h3>
              <p className="course-description">Comprehensive foundation courses covering all subjects with focus on CBSE, ICSE, and State Board curricula. Building strong fundamentals for future success.</p>
            </div>
            <div className="course-card">
              <h3 className="course-title">Class 11th - 12th</h3>
              <p className="course-description">Advanced preparation for board examinations and competitive exams with specialized coaching in Science, Commerce, and Arts streams.</p>
            </div>
            <div className="course-card">
              <h3 className="course-title">Competitive Exam Preparation</h3>
              <p className="course-description">Focused training for JEE, NEET, MHT-CET, and other competitive examinations with regular mock tests and performance analysis.</p>
            </div>
            <div className="course-card">
              <h3 className="course-title">Subject-Specific Coaching</h3>
              <p className="course-description">Specialized coaching in Mathematics, Physics, Chemistry, Biology, and other subjects with expert faculty for each discipline.</p>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <h2 className="section-title">Our Branches</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
            <div className="branch-card">
              <h3 className="branch-title">Branch 1</h3>
              <p className="branch-address">
                Bharatwada Square<br />
                Near Muscle Up Gym<br />
                Pardi, Nagpur 440035
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Bharatwada+Square+Near+Muscle+Up+Gym+Pardi+Nagpur+440035" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-button"
              >
                View on Google Maps
              </a>
            </div>
            <div className="branch-card">
              <h3 className="branch-title">Branch 2</h3>
              <p className="branch-address">
                Opp to Pushpa Photo Studio<br />
                Near Kajal Bar<br />
                Pardi, Nagpur 440035
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Pushpa+Photo+Studio+Near+Kajal+Bar+Pardi+Nagpur+440035" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-button"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <h2 className="section-title">Connect With Us</h2>
          <div className="text-center max-w-4xl mx-auto px-6">
            <p className="social-subtitle">Follow us on social media for updates, study tips, and success stories</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a 
                href="https://facebook.com/vectoracademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
              >
                <span className="text-2xl">📘</span>
                <span>Facebook</span>
              </a>
              <a 
                href="https://instagram.com/vectoracademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
              >
                <span className="text-2xl">📸</span>
                <span>Instagram</span>
              </a>
              <a 
                href="https://youtube.com/@vectoracademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
              >
                <span className="text-2xl">📺</span>
                <span>YouTube</span>
              </a>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
              >
                <span className="text-2xl">💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-description">
            Join Vector Academy today and take the first step towards achieving your academic goals. Visit our branches or contact us for more information about admissions and courses.
          </p>
          <a 
            href="tel:+919876543210"
            className="cta-button"
          >
            Contact Us Today
          </a>
        </section>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
