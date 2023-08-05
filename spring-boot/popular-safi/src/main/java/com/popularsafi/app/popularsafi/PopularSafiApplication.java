package com.popularsafi.app.popularsafi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
(scanBasePackages={"com.popularsafi.app.popularsafi", "com.popularsafi.app.popularsafi.controller", "com.popularsafi.app.popularsafi.repo", "com.popularsafi.app.popularsafi.bean"})
@ComponentScan(basePackages = {"com.popularsafi.app.popularsafi", "com.popularsafi.app.popularsafi.controller", "com.popularsafi.app.popularsafi.repo", "com.popularsafi.app.popularsafi.bean"})
@EnableJpaRepositories("com.popularsafi.app.popularsafi.repo")
@EntityScan("com.popularsafi.app.popularsafi.bean") 
public class PopularSafiApplication {

	public static void main(String[] args) {
		SpringApplication.run(PopularSafiApplication.class, args);
	}
}
