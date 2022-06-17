const IndivisualClock = ({ item, handleDelete, time }) => {
  const differenciate = (valueTime) => {
    let timeString = 0;
    // console.log(timeString);
    // timeString = timeString.toFixed(2);

    const myTime = time.split('GMT')[1]?.replace(':', '.');
    const value = valueTime;

    let newMytime1 = parseFloat(parseFloat(myTime).toFixed(2).split('.')[0]);
    let newMytime2 = parseFloat(parseFloat(myTime).toFixed(2).split('.')[1]);

    let itemTime1 = parseFloat(parseFloat(value).toFixed(2).split('.')[0]);
    let itemTime2 = parseFloat(parseFloat(value).toFixed(2).split('.')[1]);

    if (itemTime2 > newMytime2) {
      newMytime1 = parseFloat(newMytime1) - 1;
      newMytime2 = parseFloat(newMytime2) + 60;
      const final = Math.abs(
        newMytime1.toString().concat('.').concat(newMytime2)
      );
      timeString = (final - value).toFixed(2);
    } else {
      const final = Math.abs(myTime - value);
      timeString = final.toFixed(2);
    }

    if (timeString.split('.')[0] == 0) {
      return ` ${timeString.split('.')[1]} Minutes `;
    } else {
      return `${timeString.toString().split('.')[0]} Hours ${
        timeString.toString().split('.')[1] ?? 0
      } Minutes `;
    }
  };
  return (
    <div className='col'>
      <div className='card h-100'>
        <div className='card-body'>
          <h5 className='card-title'>
            Time of {item.split(' ')[2]} is :
            {new Date().toLocaleString('en-US', {
              timeZone: item.split(' ')[0],
              timeStyle: 'medium',
            })}
            {}
          </h5>
          <p className='card-text'>
            Time Difference is{differenciate(item.split(' ')[1])}
          </p>
          <button className='btn btn-danger' onClick={() => handleDelete(item)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndivisualClock;
