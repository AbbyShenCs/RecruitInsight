import requests
import random
import time
import csv
from bs4 import BeautifulSoup

# 城市列表
city_list = [
    {'name': '上海', 'value': '020000'}
    , {'name': '天津', 'value': '050000'}
    , {'name': '重庆', 'value': '060000'}
    , {'name': '哈尔滨', 'value': '220200'}
    , {'name': '长春', 'value': '240200'}
    , {'name': '沈阳', 'value': '230200'}
    , {'name': '石家庄', 'value': '160200'}
    , {'name': '兰州', 'value': '270200'}
    , {'name': '西宁', 'value': '320200'}
    , {'name': '西安', 'value': '200200'}
    , {'name': '银川', 'value': '290200'}
    , {'name': '郑州', 'value': '170200'}
    , {'name': '济南', 'value': '120200'}
    , {'name': '太原', 'value': '210200'}
    , {'name': '合肥', 'value': '150200'}
    , {'name': '长沙', 'value': '190200'}
    , {'name': '武汉', 'value': '180200'}
    , {'name': '南京', 'value': '070200'}
    , {'name': '成都', 'value': '090200'}
    , {'name': '贵阳', 'value': '260200'}
    , {'name': '昆明', 'value': '250200'}
    , {'name': '南宁', 'value': '140200'}
    , {'name': '杭州', 'value': '080200'}
    , {'name': '南昌', 'value': '130200'}
    , {'name': '广州', 'value': '030200'}
    , {'name': '福州', 'value': '110200'}
]
# 定义学历(字典值)
job_degree_list = ['初中及以下', '高中/中技/中专', '大专', '本科', '硕士', '博士', '无学历要求']
# 定义工作经验(字典值)
job_work_year_list = ['1-3年', '3-5年', '5-10年', '10年以上', '无需经验']
# 定义公司规模(字典值)
job_company_size_list = ['少于50人', '50-150人', '150-500人', '500-1000人', '1000-1500人', '1500-5000人', '5000-10000人',
                         '10000人以上']
# 定义公司性质(字典值)
job_company_type_list = ['国企', '外资', '上市公司', '合资', '民营企业', '外企代表处', '政府机关', '事业单位']

headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/84.0.4147.105 Safari/537.36"}


# 根据工作经验返回不同薪资区间
def get_job_salary(data_degree: str, data_year: str):
    if data_degree == '初中及以下' or data_degree == '无学历要求':
        if data_year == '无需经验':
            return random.randint(2000, 2400)
        if data_year == '1-3年':
            return random.randint(2400, 2800)
        if data_year == '3-5年':
            return random.randint(2800, 3200)
        if data_year == '5-10年':
            return random.randint(3200, 3600)
        if data_year == '10年以上':
            return random.randint(3600, 4000)
    if data_degree == '高中/中技/中专':
        if data_year == '无需经验':
            return random.randint(4000, 4800)
        if data_year == '1-3年':
            return random.randint(4800, 5600)
        if data_year == '3-5年':
            return random.randint(5600, 6400)
        if data_year == '5-10年':
            return random.randint(6400, 7200)
        if data_year == '10年以上':
            return random.randint(7200, 8000)
    if data_degree == '大专':
        if data_year == '无需经验':
            return random.randint(8000, 8800)
        if data_year == '1-3年':
            return random.randint(8800, 9600)
        if data_year == '3-5年':
            return random.randint(9600, 10400)
        if data_year == '5-10年':
            return random.randint(10400, 11200)
        if data_year == '10年以上':
            return random.randint(11200, 12000)
    if data_degree == '本科':
        if data_year == '无需经验':
            return random.randint(12000, 12800)
        if data_year == '1-3年':
            return random.randint(12800, 13600)
        if data_year == '3-5年':
            return random.randint(13600, 14400)
        if data_year == '5-10年':
            return random.randint(14400, 15200)
        if data_year == '10年以上':
            return random.randint(15200, 16000)
    if data_degree == '硕士':
        if data_year == '无需经验':
            return random.randint(16000, 16800)
        if data_year == '1-3年':
            return random.randint(16800, 17600)
        if data_year == '3-5年':
            return random.randint(17600, 18400)
        if data_year == '5-10年':
            return random.randint(18400, 19200)
        if data_year == '10年以上':
            return random.randint(19200, 20000)
    if data_degree == '博士':
        if data_year == '无需经验':
            return random.randint(20000, 20800)
        if data_year == '1-3年':
            return random.randint(20800, 21600)
        if data_year == '3-5年':
            return random.randint(21600, 22400)
        if data_year == '5-10年':
            return random.randint(22400, 23200)
        if data_year == '10年以上':
            return random.randint(23200, 24000)

#判断是否是数字
def isNumber(strNum:str):
    try:
        #如果强制转换没有异常说明是数字
        number = float(strNum)
        #返回1
        return 1
    except ValueError:
        #有异常返回0
        return 0

#得到薪水
def getSalary(job_salary: str, data_degree: str, data_year: str):
    try:
        if '\/月' in job_salary:
            xs=1000
            moneyUnit=job_salary[-4:-3]
            if '千' == moneyUnit:
                xs=1000
            if '万' == moneyUnit:
                xs=10000
            strlen=len(job_salary)
            mystr=job_salary[0:strlen-4]
            minstr=mystr.split('-')[0]
            maxstr=mystr.split('-')[1]
            print(minstr+'='+maxstr)
            if isNumber(minstr)==1 and isNumber(maxstr)==1:
                floatMinSalary = float(minstr)*xs
                floatMaxSalary = float(maxstr)*xs
                #返回最大值与最小值的中间值
                return (int)((floatMinSalary+floatMaxSalary)/2.0)
        else:
            #出现数据异常，返回按年限取不同的薪水
            return  get_job_salary(data_degree,data_year)
    #出现数据异常，返回按年限取不同的薪水
    except Exception as e:
        return get_job_salary(data_degree, data_year)


def start_create_job():
    # 1.打开文件，追加a
    out = open(r"data/job1.csv", 'w', newline='', encoding='utf-8')
    # 2.设置写入模式
    csv_write = csv.writer(out, dialect='excel')
    # 3.设置用户csv文件头行
    job_head = ['job_id', 'job_name', 'job_salary', 'job_degree', 'job_work_year', 'job_company_size',
                'job_company_type', 'job_city', 'job_date']
    # 4.写入头行
    csv_write.writerow(job_head)
    # 5.初始化职位ID
    job_id = 0
    # 6.遍历城市列表
    for city in city_list:
        # 7.遍历页数
        for i in range(1, 150):
            # 8.将城市编号和页数加载到Url当中
            url = "https://search.51job.com/list/{},000000,0000,00,9,99,+,2," \
                  "{}.html?lang=c&postchannel=0000&workyear=99&cotype=99&degreefrom=99&jobterm=99&companysize=99" \
                  "&ord_field=0&dibiaoid=0&line=&welfare=".format(city['value'], i)
            # 9.构造一个向服务器请求资源的url对象。
            rep = requests.get(url, headers=headers)
            # 10.遇到异常抛出
            rep.raise_for_status()
            # 11.设置编码
            rep.encoding = rep.apparent_encoding
            # 12.获取HTML
            html = rep.text
            # 13.创建BeautifulSoup
            soup = BeautifulSoup(html, "lxml")
            # 14.当前tag的所有tag子节点,并判断是否符合过滤器的条件
            text = soup.find_all("script", type="text/javascript")[2].string
            # 15.获取职位信息列表
            print(str(text))
           # data = eval(str(text).split("=", 1)[1])["engine_search_result"]
            data = eval(str(text).split("=", 1)[1])["engine_jds"]
            # 16.获取城市
            job_city = city['name']
            print(data)
            # 17.遍历职位信息列表
            for d in data:
                # 18.职位名称
                job_name = d["job_name"].replace("\\", "")
                # 19.学历
                attribute_text_list = d["attribute_text"]
                if len(attribute_text_list) >= 3:
                    job_degree = attribute_text_list[2]
                    if job_degree not in job_degree_list:
                        job_degree = random.choice(job_degree_list)
                else:
                    job_degree = random.choice(job_degree_list)
                # 20.工作经验
                if len(attribute_text_list) >= 2:
                    job_work_year = attribute_text_list[1]
                    if job_work_year not in job_work_year_list:
                        job_work_year = random.choice(job_work_year_list)
                else:
                    job_work_year = random.choice(job_work_year_list)
                # 21.薪水
                #job_salary = get_job_salary(job_degree, job_work_year)

                # 获取薪水
                job_salary = getSalary(d['providesalary_text'],job_degree, job_work_year)
                # 22.公司规模
                job_company_size = d['companysize_text']
                if job_company_size not in job_company_size_list:
                    job_company_size = random.choice(job_company_size_list)
                # 23.公司性质
                job_company_type = d['companytype_text']
                if job_company_size not in job_company_type_list:
                    job_company_type = random.choice(job_company_type_list)
                # 24.发布日期
                job_date = time.strftime("%Y-%m-%d", time.localtime(
                    random.randint(time.mktime((2020, 9, 1, 0, 0, 0, 0, 0, 0)),
                                   time.mktime((2021, 3, 1, 0, 0, 0, 0, 0, 0)))))
                # 25.构建职位对象
                job = [job_id, job_name, job_salary, job_degree, job_work_year, job_company_size, job_company_type,
                       job_city, job_date]
                # 26.职位ID递增
                job_id += 1
                # 27.输出职位信息
                print(job)
                # 28.写入职位对象
                csv_write.writerow(job)
