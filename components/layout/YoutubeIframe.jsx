function YoutubeIframe({ id, autoplay = false, start = '0', end = '0', mute }) {
  const startTime = timeToSeconds(start);
  const endTime = timeToSeconds(end);

  return (
    <>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}?start=${startTime}&end=${endTime}&modestbranding=1&rel=0${autoplay ? '&autoplay=1' : ''}${mute ? '&mute=1' : '&mute=0'}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      />
    </>
  );
}

export default YoutubeIframe;

const timeToSeconds = (timeStr) => {
  const parts = timeStr.trim().split(':').map(Number);
  let seconds = 0;
  let multiplier = 1;

  while (parts.length) {
    seconds += parts.pop() * multiplier;
    multiplier *= 60;
  }

  return seconds;
};
