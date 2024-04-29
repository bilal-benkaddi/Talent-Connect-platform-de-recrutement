import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/';

const getCsrfToken = async () => {
  try {
    const response = await axios.get(apiUrl + 'csrf-token');
    return response.data.csrf_token;
  } catch (error) {
    throw error.response.data;
  }
};

const login = async (email, password) => {
  try {
    const csrfToken = await getCsrfToken();
    const response = await axios.post(apiUrl + 'login', { email, password }, {
      headers: {
        'X-CSRF-TOKEN': csrfToken
      }
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const logout = async () => {
  try {
    const csrfToken = await getCsrfToken();
    const response = await axios.post(apiUrl + 'logout', {}, {
      headers: {
        'X-CSRF-TOKEN': csrfToken
      }
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const register = async (name, email, password, password_confirmation) => {
  try {
    const csrfToken = await getCsrfToken();
    const response = await axios.post(apiUrl + 'register', { name, email, password, password_confirmation }, {
      headers: {
        'X-CSRF-TOKEN': csrfToken
      }
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { login, logout, register };
