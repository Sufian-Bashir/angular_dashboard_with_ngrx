# AppainDashboard

-- Tab1 is default tab 
-- clicking plus button will add chart .. you can delete the tab if needed
-- slider changes the corresponding bar's color 
-- You can add as many tab as you want 
-- you can delete any tab (focus will be set to previous of deleted tab )
-- Deleting tab will shift tabs to left to keep up with naming in chronological order ( Tab1, Tab2 , Tab3) not like tab2,tab4,tab5 if you       
   delete tab3
-- Each bar changes to grey if slider range is not covering that particular activity
-- Redux actions can be seen in Dev Tools
-- I have kept the application very simple so it is not perfect just wanted to hightlight important things.
-- Many improvements are possible may be we can discuss them if needed.
-- If you have any questions please feel free to reach out to me
-- This is version 1 of the app implemented in first go. I ll improve it and commit another branch with some application flow improvements from implementation perspective and more improvements towards use of effects 
-- I have implemented effects with hosted JSON server ( included in application ) but integration is  not finished yet just wanted to share the finished working POC.

## Development server

Run `ng serve` 

### Launch Server  
# A Temporary server is setup to load Input Data throug HTTP service.
TO launch server  Run `npx json-server --watch db.json`

http://localhost:3000/chartData

## Build

Run `ng build`

## Running unit tests

Run `ng test` 

 ![image](https://user-images.githubusercontent.com/105328652/167950630-d85e9b6a-7d1b-4202-a826-3ab2e574c0df.png)

### Important Notes 
We could use here nx Workspace and create libraries but since the volume of this project is quite small so i would like to keep it very simple.


### Assumptions for the assignment sake and keeping it simple 

- not implementing router for each tab 
- just implementing the necessary things to show output similar to provided in assignment task
- alot of things can be done in multiple ways to achieve the task but i ll implement features just to save time

### Demo 
<img width="1197" alt="image" src="https://user-images.githubusercontent.com/105328652/167950965-3d459c5f-94d9-4a13-8ef1-3224c13d051d.png">
<img width="1230" alt="image" src="https://user-images.githubusercontent.com/105328652/167951092-5530a59f-013c-4237-a285-5533dc217a8b.png">

