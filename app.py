import os
from flask import Flask, render_template, request
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

# Initialize Flask app
app = Flask(__name__)

# Define upload folder
UPLOAD_FOLDER = "static/uploads"   # where uploaded images will be saved
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# Load your model
model = tf.keras.models.load_model(r"C:\Users\Keshava Rao\OneDrive\Desktop\2\model\resnet50_emotion_75acc.h5")

# Emotion labels
labels = ["Angry", "Disgust", "Fear", "Happy", "Sad", "Surprise", "Neutral"]

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return "No file uploaded"

    file = request.files["file"]
    if file.filename == "":
        return "No file selected"

    # Save the file
    filepath = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
    file.save(filepath)

    # Preprocess the image
    img = image.load_img(filepath, target_size=(128, 128))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0) / 255.0

    # Predict emotion
    predictions = model.predict(img_array)
    class_idx = np.argmax(predictions[0])
    result = labels[class_idx]

    return render_template("result.html", prediction=result, image_name=file.filename)

if __name__ == "__main__":
    app.run(debug=True)
