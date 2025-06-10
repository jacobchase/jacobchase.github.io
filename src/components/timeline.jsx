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
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
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
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(19, 209, 149)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(19, 209, 149)' }}
    date="August 2019 - May 2024"
    iconStyle={{ background: 'rgb(19, 209, 149)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faGraduationCap}/>}
  >
    <h3 className="vertical-timeline-element-title">B.S. in Computer Science - Software Engineering</h3>
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
    <h3 className="vertical-timeline-element-title">Executive Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">MG Holdings | Metairie, LA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    )
}