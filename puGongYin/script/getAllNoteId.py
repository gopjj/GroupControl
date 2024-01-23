import requests
from bs4 import BeautifulSoup
import pandas as pd
import os
import random
from time import sleep

# 存储匹配到的所有相关项
matched_items = []
h1 = {
    'Cookie': 'a1=189bf57f660ioe5vk11mocha0ddln6b230zg3ksig50000187054; webId=ef211bdfad35d62a3e390b83f83885ea; gid=yYjDi2Wi0SqYyYjDi2WiK8TMK83ld2hTyylku3kx0u8ffk281IKDJq888yYW8248fyjDKKSY; customerClientId=159929063764034; abRequestId=ef211bdfad35d62a3e390b83f83885ea; web_session=030037a3fff5bd5e0c4c028b8e234a100a9675; x-user-id-ad.xiaohongshu.com=627e1e10d2a57d0001a0eb1c; xsecappid=xhs-pc-web; customerBeakerSessionId=0c2dc704f7acfe4b8dbf0b4275655c55f89df4edgAJ9cQAoWBAAAABjdXN0b21lclVzZXJUeXBlcQFLA1gOAAAAX2NyZWF0aW9uX3RpbWVxAkdB2VDMTMxaHVgJAAAAYXV0aFRva2VucQNYQQAAADM2MmNmYmZlM2Y0YTQwNmVhZmZiNDc2NGY5YjYyNWI2LTI2NjA3NjhmMDYzODRiNDE5MTBjOThkNDRlZmVlNzI0cQRYAwAAAF9pZHEFWCAAAAA4NjJlMmJlYzIzMmY0MzNmYjVjOGEwMTgzZjM3M2NhN3EGWA4AAABfYWNjZXNzZWRfdGltZXEHR0HZUMxMzFodWAYAAAB1c2VySWRxCFgYAAAANjAzOGFhN2ZlYmE3NTYwMDAxZTJhNzA1cQlYAwAAAHNpZHEKWBgAAAA2NTQzMzEzMzExMDAwMDAwMDAwMDAwMDJxC3Uu; customer-sso-sid=654331331100000000000002; x-user-id-pgy.xiaohongshu.com=5e3fd1a20000000001008338; solar.beaker.session.id=1698902323283089389194; access-token-pgy.xiaohongshu.com=customer.ares.AT-33c1a39b507d4f8dae4937bb5a2d54e9-086451da7bf54e1a80f2dec81cf300e0; access-token-pgy.beta.xiaohongshu.com=customer.ares.AT-33c1a39b507d4f8dae4937bb5a2d54e9-086451da7bf54e1a80f2dec81cf300e0; feratlin-status=online; feratlin-status.sig=uBZJqsDDK9NbcHCALtzq7uIWcElHVIDWaGpKRyVXpts',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Host': 'pgy.xiaohongshu.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Referer': 'https://pgy.xiaohongshu.com/solar/blogger-detail/'

    # 博主相应网站
}
"""
    从 author_dict 读取用户名
"""
df = pd.read_excel('author_dict.xlsx')
start_page_number = 1

for index, row in df.iterrows():
    username = row['authorName']
    userid = row['userId']
    title = row['title']

    all_soup = []  # 创建一个空列表来存储每次请求的数据

    for i in range(start_page_number, start_page_number + 3):  # 假设只取5页数据
        url = f'https://pgy.xiaohongshu.com/api/solar/kol/dataV2/notesDetail?advertiseSwitch=1&orderType=1&pageNumber={i}&pageSize=8&userId={userid}&noteType=1&withComponent=false'
        response = requests.get(url, headers=h1, verify=False)
        soup = BeautifulSoup(response.text, 'html.parser')
        data = response.json()
        print(data)
        for item in data['data']['list']:
            if item['title'] == title:
                print(f"找到了标题为 '{title}' 的特定内容:")

                item_with_info = {
                    'author_name': username,
                    'user_id': userid,
                    'content': item
                }

                matched_items.append(item_with_info)
                #     all_soup.append(soup)  # 将每次请求的数据存入列表
    # 输出匹配到的所有相关项
all_find = []
print("匹配到的所有相关项:")
for item in matched_items:
    print(item)
    all_find.append(item)


