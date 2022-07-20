import os
from flask import Flask, jsonify, make_response, render_template, request

app = Flask(__name__)
app.secret_key = "s3cr3t"
app.debug = False
app._static_folder = os.path.abspath("template/static/")


#decorador de ruta, nos dirige a la subpage principal 'index'
@app.route()
def index():

    return render_template("layouts/index.html")

#main del programa, que esta asignado el puerto y la host
if __name__ == "__main__":
    app.run()
