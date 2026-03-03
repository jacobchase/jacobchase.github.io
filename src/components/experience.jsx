import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function TimelineItem({ title, subtitle, date, icon, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative pl-12 pb-12 group"
    >
      {/* Dot */}
      <div className="absolute left-4 top-2 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center ring-4 ring-gray-900 group-hover:scale-120 transition">
        <FontAwesomeIcon icon={icon} className="text-white text-xs" />
      </div>

      {/* Card */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md hover:border-blue-500 hover:shadow-lg transition">
        <span className="text-sm text-gray-400">{date}</span>
        <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
        <h4 className="text-blue-400 text-sm mb-3">{subtitle}</h4>
        <div className="text-gray-300 text-sm space-y-2">{children}</div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16" id="experience">
      <h1 className="text-white text-3xl font-Quicksand uppercase mb-12 text-center">
        My <span className="text-blue-600">Experience</span>
      </h1>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-700" />

        <TimelineItem
          title="DevOps Engineer"
          subtitle="Cloud IX | New Orleans, LA"
          date="May 2025 – Present"
          icon={faBriefcase}
        >
          <p>
            Building CI/CD pipelines and automating infrastructure workflows.
          </p>
        </TimelineItem>

        <TimelineItem
          title="Systems Engineer"
          subtitle="New Orleans Integrated Technologies"
          date="June 2024 – Present"
          icon={faBriefcase}
        >
          <ul className="list-disc list-inside space-y-1">
            <li>Managed help desk operations.</li>
            <li>Automated workflows with Python & PowerShell.</li>
            <li>Performed security audits and documentation.</li>
          </ul>
        </TimelineItem>

        <TimelineItem
          title="B.S. Computer Science - Software Engineering"
          subtitle="Louisiana State University"
          date="August 2019 – May 2024"
          icon={faGraduationCap}
        >
          <p>Minor in Business Administration.</p>
        </TimelineItem>
      </div>
    </section>
  );
}
