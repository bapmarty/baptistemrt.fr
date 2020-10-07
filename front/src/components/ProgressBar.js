import React, { useEffect, useState} from 'react';

const ProgressBar = ({width, percent}) => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(percent * width);
  }, [percent, width]);

  return (
    <div className="progress-block" style={{width: width}}>
      <div className="progress" style={{width: `${value}px`}} />
    </div>
  );
}

export default ProgressBar;