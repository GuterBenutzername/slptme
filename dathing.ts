function addMinutesToDate(date: Date, minutesToAdd: number): Date {
    return new Date(date.getTime() + minutesToAdd * 60000);
  }
  
  function getDatePlusIterations(initialDate: Date, iterations: number): Date {
    // Each iteration adds 90 minutes, so we calculate the total minutes to add
    const totalMinutesToAdd = 90 * iterations;
    // We use the addMinutesToDate() to calculate the new date
    return addMinutesToDate(initialDate, totalMinutesToAdd);
  }
  
  // Usage example:
  const originalDate = new Date(2024,2,12,0); // For new Date();
  const iterations = 6;
  
  const newDate = getDatePlusIterations(originalDate, iterations);
  
  console.log(`Original date: ${originalDate}`);
  console.log(`New date after adding 90 minutes ${iterations} times: ${newDate}`);