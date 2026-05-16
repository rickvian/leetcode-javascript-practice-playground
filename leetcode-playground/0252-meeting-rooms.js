/**
 * Given an array of meeting time intervals where intervals[i] = [starti, endi],
 * determine if a person could attend all meetings.
 *
 * https://leetcode.com/problems/meeting-rooms/description/
 *
 * @param {number[][]} intervals - Array of [start, end] intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  // how to determine if someone can attend all meetings?

  // for all meeting, start it, record the end time
  // try to start the next meeting,
  // if prev end time > next starttime, they overlap, hence its not possible

  // need sort first

  intervals.sort((a, b) => a[0] - b[0]);
  let prevEnd = -1;
  for (let currentMeeting of intervals) {
    if (prevEnd > currentMeeting[0]) {
      // they overlap, not possible
      return false;
    }

    prevEnd = currentMeeting[1];
  }

  return true;
};

export { canAttendMeetings };
