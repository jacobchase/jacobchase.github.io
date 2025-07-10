import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function timeline(){
    return(
        <VerticalTimeline>
            <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="May 2025 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase}/>}
  >
    <h3 className="vertical-timeline-element-title">DevOps Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">CloudIX | New Orleans, LA</h4>
    <p>
      Have to figure out what to put here.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="June 2024 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase}/>}
  >
    <h3 className="vertical-timeline-element-title">Systems Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">New Orleans Integrated Technologies | New Orleans, LA</h4>
    <ul>
        <li>Managed the help desk team, distributing and resolving support tickets.</li>
        <li>Developed and maintained automation using Python and PowerShell to streamline routine tasks. </li>
        <li>Created comprehensive documentation and reports for system configurations, upgrades, and maintenance
        procedures, ensuring clarity and compliance with industry standards. </li>
        <li>Managed system security protocols and conducted regular audits to ensure compliance with data protection
        regulations, mitigating potential risks and vulnerabilities.
</li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(19, 209, 149)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(19, 209, 149)' }}
    date="August 2019 - May 2024"
    iconStyle={{ background: 'rgb(19, 209, 149)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faGraduationCap}/>}
  >
    <h3 className="vertical-timeline-element-title">B.S. in Computer Science - Software Engineering<br/>Minor in Business Administration</h3>
    <h4 className="vertical-timeline-element-subtitle">Louisiana State University | Baton Rouge, LA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="August 2023 - December 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase}/>}
  >
    <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">Louisiana State University | Baton Rouge, LA</h4>
    <ul>
        <li>Assisted professors in delivering engaging labs and workshops for undergraduate Computer Science courses,
        covering topics such as data structures, algorithms, and programming fundamentals.</li>
        <li>Provided academic support to students, clarifying complex concepts in Java. Utilized debugging techniques and code
        reviews to help students identify errors, optimize code, and understand best practices. </li>
        <li>Graded assignments, ensuring fair assessment and timely feedback to improve student performance. </li>
        <li>Demonstrated patience, empathy, and strong communication skills, fostering a supportive and encouraging learning
    environment. Led weekly office hours and review sessions, addressing common questions and preparing students for
    exams.</li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="August 2023 - December 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase}/>}
  >
    <h3 className="vertical-timeline-element-title">Executive Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">MG Holdings | Metairie, LA</h4>
    <ul>
        <li>Organize and sort property deed and investment document files.
        </li>
        <li>Manage and protect confidential firm information. </li>
        <li>Enhances the executive effectiveness utilizing excellent communication and time management skills. </li>
        <li>Provided direct support to the President of a non-profit organization. </li>
        <li>Tasked with enhancing management of critical information data to more efficiently carry out the organization goals.</li>
    </ul>
  </VerticalTimelineElement>
</VerticalTimeline>
    )
}