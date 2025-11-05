import { Link, Navigate, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogs'

export default function BlogArticle() {
  const { id } = useParams<{ id: string }>()
  
  if (!id || !blogPosts[id]) {
    return <Navigate to="/blogs" replace />
  }

  const post = blogPosts[id]

  return (
    <div className="content-wrap px-20 py-12">
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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-snug tracking-tight mb-4">
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

        {/* LinkedIn Link */}
        {post.linkedinUrl && (
          <div className="mt-8 pt-8 border-t">
            <a
              href={post.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              Read original post on LinkedIn
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
