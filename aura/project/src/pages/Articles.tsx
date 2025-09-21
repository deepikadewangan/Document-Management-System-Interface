import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useArticles } from '../context/ArticleContext';
import { useAuth } from '../context/AuthContext';

const Articles = () => {
  const navigate = useNavigate();
  const { articles, saveArticle, unsaveArticle } = useArticles();
  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Mental Health Articles
        </h1>
        <p className="text-xl text-gray-600">
          Expert insights, research, and tips for your mental well-being
        </p>
      </div>

      <div className="grid gap-8">
        {articles.map((article) => (
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
                    {isAuthenticated && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          article.isSaved ? unsaveArticle(article.id) : saveArticle(article.id);
                        }}
                        className="ml-4"
                      >
                        <Heart
                          className={`w-6 h-6 ${
                            article.isSaved ? 'fill-red-500 text-red-500' : 'text-gray-400'
                          }`}
                        />
                      </button>
                    )}
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
    </div>
  );
};

export default Articles;