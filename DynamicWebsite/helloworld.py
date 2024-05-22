#import Flask
from flask import Flask

#initialise a variable that we have chosen to call app, loading it with the Flask() class. We will invoke Flask's run method using this variable, from within the program entry point.

app = Flask(__name__)

#define a Python function named hello() and decorate it using app.route. Flask's app.route is used in this way to associate a web url with a defined function. Here we are associating root URL with the hello() function. All requests to the root URL will be handled by this funtion.

@app.route("/")
def home():
    return "Hello World from Python Flask Web Framework!"

@app.route("/about-us")
def about_us():
    return "We are here to serve you!"

#function below will be called when the user adds a string after /hello/ to the website address. e.g/hello/Pius/.
#That added string will be captured using a variable named my_name as shown below.

@app.route("/hello/<string:my_name>/") #the converter is string and variable name is my_name
def hello(my_name):
    return "Hello %s, greetings from Flask Framework!" %my_name

#run the app from within Python's program entry block
#notice here that wee can specify host. 0.0.0.0 means that the app will be accessible from all the IP addresses on the system including 127.0.0.1 which is localhost. The default port for Flask is 5000. You can specify some other port number.

if __name__ == "__main__":
    app.run()
    # or use more detailed app.run(host="0.0.0.0", port-int("5000"),debug=True)
    