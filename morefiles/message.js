import { letters, getRandomLetter } from './letters.js'

export function getStatsMessage(stats) {
    return `Біз ${stats.years} жыл, ${stats.months} ай және ${stats.days} күн біргеміз, Жаным! ❤️`
}

export function getDaysMessage(days) {
    return `Біз бірге болғанымызға ${days} күн болды, Жаным! ❤️`
}

export function getMonthlyMessage(stats) {
    const letter = getRandomLetter(letters)

    return `Біз ${stats.years} жыл, ${stats.months} ай және ${stats.days} күн біргеміз, Жаным! ❤️\n\n${letter}`
}

export function checkMonthlyMessage(checkToday = new Date()) {
    const targetDay = 13;
    const today = checkToday.getDate(); // .getDate() takes only DAY from object Date

    return today === targetDay // "===" always returns either true or false
}