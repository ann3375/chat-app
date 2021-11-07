class LocalStorageUtils {
  private accessToken = 'accessToken';

  removeToken(): void {
    localStorage.removeItem(this.accessToken);
  }

  clearLocalStorage(): void {
    this.removeToken();
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessToken);
  }

  setAccessToken(token: string): void {
    return localStorage.setItem(this.accessToken, token);
  }
}

export const localStorageUtils = new LocalStorageUtils();
