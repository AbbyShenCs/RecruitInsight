package com.job.service.impl;


import com.job.bean.TUser;
import com.job.mapper.TUserMapper;
import com.job.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

/**
 * 用户服务接口实现类
 */
@Service //标识为服务类
public class UserServiceImpl implements IUserService {

    /**
     * 注入用户管理接口
     */
    @Autowired
    private TUserMapper userDao;

    /**
     * 用户注册
     */
    @Override
    public Integer reg(TUser user) {
        return userDao.insert(user);
    }

    /**
     * 用户登录
     */
    @Override
    public TUser login(TUser user) {
        Example example = new Example(TUser.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("username", user.getUsername());
        criteria.andEqualTo("password", user.getPassword());
        return userDao.selectOneByExample(example);
    }

}
