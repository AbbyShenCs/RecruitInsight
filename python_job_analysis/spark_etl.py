from pyspark.sql import SparkSession

csv_format = 'com.databricks.spark.csv'
job_hdfs_path = "hdfs://localhost:9000/job/input"
mysql_url = "jdbc:mysql://localhost:3396/job"
prop = {'user': 'root', 'password': '123456', 'driver': "com.mysql.jdbc.Driver"}


def start_etl():
    # 1.创建SparkSession
    spark = SparkSession.builder.appName("etl_task").getOrCreate()
    # 2.读取本地文件路径
    job_data = spark.read.format(csv_format).options(header='true', inferschema='true', ending='utf-8').load(
        "data/job.csv")
    tuser_data = spark.read.format(csv_format).options(header='true', inferschema='true', ending='utf-8').load(
        "data/tuser.csv")
    # 3.将合并数据并保存到hdfs中
    job_data.write.mode("overwrite").options(header="true").csv(job_hdfs_path)
    # 4.将合并数据并保存到mysql中
    job_data.write.jdbc(mysql_url, 'job', 'overwrite', prop)
    tuser_data.write.jdbc(mysql_url, 't_user', 'overwrite', prop)
    pass
