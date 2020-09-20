const randomNumber = (max) => Math.floor(Math.random() * max) + 1;

const range = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
};

const events = (max) => {
  const start = randomNumber(max);
  return range(start, max).map((number) => {
    return {
      user_id: `user${number}`,
      track_id: `track${number}`,
      label: `label${number}`,
      stream_started_on: +new Date(),
      seconds_streamed: 0
    };
  });
};

export default events;
