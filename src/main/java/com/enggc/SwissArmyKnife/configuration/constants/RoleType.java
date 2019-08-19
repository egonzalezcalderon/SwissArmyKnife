package com.enggc.SwissArmyKnife.configuration.constants;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum RoleType {
	ADMINISTRATOR(1, "ADMIN"),
	PROJECT_MANAGER(2, "PM"),
	RESOURCE(3, "RESOURCE");

	private Integer code;
	private String name;
	
	public static RoleType fromName(String name) {
		for (RoleType roleType : RoleType.values())
			if (roleType.getName().equals(name))
				return roleType; 
		return null;	
	}
	
}
