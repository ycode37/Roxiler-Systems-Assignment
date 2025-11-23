import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyRatings = () => {
  const API = import.meta.env.VITE_API_URL;
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchMyRatings();
  }, []);

  const fetchMyRatings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API}/api/user/my-ratings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRatings(response.data.ratings);
    } catch (error) {
      console.error('Error fetching ratings:', error);
      setError('Failed to load your ratings');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRating = async (ratingId) => {
    if (!window.confirm('Delete this rating? This cannot be undone.')) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API}/api/user/ratings/${ratingId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchMyRatings();
    } catch (error) {
      console.error('Error deleting rating:', error);
      alert('Could not delete rating. Please try again.');
    }
  };

  const renderStars = (rating) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={star <= rating ? 'text-yellow-400' : 'text-gray-300'}
      >
        ★
      </span>
    ));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your ratings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/home')}
                className="text-gray-600 hover:text-gray-900"
              >
                ← Back
              </button>
              <h1 className="text-xl font-semibold text-gray-900">
                My Ratings
              </h1>
            </div>
            <span className="text-sm text-gray-500">
              {ratings.length} {ratings.length === 1 ? 'rating' : 'ratings'}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {ratings.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
            <div className="text-6xl mb-4">⭐</div>
            <p className="text-gray-600 mb-6">
              You haven't rated any stores yet
            </p>
            <button
              onClick={() => navigate('/browse-stores')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
            >
              Browse Stores
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {ratings.map((rating) => (
              <div
                key={rating.id}
                className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition"
              >
                {/* Store Info */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {rating.store_name}
                    </h3>
                    {rating.store_address && (
                      <p className="text-sm text-gray-500 mt-1">
                        {rating.store_address}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => handleDeleteRating(rating.id)}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-xl font-semibold text-gray-900">
                    {rating.rating}
                  </span>
                  <div className="flex text-lg">{renderStars(rating.rating)}</div>
                </div>

                {/* Comment */}
                {rating.comment && (
                  <div className="bg-gray-50 rounded-lg p-4 mb-3">
                    <p className="text-gray-700 text-sm">"{rating.comment}"</p>
                  </div>
                )}

                {/* Dates */}
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t">
                  <span>{formatDate(rating.created_at)}</span>
                  {rating.updated_at !== rating.created_at && (
                    <span>Updated {formatDate(rating.updated_at)}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRatings;
