# [Spring Boot] 3.1.0 버전 업데이트

최근 2.4.1 버전을 쓰던 Spring Boot를 3.1.0으로 업데이트했다.



## 변경사항

버전을 올리면서 다음과 같은 변경사항들이 생겼다.



1. **javax** -> **jakarta** 
   - javax가 아니라 jakarta를 사용
   - 관리 주체가 이클립스 재단으로 바뀌어서 그렇다고 한다

2. **springfox** -> **springdoc**

   - Swagger를 사용하기 위해 썼던 springfox를 대신 springdoc을 사용했다.
   - springfox에는 jakarta를 지원하지 않기 때문

3. **Spring Security 6**

   - Spring Security 6을 사용하면서 SecurityConfig.java가 많이 바뀌었다.

   - WebSecurityConfigurerAdapter 를 더이상 상속받지 않는 대신 Bean 객체를 이용해서 설정한다.

     ```java
     // 변경 전
     @Override
     protected void configure(AuthenticationManagerBuilder auth) {
         auth.authenticationProvider(rememberMeAuthenticationProvider());
         auth.authenticationProvider(new CustomAuthenticationProvider(REMEMBER_ME_KEY, customUserDetailsService));
     }
     
     authenticationManager();
     ```

     ```java
     // 변경 후
     @Bean
     public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
         AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
         authenticationManagerBuilder.authenticationProvider(rememberMeAuthenticationProvider());
         authenticationManagerBuilder.authenticationProvider(new CustomAuthenticationProvider(REMEMBER_ME_KEY, customUserDetailsService));
         return authenticationManagerBuilder.build();
     }
     
     authenticationManager(http);
     ```

   - HttpSecurity 관련 많은 메서드들이 deprecated 됐다. 기본적으로 and()를 사용하지 않고 lambda 형식으로 속성을 설정하는 것으로 바뀌었다.

     ```java
     // 변경 전
     @Override
     protected void configure(HttpSecurity http) throws Exception {
         http.csrf().disable()
             .cors().configurationSource(corsConfigurationSource())
             .and()
             .authorizeRequests()
             .antMatchers("/admin/*").authenticated()
             .anyrequest().permitAll()
             .and()
             .exceptionHandling()
             .accessDeniedHandler(webAccessDeniedHandler)
             .authenticationEntryPoint(webAuthenticationEntryPoint)
         ;
     }
     ```

     ```java
     // 변경 후
     @Bean
     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
         http.csrf(AbstractHttpConfigurer::disable)
             .cors(httpSecurityCorsConfigurer -> httpSecurityCorsConfigurer.configurationSource(corsConfigurationSource()))
             .authorizeHttpRequests(requests->requests
                 .requestMatchers("/admin/*").authenticated()
                 .anyRequest().permitAll()
             )
             .exceptionHandling(exception->exception
                 .accessDeniedHandler(webAccessDeniedHandler)
                 .authenticationEntryPoint(webAuthenticationEntryPoint)
             )
         ;
         return http.build();
     }
     ```

4. 나의 경우는 Entity의 컬럼으로 사용하던 예약어들을 사용할 수 없었다.

   - Holiday Entity에 있던 date, name, year, month, day를 사용할 수 없어서 컬럼명 앞에 "holiday_"를 추가했다.