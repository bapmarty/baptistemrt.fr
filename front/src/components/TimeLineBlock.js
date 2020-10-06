import React, { useEffect, useState } from 'react';



const TimeLineBlock = ({title, start, end, post, desc, opacity}) => {

  const [value, setValue] = useState(opacity);

  useEffect(() => {
    setValue(1);
  });

  return (
    <>
      <div className="tl-block" style={{ opacity: value }}>
        <h5>{title}</h5>
        <h6>{start + " - " + (end ? end + " - " : end) + post }</h6>
        <p>{desc}</p>
      </div>
    </>
  );
}

export default TimeLineBlock;