package com.enggc.SwissArmyKnife.domain.errors;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;

import lombok.Getter;

@ConfigurationProperties
@PropertySource("classpath:domainerrormessages.properties")
@Getter
public class DomainErrorMessages {

	protected final Map<String, String> message = new HashMap<String, String>();
	
}
