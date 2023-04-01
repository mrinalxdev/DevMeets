export const generateMeetingId = () => {
  let meetID = "";
  const chars =
    "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
  const maxPos = chars.length;

  for (let i = 0; i < 8; i++) {
    meetID += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return meetID;
};
