/*
    Credits:
    https://codepen.io/alvarotrigo/pen/ExwYyNW

*/

// Definitions:
// Timeline: 1 single line of events. Each event needs to have a temporal indicator. Can be horizontal or vertical.
// TimelineGroup: combined Timelines. Every Timeline in a group MUST use the same orientation and possibly the same time unit.

// TODO:
// 1. Create a single Timeline
//    - each Timeline should specify what component to use for an event
//    - handle horizontal scroll?
// 2. Create a TimelineGroup with a background animation that "syncs" with every timeline's events (see https://genshin-rotation.com/) 

export default function TimelinePage() {
  return (
    <>
      <h1>Timeline page</h1>
    </>
  );
}
