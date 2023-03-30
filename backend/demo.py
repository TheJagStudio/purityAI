import json
import requests

url = "https://tome.app/signup?returnTo=%2Fcallback%3Fredeem_referral%3D20bece-152-jagrat-patel-clfutethz38xk4178bgop6y2x"


response = requests.request("GET", url)
state1 = (response.text).split('<input type="hidden" name="state" value="')[1].split('" />')[0]
print(state1)

url = "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
response = requests.request("GET", url)
newEmail = response.json()[0]
password = newEmail.split("@")[0] + "9753"
print(newEmail)

url = "https://auth.tome.app/u/signup?state="+state1

payload='action=default&complexityOptions.minLength=8&email='+newEmail+'&password='+password+'&state='+state1+'&strengthPolicy=low'
headers = {
    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Upgrade-Insecure-Requests': '1',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-User': '?1',
    'Sec-Fetch-Dest': 'document',
    'host': 'auth.tome.app',
    'Cookie': '_auth_verification=%7B%22nonce%22%3A%22ILk7YcCzk0o0BgOAMyGT_HWrKj0Fq2_6CtkYyfqxGSQ%22%2C%22state%22%3A%22eyJyZXR1cm5UbyI6Imh0dHBzOi8vdG9tZS5hcHAvY2FsbGJhY2s_cmVkZWVtX3JlZmVycmFsPTIwYmVjZS0xNTItamFncmF0LXBhdGVsLWNsZnV0ZXRoejM4eGs0MTc4YmdvcDZ5MngifQ%22%7D.lAOOC7ebJPoggKj3EpGur_fm-K0Ukxi-q999dUIK0JE; ajs_anonymous_id=7866e367-d775-4566-92d9-00754cc643ad; appSession=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaWF0IjoxNjgwMTYyNTQyLCJ1YXQiOjE2ODAxNjQ2MDMsImV4cCI6MTY4MDc2OTQwM30..W74D7jiUhOwcGRAW.xv36LBq3s2p8p5lycHsB86IO022ek-Y4b_X2M8Myj7JUDVSbzsDSIuMNA4uQAjmWxyMuhrmbNNavMAyyfLJOI-LTCy8nb9AEig5xlKAS0ppPpBjoC2_hmjHB2eZ-vpvDvwBDzMTVqKx5L-HDLRdcPjGdf901IrpGjAbxC2HbjaWHDcwgYLSEwKhdIcONrhMSV3pLN-TUqyGpmeLwMPKnMmwHL7-FgqsU6qS7EMQpfjVwVdqODZJ8f9rdfFTIA-gyqGnHL6IefVmJRuhxdaWl_YPu85A7T_ubzK4fIe4E6ELm3r45DQBnF643vag4bp-oVlplh3rorpfd1yHnCddovqaWAH5RvPP3zhnDXjaFGLWPlRZjm3Xtn82juQRCONvx314H1rdB2oppsRzBLHMKN556uZM1z7y4pno5irkq1IMOHBBTy3BRrxIJBPswh0qKjlDJXKxwtR3AmgjMdPkUskoCIvhzJHOUWwZfK27uxdcl1ijIVZfrbyEl9KHuWD6a6WuwZS-0HTPE4dmBlF6rHofGEm90F_heRvDn8ORusnYnSfsCw8dqPcp0CCmxaOFqrV_ECrnhm5sEgbuS15Sh-XmJNAQPUtbsolqNBLiedwlA3R05JpDFKEIYmlqm_HzZyIIL9vkodzAnLUspwnGlK7D82knAyCFqYx_oylV1Dzb3jlqZgqemcHOaZu9U48zMgaa4VU5Ri36l3kds85Zvxahkg0F3DVsCSk7XBte31jM52idMhxkiuut8QEcRtF1ViIiBH19g4YyXKHkS_rkywiNhmX3fqz4DoHlvwqms44eBMkLddXrJJCv0QJlovvbphZABRS-IMleXBbVaKUqAkk-uQ4sJv4GhG5_f-aR0zUaYrEYKN4aVNg-VT0pzPzkd1Z8r2usVmdRZf0_-vXU5gNMnR48GEIOB9lQq0PcraIaTib6j0oUL-sqJr0m0DBKsRsuS_dmPEqywEqXJ8Wam44UnWfL-YhcJPxupkClTo4fQPOSYWr96F-s1lIx3VfodWqji6YIJZosWhjPeBVe-siaW6fzKM_M54l5OGKhnPCS3m4KWH4nDIZqomNmcIoNllNV558sRhcsai57J6fO_Gr85nOaK6a3DiVtEm9s-YwD3Cu39mL_001rNIdS9sEPxa-_dN7shqpFjrSSGZ7U627awFxNk8ZxVX7meA6gnJGoIHTP8Ks_sy3hQfxhBuqbaXdpGUiX4S_uUKKgnUGB-bkxW0q8zy1-EqZF3-TJgz7quRNypwA4DLLiWP3Q9xy_X71mslodnyZz21oXdIwI6WkpmzxxK5NTLgbHtTvNOktbXYWi3AuKdqMmf0zTshzMKNkDiUmLJ6q0NJnOcY6Zbzy4CTrtP07r5vAnauw4J-9j19p_AWimI75R9JRk8B6Cd-a7T03ExsjBvw7-HslpJqSWdIkzqPl9zqUzCz974XezjBBwLE4GkReA2Z-L2eio9Suy4dlq5ONhlJyIZF19ZnylbX26AFMIL80lgkuHxSsNgfHgGDmLvqa9H-jxvuNGJFCwMiJIwu7EgkKxPzyWg6xnjk1xlW2aQHQImV3HucUWFLrUK5SnGwCukAKkKraQlFKeRs6BomMFzwZ8P1MEIVjv-RG31DBcgKQ2NmLT_HYnnkY-NYaJhGO5_ZbTnJzmQVXLHzv6pAu67kTbjGAcnz6_f8H4G12SsP8JSszhyTd5f7B0H0qq0q-oF.G77Qfqua8O3LmQNwt18g1w; auth_verification=%7B%22nonce%22%3A%22ILk7YcCzk0o0BgOAMyGT_HWrKj0Fq2_6CtkYyfqxGSQ%22%2C%22state%22%3A%22eyJyZXR1cm5UbyI6Imh0dHBzOi8vdG9tZS5hcHAvY2FsbGJhY2s_cmVkZWVtX3JlZmVycmFsPTIwYmVjZS0xNTItamFncmF0LXBhdGVsLWNsZnV0ZXRoejM4eGs0MTc4YmdvcDZ5MngifQ%22%7D.SQVaRWC_un_UdJVvpOm47YbkFtFaHX7QE98_m1t0Elo; auth0=s%3ATrsK0HpmlUq3I922M1evdQdv7b5FPQY3.O642Qus%2FNejPAfXvwWXYjGJQlL%2BHmxAINPOtDnemLbc; auth0_compat=s%3ATrsK0HpmlUq3I922M1evdQdv7b5FPQY3.O642Qus%2FNejPAfXvwWXYjGJQlL%2BHmxAINPOtDnemLbc; did=s%3Av0%3A77259880-ced2-11ed-8fb9-f7cebf0dbd56%3A80f5e4260bdcff90fddacd266d8b9c93f2ab75d89db7cee70d21b035c81e701d.0nOZEPDBu4MBsZhSILXLaU1VKVTgw%2F4MrWTUo0m4BWM; did_compat=s%3Av0%3A77259880-ced2-11ed-8fb9-f7cebf0dbd56%3A80f5e4260bdcff90fddacd266d8b9c93f2ab75d89db7cee70d21b035c81e701d.0nOZEPDBu4MBsZhSILXLaU1VKVTgw%2F4MrWTUo0m4BWM'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
