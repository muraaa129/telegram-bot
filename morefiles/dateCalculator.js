export function calculateStats(anniversaryDate, todayDate = new Date()) {
    // creates a date with the time reset (00:00:00)
    const start = new Date(
        anniversaryDate.getFullYear(), 
        anniversaryDate.getMonth(), 
        anniversaryDate.getDate()
    );
    const end = new Date(
        todayDate.getFullYear(), 
        todayDate.getMonth(), 
        todayDate.getDate()
    );

    // gets years, months, and days
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    // logic if days are < 0
    if(days < 0) {
        months -= 1;
        const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
        days += previousMonth.getDate();
    }

    // logic if months are < 0
    if(months < 0) {
        years -= 1;
        months += 12;
    }

    return {years, months, days};
}

export function calculateDays(anniversaryDate, todayDate = new Date()) {
    const start = new Date(
        anniversaryDate.getFullYear(), 
        anniversaryDate.getMonth(), 
        anniversaryDate.getDate()
    );
    const end = new Date(
        todayDate.getFullYear(), 
        todayDate.getMonth(), 
        todayDate.getDate()
    );

    // diffMs = ms between end and start, date arithmetic always returns ms
    const difference_ms = end - start; // mS - milliseconds
    const ms_per_day = 1000 * 60 * 60 * 24; // ms in one day

    return Math.floor(difference_ms / ms_per_day); // difference / ms in one day = total days
}