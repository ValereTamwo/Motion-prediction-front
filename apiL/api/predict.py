import tensorflow as tf

def psnr_loss(y_true, y_pred):
    return -tf.reduce_mean(tf.image.psnr(y_true, y_pred, max_val=1.0))
def make_prediction(model,data):
    # Remplacer par la logique de prédiction de votre modèle
    model = tf.keras.models.load_model(model,custom_objects={'psnr_loss': psnr_loss})
    prediction = model.predict(data)
    return prediction
