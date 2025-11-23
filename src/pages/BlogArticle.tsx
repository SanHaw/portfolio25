import { Link, Navigate, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogs'

export default function BlogArticle() {
  const { id } = useParams<{ id: string }>()
  
  if (!id || !blogPosts[id]) {
    return <Navigate to="/blogs" replace />
  }

  const post = blogPosts[id]

  return (
    <div className="content-wrap px-4 md:px-20 py-12">
      {/* Back Button */}
      <Link 
        to="/blogs"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to Blogs
      </Link>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug tracking-tight mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-4 mb-6 text-gray-600">
          <time>{post.date}</time>
          <span>•</span>
          <div className="flex gap-2 flex-wrap">
            {post.category.map(cat => (
              <span 
                key={cat}
                className="text-xs px-3 py-1 bg-gray-200 text-gray-700 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Cover Image */}
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-auto rounded-lg mb-8"
        />

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
            {post.content}
          </div>
        </div>

        {/* Action Links */}
        {(post.linkedinUrl || post.secondaryLink) && (
          <div className="mt-8 pt-8 border-t flex flex-wrap gap-3">
            {post.linkedinUrl && (
              <a
                href={post.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-full font-medium hover:bg-yellow-500 transition-colors"
              >
                Read full article here
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
            {post.secondaryLink && (
              <Link
                to={post.secondaryLink.url}
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors rounded-full font-medium"
              >
                {post.secondaryLink.label}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
