package com.tao.dao;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import com.tao.Entity.User;

public class UserDao {
	
	public static SqlSession getSession() throws Exception{
		String resource = "mybatisConfig.xml";
		InputStream inputStream = Resources.getResourceAsStream(resource);
		SqlSessionFactory factory = null;
		SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();
		factory = builder.build(inputStream);
		SqlSession session = factory.openSession();
		return session;
	}
	
	
	/**
	 * 获取用户列表
	 * @return
	 * @throws Exception
	 */
	public List<User> getList() throws Exception{
		SqlSession session= UserDao.getSession();
		List<User> list = session.selectList("myMapper.selectList"); 
		
		session.close();
		return list;
		
	}
	
	/**
	 * 按id查询用户
	 * @throws Exception 
	 */
	public static User getUser(int id) throws Exception{
		SqlSession session= UserDao.getSession();
		User user = session.selectOne("myMapper.selectId",id); 
		return user;
		
	} 
	
	/**
	 * 按照用户名查询
	 * @param args
	 * @throws Exception
	 */
	public static User getUser(String name) throws Exception{
		SqlSession session= UserDao.getSession();
		User user = session.selectOne("myMapper.selectName",name); 
		return user;
	} 
	
	/**
	 * 插入用户
	 * @param user
	 * @throws Exception
	 */
	public static void insertUser(User user) throws Exception{
		SqlSession session = UserDao.getSession();
		User user1 = new User();
		user1.setId(1);
		user1.setPasswd("000000");
		user1.setUsername("chengan");
//		session.insert(user1);
		
	}
	
	
	public static void main(String[] args) throws Exception {
		User user = getUser("admin");
		System.out.println(user.getUsername());
	}
	
}
