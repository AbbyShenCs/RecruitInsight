package com.job.mapper;

import com.job.bean.Job;
import org.apache.ibatis.annotations.Select;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;
import java.util.Map;

/**
 * 职位数据dao层接口
 */
public interface JobMapper extends Mapper<Job> {

    /**
     * 工作经验与薪水的关系
     */
    @Select("SELECT * FROM task1 ORDER BY avg_job_salary DESC")
    List<Map<String, Integer>> getTask1();

    /**
     * 各公司性质工资最好的TOP10城市
     */
    @Select("SELECT * FROM task2 WHERE job_company_type = #{job_company_type} ORDER BY rn ASC")
    List<Map<String, Integer>> getTask2(String job_company_type);

    /**
     * 学历与薪水的关系
     */
    @Select("SELECT * FROM task3 ORDER BY job_degree_id DESC")
    List<Map<String, Integer>> getTask3();

    /**
     * 各城市公司规模发布职位占比分析
     */
    @Select("SELECT * FROM task4 WHERE job_city = #{job_city} ORDER BY job_company_size_id ASC")
    List<Map<String, Integer>> getTask4(String job_city);

    /**
     * 2020年1月-2020年6月，各城市招聘职位数量趋势图
     */
    @Select("SELECT * FROM task5 WHERE job_city = #{job_city} ORDER BY month_job_date ASC")
    List<Map<String, Integer>> getTask5(String job_city);

    /**
     * 薪水与发布职位数量关系占比分析
     */
    @Select("SELECT * FROM task6 ORDER BY job_id_count DESC")
    List<Map<String, Integer>> getTask6();

    /**
     * 各城市职位平均薪资涨幅变化趋势图
     */
    @Select("SELECT * FROM task7 WHERE job_city = #{job_city} ORDER BY month_job_date ASC")
    List<Map<String, Integer>> getTask7(String job_city);

}
