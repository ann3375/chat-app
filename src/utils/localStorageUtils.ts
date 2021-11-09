class LocalStorageUtils {
  private accessToken = 'accessToken';
  private username = 'username';

  clearLocalStorage(): void {
    localStorage.removeItem(this.accessToken);
    localStorage.removeItem(this.username);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessToken);
  }

  getUsername(): string | null {
    return localStorage.getItem(this.username);
  }

  setAccessToken(token: string): void {
    return localStorage.setItem(this.accessToken, token);
  }

  setUsername(username: string): void {
    return localStorage.setItem(this.username, username);
  }
}

export const localStorageUtils = new LocalStorageUtils();
