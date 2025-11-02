import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ globalData }) {
  return (
    <Layout>
      <SEO 
        title="Vector Academy - Leading Tuition Classes in Nagpur" 
        description="Premier coaching institute in Pardi, Nagpur offering quality education for students. Expert faculty, proven results, and personalized attention." 
      />
      <Header name={globalData.name} />
      <main className="w-full">
        <section className="text-center mb-20">
          <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
            Welcome to Vector Academy
          </h1>
          <p className="text-xl lg:text-2xl opacity-80 mb-8">
            Shaping Future Leaders Through Quality Education
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-70">
            Vector Academy is a premier coaching institute in Nagpur, dedicated to providing exceptional education and guidance to students. With experienced faculty and proven teaching methodologies, we help students achieve their academic goals and excel in their chosen fields.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center lg:text-4xl">Why Choose Vector Academy?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-800/10 dark:bg-black/30 dark:border-white/10">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">Expert Faculty</h3>
              <p className="opacity-70">Experienced and dedicated teachers committed to student success with personalized attention and mentorship.</p>
            </div>
            <div className="p-8 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-800/10 dark:bg-black/30 dark:border-white/10">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="opacity-70">Track record of excellent results with students consistently achieving top scores and gaining admission to premier institutions.</p>
            </div>
            <div className="p-8 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-800/10 dark:bg-black/30 dark:border-white/10">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Modern Teaching Methods</h3>
              <p className="opacity-70">Interactive learning environment with innovative teaching techniques, regular assessments, and comprehensive study materials.</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center lg:text-4xl">Our Courses</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-800/10 dark:bg-black/30 dark:border-white/10">
              <h3 className="text-xl font-bold mb-3">Class 8th - 10th</h3>
              <p className="opacity-70">Comprehensive foundation courses covering all subjects with focus on CBSE, ICSE, and State Board curricula. Building strong fundamentals for future success.</p>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-800/10 dark:bg-black/30 dark:border-white/10">
              <h3 className="text-xl font-bold mb-3">Class 11th - 12th</h3>
              <p className="opacity-70">Advanced preparation for board examinations and competitive exams with specialized coaching in Science, Commerce, and Arts streams.</p>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-800/10 dark:bg-black/30 dark:border-white/10">
              <h3 className="text-xl font-bold mb-3">Competitive Exam Preparation</h3>
              <p className="opacity-70">Focused training for JEE, NEET, MHT-CET, and other competitive examinations with regular mock tests and performance analysis.</p>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-800/10 dark:bg-black/30 dark:border-white/10">
              <h3 className="text-xl font-bold mb-3">Subject-Specific Coaching</h3>
              <p className="opacity-70">Specialized coaching in Mathematics, Physics, Chemistry, Biology, and other subjects with expert faculty for each discipline.</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center lg:text-4xl">Our Branches</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-800/10 dark:bg-black/30 dark:border-white/10">
              <h3 className="text-2xl font-bold mb-4">Branch 1</h3>
              <p className="mb-4 opacity-80">
                Bharatwada Square<br />
                Near Muscle Up Gym<br />
                Pardi, Nagpur 440035
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Bharatwada+Square+Near+Muscle+Up+Gym+Pardi+Nagpur+440035" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:opacity-80 transition"
              >
                View on Google Maps
              </a>
            </div>
            <div className="p-8 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-800/10 dark:bg-black/30 dark:border-white/10">
              <h3 className="text-2xl font-bold mb-4">Branch 2</h3>
              <p className="mb-4 opacity-80">
                Opp to Pushpa Photo Studio<br />
                Near Kajal Bar<br />
                Pardi, Nagpur 440035
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Pushpa+Photo+Studio+Near+Kajal+Bar+Pardi+Nagpur+440035" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:opacity-80 transition"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center lg:text-4xl">Connect With Us</h2>
          <div className="text-center">
            <p className="text-lg mb-6 opacity-80">Follow us on social media for updates, study tips, and success stories</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a 
                href="https://facebook.com/vectoracademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-gray-800/10 dark:bg-black/30 dark:border-white/10 rounded-lg hover:bg-white/20 dark:hover:bg-black/50 transition flex items-center gap-3"
              >
                <span className="text-2xl">📘</span>
                <span>Facebook</span>
              </a>
              <a 
                href="https://instagram.com/vectoracademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-gray-800/10 dark:bg-black/30 dark:border-white/10 rounded-lg hover:bg-white/20 dark:hover:bg-black/50 transition flex items-center gap-3"
              >
                <span className="text-2xl">📸</span>
                <span>Instagram</span>
              </a>
              <a 
                href="https://youtube.com/@vectoracademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-gray-800/10 dark:bg-black/30 dark:border-white/10 rounded-lg hover:bg-white/20 dark:hover:bg-black/50 transition flex items-center gap-3"
              >
                <span className="text-2xl">📺</span>
                <span>YouTube</span>
              </a>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-gray-800/10 dark:bg-black/30 dark:border-white/10 rounded-lg hover:bg-white/20 dark:hover:bg-black/50 transition flex items-center gap-3"
              >
                <span className="text-2xl">💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        <section className="text-center mb-20 p-12 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-800/10 dark:bg-black/30 dark:border-white/10">
          <h2 className="text-3xl font-bold mb-6 lg:text-4xl">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
            Join Vector Academy today and take the first step towards achieving your academic goals. Visit our branches or contact us for more information about admissions and courses.
          </p>
          <a 
            href="tel:+919876543210"
            className="inline-block px-10 py-4 bg-primary text-white text-lg font-bold rounded-lg hover:opacity-80 transition"
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
