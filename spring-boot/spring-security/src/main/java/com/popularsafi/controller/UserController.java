package com.popularsafi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController {
    @GetMapping(value={"/", "/login"})
    public ModelAndView login(){
        ModelAndView model=new ModelAndView("login");
        return model;
    }
}
