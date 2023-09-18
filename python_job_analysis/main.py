from create_user import start_create_user
from create_job import start_create_job
from spark_etl import start_etl
from spark_task import start_spark_task

def isNumber(strNum:str):
    try:
        number = float(strNum)
        return 1
    except ValueError:
        return 0


if __name__ == '__main__':

    # 1.构建用户数据集
    #start_create_user()
    # 2.爬取职位信息并清洗
    #start_create_job()
    # 4.将数据导入到MySQL和HDFS
    start_etl()
    # 6.读取HDFS的数据进行计算并将结果保存到Mysql
    start_spark_task()
