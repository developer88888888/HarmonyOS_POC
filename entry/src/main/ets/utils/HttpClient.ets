import axios from '@ohos/axios'
class Network {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL: baseURL,
      timeout: 10000,
    });
  }

  async get(path, params) {
    try {
      const response = await this.axiosInstance.get(path, { params });
      return response.data;
    } catch (error) {
      console.error('GET request failed:', error);
      throw error;
    }
  }

  async post(path, data) {
    try {
      const response = await this.axiosInstance.post(path, data);
      return response.data;
    } catch (error) {
      console.error('POST request failed:', error);
      throw error;
    }
  }
}