export function getExperienceFromDate(dateString: string) {
    // Parse the input date string
    const [day, month, year] = dateString.split('/').map(Number);
    const startDate = new Date(year, month - 1, day); // Adjust for 0-based month
    const today = new Date();

    // Total difference in milliseconds
    const differenceInMs = today.getTime() - startDate.getTime();

    // Calculate total days between the dates
    const totalDays = differenceInMs / (1000 * 60 * 60 * 24);

    // Calculate years as a decimal by dividing total days by 365.25 (accounting for leap years)
    const experienceInYears = totalDays / 365.25;

    // Return the result rounded to 2 decimal places
    return experienceInYears.toFixed(2);
}
