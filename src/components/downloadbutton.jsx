import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function DownloadButton(props) {
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = '/src/assets/JChase Resume.pdf';
      link.download = "Jacob Chase's Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <button onClick={handleDownload} className="DownloadButton">
       <FontAwesomeIcon icon={faDownload}/> {props.text}
      </button>
    );
  }