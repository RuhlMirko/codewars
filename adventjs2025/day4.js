/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */

function timeUntilTakeOff(fromTime, takeOffTime) {
  const parseElfTime = (elfTime) => {
    const [datePart, timePartWithZone] = elfTime.split("@");
    const [year, month, day] = datePart.split("*").map(Number);
    const [timePart] = timePartWithZone.split(" ");
    const [hours, minutes, seconds] = timePart.split("|").map(Number);
    return new Date(year, month - 1, day, hours, minutes, seconds);
  };

  const fromDate = parseElfTime(fromTime);
  const takeOffDate = parseElfTime(takeOffTime);
  const diffInSeconds = Math.floor((takeOffDate - fromDate) / 1000);

  console.log(diffInSeconds);
  return diffInSeconds;
}

const takeoff = "2025*12*25@00|00|00 NP";

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
timeUntilTakeOff("2025*12*24@23|59|30 NP", takeoff);
// 30

// justo en el momento exacto
timeUntilTakeOff("2025*12*25@00|00|00 NP", takeoff);
// 0

// 12 segundos después del despegue
timeUntilTakeOff("2025*12*25@00|00|12 NP", takeoff);
// -12
