function YoutubeIframe({ id, autoplay = false, start = '0', end = '0' }) {
  const timeToSeconds = (timeStr) => {
    const parts = timeStr.trim().split(':').map(Number);
    let seconds = 0;
    let multiplier = 1;

    while (parts.length) {
      seconds += parts.pop() * multiplier; // pop last element and add
      multiplier *= 60; // next element is minutes, then hours
    }

    return seconds;
  };

  const startTime = timeToSeconds(start);
  const endTime = timeToSeconds(end);

  return (
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${id}?start=${startTime}&end=${endTime}${autoplay ? '&autoplay=1' : ''}`}
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default YoutubeIframe;
