@title[Introduction]

## Voice Assistant  
### A new user experience  
Feel free to follow along: [https://bit.ly/2qxZI7s](https://gitpitch.com/copperstick6/Assistant-MADCon)
---

## What we're going to talk about today
##### (what you'll leave this room with)

@ul
- You'll understand what voice assistants are
- You'll see the what they can do and their limitations
- You'll build one!
@ulend

---

## Before we start.
##### This is for the demo. If you don't want to do the demo, ignore this stuff.
Install Node.js and functions-emulator.  
---

## Mac OSX installation
Install Homebrew if you don't have it
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
(You can find this on [brew.sh](https://brew.sh/) if you don't feel like typing this out.)
---
## Installing Node and Functions-emulator
```
brew install nodejs
npm -v
npm install -g @google-cloud/functions-emulator
```
@[1](This installs Node.js)
@[2](Let's check to see if installation was successful)
@[3](This installs a package called functions-emulator we'll use to deploy our stuff.)
---
## Windows Installation
Go to [nodejs.org](https://nodejs.org/en/) and install Node.js  
After installation completes, run the same commands:  
```
npm -v
npm install -g @google-cloud/functions-emulator
```
---
## Install Ngrok
Ngrok is a really cool tool that will allow your app to be deployed locally so that your Google Assistant can communicate with your code.  
Download it from [ngrok.com](https://ngrok.com/).
```
chmod ugo+x ngrok
./ngrok http 8080
```
@[1](Giving ngrok executable permissions)
@[2](Functions-emulator runs on port 8000, so ngrok will auto redirect any request to that port)
---
#### If you missed any of this, check out my slides:  [https://bit.ly/2qxZI7](https://bit.ly/2qxZI7s). All of this stuff is there.
---
### Who am I?
---?image=images/me.jpg&size=30% 30%
@ul
- CS'19
- Built 10+ Google Assistant, 5+ Alexa Apps
- Passionate about Voice Assistants
- Meme master
@ulend
---
