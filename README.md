# loop2nightscout
Fix-tape solution for who don't get values in Nightscout. It takes the last insertion in Loop Collection to Entries Collection also in MongoDB.

MONGODB_URI is an environment variable to be supplied. It should contain the your MongoDB url mlab API account.

## Steps for Heroku deployment:
* Fork DT1A/loop2nightscout to your own Github account
* Login into your Heroku account, go to the right upper corner to squared dots matrix 3x3 and goes to Dashboard 
* Push button new and Create new app
* Give a name to your new app, Select the region and click on Create App purple button
* Go to your new app Deploy menu and then connect to github.
* You can enable for Automatic deploys
* Go to Settings menu, reveal Config Vars and add a new one:
   ```
  MONGODB_URI with your MONGODB_URI mongodb mlab account 
  ```
  http://docs.mlab.com/assets/screenshot-connectinfo.png
  

