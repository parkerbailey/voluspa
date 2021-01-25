import discord
import os
import logging
import urllib
from bs4 import BeautifulSoup
from dotenv import load_dotenv

# load environement variables
load_dotenv()

# configure logging
logging.basicConfig(
	filename = "voluspa-log.log", 
	format="%(asctime)s:%(levelname)s:%(message)s", 
	level=logging.DEBUG
)

# define command list
cmds = [
	"hi",
	"",
	"",
]

# define discord code colors
def color_switcher(color, msg):
	if color == "red":
		return "```diff\n- " + msg + " -\n```"
	elif color == "orange":
		return "```scss\n[ " + msg + " ]\n```"
	elif color == "yellow":
		return "```fix\n" + msg + "\n```"
	elif color == "green":
		return "```css\n" + msg + "\n```"
	elif color == "teal":
		return "```yaml\n" + msg + "\n```"
	elif color == "blue":
		return "```ini\n" + msg + "\n```"
	elif color == "gray":
		return "```bf\n" + msg + "\n```"

client = discord.Client()	# initiate connection to discord
prefix = ">"	# defines server command prefix

@client.event	# registers client event
async def on_ready():	# asynchronous callback function that runs when bot is ready
	print("Voluspa loggged in as {0.user}".format(client))

@client.event	# registers different client event
async def on_message(message):	# function executes on client message
	if message.author == client.user:	# runs if message is from bot
		return
	# command section
	if message.content.startswith(prefix):	# runs function if message starts with prefix
		pass

	# non-command section
	if "happy birthday" in message.content.lower(): # happy birthday message
		wp = urllib.request.urlopen("https://www.birthdaymessages.com/random/")
		read_content = wp.read()
		soup = BeautifulSoup(read_content, 'html.parser')
		wp_content = str(soup.find(id='random'))
		rand_msg = wp_content[wp_content.find("</a>") + 4 : wp_content.find("<br/>")]
		await message.channel.send(color_switcher("yellow", "<! ANNUAL RECURRANCE ANOMALY DETECTED !>"))
		await message.channel.send(color_switcher("yellow", "<! EXECUTE CONGRATULATORY MESSAGE !>"))
		await message.channel.send(color_switcher("yellow", "<! MSG START !>"))
		await message.channel.send("Happiest of birthdays to you from Voluspa, your personal warmind AI!")
		await message.channel.send(rand_msg)
		await message.channel.send(color_switcher("yellow","<! MSG END !>"))

client.run(os.getenv("TOKEN"))  # retrieves server token from .env
