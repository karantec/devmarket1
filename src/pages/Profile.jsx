import { useState, useEffect } from 'react';
import { useAuth } from '../context and hooks/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { currentUser, updateUserProfile, logout } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    displayName: currentUser?.displayName || '',
    email: currentUser?.email || '',
    photoURL: currentUser?.photoURL || '',
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError('');
      setSuccess('');
      setLoading(true);
      
      await updateUserProfile(formData.displayName, formData.photoURL);
      setSuccess('Profile updated successfully!');
    } catch (error) {
      setError('Failed to update profile: ' + error.message);
    }
    
    setLoading(false);
  };

  const handleLogout = async () => {
    try {
      setError('');
      await logout();
      navigate('/login');
    } catch (error) {
      setError('Failed to log out: ' + error.message);
    }
  };

  // If user is not loaded yet, show loading state
  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
            {error}
          </div>
        )}
        
        {success && (
          <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Display Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={formData.displayName}
              onChange={(e) => setFormData({
                ...formData,
                displayName: e.target.value
              })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded bg-gray-50"
              value={formData.email}
              disabled
            />
            <p className="text-sm text-gray-500 mt-1">
              Email cannot be changed
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Profile Picture URL</label>
            <input
              type="url"
              className="w-full p-2 border rounded"
              value={formData.photoURL}
              onChange={(e) => setFormData({
                ...formData,
                photoURL: e.target.value
              })}
              placeholder="https://example.com/avatar.jpg"
            />
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Account Info</h3>
          <div className="text-sm text-gray-600">
            <p>Account created: {currentUser.metadata.creationTime}</p>
            <p>Last sign in: {currentUser.metadata.lastSignInTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}