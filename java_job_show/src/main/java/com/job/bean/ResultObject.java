package com.job.bean;

/**
 * 该类用于自定义jonsn串的输出
 * @param <T>
 */
public class ResultObject<T> {

    /**
     * 信息code
     */
    private String code;
    /**
     * 信息文本
     */
    private String msg;
    /**
     * 包括的数据
     */
    private T data;
    /**
     * 数据条数
     */
    private Long count;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }

}
