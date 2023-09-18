package com.job.controller;

import com.job.bean.ResultObject;
import com.job.bean.TUser;
import com.job.service.IUserService;
import com.job.util.Constant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * 用户的控制器
 */
@RequestMapping("/user")
@RestController//标识为返回类型为Json的控制器
public class UserController {

    //自动注入服务类
    @Autowired
    private IUserService userService;

    /**
     * 用户登录
     */
    @RequestMapping("/adminlogin")
    public ResultObject<TUser> adminlogin(TUser user, HttpServletRequest request) {
        ResultObject<TUser> rs = new ResultObject<TUser>();
        if (!user.getUsername().equals("admin")) {
            // 1.状态码
            rs.setCode(Constant.FAILURE_RETUEN_CODE);
            // 2.提示
            rs.setMsg("用户名密码错误");
            return rs;
        }
        // 3.获取session对象
        HttpSession session = request.getSession(true);
        // 4.查询用户列表
        TUser loginResult = userService.login(user);
        if (loginResult == null) {
            // 5.查询用户列表
            rs.setCode(Constant.FAILURE_RETUEN_CODE);
            // 6.提示
            rs.setMsg("用户名密码错误");
        } else {
            // 7.状态码
            rs.setCode(Constant.SUCCESS_RETUEN_CODE);
            session.setAttribute("user", loginResult);
            // 8.提示
            rs.setMsg("登录成功");
        }
        // 9.数据
        rs.setData(loginResult);
        return rs;
    }

    /**
     * 获取当前登录的用户信息
     */
    @RequestMapping("/getLoginUser")
    public ResultObject<Object> getLoginUser(HttpServletRequest request) {
        // 1.查询用户列表
        ResultObject<Object> rs = new ResultObject<Object>();
        if (request.getSession().getAttribute("user") != null) {
            TUser loginUser = (TUser) request.getSession().getAttribute("user");
            // 2.数据
            rs.setCode(Constant.SUCCESS_RETUEN_CODE);
            rs.setMsg("user");
            rs.setData(loginUser);
        }
        return rs;
    }

}
