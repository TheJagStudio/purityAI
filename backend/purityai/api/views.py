from django.shortcuts import render
from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
import requests
import base64
from datetime import datetime

access_token = ""
refresh_token = ""
id_token = ""
gtoken = "03AKH6MRHx9bdEtfRCXXooXD05YOTxMi4kFvF-SfoCw0a9qOZ2yu9BsvKDk2A8RXlcnMHNGfRd3TPtf-PAeiSWhrcvoB-wA3KtbigVKuQjjyQPUPtbyHnF6RpbOqLU0jLLMuQOnqsQs7lbk7FE4z4LlIzbbAgf5qOyCTWuqTz47xzOH5nnYpe5QkIBHafAh-m3c7NdPD-M23hQ0E9wiC6vO9vTWarXcEvTctGEa7V4JTyHpk5YAh-yz4vg2BoWaMGPmf1Cz1zKKnoBoB3vjFFK0yBN3_VUODigEx73ZdwXtdIg-E4NeGvtPu1cnnYBkSlQHQhzNVAuGhZ0Wjg3n6lK3GmpYukLPBA8I1wbktR1NA9mUCH3wrsZZmnlaIPEfYAqaICsIHOAbSTyoqJTHnkKHnJByY3tjtCEcsXQWumlgNY0m20yCfidmXGLxZPOdhKCyhr3Y-mMiS9hqhe5xfGVIZN-deNHeAJ_vy2EpU_xwwVJ87r2tCzEOqRtZ5l6g5ttDw4cbi6lsnQ_Lx6_gO6BoNcKD_MVTODF9Q"
imageGenrated = 0
startTime = datetime.now()

def tokenGenrator(request):
    global access_token, refresh_token, id_token
    url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6cfZFPraybh6ziyKIMO-afl11alZNlTI"
    payload = json.dumps({
        "returnSecureToken": True
    })
    headers = {
        'authority': 'identitytoolkit.googleapis.com',
        'accept': '*/*',
        'content-type': 'application/json',
        'origin': 'https://clipdrop.co',
        'x-client-version': 'Chrome/JsCore/9.15.0/FirebaseCore-web'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    refresh_token = response.json()['refreshToken']
    id_token = response.json()['idToken']
    url = "https://securetoken.googleapis.com/v1/token?key=AIzaSyB6cfZFPraybh6ziyKIMO-afl11alZNlTI"
    payload='grant_type=refresh_token&refresh_token=' + refresh_token
    headers = {
        'authority': 'securetoken.googleapis.com',
        'accept': '*/*',
        'content-type': 'application/x-www-form-urlencoded',
        'origin': 'https://clipdrop.co'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    access_token = response.json()['access_token']
    refresh_token = response.json()['refresh_token']
    id_token = response.json()['id_token']
    return access_token


def helloWorld(request):
    return HttpResponse(json.dumps({"msg":"Hello World"}), content_type="application/json")

@csrf_exempt
def backgroundRemover(request):
    global access_token, imageGenrated,startTime
    if request.method == 'POST':
        image = request.FILES['image']
        endTime = datetime.now()
        imageGenrated = imageGenrated + 1
        print((endTime - startTime).total_seconds())
        if (endTime - startTime).total_seconds() > 360 or imageGenrated > 10:
            access_token = ""
            imageGenrated = 0
            startTime = datetime.now()
        if access_token == "":
            access_token = tokenGenrator(request)
        url = "https://api.clipdrop.co/remove-background/v2"
        payload={'outputs[]': 'composite','composite_format': 'webp'}
        files=[
            ('image_file',(image.name,image))
        ]
        headers = {
            'authority': 'api.clipdrop.co',
            'accept': 'application/zip',
            'accept-language': 'en-US,en;q=0.9',
            'authorization': 'Bearer '+access_token,
            'origin': 'https://clipdrop.co',
            'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
            'x-clipdrop-pro-client': 'false'
        }
        response = requests.request("POST", url, headers=headers, data=payload, files=files)
        return HttpResponse(response.content, content_type="image/png")
        
    return HttpResponse(json.dumps({"error":"You were not supposed to be here."}), content_type="application/json")

@csrf_exempt
def imageUpscaler(request):
    global access_token, imageGenrated,startTime
    if request.method == 'POST':
        image = request.FILES['image']
        upscale = request.POST['upscale']
        endTime = datetime.now()
        imageGenrated = imageGenrated + 1
        print((endTime - startTime).total_seconds())
        if (endTime - startTime).total_seconds() > 360 or imageGenrated > 10:
            access_token = ""
            imageGenrated = 0
            startTime = datetime.now()
        if access_token == "":
            access_token = tokenGenrator(request)
        url = "https://api.clipdrop.co/super-resolution/v1"
        payload={'upscale': upscale,'output_format': 'png'}
        files=[
            ('image_file',(image.name,image))
        ]
        headers = {
            'authority': 'api.clipdrop.co',
            'accept': 'application/zip',
            'accept-language': 'en-US,en;q=0.9',
            'authorization': 'Bearer '+access_token,
            'origin': 'https://clipdrop.co',
            'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
            'x-clipdrop-pro-client': 'false'
        }
        response = requests.request("POST", url, headers=headers, data=payload, files=files)
        return HttpResponse(response.content, content_type="image/png")
    return HttpResponse(json.dumps({"error":"You were not supposed to be here."}), content_type="application/json")

@csrf_exempt
def textRemoval(request):
    global access_token, imageGenrated,startTime
    if request.method == 'POST':
        image = request.FILES['image']
        endTime = datetime.now()
        imageGenrated = imageGenrated + 1
        print((endTime - startTime).total_seconds())
        if (endTime - startTime).total_seconds() > 360 or imageGenrated > 10:
            access_token = ""
            imageGenrated = 0
            startTime = datetime.now()
        if access_token == "":
            access_token = tokenGenrator(request)
        url = "https://api.clipdrop.co/remove-text/v1"
        files=[
            ('image_file',(image.name,image))
        ]
        headers = {
            'authority': 'api.clipdrop.co',
            'accept': 'application/zip',
            'accept-language': 'en-US,en;q=0.9',
            'authorization': 'Bearer '+access_token,
            'origin': 'https://clipdrop.co',
            'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
            'x-clipdrop-pro-client': 'false'
        }
        response = requests.request("POST", url, headers=headers, files=files)
        return HttpResponse(response.content, content_type="image/png")
    return HttpResponse(json.dumps({"error":"You were not supposed to be here."}), content_type="application/json")

@csrf_exempt
def gtokenSet(request):
    global gtoken
    if request.method == 'GET':
        gtoken = request.GET.get('gtoken')
        return HttpResponse(json.dumps({"msg":"Token Set"}), content_type="application/json")
    return HttpResponse(json.dumps({"msg":"Token Not Set"}), content_type="application/json")

@csrf_exempt
def visionAI(request):
    global gtoken
    if request.method == 'POST':
        image = request.FILES['image']
        encoded_string = base64.b64encode(image.read()).decode('utf-8')
        url = "https://cxl-services.appspot.com/proxy?url=https%3A%2F%2Fvision.googleapis.com%2Fv1%2Fimages%3Aannotate&token="+gtoken
        payload = {"requests":[{"image":{"content":encoded_string},"features": [{"type": "LANDMARK_DETECTION","maxResults": 50},{"type": "FACE_DETECTION","maxResults": 50},{"type": "OBJECT_LOCALIZATION","maxResults": 50},{"type": "LOGO_DETECTION","maxResults": 50},{"type": "LABEL_DETECTION","maxResults": 50},{"type": "DOCUMENT_TEXT_DETECTION","maxResults": 50,"model": "builtin/latest"},{"type": "SAFE_SEARCH_DETECTION","maxResults": 100}]}]}
        headers = {
            'authority': 'cxl-services.appspot.com',
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9,gu;q=0.8',
            'content-type': 'text/plain;charset=UTF-8',
            'origin': 'https://www.gstatic.com'
        }
        response = requests.request("POST", url, headers=headers, data=json.dumps(payload))
        print(response.json()["responses"][0].keys())
        data = {}
        try:
            data["Label"] = response.json()["responses"][0]["labelAnnotations"]
        except:
            pass
        try:
            data["Logo"] = response.json()["responses"][0]["logoAnnotations"]
        except:
            pass
        try:
            data["Text"] = response.json()["responses"][0]["fullTextAnnotation"]["text"]
        except:
            pass
        try:
            data["Safe Search"] = response.json()["responses"][0]["safeSearchAnnotation"]
        except:
            pass
        try:
            data["Object"] = response.json()["responses"][0]["localizedObjectAnnotations"]
        except:
            pass
        try:
            data["Face"] = response.json()["responses"][0]["faceAnnotations"]
        except:
            pass
        return HttpResponse(json.dumps({"data":data}), content_type="application/json")
    return HttpResponse(json.dumps({"error":"You were not supposed to be here."}), content_type="application/json")