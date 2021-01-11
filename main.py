import discord
import os

client = discord.Client()                                   # initiate connection to discord
prefix = "^"                                                # defines server command prefix

@client.event                                               # registers client event
async def on_ready():                                       # asynchronous callback function that runs when bot is ready
    print("Voluspa loggged in as {0.user}".format(client))

@client.event                                               # registers different client event
async def on_message():                                     # function executes on client message
    if message.author == client.user:                       # runs if message is from bot
        return
    if message.content.startswith("^"):                     # runs function if message starts with prefix
        await message.channel.send("Test")

client.run(os.getenv("TOKEN"))                              # retrieves server token from .env
