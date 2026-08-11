import 'dotenv/config';
import { Bot } from 'grammy';
import { anniversary } from './morefiles/dates.js';
import { calculateStats, calculateDays } from './morefiles/dateCalculator.js';
import { getDaysMessage, getStatsMessage } from './morefiles/message.js';

const TOKEN = process.env.BOT_TOKEN;
const bot = new Bot(TOKEN);

bot.command('stats', async(ctx) => {
    const stats = calculateStats(anniversary);
    const text = getStatsMessage(stats);

    await ctx.reply(text, {
        reply_parameters: {
            message_id: ctx.msg.message_id
        }
    })
})

bot.command('days', async(ctx) => {
    const days = calculateDays(anniversary);
    const text = getDaysMessage(days);

    await ctx.reply(text, {
        reply_parameters: {
            message_id: ctx.msg.message_id
        }
    })
})

bot.start();