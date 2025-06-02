package com.cognizant.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;

@Configuration
public class DemoSecurityConfig {
	
	@Autowired
	CustomAuthenticationSuccessHandler customAuthenticationSuccessHandler;

  @Bean
  public UserDetailsManager userDetailsManager(DataSource dataSource){
      JdbcUserDetailsManager jdbcUserDetailsManager=new JdbcUserDetailsManager(dataSource);

      // define query to retrieve a user by username
      jdbcUserDetailsManager.setUsersByUsernameQuery("select user_id,pw,active from members where user_id=?");

      //define query to retrieve the authorities/roles by username
      jdbcUserDetailsManager.setAuthoritiesByUsernameQuery("select user_id,role from roles where user_id=?");
      return jdbcUserDetailsManager;
  }
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
      http.authorizeHttpRequests(configurer ->
                          configurer
//                          		.requestMatchers("/signup").permitAll() 
                                  .requestMatchers("/").hasRole("EMPLOYEE")
                                  .requestMatchers("/leaders").hasRole("MAINTAINENCEHEAD")
                                  .requestMatchers("/systems").hasRole("ROOMMANAGEMENTHEAD")
                                  .anyRequest().authenticated()
              )
              .formLogin(form ->
                      form
                              .loginPage("/showMyLoginPage")
                              .loginProcessingUrl("/authenticateTheUser")
                              .successHandler(customAuthenticationSuccessHandler)
                              .permitAll()
              )
              .logout(logout->logout.permitAll()
              )
              .exceptionHandling(configurer->
                      configurer.accessDeniedPage("/access-denied")
              );
//      http.sessionManagement(session -> session
//    		    .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
//    		);

      return http.build();
  }
}

//<a th:href="@{http://localhost:8083/api/listRooms}">maintainence</a>
//<a th:href="@{http://localhost:8083/api/listRooms}">room booking</a>
