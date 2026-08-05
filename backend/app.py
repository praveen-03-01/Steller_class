from flask import Flask, request, jsonify

from flask_cors import CORS

import joblib

import pandas as pd

import os


app = Flask(__name__)

CORS(app)

BASE_DIR = os.path.dirname(
    os.path.abspath(__file__)
)


MODEL_PATH = os.path.join(
    BASE_DIR,
    "..",
    "models",
    "best_model.pkl"
)


model = joblib.load(
    MODEL_PATH
)


print("Model loaded successfully")


@app.route("/")
def home():

    return jsonify(
        {
            "message":
            "Stellar Classification Prediction API Running"
        }
    )

@app.route(
    "/predict",
    methods=["POST"]
)

def predict():


    try:


        data = request.json



        if data is None:


            return jsonify(

                {

                    "error":
                    "No input data received"

                }

            )




        required_fields = [

            "alpha",
            "delta",
            "u",
            "g",
            "r",
            "i",
            "z",
            "redshift",
            "spectral_type",
            "galaxy_population"

        ]


        for field in required_fields:


            if field not in data or data[field] == "":


                return jsonify(

                    {

                        "error":
                        f"{field} is required"

                    }

                )

        input_data = pd.DataFrame(

            [data]

        )



        print(input_data)



        prediction = model.predict(

            input_data

        )



        result = str(

            prediction[0]

        )




        return jsonify(

            {

                "prediction":
                result

            }

        )




    except Exception as e:


        return jsonify(

            {

                "error":
                str(e)

            }

        )


if __name__ == "__main__":

    app.run(
        debug=True,
        port=5000
    )