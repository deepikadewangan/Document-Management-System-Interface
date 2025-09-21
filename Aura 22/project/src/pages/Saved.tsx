import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useArticles } from '../context/ArticleContext';
import { useAuth } from '../context/AuthContext';

const Saved = () => {
  const navigate = useNavigate();
  const { savedArticles, unsaveArticle } = useArticles();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Saved Articles
        </h1>
        <p className="text-xl text-gray-600">
          Your personal collection of mental health resources
        </p>
      </div>

      {savedArticles.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            No saved articles yet
          </h2>
          <p className="text-gray-600 mb-6">
            Start saving articles that interest you for easy access later
          </p>
          <Button
            variant="primary"
            onClick={() => navigate('/articles')}
          >
            Browse Articles
          </Button>
        </div>
      ) : (
        <div className="grid gap-8">
          {savedArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                          {article.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {article.summary}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          unsaveArticle(article.id);
                        }}
                        className="ml-4"
                      >
                        <Heart className="w-6 h-6 fill-red-500 text-red-500" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-sm text-gray-500">
                        <span>{article.author}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/articles/${article.id}`)}
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Saved;