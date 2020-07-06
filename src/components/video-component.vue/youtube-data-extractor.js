import { isNullOrUndefined } from "util";
const VIDEO_ID_INDEX = 17 // The index offset where the youtube video id begins. E.g: https://youtu.be/LVHX3k-CsQo
const thumbUrl = "https://i.ytimg.com/vi/";

// Alternate thumbnail URLs:
// const thumbUrl = "https://i1.ytimg.com/vi/";
// const thumbUrl = "https://img.youtube.com/vi/";

/**
 * Takes a YouTube share URL and returns the thumbnail and embedded video URLs
 * @param {string} youtubeShareUrl - the URL obtained by clicking share on a youtube video
 */
export function getUrls(youtubeShareUrl) {
       if (isNullOrUndefined(youtubeShareUrl)) {
              return { thumbnail: null, embedded: null }
       }
       // Take all characters from the start of the ID up to the ? (if it exists)
       const videoId = youtubeShareUrl.substring(VIDEO_ID_INDEX).split('?')[0]
       return {
              thumbnail: thumbUrl + videoId + "/0.jpg",
              embedded: "https://www.youtube.com/embed/" + videoId + "?rel=0&autoplay=1"
       }
}
