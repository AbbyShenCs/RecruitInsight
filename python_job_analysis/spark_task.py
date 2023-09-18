from pyspark.sql import SparkSession

csv_format = 'com.databricks.spark.csv'
mysql_url = "jdbc:mysql://localhost:3396/job"
prop = {'user': 'root', 'password': '123456', 'driver': "com.mysql.jdbc.Driver"}


def start_spark_task():
    # 1.创建SparkSession
    spark = SparkSession.builder.appName("spark_task").getOrCreate()
    # 2.读取本地文件路径
    job_data = spark.read.format(csv_format).options(header='true', inferschema='true', ending='utf-8').load(
        "hdfs://localhost:9000/job/input")
    # 3.创建临时表
    job_data.createOrReplaceTempView("job")
    # 4.工作经验与薪水的关系
    task1_sql = '''
    SELECT
        job_work_year
        ,ROUND(AVG(job_salary),2) AS avg_job_salary 
    FROM
        job 
    GROUP BY
        job_work_year
    '''
    spark.sql(task1_sql).write.jdbc(mysql_url, 'task1', 'overwrite', prop)
    # 5.各公司性质工资最好的TOP10城市
    task2_sql = '''
    SELECT 
        job_company_type
        ,job_city
        ,avg_job_salary
        ,rn
    FROM
        (
        SELECT
            job_company_type
            ,job_city
            ,avg_job_salary
            ,ROW_NUMBER() OVER (PARTITION BY job_company_type ORDER BY avg_job_salary DESC)  AS rn 
        FROM
            (
            SELECT 
                job_company_type
                ,job_city
                ,ROUND(AVG(job_salary),2) AS avg_job_salary
            FROM 
                job
            GROUP BY
                job_company_type
                ,job_city
            ) AS temp
        ) AS result
    WHERE 
        rn <= 10
    '''
    spark.sql(task2_sql).write.jdbc(mysql_url, 'task2', 'overwrite', prop)
    # 6.学历与薪水的关系
    task3_sql = '''
        SELECT
            job_degree
            ,CASE WHEN job_degree = '无学历要求' THEN 0
                    WHEN job_degree = '初中及以下' THEN 1
                    WHEN job_degree = '高中/中技/中专' THEN 2
                    WHEN job_degree = '大专' THEN 3
                    WHEN job_degree = '本科' THEN 4
                    WHEN job_degree = '硕士' THEN 5
                    WHEN job_degree = '博士' THEN 6 END AS job_degree_id
            ,ROUND(AVG(job_salary),2) AS avg_job_salary 
        FROM
            job 
        GROUP BY
            job_degree
        '''
    spark.sql(task3_sql).write.jdbc(mysql_url, 'task3', 'overwrite', prop)
    # 7.各城市公司规模发布职位占比分析
    task4_sql = '''
        SELECT
            job_city
            ,job_company_size
            ,CASE WHEN job_company_size = '少于50人' THEN 0
                    WHEN job_company_size = '50-150人' THEN 1
                    WHEN job_company_size = '150-500人' THEN 2
                    WHEN job_company_size = '500-1000人' THEN 3
                    WHEN job_company_size = '1000-1500人' THEN 4
                    WHEN job_company_size = '1500-5000人' THEN 5
                    WHEN job_company_size = '5000-10000人' THEN 6
                    ELSE 7 END AS job_company_size_id
            ,COUNT(job_id) AS job_id_count
        FROM
            job 
        GROUP BY
            job_city
            ,job_company_size
        '''
    spark.sql(task4_sql).write.jdbc(mysql_url, 'task4', 'overwrite', prop)
    # 8.2020年1月-2020年6月，各城市招聘职位数量趋势图
    task5_sql = '''
        SELECT
            job_city
            ,MONTH(job_date) AS month_job_date
            ,COUNT(job_id) AS job_id_count
        FROM
            job
        GROUP BY
            job_city
            ,MONTH(job_date)
        '''
    spark.sql(task5_sql).write.jdbc(mysql_url, 'task5', 'overwrite', prop)
    # 9.薪水与发布职位数量关系占比分析
    task6_sql = '''
        SELECT
            temp.job_salary_range
            ,temp.job_id_count
        FROM
            (
            SELECT
                CASE WHEN job_salary BETWEEN 2000 AND 4000 THEN 0
                    WHEN job_salary BETWEEN 4000 AND 6000 THEN 1
                    WHEN job_salary BETWEEN 6000 AND 10000 THEN 2
                    WHEN job_salary BETWEEN 10000 AND 15000 THEN 3
                    ELSE 4 END AS job_salary_range_id
                ,CASE WHEN job_salary BETWEEN 2000 AND 4000 THEN '2000-4000'
                    WHEN job_salary BETWEEN 4000 AND 6000 THEN '4000-6000'
                    WHEN job_salary BETWEEN 6000 AND 10000 THEN '6000-10000'
                    WHEN job_salary BETWEEN 10000 AND 15000 THEN '10000-15000'
                    ELSE '15000-20000' END AS job_salary_range
                ,COUNT(job_id) AS job_id_count
            FROM 
                job
            GROUP BY
                job_salary_range_id
                ,job_salary_range  
            ) AS temp
        ORDER BY
            temp.job_salary_range_id ASC
        '''
    spark.sql(task6_sql).write.jdbc(mysql_url, 'task6', 'overwrite', prop)
    # 10.各城市职位平均薪资涨幅变化趋势图
    task7_sql = '''
        SELECT
            job_city
            ,MONTH(job_date)        AS month_job_date
            ,ROUND(AVG(job_salary),2) AS avg_job_salary 
        FROM
            job
        GROUP BY
            job_city
            ,MONTH(job_date)
    '''
    spark.sql(task7_sql).write.jdbc(mysql_url, 'task7', 'overwrite', prop)
    pass
