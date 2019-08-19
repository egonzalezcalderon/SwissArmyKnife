package com.enggc.SwissArmyKnife.domain.services;

import org.springframework.stereotype.Service;

import com.enggc.SwissArmyKnife.configuration.constants.RoleType;
import com.enggc.SwissArmyKnife.domain.errors.DomainErrorMessages;
import com.enggc.SwissArmyKnife.domain.valueobjects.UserVo;
import com.enggc.SwissArmyKnife.persistance.entities.RoleEntity;
import com.enggc.SwissArmyKnife.persistance.entities.UserEntity;
import com.enggc.SwissArmyKnife.persistance.repositories.UserRepository;
import com.enggc.SwissArmyKnife.tools.MappingTool;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Service
public class AuthenticationService implements UserDetailsService {

	@Autowired
	protected UserRepository userRepository;
	
	@Autowired
	protected DomainErrorMessages domainErrorMessages;
	
	@Autowired
	protected MappingTool mappingTool;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		UserEntity user = userRepository.getUserByName(username);

		if (user == null) {
			throw new UsernameNotFoundException(domainErrorMessages.getMessage().get("userNotFound"));
		}
		
		UserVo userVo = (UserVo) mappingTool.map(user, UserVo.class);
		
		List<RoleEntity> roles = user.getRoles();
		
		for (RoleEntity role : roles) {
			userVo.getRoles().add(RoleType.fromName(role.getName()));
		}
		
		return userVo;
	}

}
