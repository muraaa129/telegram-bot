import 'dotenv/config';
import { Bot } from 'grammy';

const TOKEN = process.env.BOT_TOKEN;
const bot = new Bot(TOKEN);

bot.command('start', async(ctx) => {
    await ctx.reply('Hello I am telegram bot!', {
        reply_parameters: {
            message_id: ctx.msg.message_id
        }
    });
});

bot.start();