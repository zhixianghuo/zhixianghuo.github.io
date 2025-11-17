import './WorkExperience.css'

function WorkExperience() {
  const experiences = [
    {
      id: 1,
      company: 'United Airlines',
      position: 'Senior Frontend Developer',
      duration: '2024 - 2025',
      location: 'Chicago, IL',
      description: 'Contributed the modernization of United Airlines’ legacy Crew Communication System into CCS+, a next-generation internal scheduling platform.',
      achievements: [
        'Used by 15,000+ pilots and flight attendants daily to manage and schedule their schedules and trips.',
        'Upgraded the Angular 17 to Angular 19.',
        'Improved the landing page loading time by 70% under 2/3G network.',
        'Refined the RESTful API endpoints and implemented the new features for CCS+ application.'
      ],
      tech: ['Angular', '.NET', 'AWS SQL Server', 'PostgreSQL','MySQL']
    },
    {
      id: 2,
      company: 'Antra',
      position: 'Full Stack Developer',
      duration: '2023 - 2025',
      location: 'Chicago, IL',
      description: 'Developed an Learning Management System with LLM integration using a micro-frontend architecture, enabling employees and trainees to access training resources and track progress across departments.',
      achievements: [
        'Constructed a micro-frontend architecture using Angular and React.',
        'Led a team of 5 developers in building scalable web applications.',
        'Leveraged GitHub Actions pipeline to automate the deployment process.',
        'Implemented a RAG-based learning assistant that achieved 95% answer accuracy and reduced content search and planning time by 70%.'
      ],
      tech: ['React','Angular', 'Java Spring Boot', 'AWS', 'MySQL'],
    },
    {
      id: 3,
      company: 'Protolight, LLC',
      position: 'Full Stack Developer',
      duration: '2020 - 2021',
      location: 'New York, NY',
      description: 'Developed and maintained a video-sharing platform from scratch to production.',
      achievements: [
        'Taken the ownership across the full SDLC process from design to deployment.',
        'Refactored the entire frontend codebase to Reactto improve the code quality and maintainability.',
        'Deployed the application to AWS and achieved 99.9% uptime.'
      ],
      tech: ['React', 'jQuery', 'Flask', 'MySQL', 'AWS'],
    }
  ]

  return (
    <section id="experience" className="work-experience">
      <div className="experience-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3>{exp.position}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="duration">{exp.duration}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
                <div className="experience-tech">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience

