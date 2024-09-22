import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* Header Section */}
        <header>
        <img src="https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.15752-9/459335250_876175834063793_1877239880234618647_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=XS2aLcfWLvQQ7kNvgEQInah&_nc_ht=scontent.fcrk1-1.fna&_nc_gid=AVBpQDBYbsPw0ywTyPk8hcy&oh=03_Q7cD1QE2yQUtvgv23qE7_h8XKJ_SHbzCoIBI-EsQuao4Ql2wqw&oe=6717A19E" alt="Profile" className="profile-image" />
          <h1>LAWRENCE BALUYUT</h1>
          <h2>TECHNICAL COMMUNICATIONS OFFICER AT PRINCESS CRUISES</h2>
        </header>

      <div className="columns">
        {/* Left Column: Contact, Education, Skills */}
        <div className="left-column">
          {/* Contact Section */}
          <div className="section contact-info">
            <h3>CONTACT</h3>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-envelope"></i>{' '}
                <a href="mailto:baluyutlawrence.26@gmail.com">baluyutlawrence.26@gmail.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i> (123) 456-7890
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> Mexico, Pampanga
              </li>
              <li>
                <i className="fab fa-linkedin"></i>{' '}
                <a href="https://www.linkedin.com/in/lawrence-baluyut-46aa3832a/">LinkedIn</a>
              </li>
              <li>
                <i className="fab fa-github"></i>{' '}
                <a href="https://github.com/Hallow26">GitHub</a>
              </li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="section education">
            <h3>EDUCATION</h3>
            <p>Bachelor of Science</p>
            <p>Information Technology</p>
            <p>University of the Assumption</p>
            <p>2022 - 2026</p>
            <p>Del Pilar, CSFP</p>
          </div>

          {/* Skills Section */}
          <div className="section skills">
            <h3>SKILLS</h3>
            <ul>
              <li>IT Systems Management</li>
              <li>Cybersecurity</li>
              <li>Cloud Infrastructure (AWS, Azure)</li>
              <li>Agile & Scrum Methodologies</li>
              <li>CI/CD Pipelines (Jenkins, GitLab)</li>
              <li>Data Analysis & Visualization (Python, Tableau)</li>
              <li>Web Development (React, Node.js, HTML/CSS)</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Work Experience */}
        <div className="right-column">
          <div className="section work-experience">
            <h3>WORK EXPERIENCE</h3>
            
              <h4><u><i>Technical Communications Officer</i></u></h4>
              <p>Princess Cruises - Febuary 2030 - Present</p>
              <ul>
                <li>Oversaw the operation and maintenance of satellite communication systems (VSAT, Inmarsat) to ensure seamless internet and voice connectivity for passengers and crew, even in remote maritime regions.</li>
                <li>Configured and troubleshooted LAN, WAN, and Wi-Fi networks across multiple decks, ensuring uninterrupted access for ship systems, crew, and passengers.</li>
                <li>Implemented cybersecurity measures to protect sensitive data, ensuring compliance with international maritime cybersecurity regulations and preventing unauthorized access to ship communication systems.</li>
                <li>Provided technical support to crew and passengers for various IT systems, including ship management software, entertainment systems, and cloud-based services. Resolved issues related to hardware, software, and connectivity.</li>
                <li>Maintained detailed records of system performance, equipment logs, and troubleshooting reports. Provided recommendations for system upgrades and improvements to the senior management team.</li>
              </ul>

              <h4><u><i>IT Officer</i></u></h4>
              <p>Technology Elite – May 2028 – December 2030</p>
              <ul>
                <li>Monitored and maintained onboard IT systems, ensuring reliable internet, email, and communication services for crew and passengers.</li>
                <li>Diagnosed and repaired network issues affecting both shipboard operations and guest connectivity.</li>
                <li>Assisted with satellite TV installations and other entertainment-related technical issues.</li>
              </ul>

              <h4><u><i>Junior IT Technician</i></u></h4>
              <p>Newport World Resorts – June 2026 – April 2028</p> 
              <ul>
                <li>Provided day-to-day technical support for onboard communication and IT systems, assisting senior officers with troubleshooting and system upgrades.</li>
                <li>Gained hands-on experience with satellite communications, Wi-Fi networks, and PBX systems under the guidance of senior technical staff.</li>
              </ul>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
