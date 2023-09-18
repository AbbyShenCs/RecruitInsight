package com.job.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.job.bean.Job;
import com.job.mapper.JobMapper;
import com.job.service.JobService;
import com.mysql.cj.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

import java.util.List;


/**
 * 职位数据接口实现类
 */
@Service //标识为服务类
public class JobImpl implements JobService {

    /**
     * 注入成绩数据dao层接口
     */
    @Autowired
    private JobMapper jobMapper;

    @Override
    public PageInfo<Job> getAllJob(Job job, int limit, int page) {
        PageHelper.startPage(page, limit);
        Example example = new Example(job.getClass());
        Example.Criteria criteria = example.createCriteria();
        if (!StringUtils.isNullOrEmpty(job.getJob_name())) {
            criteria.andLike("job_name", "%" + job.getJob_name() + "%");
        }
        if (!StringUtils.isNullOrEmpty(job.getJob_city())) {
            criteria.andLike("job_city", "%" + job.getJob_city() + "%");
        }
        if (!StringUtils.isNullOrEmpty(job.getJob_degree())) {
            criteria.andLike("job_degree", "%" + job.getJob_degree() + "%");
        }
        if (!StringUtils.isNullOrEmpty(job.getJob_work_year())) {
            criteria.andLike("job_work_year", "%" + job.getJob_work_year() + "%");
        }
        if (!StringUtils.isNullOrEmpty(job.getJob_company_type())) {
            criteria.andLike("job_company_type", "%" + job.getJob_company_type() + "%");
        }
        example.setOrderByClause("job_id asc");
        List<Job> list = jobMapper.selectByExample(example);
        PageInfo<Job> pageInfo = new PageInfo<Job>(list);
        return pageInfo;
    }

    @Override
    public List getTask1() {
        return jobMapper.getTask1();
    }

    @Override
    public List getTask2(String job_company_type) {
        return jobMapper.getTask2(job_company_type);
    }

    @Override
    public List getTask3() {
        return jobMapper.getTask3();
    }

    @Override
    public List getTask4(String job_city) {
        return jobMapper.getTask4(job_city);
    }

    @Override
    public List getTask5(String job_city) {
        return jobMapper.getTask5(job_city);
    }

    @Override
    public List getTask6() {
        return jobMapper.getTask6();
    }

    @Override
    public List getTask7(String job_city) {
        return jobMapper.getTask7(job_city);
    }
}
