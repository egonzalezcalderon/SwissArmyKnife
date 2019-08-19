package com.enggc.SwissArmyKnife.configuration.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.enggc.SwissArmyKnife.configuration.constants.RoleType;
import com.enggc.SwissArmyKnife.domain.valueobjects.UserVo;

@Component
public class HTTPAccessSuccessHandler implements AuthenticationSuccessHandler {

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		UserVo logedUser = (UserVo) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
		response.sendRedirect(request.getContextPath() + "/error");
		if (logedUser.hasRole(RoleType.ADMINISTRATOR)) {
			response.sendRedirect(request.getContextPath() + "/admin/home");
		} else if (logedUser.hasRole(RoleType.PROJECT_MANAGER)) {
			response.sendRedirect(request.getContextPath() + "/pm/home");			
		} else if (logedUser.hasRole(RoleType.RESOURCE)) {
			response.sendRedirect(request.getContextPath() + "/resource/home");			
		}
	}

}