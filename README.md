# Sparkrock test run:

In order for you to run the tests written with playwright, you need to download the repo to your current localhost with terminal using:
`git clone git@github.com:Super-Saiyan-Mohamed/pw-practice-app.git`

Then, you will need to open the folder downloaded with vscode and run the terminal in vscode and write the following commands in order for you to start the app then start the tests:
`npm install --force`
`npm start`
The application will start in the current terminal tab, you will need to start another terminal tab and run the following command in order to open the playwright UI test executer:
`npm playwright test ui`
then choose the test you would like to run and watch them as they get executed.

> note: Please note that playwright doesn't run in realtime instead it executes then takes screenshots.
