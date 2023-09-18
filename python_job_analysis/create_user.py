import csv


def start_create_user():
    # 1.打开文件，追加a
    out = open(r"data/tuser.csv", 'w', newline='', encoding='utf-8')
    # 2.设置写入模式
    csv_write = csv.writer(out, dialect='excel')
    # 3.设置用户csv文件头行
    user_head = ['userid', 'username', 'password', 'realname']
    # 4.写入头行
    csv_write.writerow(user_head)
    # 5.写入用户
    csv_write.writerow([1, 'admin', 'admin', '小李'])
