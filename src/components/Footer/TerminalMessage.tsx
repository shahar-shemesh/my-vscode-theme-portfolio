import { useState, useEffect } from 'react';
import classes from './Footer.module.css';

const TerminalMessage: React.FC<{ terminalMsgRef: React.RefObject<HTMLDivElement> }> = (props) => {

  const time = new Date().toLocaleTimeString();
  // const fullPath = window.location.hostname;
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("visitCount");
    const currentCount = storedCount ? parseInt(storedCount, 10) : 0;
    const newCount = currentCount + 1;
    setVisitCount(newCount);
    localStorage.setItem("visitCount", newCount.toString());
  }, []);


  return (
    <div id='leaveMessage' ref={props.terminalMsgRef} className={classes.leaveMessage}>
      <span className={classes.currentTime}>{time}</span>
      <span className={classes.name}>[shahar]</span>
      <span className={classes.message}>leave a message</span>
      {/* <span className={classes.path}>/{fullPath}</span> */}
      <span className={classes.path}>/contact</span>
      <span className={classes.fileUpdated}>(x{visitCount})</span>
    </div>
  );
};


export default TerminalMessage;