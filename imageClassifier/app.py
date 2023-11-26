from flask import Flask , render_template , request

# ml model by keras 
from keras.preprocessing.image import load_img
from keras.preprocessing.image import img_to_array
from keras.applications.vgg16 import preprocess_input,decode_predictions
from keras.applications.vgg16 import VGG16

app= Flask(__name__)
model = VGG16()


# we are adding a get request 
@app.route('/',methods=['GET'])
def hello_world():
    return render_template('index.html')

# now since we want to upload a image classifier we have to accept the images
@app.route('/',methods=['POST'])
def predict():
    imagefile = request.files['imagefile']
    image_path="./images/"+imagefile.filename
    imagefile.save(image_path)


    image = load_img(image_path,target_size=(224,224))
    image=img_to_array(image)
    image =image.reshape((1,image.shape[0],image.shape[1],image.shape[2]))
    image=preprocess_input(image)
    yhat=model.predict(image)
    label=decode_predictions(yhat)
    label=label[0][0]

    classification='%s (%.2f%%)'%(label[1],label[2]*100)



    return render_template('index.html',prediction=classification)


if __name__=='__main__':
    app.run(port=3000,debug=True)


print("hello world ");

