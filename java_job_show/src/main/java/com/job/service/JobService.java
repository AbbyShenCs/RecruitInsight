package com.job.service;

import com.github.pagehelper.PageInfo;
import com.job.bean.Job;


import java.util.List;

/**
 * 职位数据接口
 */
public interface JobService {

    /**
     * 模糊查询职位数据
     */
    PageInfo<Job> getAllJob(Job job, int limit, int page);

    /**
     * 工作经验与薪水的关系
     */
    List<Integer> getTask1();

    /**
     * 各公司性质工资最好的TOP10城市
     */
    List<Integer> getTask2(String job_company_type);

    /**
     * 学历与薪水的关系
     */
    List<Integer> getTask3();

    /**
     * 各城市公司规模发布职位占比分析
     */
    List<Integer> getTask4(String job_city);

    /**
     * 2020年1月-2020年6月，各城市招聘职位数量趋势图
     */
    List<Integer> getTask5(String job_city);

    /**
     * 薪水与发布职位数量关系占比分析
     */
    List<Integer> getTask6();

    /**
     * 各城市职位平均薪资涨幅变化趋势图
     */
    List<Integer> getTask7(String job_city);
}
