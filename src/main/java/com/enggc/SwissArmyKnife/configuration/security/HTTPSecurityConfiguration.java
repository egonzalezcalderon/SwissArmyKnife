package com.enggc.SwissArmyKnife.configuration.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.enggc.SwissArmyKnife.configuration.constants.RoleType;
import com.enggc.SwissArmyKnife.domain.services.AuthenticationService;

@Configuration
@EnableWebSecurity
public class HTTPSecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
    protected HTTPAccessDeniedHandler httpAccessDeniedHandler;
	
	@Autowired
    protected HTTPAccessSuccessHandler httpAccessSuccessHandler;
	
	@Autowired
	protected AuthenticationService authenticationService;
	
	@Autowired
	protected PasswordEncoder passwordEncoder;
	
	@Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/bootstrap/**").permitAll()
                .antMatchers("/charts/**").permitAll()
                .antMatchers("/cleave/**").permitAll()
                .antMatchers("/datatables/**").permitAll()
                .antMatchers("/fontawesome/**").permitAll()
                .antMatchers("/images/**").permitAll()
                .antMatchers("/parsley/**").permitAll()
                .antMatchers("/premonish/**").permitAll()
                .antMatchers("/error").permitAll()
                .antMatchers("/admin/**").hasAnyRole(RoleType.ADMINISTRATOR.getName())
                .antMatchers("/pm/**").hasAnyRole(RoleType.PROJECT_MANAGER.getName())
                .antMatchers("/resource/**").hasAnyRole(RoleType.RESOURCE.getName())
                .anyRequest().authenticated()
                .and()
                .formLogin().loginPage("/login").successHandler(httpAccessSuccessHandler).permitAll()
                .and()
                .logout().permitAll()
                .and()
                .exceptionHandling().accessDeniedHandler(httpAccessDeniedHandler);
        http.headers().frameOptions().disable();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
    	auth.userDetailsService(authenticationService).passwordEncoder(passwordEncoder);
    	
//    	auth.inMemoryAuthentication()
//                .withUser(RoleType.ADMINISTRATOR.getName()).password("inicio").roles("MAINTENANCE")
//                .and()
//                .withUser("administrador").password("inicio").roles("ADMIN");
    }
	
}
