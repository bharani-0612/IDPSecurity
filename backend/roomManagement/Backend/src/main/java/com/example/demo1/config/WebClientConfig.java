//package com.example.demo1.config;
//
//import org.springframework.context.annotation.Bean;
//
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//import org.springframework.context.annotation.Configuration;
////import org.springframework.web.reactive.function.client.WebClient;
////
////import org.springframework.context.annotation.Bean;
////
////import org.springframework.context.annotation.Configuration;
////
////import org.springframework.web.servlet.config.annotation.CorsRegistry;
////
////import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
// 
//@Configuration
//
//public class WebClientConfig {
//
//    @Bean
//
//    public WebMvcConfigurer corsConfigurer() {
//
//        return new WebMvcConfigurer() {
//
//            @Override
//
//            public void addCorsMappings(CorsRegistry registry) {
//
//                registry.addMapping("/**")
//
//                        .allowedOrigins("http://localhost:3000") // React dev server
//
//                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
//
//                        .allowedHeaders("*");
//
//            }
//
//        };
//
//    }
//
//}
//
// 
//	
//
////@Bean
////    public WebMvcConfigurer corsConfigurer() {
////		return new WebMvcConfigurer() {
////			Mapping("/**")
////                        .allowedOrigins("http://localhost:3000")
////                        .allowedMethods("GET", "POST", "PUT", "DELETE")
////                        .allowedHeaders("*");
////            }
////        };
////    }
//
//
