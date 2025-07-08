#!/bin/bash

sudo apt-get update
apt-cache search libatk
sudo apt-get -y install libatk1.0-0 libatk-bridge2.0-0 libcups2  libnotify-dev libxkbcommon-x11-0 libgbm-dev libxcomposite-dev  libxdamage1 libxrandr2
sudo apt-get -y install libgtk2.0-0t64 libgtk-3-0t64  libnss3 libxss1 libasound2t64 libxtst6 xauth xvfb
npx puppeteer browsers install chrome