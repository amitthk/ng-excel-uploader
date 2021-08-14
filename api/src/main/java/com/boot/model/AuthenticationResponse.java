package com.boot.model;
import lombok.*;

@Getter @Setter
public class AuthenticationResponse {

    private String jwt;
    public AuthenticationResponse(String jwt) {
        this.jwt=jwt;
    }
}
