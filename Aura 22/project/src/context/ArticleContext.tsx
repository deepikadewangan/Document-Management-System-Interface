import React, { createContext, useContext, useState } from 'react';
import { Article } from '../types';
import { mockArticles } from '../data/mockArticles';

interface ArticleContextType {
  articles: Article[];
  savedArticles: Article[];
  saveArticle: (id: string) => void;
  unsaveArticle: (id: string) => void;
  getArticleById: (id: string) => Article | undefined;
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>(mockArticles);
  const [savedArticles, setSavedArticles] = useState<Article[]>([]);

  const saveArticle = (id: string) => {
    setArticles(prevArticles => 
      prevArticles.map(article => 
        article.id === id ? { ...article, isSaved: true } : article
      )
    );

    const articleToSave = articles.find(article => article.id === id);
    if (articleToSave && !articleToSave.isSaved) {
      setSavedArticles(prev => [...prev, { ...articleToSave, isSaved: true }]);
    }
  };

  const unsaveArticle = (id: string) => {
    setArticles(prevArticles => 
      prevArticles.map(article => 
        article.id === id ? { ...article, isSaved: false } : article
      )
    );

    setSavedArticles(prev => prev.filter(article => article.id !== id));
  };

  const getArticleById = (id: string): Article | undefined => {
    return articles.find(article => article.id === id);
  };

  return (
    <ArticleContext.Provider value={{
      articles,
      savedArticles,
      saveArticle,
      unsaveArticle,
      getArticleById
    }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticles = (): ArticleContextType => {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error('useArticles must be used within an ArticleProvider');
  }
  return context;
};