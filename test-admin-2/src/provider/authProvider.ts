
import { PreviousLocationStorageKey } from "react-admin";
import { Auth0Client } from "./Auth0Client";


let permissions: any;
let permissionsExpiresAt = 0;
const getPermissions = () => {
  const request = new Request('', {
    headers: new Headers({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
  })

  return fetch(request)
          .then(res => res.json())
          .then(data => {
            permissions = data.permissions
            permissionsExpiresAt = Date.now() + 1000 * 60 * 5
          })
}

const authProvider = {
  login: ({ username, password }) => {
    const request = new Request('', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })

    return fetch(request)
              .then(response => {
                if (response.status < 200 || response.status >= 300) {
                  throw new Error(response.statusText)
                }
                return response.json()
              })
              .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth))
              })
              .catch(() => {
                throw new Error('Network error')
              })
  },

  logout: () => {
    localStorage.removeItem('auth')
    return Promise.resolve('/you-are-logout')
  },

  async checkAuth() {
    const isAuthenticated = await client.isAuthenticated()
    if (isAuthenticated) {
      return
    }

    localStorage.setItem(PreviousLocationStorageKey, window.location.href)

    client.loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/auth-callback`,
      }
    })
  },

  async handleCallback() {
    const query = window.location.search
    if (!query.includes('code=') && !query.includes('state=')) {
      throw new Error('Failed to handle login callback.')
    }

    await Auth0Client.handleRedirectCallback();
  },

  checkError: (error: any) => {
    const status = error.status
    if (status === 401 || status === 403) {
      return Promise.reject({ redirectTo: '/sorry', logoutUser: false })
    }

    return Promise.resolve()
  },

  getIdentity: () => {
    try {
      const auth = localStorage.getItem('auth');
      if (!auth) {
        return Promise.reject('No auth data found')
      }
      const { id, username, avatar } = JSON.parse(auth)
      return Promise.resolve({ id, username, avatar })
    } catch(error) {
      return Promise.reject(error)
    }
  },

  getPermissions: () => {
    return Date.now() > permissionsExpiresAt ? getPermissions() : permissions;
  },

};

export default authProvider;