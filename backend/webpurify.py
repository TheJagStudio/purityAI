import requests
import json
import xmltodict
import random
import time
import http.client



# def imgUrlGen():
#     url = "https://imgbb.com/json"

#     payload={'type': 'file','action': 'upload','timestamp': '1680191719131','expiration': 'PT5M'}
#     files=[
#         ('source',('demo.jpg',open('D:/pythonProjects/purityAI/backend/demo.jpg','rb'),'image/jpeg'))
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

#     response = requests.request("POST", url, headers=headers, data=payload, files=files)
#     return response.json()["image"]["url"]
# imgUrl = imgUrlGen()
# url = "https://im-api1.webpurify.com/services/rest/?api_key=df0259691cb79e9c8d6e15fbe7eec978&cats=nudity,wad,offensive,gore,text,faces,celebrities,ocr,scam&method=webpurify.hybrid.imgcheck&threshold_nudity_lt=50&imgurl="+imgUrl
# response = requests.request("GET", url)
# data_dict = xmltodict.parse(response.text)
# print(json.dumps(data_dict, indent=4))

url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDCvp5MTJLUdtBYEKYWXJrlLzu1zuKM6Xw"
payload = "{returnSecureToken: true}"
headers = {'Content-Type': 'application/javascript'}
response = requests.request("POST", url, headers=headers, data=payload)
token = "bearer " + str(response.json()['idToken'])
def genrator(prompt):
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

    payload = "{\"input_spec\":{\"prompt\":\"" + prompt + "\",\"style\":32,\"display_freq\":10}}"
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

try:
    print(genrator("yellow colored cat"))
except:
    url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDCvp5MTJLUdtBYEKYWXJrlLzu1zuKM6Xw"
    payload = "{returnSecureToken: true}"
    headers = {'Content-Type': 'application/javascript'}
    response = requests.request("POST", url, headers=headers, data=payload)
    token = "bearer " + str(response.json()['idToken'])
    print(genrator("yellow colored cat"))