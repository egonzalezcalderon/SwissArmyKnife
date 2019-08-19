package com.enggc.SwissArmyKnife.tools;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MappingTool {

	@Autowired
	protected ModelMapper modelMapper;
	
	public Object map(Object source, Class<?> destinationClass) {
		return modelMapper.map(source, destinationClass);
	}
	
}
