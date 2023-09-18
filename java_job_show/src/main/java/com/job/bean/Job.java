package com.job.bean;

/**
 * 职位实体类
 */
public class Job {

    /**
     * 职位ID
     */
    private Integer job_id;

    /**
     * 职位名称
     */
    private String job_name;

    /**
     * 职位薪资
     */
    private Integer job_salary;

    /**
     * 学历
     */
    private String job_degree;

    /**
     * 工作年份
     */
    private String job_work_year;

    /**
     * 公司规模
     */
    private String job_company_size;

    /**
     * 公司性质
     */
    private String job_company_type;

    /**
     * 城市
     */
    private String job_city;

    /**
     * 发布日期
     */
    private String job_date;

    public Job() {
    }

    public Job(Integer job_id, String job_name, Integer job_salary, String job_degree, String job_work_year, String job_company_size, String job_company_type, String job_city, String job_date) {
        this.job_id = job_id;
        this.job_name = job_name;
        this.job_salary = job_salary;
        this.job_degree = job_degree;
        this.job_work_year = job_work_year;
        this.job_company_size = job_company_size;
        this.job_company_type = job_company_type;
        this.job_city = job_city;
        this.job_date = job_date;
    }

    public Integer getJob_id() {
        return job_id;
    }

    public void setJob_id(Integer job_id) {
        this.job_id = job_id;
    }

    public String getJob_name() {
        return job_name;
    }

    public void setJob_name(String job_name) {
        this.job_name = job_name;
    }

    public Integer getJob_salary() {
        return job_salary;
    }

    public void setJob_salary(Integer job_salary) {
        this.job_salary = job_salary;
    }

    public String getJob_degree() {
        return job_degree;
    }

    public void setJob_degree(String job_degree) {
        this.job_degree = job_degree;
    }

    public String getJob_work_year() {
        return job_work_year;
    }

    public void setJob_work_year(String job_work_year) {
        this.job_work_year = job_work_year;
    }

    public String getJob_company_size() {
        return job_company_size;
    }

    public void setJob_company_size(String job_company_size) {
        this.job_company_size = job_company_size;
    }

    public String getJob_company_type() {
        return job_company_type;
    }

    public void setJob_company_type(String job_company_type) {
        this.job_company_type = job_company_type;
    }

    public String getJob_city() {
        return job_city;
    }

    public void setJob_city(String job_city) {
        this.job_city = job_city;
    }

    public String getJob_date() {
        return job_date;
    }

    public void setJob_date(String job_date) {
        this.job_date = job_date;
    }
}
