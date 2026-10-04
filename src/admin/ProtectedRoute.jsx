import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('iqora_admin_token');

  useEffect(() => {
    if (!token) {
      window.history.replaceState({}, '', '/admin/login');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }, [token]);

  if (!token) {
    return null;
  }

  return children;
}