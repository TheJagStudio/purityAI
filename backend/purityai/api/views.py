from django.shortcuts import render
from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
import requests
import base64
from datetime import datetime
import http.client
import time
from PIL import Image,ImageFilter
import io

access_token = ""
refresh_token = ""
id_token = ""
gtoken = "03AKH6MRFNT6HVvCOEeeOZyehLohN3SQQGtPX-5ZuPkxCP3z1qhjhETBgPXUF1OsuYmdwZHvbHHKGV8b1I6B37WvbE0NqnncINIjUnZ9V3eBYPpBT2YXVV6I88n84L25v2PS8k3TGSj5oVFP1WhBSwR_pX7AmqJM7xq-47mjzOrRfpbEHNeQLOBGxQTVBVCP7IjNB6Yv4NmUYgqyv261dSmfh-RTgQWvA_05vs_J4R7eCPGr7xhSzd4jSXRsZDuf0zkyzeMHbEIf07Mrp0AaeB-bv14jNakWaAyDXNRg1yPzTUuQa3yVPBlx49VxrGC5tVKCN2CsWnrsd2BQD7A2BBzQPDz_rpGL3EVyl7Gh5qY8DYuGgK8pRTrbVAbDyacYoOmgYjoX7VAGx_3kKYLz6dHTF_8WeC_AIpwwP-KT6YDpT-wV7HkyxdkouYUuHdlQQKaPQ6eRDnkzqkOOCEZ1yPE_6eh2NeF41P-Z6Iy-B4tdAyHPW0AmO-pH8TsgUmlHpfaHuDuKj3XWme5dDloH2rSa1SQFyIeXUDE0uyG8KlX4MqzcBxefia1Z8"
imageGenrated = 0
startTime = datetime.now()
csrfToken = ""


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
        print(access_token)
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
        try:
            if("error" in response.json().keys()):
                imageGenrated = 100
                return HttpResponse(json.dumps(response.json()),content_type="application/json")
        except:
            pass
        return HttpResponse(response.content, content_type="image/png")
        
    return HttpResponse(json.dumps({"error":"You were not supposed to be here."}), content_type="application/json")


@csrf_exempt
def cleanUp(request):
    global access_token, imageGenrated,startTime
    if request.method == 'POST':
        image = request.FILES['image']
        mask = request.FILES['mask']
        temp1 = Image.open(image)
        temp2 = Image.open(mask)
        temp1.save("temp1.png")
        temp2.save("temp2.png")
        endTime = datetime.now()
        imageGenrated = imageGenrated + 1
        print((endTime - startTime).total_seconds())
        if (endTime - startTime).total_seconds() > 360 or imageGenrated > 10:
            access_token = ""
            imageGenrated = 0
            startTime = datetime.now()
        if access_token == "":
            access_token = tokenGenrator(request)
        url = "https://api.clipdrop.co/cleanup/v1"
        files=[
            ('image_file',(image.name,image)),
            ('mask_file',(mask.name,mask))
        ]
        headers = {
            'authority': 'api.clipdrop.co',
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'authorization': 'Bearer '+access_token,
            'origin': 'https://clipdrop.co',
            'referer': 'https://clipdrop.co/',
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
        try:
            print(response.json())  
            if("error" in response.json().keys()):
                imageGenrated = 100
                return HttpResponse(json.dumps(response.json()),content_type="application/json")
        except:
            pass
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
        try:
            if("error" in response.json().keys()):
                imageGenrated = 100
                return HttpResponse(json.dumps(response.json()),content_type="application/json")
        except:
            pass
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
        try:
            if("error" in response.json().keys()):
                imageGenrated = 100
                return HttpResponse(json.dumps(response.json()),content_type="application/json")
        except:
            pass
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
def purifySet(request):
    global purifyAPI
    if request.method == 'GET':
        purifyAPI = request.GET.get('purifyAPI')
        return HttpResponse(json.dumps({"msg":"Token Set"}), content_type="application/json")
    return HttpResponse(json.dumps({"msg":"Token Not Set"}), content_type="application/json")

# def imgUrlGen(image):
#     url = "https://imgbb.com/json"

#     payload={'type': 'file','action': 'upload','timestamp': '1680193988230','expiration': 'PT5M'}
#     print("before")
#     files=[
#         ('source',(image.name,image.read(),'image/jpeg'))
#     ]
    
#     headers = {
#         'authority': 'imgbb.com',
#         'accept': 'application/json',
#         'accept-language': 'en-US,en;q=0.9,gu;q=0.8',
#         'origin': 'https://imgbb.com',
#         'referer': 'https://imgbb.com/',
#         'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
#         'sec-ch-ua-mobile': '?0',
#         'sec-ch-ua-platform': '"Windows"',
#         'sec-fetch-dest': 'empty',
#         'sec-fetch-mode': 'cors',
#         'sec-fetch-site': 'same-origin',
#         'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
#     }

#     response = requests.request("POST", url, headers=headers, data=payload)
#     print(response.text)
#     print("after")
#     return response.json()["image"]["url"]

@csrf_exempt
def visionAI(request):
    global gtoken,purifyAPI
    if request.method == 'POST':
        image = request.FILES['image']
        encoded_string = base64.b64encode(image.read()).decode('utf-8')
        url = "https://cxl-services.appspot.com/proxy?url=https%3A%2F%2Fvision.googleapis.com%2Fv1%2Fimages%3Aannotate&token=" +gtoken
        payload = {"requests":[{"image":{"content":encoded_string},"features": [{"type": "LANDMARK_DETECTION","maxResults": 50},{"type": "FACE_DETECTION","maxResults": 50},{"type": "OBJECT_LOCALIZATION","maxResults": 50},{"type": "LOGO_DETECTION","maxResults": 50},{"type": "LABEL_DETECTION","maxResults": 50},{"type": "DOCUMENT_TEXT_DETECTION","maxResults": 50,"model": "builtin/latest"},{"type": "SAFE_SEARCH_DETECTION","maxResults": 100}]}]}
        headers = {
            'authority': 'cxl-services.appspot.com',
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9,gu;q=0.8',
            'content-type': 'text/plain;charset=UTF-8',
            'origin': 'https://www.gstatic.com'
        }
        print(gtoken)
        try:
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
            # try:
            #     imgUrl = imgUrlGen(image)
            #     url = "https://im-api1.webpurify.com/services/rest/?api_key="+purifyAPI+"&cats=nudity,wad,offensive,gore,text,faces,celebrities,ocr,scam&method=webpurify.hybrid.imgcheck&threshold_nudity_lt=50&imgurl="+imgUrl
            #     response = requests.request("GET", url)
            #     purifyData = xmltodict.parse(response.text)
            #     data["Summary"] = purifyData["rsp"]
            # except:
            #     print("Purify API Error")
            #     pass
            return HttpResponse(json.dumps({"data":data}), content_type="application/json")
        except:
            print("Gtoken API Error")
            return HttpResponse(json.dumps({"error":"Gtoken API Error"}), content_type="application/json")
    return HttpResponse(json.dumps({"error":"You were not supposed to be here."}), content_type="application/json")


def genrator(prompt,style):
    global token
    url = "https://paint.api.wombo.ai/api/tasks"

    payload = "{\"premium\":false}"
    headers = {
        'sec-ch-ua':
        '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
        'Authorization': token,
        'x-app-version': 'WEB-1.90.1',
        'sec-ch-ua-mobile': '?0',
        'Content-Type': 'text/plain;charset=UTF-8',
        'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Accept': '*/*',
        'host': 'paint.api.wombo.ai'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    id = str(response.json()['id'])
    url = "https://paint.api.wombo.ai/api/tasks/" + id

    payload = "{\"input_spec\":{\"prompt\":\"" + prompt + "\",\"style\":"+str(style)+",\"display_freq\":10}}"
    headers = {
        'sec-ch-ua':
        '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
        'Authorization': token,
        'x-app-version': 'WEB-1.90.1',
        'sec-ch-ua-mobile': '?0',
        'Content-Type': 'text/plain;charset=UTF-8',
        'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Accept': '*/*',
        'host': 'paint.api.wombo.ai'
    }

    response = requests.request("PUT", url, headers=headers, data=payload)
    url = "https://paint.api.wombo.ai/api/tasks/" + id

    payload = {}
    headers = {
        'sec-ch-ua':
        '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
        'Authorization': token,
        'x-app-version': 'WEB-1.90.1',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Accept': '*/*',
        'host': 'paint.api.wombo.ai'
    }

    response = requests.request("GET", url, headers=headers, data=payload)
    count = 1
    while response.json()["result"] == None and count < 30:
        time.sleep(1)
        response = requests.request("GET", url, headers=headers, data=payload)
        count = count + 1
    try:
        returnData = "https://images.wombo.art/generated/" + response.json(
        )['photo_url_list'][-1].split("generated/")[1]
        return returnData
    except:
        return "Error try again"


@csrf_exempt
def imageGen(request):
    global token
    if request.method == 'POST':
        prompt = request.POST.get('prompt')
        style = request.POST.get('style')
        try:
            link = genrator(prompt,style)
            return HttpResponse(json.dumps({"data":genrator("yellow colored cat")}), content_type="application/json")
        except:
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDCvp5MTJLUdtBYEKYWXJrlLzu1zuKM6Xw"
            payload = "{returnSecureToken: true}"
            headers = {'Content-Type': 'application/javascript'}
            response = requests.request("POST", url, headers=headers, data=payload)
            token = "bearer " + str(response.json()['idToken'])
            link = genrator(prompt,style)
            return HttpResponse(json.dumps({"data":link}), content_type="application/json")
    return HttpResponse(json.dumps({"error":"You were not supposed to be here."}), content_type="application/json")


@csrf_exempt
def reimagine(request):
    global access_token, imageGenrated,startTime
    if request.method == 'POST':
        image = request.FILES['image']
        # resize image to max 768x768
        image = Image.open(image)
        if image.size[0] > 768 or image.size[1] > 768:
            if image.size[0] > image.size[1]:
                image = image.resize((768, int(image.size[1]*768/image.size[0])))
            else:
                image = image.resize((int(image.size[0]*768/image.size[1]), 768))
        image = image.convert('RGB')
        # convert image to bytes
        imageByteArr = io.BytesIO()
        image.save(imageByteArr, format='PNG')
        image = imageByteArr.getvalue()

        endTime = datetime.now()
        imageGenrated = imageGenrated + 1
        print((endTime - startTime).total_seconds())
        if (endTime - startTime).total_seconds() > 360 or imageGenrated > 10:
            access_token = ""
            imageGenrated = 0
            startTime = datetime.now()
        if access_token == "":
            access_token = tokenGenrator(request)
        url = "https://api.clipdrop.co/diffusion/v1/image-variations"
        files=[
            ('image_file',('image.png',image,'image/png'))
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
        payload={"amount_to_generate":4}
        response = requests.request("POST", url, headers=headers, data=payload, files=files)
        try:
            if("error" in response.json().keys()):
                imageGenrated = 100
                return HttpResponse(json.dumps(response.json()),content_type="application/json")
        except:
            pass
        return HttpResponse(response.content, content_type="application/zip")
        
    return HttpResponse(json.dumps({"error":"You were not supposed to be here."}), content_type="application/json")
