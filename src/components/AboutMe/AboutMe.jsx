import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { ArrowRightOutlined } from "@ant-design/icons";

const AboutMe = () => {
  return (
    <div className="relative bg-white text-black w-full -z-0">
      <div className="bg-[url('/images/iii.jpg')] bg-cover bg-center h-auto w-full text-white relative">
        <div className="absolute inset-0 bg-black opacity-65 z-0"></div>
        <div className="h-screen container mx-auto px-4 flex flex-col md:flex-row items-center justify-center relative z-10 gap-8 md:gap-20">
          <div className="text-container text-center md:text-left max-w-lg">
            <h2 className="text-xl font-light text-white">Hello, my name is</h2>
            <p className="text-4xl font-bold text-yellow-600">
              EMMANUEL <br />
              IHENACHO. <br />
              <span className="font-medium text-3xl">(TariQ)</span>
            </p>
            <h3 className="text-xl font-light text-white mt-2">
              I'm an IT Project Manager <br />
              and the founder of TariQ Tech.
            </h3>

            <a
              href="mailto:ihenachoemma2512@gmail.com"
              className="inline-block mt-4 bg-emerald-400 hover:bg-emerald-600 text-white px-5 py-2 rounded-full shadow-md transition duration-300"
            >
              📩 Contact Me
            </a>
          </div>

          <div className="photo-container">
            <img
              src="/images/Profilephoto.jpg"
              alt="Emmanuel Ihenacho"
              className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="px-10">
        <br />
        <p className="text-base sm:text-base text-justify lg:text-lg font-light text-black">
          <br />I am a highly motivated and results-driven IT Project Manager
          with over three (3) years of experience successfully leading and
          managing both complex and small-scale IT projects. I have gained
          valuable experience working with organizations such as{" "}
          <Link to={"https://primefitauto.vercel.app/"}>
            <span className="text-green-500">Primefit Auto Parts, </span>
          </Link>
          <Link to={"https://www.cac.gov.ng/"}>
            <span className="text-green-500">Corporate Affairs Commission</span>
          </Link>{" "}
          and{" "}
          <Link to={"https://www.peacevillafoundation.com"}>
            <span className="text-green-500">
              Peacevilla Empowerment Foundation.
            </span>
          </Link>
          <br />
          Academically, I hold a bachelor’s degree in computer science from
          <Link to={"https://www.veritas.edu.ng/"}>
            <span className="text-green-500"> Veritas University,</span>
          </Link>{" "}
          where I graduated as the top 2% in my department. I am currently
          pursuing an MSc degree in IT project Management at
          <Link to={"https://www.tees.ac.uk/"}>
            <span className="text-green-500">
              {" "}
              Teesside University Middlesbrough{" "}
            </span>
          </Link>{" "}
          which equips me with in-depth knowledge of IT project planning,
          execution and monitoring.
          <br />
          In addition to my experience as an IT project manager, I have hands-on
          experience in front-end web development, UI/UX design, and computer
          networking which equip me with the ability to engage with cross
          functional teams. I possess high-level fluency and clarity in both
          written and verbal communication, evident in my ability to Interact
          with major stakeholders effectively, document and present
          comprehensive project briefs to investors and executive project board
          members.
          <br />
          The values I bring to any team are rooted in my confidence,
          motivation, determination, and strong collaborative skills. These
          qualities enable me to build meaningful connections and contribute
          effectively within a team to achieve shared goals.
          <br />
          In my spare time, I'm usually watching football, playing video games,
          or hanging out with friends and loved ones.
          <br />
          <br />
          <br />
        </p>
        <div className="px-10 pb-10">
          <h2 className="text-2xl font-semibold text-black mb-6">
            Work Experience
          </h2>
          {/* Work Experience Card */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* CARD 1 */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="mb-2 text-sm text-gray-500">
                Jan 2024 – Present
              </div>
              <h3 className="text-lg font-semibold text-black">Express Tank</h3>
              <p className="text-sm text-gray-700 italic mb-2">
                Junior IT Project Manager
              </p>
              <p className="text-sm text-gray-800 mb-4">
                Documentation of project briefs and business case(s) to
                stakeholders and investors.
                <br />
                Directed 40% of overall project execution, resulting in a 20%
                improvement in project delivery efficiency.
                <br />
                Planning, Budgeting, Risk Management, Team Co-ordination,
                Quality Assurance, and Documentation of the entire project from
                start to finish.
              </p>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  Skills Leveraged:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                    PRINCE2 PM
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Stakeholder Communication
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    UI/UX
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    Risk Management
                  </span>
                </div>
              </div>
            </div>
            {/* CARD 2 */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="mb-2 text-sm text-gray-500">
                Dec 2023 – Nov 2024
              </div>
              <h3 className="text-lg font-semibold text-black">
                PrimeFitAuto Parts
              </h3>
              <p className="text-sm text-gray-700 italic mb-2">
                Front-end/Web Developer
              </p>
              <p className="text-sm text-gray-800 mb-4">
                Designed, developed, and managing companies’ website. Increased
                user retention by 20% as a result of improved site performance.
                <br />
                Involved constant communication, video conferences, feedback,
                live updates to approve significant implementations and changes.
              </p>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  Skills Leveraged:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-cyan-200 text-cyan-800 text-xs px-2 py-1 rounded-full">
                    JavaScript
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                    Vite + React
                  </span>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    Node JS
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Tailwind CSS
                  </span>
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">
                    Agile PM
                  </span>
                </div>
              </div>
            </div>
            {/* CARD 3 */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="mb-2 text-sm text-gray-500">
                Aug 2024 – Oct 2024
              </div>
              <h3 className="text-lg font-semibold text-black">
                Peacevilla Empowerment Foundation (NGO)
              </h3>
              <p className="text-sm text-gray-700 italic mb-2">Web Developer</p>
              <p className="text-sm text-gray-800 mb-4">
                Analyzed system requirements, designed, developed and manage
                company website. Improved site performance by 70%.
                <br />
                Website was developed to provide information about the
                foundation's mission, vision, and activities, as well as to
                facilitate donations.
              </p>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  Skills Leveraged:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                    Vite Framework
                  </span>
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 py-1 rounded-full">
                    Firebase
                  </span>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    React JS
                  </span>
                  <span className="bg-slate-400 text-slate-800 text-xs px-2 py-1 rounded-full">
                    Web Dev
                  </span>
                </div>
              </div>
            </div>
            {/* CARD 4 */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="mb-2 text-sm text-gray-500">
                Nov 2023 – Oct 2024
              </div>
              <h3 className="text-lg font-semibold text-black">
                Corporate Affairs Commission
              </h3>
              <p className="text-sm text-gray-700 italic mb-2">IT Technician</p>
              <p className="text-sm text-gray-800 mb-4">
                ICT Support Technician, Consultant, and Field IT Support
                Engineer tasked with resolving technical issues encountered
                within the organization including networking failures,
                domain/server errors, maintenance, installation of new operating
                systems, desktop configuration and hardware repairs.
                <br />
                Within this period, I filled a brief role as a UI/UX designer.
              </p>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  Skills Leveraged:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-cyan-200 text-cyan-800 text-xs px-2 py-1 rounded-full">
                    Computer H/W Analysis and repairs
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                    Computer Networking
                  </span>
                  <span className="bg-fuchsia-200 text-fuchsia-900 text-xs px-2 py-1 rounded-full">
                    Customer Service
                  </span>
                  <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">
                    UI/UX
                  </span>
                </div>
              </div>
            </div>
            {/* CARD 5 */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="mb-2 text-sm text-gray-500">
                Apr 2022 – Oct 2022
              </div>
              <h3 className="text-lg font-semibold text-black">
                Corporate Affairs Commission
              </h3>
              <p className="text-sm text-gray-700 italic mb-2">IT Intern</p>
              <p className="text-sm text-gray-800 mb-4">
                Gained foundational knowledge and hands-on experience in IT
                operations, troubleshooting, and system maintenance
                <br />
                Assisted in resolving technical issues, providing support to
                staff, and ensuring smooth IT operations within the
                organization.
                <br />
                Developed a solid understanding of key IT concepts, including
                network configuration, system administration, and software
                installations.
              </p>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  Skills Acquired/Leveraged:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-50 text-red-900 text-xs px-2 py-1 rounded-full">
                    Microsoft Office Suite
                  </span>
                  <span className="bg-amber-300 text-amber-800 text-xs px-2 py-1 rounded-full">
                    Writing/Research
                  </span>
                  <span className="bg-stone-300 text-stone-700 text-xs px-2 py-1 rounded-full">
                    Graphics Designing
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <button>
            <Link
              to={
                "https://drive.google.com/file/d/1haxgtMB3f7_gHWkD__335A8l2drUwSr6/view?usp=drive_link"
              }
            >
              <span className="text-lg underline font-semibold text-black hover:text-emerald-400 hover:text-xl">
                View My Full Résumé <ArrowRightOutlined />
              </span>
            </Link>
          </button>
        </div>
        <Projects />
        <Qualifications />
        <SkillSection />
        <br />
        <br />
        <div className="bg-white px-10 py-6 mb-14 mt-8 text-black">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left - Contact Details */}
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Get in Touch</h3>
                <p className="text-gray-700">
                  Feel free to reach out via email or phone. I’d love to hear
                  from you!
                </p>
              </div>
              <div>
                <p className="text-lg">
                  📧 Email:{" "}
                  <a
                    href="mailto:ihenachoemma2512@gmail.com"
                    className="text-green-600 underline hover:text-green-800"
                  >
                    ihenachoemma2512@gmail.com
                  </a>
                </p>
                {/*<p className="text-lg">📞 Phone: +44-78811-79898</p>*/}
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/images/e.jpg"
                alt="Emmanuel Ihenacho"
                className="rounded-2xl shadow-xl w-96 h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const projects = [
  {
    id: 1,
    title: "Primefit Auto Parts",
    image: "/images/pp.png",
    url: "https://primefitauto.vercel.app/",
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Peacevilla Empowerment Foundation",
    image: "/images/pvef.png",
    url: "https://www.peacevillafoundation.com",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Ihenacho, Emmanuel",
    image: "/images/tttt.png",
    url: "https://ihenacho.vercel.app",
    tech: ["Vite", "React", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <div className="px-6 py-2 bg-white text-black">
      <h2 className="text-2xl font-semibold mb-5">Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col md:flex-row h-[180px]">
              <img
                src={project.image}
                alt={project.title}
                className="md:w-[35%] w-full object-cover h-[180px]"
              />
              <div className="p-4 flex flex-col justify-center w-full">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-yellow-500 text-white px-2 py-[2px] text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const skills = [
  { label: "IT Project Management", level: 90 },
  { label: "PRINCE2/AGILE PM", level: 90 },
  { label: "Risk Management", level: 70 },
  { label: "Front-end Web Development", level: 70 },
  { label: "Microsoft Office Suite", level: 95 },
  { label: "Writing/Research", level: 85 },
  { label: "Computer Networking", level: 75 },
  { label: "Computer H/W Analysis/Repair (Printer, CPU,...)", level: 90 },
  { label: "UI/UX Designing", level: 50 },
  { label: "React JS", level: 65 },
  { label: "Vite", level: 70 },
  { label: "Python (Django)", level: 50 },
  { label: "JavaScript", level: 70 },
  { label: "Tailwind CSS", level: 80 },
  { label: "HTML/CSS", level: 70 },
  { label: "Firebase", level: 65 },
];

const softSkills = [
  "Communication",
  "Confidence",
  "Motivation",
  "Determination",
  "Resilience",
  "Time Management",
  "Work Ethic",
  "Commitment",
  "Organization",
  "Collaboration",
  "Leadership",
  "Goal Orientation",
];

const interests = [
  "Business",
  "Forex Trading",
  "Cooking",
  "Football",
  "Engineering",
];

const SkillSection = () => (
  <div className="px-10 py-2 bg-white text-black">
    <h2 className="text-2xl font-semibold mb-6">Skills & Proficiencies</h2>

    {/* Technical Skills Progress Bars */}
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">{skill.label}</span>
            <span className="text-sm text-gray-600">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="bg-yellow-500 h-2.5 rounded-full"
            />
          </div>
        </div>
      ))}
    </div>

    {/* Soft Skills */}
    <h3 className="text-xl font-semibold mt-10 mb-4">Soft Skills</h3>
    <div className="flex flex-wrap gap-2">
      {softSkills.map((skill, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full"
        >
          {skill}
        </motion.span>
      ))}
    </div>

    {/* Interests */}
    <h3 className="text-xl font-semibold mt-10 mb-4">Interests</h3>
    <div className="flex flex-wrap gap-2">
      {interests.map((interest, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
          className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
        >
          {interest}
        </motion.span>
      ))}
    </div>
  </div>
);

const certificates = [
  { id: 1, src: "/images/Cert.png", title: "BSc Computer Science" },
  { id: 2, src: "/images/Cisco.png", title: "CyberOps (Cisco) Certificate" },
  { id: 3, src: "/images/Waec.png", title: "O'Level Certificate (WAEC)" },
  {
    id: 4,
    src: "/images/Prince2.png",
    title: "MSc IT Project Management (In view*)",
  },
];

const Qualifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="px-10 py-16 bg-white text-black">
      <h2 className="text-2xl font-semibold mb-8">
        Certifications, Honors & Awards
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="cursor-pointer border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            onClick={() => setSelectedCert(cert)}
          >
            <img
              src={cert.src}
              alt={cert.title}
              className="h-36 w-full object-cover"
            />
            <p className="text-center text-sm p-2">{cert.title}</p>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal on click */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div className="max-w-3xl max-h-[90vh] overflow-auto">
            <img
              src={selectedCert.src}
              alt={selectedCert.title}
              className="w-full rounded shadow-lg"
            />
            <p className="text-white text-center mt-2">{selectedCert.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
