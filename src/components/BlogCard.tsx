import { Link } from 'react-router-dom'
import type { Blog } from '../data/blogs'

interface BlogCardProps {
  post: Blog
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-site hover:shadow-md transition-shadow">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex gap-2 mb-2 flex-wrap">
          {post.category.map(cat => (
            <span 
              key={cat}
              className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
        <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
        <p className="text-gray-700 line-clamp-3 mb-4">{post.preview}</p>
        
        {/* Action Buttons */}
        <div className="flex gap-3 flex-wrap">
          {post.linkedinUrl && (
            <a
              href={post.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-gray-900 rounded-full font-medium hover:bg-yellow-500 transition-colors text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              Read full article here
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
          {post.secondaryLink && (
            <Link
              to={post.secondaryLink.url}
              className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-yellow-200 hover:border-gray-900 transition-colors rounded-full font-medium text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {post.secondaryLink.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
