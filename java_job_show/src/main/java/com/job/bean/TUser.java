package com.job.bean;

import org.springframework.stereotype.Component;

import javax.persistence.Id;

/**
 * 用户实体类
 */
@Component
public class TUser {

    /**
     * 用户ID
     */
    @Id
    private Integer userid;
    /**
     * 用户登录名称
     */
    private String username;
    /**
     * 用户登录密码
     */
    private String password;
    /**
     * 真实姓名
     */
    private String realname;

    public TUser() {

    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRealname() {
        return realname;
    }

    public void setRealname(String realname) {
        this.realname = realname;
    }

}
