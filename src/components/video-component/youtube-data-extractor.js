
// An array of YoutTube link prefixes. To add support for a new prefix, just add it to this array
const SUPPORTED_PREFIXES = [
  "https://www.youtube.com/live/",
  "https://youtu.be/",
];

// Calculate the offsets once a priori
const SUPPORTED_LINKS = SUPPORTED_PREFIXES.map((p) => ({
  prefix: p,
  offset: p.length,
}));

// The URL prefix for thumbnails
const thumbUrl = "https://i.ytimg.com/vi/";

// Alternate thumbnail URLs:
// const thumbUrl = "https://i1.ytimg.com/vi/";
// const thumbUrl = "https://img.youtube.com/vi/";

/**
 * Takes a YouTube share URL and returns the thumbnail and embedded video URLs
 * @param {string} youtubeShareUrl - the URL obtained by clicking share on a youtube video
 */
export function getUrls(youtubeShareUrl) {
  // Get the prefix and offset that match this YouTube link type
  const link = SUPPORTED_LINKS.find(
    (l) => youtubeShareUrl?.indexOf(l.prefix) == 0
  );
  if (link == undefined || link == null) {
    console.error(`Unknown link type: ${youtubeShareUrl}`);
    return { thumbnail: null, embedded: null };
  }

  // Take all characters from the start of the ID up to the ? (if it exists)
  const videoId = youtubeShareUrl.substring(link.offset).split("?")[0];
  return {
    thumbnail: thumbUrl + videoId + "/0.jpg",
    embedded: "https://www.youtube.com/embed/" + videoId + "?rel=0&autoplay=1",
  };
}
