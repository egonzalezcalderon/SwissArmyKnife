package com.enggc.SwissArmyKnife.presentation.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {

	@RequestMapping(value="/pm/home", method = RequestMethod.GET)
	public String pmHome() {
		return "pmHome";
	}   	
	
	@RequestMapping(value="/resource/home", method = RequestMethod.GET)
	public String resourceHome() {
		return "resourceHome";
	}   	
	
	@RequestMapping(value="/admin/home", method = RequestMethod.GET)
	public String adminHome() {
		return "adminHome";
	}   
	
	@RequestMapping(value="/", method = RequestMethod.GET)
	public String base() {
		return "login";
	}

	@RequestMapping(value="/login", method = RequestMethod.GET)
	public String login() {
		return "login";
	}

	@RequestMapping(value="/error", method = RequestMethod.GET)
	public String error() {
		return "error";
	}
	
}
