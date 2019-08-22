# slr_demo
demo app for sea level rise slider

Libraries Used:
* [Vue2](https://vuejs.org/v2/api/)
* [esri javascript API 4.12](https://developers.arcgis.com/javascript/latest/api-reference/)

## What's here
* [index.html](index.html) - A simple HTML page with a root app element that vue is mounted on
* [style.css](style.css) - CSS stylesheet
* [app.js](app.js) - Javascript file where map and slider functionality are added

## Run it locally (must have python installed)
Open command line (terminal on mac, powershell on windows)
Check which version of python you have
```
python -V
```
Navigate to the project folder
<pre>
cd <i>path to cloned repo folder</i>
</pre>
Run a simple python web server from inside the root project folder
```
# If Python version returned above is 3.X
python3 -m http.server
# On windows try "python" instead of "python3"
# If Python version returned above is 2.X
python -m SimpleHTTPServer
```
The project should be running locally at *http://localhost:8000*
