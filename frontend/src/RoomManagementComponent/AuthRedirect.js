import { useEffect } from 'react';

function AuthRedirect() {
  useEffect(() => {
    // Redirect to login page with a return URL
    const loginUrl = `http://localhost:8083/showMyLoginPage?redirect_uri=http://localhost:3000`;
    window.location.href = loginUrl;
  }, []);

  return <div>Redirecting to login...</div>;
}

export default AuthRedirect;
