Om projektet
Projekt: TestReactNative

Appen har tre skärmar. Den börjar med landningsskärmen, den har ett sökfält där användaren kan söka efter ett tv-program. Användaren anger frågesträngen i inmatningsrutan och klickar på sökknappen.

Knappen navigerar till nästa skärm där api-anropet görs med query som skickas genom route props. Och från listan över tv-programkort, klickar användaren och väljer ett enstaka kort som tar användaren till nästa skärm där användaren kan hitta mer information om tv-programmet.




Byggd med

React-native cli
maskinskriven
Api calling genom Axios


Testning
(På grund av tidsbrist har jag inte kunnat starta unit testimg)
En manuell testning har gjorts som visar att alla  vägar fungerar, både på ios device och android



Komma igång
För att starta
npm install
och 
npx react-native start
npx react-native run-android
För ios
gå igenom istalation processen med react native cli
https://reactnative.dev/docs/environment-setup 

 Mina begränsningar
 Eftersom jag inte hade korrekta rättigheter till min Capgemini dator kunde jag inte följa react-native quick start cli
 på min hemenhet kunde jag bara använda expo cli till

 Om jag haft mer tid skulle jag ha haft en mer separation av concern när det kommer till styling och även ha separation av concern för tjänsterna.
 Och Göra färdig testerna
