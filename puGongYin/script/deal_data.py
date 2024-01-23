import pandas as pd

from getAllNoteId import all_find

df = pd.DataFrame(columns=['author_name', 'user_id', 'readNum', 'likeNum', 'collectNum', 'noteId', 'imgUrl', 'title', 'brandName', 'date'])

# 构建包含新数据的DataFrame
new_data_list = []
for data in all_find:
    new_data_list.append({
        'author_name': data['author_name'],
        'user_id': data['user_id'],
        'readNum': data['content']['readNum'],
        'likeNum': data['content']['likeNum'],
        'collectNum': data['content']['collectNum'],
        'noteId': data['content']['noteId'],
        'imgUrl': data['content']['imgUrl'],
        'title': data['content']['title'],
        'brandName': data['content']['brandName'],
        'date': data['content']['date']
    })

new_data_df = pd.DataFrame(new_data_list)

# 合并新数据到原始的DataFrame
df = pd.concat([df, new_data_df], ignore_index=True)

# 将合并后的DataFrame写入Excel文件
df.to_excel('data.xlsx', index=False)