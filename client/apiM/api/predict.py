import tensorflow as tf

def make_prediction(model,data):
    # Remplacer par la logique de prédiction de votre modèle
    model = tf.keras.models.load_model(model)
    prediction = model.predict(data)
    return prediction
