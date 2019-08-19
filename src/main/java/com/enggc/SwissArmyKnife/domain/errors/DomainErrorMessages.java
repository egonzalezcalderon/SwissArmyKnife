package com.enggc.SwissArmyKnife.domain.errors;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import lombok.Getter;

@Configuration
@PropertySource("classpath:domainerrormessages.properties")
@ConfigurationProperties
@Getter
public class DomainErrorMessages {

	protected final Map<String, String> message = new HashMap<String, String>();
	
}
