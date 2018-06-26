const ACCESS_TOKEN = 'ACCESS_TOKEN';
const REFRESH_TOKEN = 'REFRESH_TOKEN';
const EXPIRED = 'EXPIRED';
const USER_DATA = 'USER_DATA';

export function getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN);
}

export function setRefreshToken(refreshToken) {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
}

export function getExpired() {
    return localStorage.getItem(EXPIRED);
}

export function setExpired(expired) {
    localStorage.setItem(EXPIRED, expired);
}

export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN);
}

export function setAccessToken(accessToken) {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
}

export function setUserData(user) {
    localStorage.setItem(USER_DATA, JSON.stringify(user));
}
export function getUserData() {
    return localStorage.getItem(USER_DATA);
}

export function isLoggedIn() {
    let accessToken = getAccessToken();
    let expired = getExpired();

    return !!accessToken && !isAccessTokenExpired(expired);
}

export function login(dataToken) {
    setAccessToken(dataToken.access_token);
    setRefreshToken(dataToken.refresh_token);
    setExpired(dataToken.expires_in);
    setUserData(dataToken.data);
}

export function logout() {
    clearAccessToken();
    clearRefreshToken();
    clearExpired();
    clearUserData();

    window.location.href = '/login';
}

export function authHeader() {
    return isLoggedIn() ? { 'Authorization': 'Bearer ' + getAccessToken() } : {};
}

function clearAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN);
}

function clearRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN);
}

function clearExpired() {
    localStorage.removeItem(EXPIRED);
}

function clearUserData() {
    localStorage.removeItem(USER_DATA);
}

function isAccessTokenExpired(expired) {
    let date = new Date();
    date = date.getMilliseconds() * 1000;

    return expired < date;
}