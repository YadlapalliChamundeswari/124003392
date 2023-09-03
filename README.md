number-managemenet-app:

1)We have a textarea where you can input the URLs, one URL per line.

2)When you click the "Fetch Numbers" button, it sends a GET request to your "number-management-service" microservice with the specified URLs as query parameters.

3)If the request is successful, the merged unique integers are displayed in a list. If there's an error, an error message is shown.

4)Make sure to adjust the URL (http://localhost:8008/numbers) to match the actual location of your microservice.

5)You can copy and paste this code into a React application and run it with npm start or your preferred development server command.


train-schedule-app:

AllTrains.js: Display all trains' schedules.
SingleTrain.js: Display a single train's schedule.
