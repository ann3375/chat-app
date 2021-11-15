class LocalStorageUtils {
  private accessToken = 'accessToken';

  clearLocalStorage(): void {
    localStorage.removeItem(this.accessToken);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessToken);
  }

  setAccessToken(token: string): void {
    return localStorage.setItem(this.accessToken, token);
  }
}

export const localStorageUtils = new LocalStorageUtils();
