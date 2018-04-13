package com.tao.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/user")
public class UserJudge {
	@RequestMapping(value="/login", produces = "application/json;charset=utf-8")
    @ResponseBody
    public boolean getNamePasswd(HttpServletRequest req, HttpServletResponse resp){
		String reString = req.getParameter("username");
		String password = req.getParameter("password");
		
		System.out.println(reString+":"+password);
		
		return false;
		
	} 
}
