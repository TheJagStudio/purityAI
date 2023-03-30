import json
import requests
from fake_useragent import UserAgent # OPTIONAL

__author__ = "Andrea Cucci"
__credits__ = ["Andrea Cucci"]
__maintainer__ = "Andrea Cucci"
__email__ = "andreacucci@outlook.com"
__status__ = "Prototype"

# Doc: https://cloud.google.com/vision/docs/reference/rest/v1/images/annotate

featureTypes =[ "TYPE_UNSPECIFIED",
                "FACE_DETECTION",
                "LANDMARK_DETECTION",
                "LOGO_DETECTION",
                "LABEL_DETECTION",
                "TEXT_DETECTION",           # less dense OCR
                "DOCUMENT_TEXT_DETECTION",  # mode dense OCR
                "SAFE_SEARCH_DETECTION",
                "IMAGE_PROPERTIES",
                "CROP_HINTS",
                "WEB_DETECTION" ]

def NormalizeLongitude(longitude):
    """Wraps decimal degrees longitude to [-180.0, 180.0]."""
    q, r = divmod(longitude, 360.0)
    if r > 180.0 or (r == 180.0 and q <= -1.0):
        return r - 360.0
    return r

def NormalizeLatLng(latitude, longitude):
    """Wraps decimal degrees latitude and longitude to
    [-90.0, 90.0] and [-180.0, 180.0], respectively."""
    r = latitude % 360.0
    if r <= 90.0:
        return r, NormalizeLongitude(longitude)
    elif r >= 270.0:
        return r - 360, NormalizeLongitude(longitude)
    else:
        return 180 - r, NormalizeLongitude(longitude + 180.0)

class GoogleCloudVisionAPI:
    def __init__(self, apiURL):
        self.client = requests.Session()
        ua = UserAgent()                                                    # OPTIONAL
        self.client.headers["User-Agent"] = ua.random                       # OPTIONAL
        self.apiURL = apiURL

    def setRequest(self, request):
        self.request = request

    def send(self):
        jsonDict = {"requests":[self.request.asDict()]}
        reply = self.client.post(self.apiURL,json=jsonDict)
        respJson = json.loads(reply.content.decode("utf-8"))["responses"][0]   # For more info: https://cloud.google.com/vision/docs/reference/rest/v1/images/annotate#AnnotateImageResponse
        if "error" in respJson.keys():
            raise Exception(respJson["error"]["message"])
        else:
            return respJson

class AnnotateImageRequest:
    def __init__(self):
        self.image = dict()
        self.features = list()
        self.imageContext = dict()

    def setImageURI(self, URI):
        if "source" not in self.image.keys():
            self.image["source"] = dict()
        self.image["source"]["imageUri"] = URI

    def setImageb64(self, image):
        self.image["content"] = image

    def setGcsImageURI(self, GcsURI):
        if "source" not in self.image.keys():
            self.image["source"] = dict()
        self.image["source"]["gcsImageUri"] = GcsURI

    def addFeature(self, featureType, maxResults):
        self.features.append({"type":featureType, "maxResults":maxResults})

    def setLocationRect(self, minLat, minLong, maxLat, maxLong):
        minLat, minLong = NormalizeLatLng(minLat, minLong)
        maxLat, maxLong = NormalizeLatLng(maxLat, maxLong)
        rectDict = {"minLatLng": {"latitude": minLat, "longitude": minLong}, "maxLatLng": {"latitude": maxLat, "longitude": maxLong}}
        self.imageContext["latLongRect"] = rectDict

    def addLanguageHint(self, hint):
        if "languageHints" not in self.imageContext.keys():
            self.imageContext["languageHints"] = list()
        self.imageContext["languageHints"].append(hint)

    def setLanguageHints(self, hints):
        self.imageContext["languageHints"] = hints

    def addCropHint(self, hint):
        if "cropHintsParams" not in self.imageContext.keys():
            self.imageContext["cropHintsParams"] = dict()
            self.imageContext["cropHintsParams"]["aspectRatios"] = list()
        self.imageContext["cropHintsParams"]["aspectRatios"].append(hint)

    def setCropHints(self, hints):
        self.imageContext["cropHintsParams"] = dict()
        self.imageContext["cropHintsParams"]["aspectRatios"] = hints

    def asDict(self):
        retDict = {"image":self.image}
        if len(self.features):
            retDict["features"] = self.features
        if len(self.imageContext):
            retDict["imageContext"] = self.imageContext
        return retDict

if __name__ == "__main__":

    import pprint

    api = GoogleCloudVisionAPI("https://cxl-services.appspot.com/proxy?url=https://vision.googleapis.com/v1/images:annotate")               # The magic happens here
    req = AnnotateImageRequest()

    req.setImageURI("https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png")
    req.addFeature("WEB_DETECTION",50)
    req.addFeature("DOCUMENT_TEXT_DETECTION",50)
    req.addLanguageHint("en")
    #req.setCropHints([0.777,1])
    #req.setLocationRect(0,0,0,0)

    api.setRequest(req)
    response = api.send()

    pp = pprint.PrettyPrinter()
    pp.pprint(response)