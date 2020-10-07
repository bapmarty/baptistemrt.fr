import React, { useEffect, useState} from 'react';

const ProgressBar = ({percent}) => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(percent * document.getElementById("progressbar").getBoundingClientRect().width);
  }, [percent]);

  return (
    <div className="progress-block" id="progressbar" style={{width: "100%"}}>
      <div className="progress" style={{width: `${value}px`}} />
    </div>
  );
}

export default ProgressBar;