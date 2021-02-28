export interface LoginResponse { // The same as "AuthenticationResponse" in the backend side
    authenticationToken: string;
    refreshToken: string;
    expiresAt: Date;
    username: string;
}