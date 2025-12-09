import './App.css';
import Particles from './components/Particles';
import LogoLoop from './components/LogoLoop';
import myPhoto from './components/my-photo.jpg';
import logo1 from './components/Screenshot 2025-12-10 010010.png';
import logo2 from './components/Screenshot 2025-12-10 010018.png';
import logo3 from './components/Screenshot 2025-12-10 010027.png';
import logo4 from './components/Screenshot 2025-12-10 010035.png';
import logo5 from './components/Screenshot 2025-12-10 010043.png';
import logo6 from './components/Screenshot 2025-12-10 010050.png';
import logo7 from './components/Screenshot 2025-12-10 010058.png';
import logo8 from './components/Screenshot 2025-12-10 010108.png';
import pythonLogo from './components/python.png';
import jsLogo from './components/js.png';
import reactLogo from './components/react.png';
import mlLogo from './components/machine learning.png';
import dockerLogo from './components/docker.png';
import flaskLogo from './components/flask.png';
import gitLogo from './components/git.png';
import sqlLogo from './components/sql.png';
import awsLogo from './components/aws.png';
import figmaLogo from './components/figma.png';
import mlflowLogo from './components/mlflow.png';
import tailwindLogo from './components/tailwindcss.png';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">About</a></li>
          <li><a href="#internship">Internship</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Particles Background */}
      <div className="particles-background">
        <Particles
          particleColors={['#00b4d8', '#1a1a2e', '#00b4d8']}
          particleCount={500}
          particleSpread={10}
          speed={0.15}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          particleHoverFactor={8}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      
      <header id="home" className="App-header">
        <h1 className="intro-text">
          Hi, my name is <span className="highlight-name">Vibhuti Sarode</span>
        </h1>
        <p className="role-text">I'm a Professional Developer.</p>
        <a href="#about" className="know-more-btn">Know more</a>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={myPhoto} alt="Vibhuti Sarode" />
          </div>
          <div className="about-text">
            <p>
              Hi! I'm <strong>Vibhuti Sarode</strong>, a passionate and dedicated Professional Developer 
              with a strong foundation in web development and software engineering.
            </p>
            <p>
              I am an aspiring Al/ML engineer and developer with strong Python skills, a solid grasp of
machine learning algorithms, and growing experience in modern web technologies. I
enjoy building efficient, logical, and user-focused solutions-combining clean code with
structured problem-solving.


            </p>
            <p>
              My experience includes real-world data workflows and active participation in engineering
communities such as IEEE, GDG, GeeksforGeeks, and Women Techmakers. I bring technical
capability, collaboration, and adaptability to every project, and am committed to
expanding my skills in intelligent systems and software development to build robust,
scalable applications.
            </p>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section id="internship" className="internship-section">
        <div className="internship-particles">
          <Particles
            particleColors={['#00b4d8', '#1a1a2e', '#00b4d8']}
            particleCount={9000}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={80}
            particleHoverFactor={6}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <h2 className="section-title">Internship Experience</h2>
        <div className="internship-container">
          
          {/* Internship 1 */}
          <div className="internship-card">
            <div className="internship-header">
              <h3 className="internship-title">Research And Development Intern</h3>
              <span className="internship-type">Internship</span>
            </div>
            <div className="internship-company">
              <span className="company-name">Encrypta IN</span>
              <span className="internship-duration">Sep 2025 - Dec 2025 · 4 mos</span>
            </div>
            <p className="internship-location">India · Remote</p>
            <ul className="internship-points">
              <li>Designed and developed custom algorithms tailored to project requirements.</li>
              <li>Experimented with multiple algorithmic approaches to identify the most effective solutions.</li>
              <li>Iterated on algorithm prototypes through extensive testing and refinement.</li>
              <li>Analyzed performance metrics to optimize accuracy, speed, and reliability.</li>
              <li>Explored innovative methods and alternative strategies to enhance overall solution quality.</li>
            </ul>
          </div>

          {/* Internship 2 */}
          <div className="internship-card">
            <div className="internship-header">
              <h3 className="internship-title">Summer Intern</h3>
              <span className="internship-type">Internship</span>
            </div>
            <div className="internship-company">
              <span className="company-name">IEEE Signal Processing Society</span>
              <span className="internship-duration">Jun 2025 - Jul 2025 · 2 mos</span>
            </div>
            <p className="internship-location">Gujarat, India · Remote</p>
            <ul className="internship-points">
              <li>Built an end-to-end MLOps-enabled pipeline for soil fertility classification using supervised ML models.</li>
              <li>Implemented MLflow for experiment tracking, model versioning, and artifact management.</li>
              <li>Developed and containerized the complete workflow using Docker for consistent deployment.</li>
              <li>Created a Flask-based web application integrated with a serialized model for real-time predictions.</li>
              <li>Managed data, code, and model versions through DagsHub for reproducible development.</li>
              <li>Deployed the full-stack ML system on cloud platforms for live inference.</li>
              <li>Conducted continuous testing and refinement to improve model performance and pipeline reliability.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        {/* Logo Loop Animation */}
        <div className="logoloop-wrapper">
          <LogoLoop
            logos={[
              { src: logo1, alt: "Logo 1", title: "Logo 1" },
              { src: logo2, alt: "Logo 2", title: "Logo 2" },
              { src: logo3, alt: "Logo 3", title: "Logo 3" },
              { src: logo4, alt: "Logo 4", title: "Logo 4" },
              { src: logo5, alt: "Logo 5", title: "Logo 5" },
              { src: logo6, alt: "Logo 6", title: "Logo 6" },
              { src: logo7, alt: "Logo 7", title: "Logo 7" },
              { src: logo8, alt: "Logo 8", title: "Logo 8" },
            ]}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology logos"
          />
        </div>
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skill-card">
            <div className="skill-icon">
              <img src={pythonLogo} alt="Python" />
            </div>
            <p className="skill-name">Python</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src={jsLogo} alt="JavaScript" />
            </div>
            <p className="skill-name">JavaScript</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src={reactLogo} alt="React" />
            </div>
            <p className="skill-name">React</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src={mlLogo} alt="Machine Learning" />
            </div>
            <p className="skill-name">Machine Learning</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src={dockerLogo} alt="Docker" />
            </div>
            <p className="skill-name">Docker</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src={flaskLogo} alt="Flask" />
            </div>
            <p className="skill-name">Flask</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src={gitLogo} alt="Git" />
            </div>
            <p className="skill-name">Git</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src={sqlLogo} alt="SQL" />
            </div>
            <p className="skill-name">SQL</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src={awsLogo} alt="AWS" />
            </div>
            <p className="skill-name">AWS</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src={figmaLogo} alt="Figma" />
            </div>
            <p className="skill-name">Figma</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src={mlflowLogo} alt="MLflow" />
            </div>
            <p className="skill-name">MLflow</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src={tailwindLogo} alt="Tailwind CSS" />
            </div>
            <p className="skill-name">Tailwind CSS</p>
          </div>
        </div>
        {/* Logo Loop Animation - Bottom */}
        <div className="logoloop-wrapper">
          <LogoLoop
            logos={[
              { src: logo1, alt: "Logo 1", title: "Logo 1" },
              { src: logo2, alt: "Logo 2", title: "Logo 2" },
              { src: logo3, alt: "Logo 3", title: "Logo 3" },
              { src: logo4, alt: "Logo 4", title: "Logo 4" },
              { src: logo5, alt: "Logo 5", title: "Logo 5" },
              { src: logo6, alt: "Logo 6", title: "Logo 6" },
              { src: logo7, alt: "Logo 7", title: "Logo 7" },
              { src: logo8, alt: "Logo 8", title: "Logo 8" },
            ]}
            speed={120}
            direction="right"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology logos"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-subtitle">Feel free to reach out to me through any of the platforms below</p>
        
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 className="contact-label">Email</h3>
            <a href="mailto:vibhutisarode00@gmail.com" className="contact-link">vibhutisarode00@gmail.com</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <h3 className="contact-label">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/vibhuti-sarode-a0b736281" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/vibhuti-sarode</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
            <h3 className="contact-label">GitHub</h3>
            <a href="https://github.com/vibhutisarode" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/vibhutisarode</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="contact-label">Location</h3>
            <p className="contact-text">Nagpur, Maharashtra</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
