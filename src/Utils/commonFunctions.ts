export function getExperienceFromDate(dateString: string) {
    // Parse the input date string
    const [day, month, year] = dateString.split('/').map(Number);
    const startDate = new Date(year, month - 1, day);
    const today = new Date();

    // Calculate the difference in years, months, and days
    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    let days = today.getDate() - startDate.getDate();

    // Adjust months and years if necessary
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    return `${years}.${months}`;
}

