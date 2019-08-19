package com.enggc.SwissArmyKnife.domain.valueobjects;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.enggc.SwissArmyKnife.configuration.constants.RoleType;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserVo implements UserDetails {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected String name;
	
	protected String password;
	
	protected String description;
	
	protected List<RoleType> roles = new ArrayList<RoleType>();
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		
		for (RoleType role : roles) {
			authorities.add(new SimpleGrantedAuthority("ROLE_"+role.getName()));
		}
		
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return name;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Agregar cuenta expirada
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Agregar usuario bloquado
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Agregar password vencido
		return true;
	}

	@Override
	public boolean isEnabled() {
		//TODO Agregar cuenta inhabilitada
		return true;
	}
	
	public boolean hasRole(RoleType role) {
		for (RoleType roleType : roles)
			if (roleType == role)
				return true;
		return false;
	}

}
