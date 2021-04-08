# GuitarAsController
In this Github Repo is a Max8 patch that works with NodeJS in order to play games using a guitar. 
Please look at my quick demo at: https://youtu.be/XXYk4Lw97L8

Requirements: 

1. Max8, any version is fine but I would recommend downloading the latest version.

2. NodeJS. In order to make this work, you need NodeJS version 12. Any version 12 will work. You can download that at: https://nodejs.org/dist/latest-v12.x/ 
   Take the node-v12.22.1.x64.msi (or x84, whatever you prefer) file if you're on windows or the node-v12.22.1.pkg file if you're on Mac.

3. After you've succesfully installed NodeJS you need to install 3 packages in order to make it work. You can do this by opening the Terminal (Mac) or the Command Prompt (windows). 

Once you've opened either the Terminal or the Command Prompt type: npm install robotjs and press enter. After this is done type: npm install -g node-gyp and press enter. After this is done type: node-gyp rebuild and press enter. If you're experiencing troubles with the packages please message me and I'll try to help you install it. You can contact me on m.walder@student.avans.nl

4. All the installing is done, right now it's required to place the JS file and the max patch in the same folder on your device. 

5. To make sure everything is working correctly, open the JS file in your favourite editor and in the terminal type: npm install and press enter. This will make sure that all the right dependencies are on your device as well as the node_modules. 

6. If everything was completed you're ready to go! Open up the Max Patch and look in your Max settings how your sound input is configured. You can take your microphone or a audio input device.

7. At the upper left corner of the patch is where the guitar input will enter Max8. To make sure it works look if it has the right input (in case your audio device has 2 inputs for guitarcables for example. If you see that there is input it should be fine). 

8. right now press the Volume button underneath it and the first part is working. For now it works with 4 notes. E-string 1st fret, E-string 3th Fret, A-string 1st fret and A-string 3th Fret. By looking at the arrow signs on the right you can test if everything works.

9. after this press the Start Script button. Right now everything is done and working as it should.

10. In my example i played the game Subway Surfers in my browser, you can find the game here: https://poki.nl/g/subway-surfers . 

11. Enjoy!
