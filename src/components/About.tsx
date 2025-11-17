import { useState } from 'react'
import { 
  SiReact, SiAngular, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiNextdotjs,
  SiSpring, SiNodedotjs, SiDotnet, SiGo, SiPython,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiPrisma,
  SiGit, SiGithubactions, SiDocker, SiJenkins, SiKubernetes,
  SiAmazon, SiAwslambda,
  SiTailwindcss,
  SiVite,
  SiSass,
  SiFigma,
  SiApachekafka,
  SiRabbitmq,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import './About.css'
import { DiMsqlServer } from 'react-icons/di'

function About() {
  const [activeCategory, setActiveCategory] = useState('Frontend')

  const skillCategories = {
    Frontend: [
      { name: 'React', Icon: SiReact, color: '#61dafb' },
      { name: 'Angular', Icon: SiAngular, color: '#dd0031' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
      { name: 'HTML5', Icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', Icon: SiCss3, color: '#1572b6' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Vite', Icon: SiVite, color: '#4fc08d' },
      { name: 'SASS', Icon: SiSass, color: '#1c78c0' },
      { name: 'Figma', Icon: SiFigma, color: '#f24e1e' },
    ],
    Backend: [
      { name: 'Spring Boot', Icon: SiSpring, color: '#6db33f' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'Java', Icon: FaJava, color: '#007396' },
      { name: '.NET', Icon: SiDotnet, color: '#512bd4' },
      { name: 'Golang', Icon: SiGo, color: '#00add8' },
      { name: 'Python', Icon: SiPython, color: '#3776ab' },
      { name: 'Kafka', Icon: SiApachekafka, color: '#2f2f2f' },
      { name: 'RabbitMQ', Icon: SiRabbitmq, color: '#ff6600' },
    ],
    Database: [
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169e1' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479a1' },
      { name: 'SQL Server', Icon: DiMsqlServer, color: '#cc2927' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
      { name: 'Redis', Icon: SiRedis, color: '#dc382d' },
      { name: 'Prisma', Icon: SiPrisma, color: '#2d3748' },
    ],
    'CI/CD': [
      { name: 'Git', Icon: SiGit, color: '#f05032' },
      { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088ff' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ed' },
      { name: 'Jenkins', Icon: SiJenkins, color: '#d24939' },
      { name: 'Kubernetes', Icon: SiKubernetes, color: '#326ce5' },
    ],
    AWS: [
      { name: 'AWS S3', Icon: SiAmazon, color: '#ff9900' },
      { name: 'AWS EC2', Icon: SiAmazon, color: '#ff9900' },
      { name: 'AWS Lambda', Icon: SiAwslambda, color: '#ff9900' },
      { name: 'AWS RDS', Icon: SiAmazon, color: '#ff9900' },
      { name: 'CloudFront', Icon: SiAmazon, color: '#ff9900' },
      { name: 'AWS IAM', Icon: SiAmazon, color: '#ff9900' },
    ]
  }

  const categories = Object.keys(skillCategories)
  const currentSkills = skillCategories[activeCategory as keyof typeof skillCategories]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate software engineer who loves building robust, user-focused web applications.
              With four years of development experience across frontend, backend, database, and cloud, 
              I excel at turning creative ideas into reliable products.
            </p>
            <p>
              As a lifelong learner, I'm always eager to explore new technologies and frameworks,
              and looking for new challenges and opportunities to grow as a software engineer.
            </p>
            
            <div className="social-links">
              <h4>Find me on</h4>
              <div className="social-buttons">
                <a 
                  href="https://github.com/zxhuo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn github"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/zxhuo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn linkedin"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:zhixiang.career@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn email"
                  aria-label="Email"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="skills">
            <h3>Skills & Expertise</h3>
            <div className="skill-categories">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="skills-grid">
              {currentSkills.map((skill) => (
                <div key={skill.name} className="skill-pill">
                  <skill.Icon className="skill-icon" style={{ color: skill.color }} />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

