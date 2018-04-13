package com.tao.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tao.Entity.User;
import com.tao.dao.UserDao;

@Controller
@RequestMapping("/user")
public class UserJudge {
	@RequestMapping(value="/login", produces = "application/json;charset=utf-8")
    @ResponseBody
    public String getNamePasswd(HttpServletRequest req, HttpServletResponse resp) throws Exception{
		String reString = req.getParameter("username");
		String password = req.getParameter("password");
		UserDao userDao = new UserDao();
		List<User> list = userDao.getList();
		for (User user : list){
			if(user.getUsername().equals(reString)){
				if(user.getPasswd().equals(password)){
					return "success";
				}else{
					return "你的密码错误";
				}
			}else{
				return "你的用户名错误";
			}
		}
		return "false";
	} 
}
