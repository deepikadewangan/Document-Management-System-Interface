import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import { useArticles } from '../context/ArticleContext';
import { useAuth } from '../context/AuthContext';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getArticleById, saveArticle, unsaveArticle } = useArticles();
  const { isAuthenticated } = useAuth();

  const article = getArticleById(id || '');

  if (!article) {
    navigate('/articles');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Button
        variant="text"
        onClick={() => navigate('/articles')}
        className="mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Articles
      </Button>

      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />

      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          <div className="flex items-center text-gray-600 text-sm">
            <span>{article.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{article.source}</span>
          </div>
        </div>

        {isAuthenticated && (
          <button
            onClick={() => article.isSaved ? unsaveArticle(article.id) : saveArticle(article.id)}
            className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600"
          >
            <Heart
              className={`w-6 h-6 ${
                article.isSaved ? 'fill-red-500 text-red-500' : ''
              }`}
            />
            <span>{article.isSaved ? 'Saved' : 'Save Article'}</span>
          </button>
        )}
      </div>

      <div className="prose max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          {article.summary}
        </p>
        <div className="text-gray-800 leading-relaxed">
          {article.content}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;