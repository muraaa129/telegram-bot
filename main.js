import 'dotenv/config';
import { Bot } from 'grammy';
import { anniversary } from './morefiles/dates.js';
import * as calc from './morefiles/dateCalculator.js';
import * as messages from './morefiles/message.js';

const TOKEN = process.env.BOT_TOKEN;
const bot = new Bot(TOKEN);
const CHAT_ID = -4636532568;

bot.command('stats', async(ctx) => {
    const stats = calc.calculateStats(anniversary);
    const text = messages.getStatsMessage(stats);

    await ctx.reply(text, {
        reply_parameters: {
            message_id: ctx.msg.message_id
        }
    })
});

bot.command('days', async(ctx) => {
    const days = calc.calculateDays(anniversary);
    const text = messages.getDaysMessage(days);

    await ctx.reply(text, {
        reply_parameters: {
            message_id: ctx.msg.message_id
        }
    })
});

let hasSentToday = false; // checker if message is sent or not
setInterval(async () => {
    try {
        const isTargetDay = messages.checkMonthlyMessage(); // value true or false

        if(isTargetDay === true && hasSentToday === false) {
            await bot.api.sendMessage(CHAT_ID, messages.getMonthlyMessage(calc.calculateStats(anniversary)));
            hasSentToday = true;
            // if today is 13th of the month and message isn't sent yet
            // then it will send to the group in telegram, then 
            // checker's value becomes true to prevent sending another messages every 60 seconds
        } else if (isTargetDay === false) {
            hasSentToday = false;
            // if today is not 13th, resets the checker to false
        }

    } catch(error) {
        console.error('Error: ', error);
    }
}, 60000); // it is in Milliseconds, so 60 seconds


bot.start();