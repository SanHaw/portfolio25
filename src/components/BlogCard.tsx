import { Link } from 'react-router-dom'
import type { BlogPost } from '../data/blogs'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      to={`/blogs/${post.id}`}
      className="border rounded-lg overflow-hidden shadow-sm bg-site hover:shadow-md transition-shadow"
    >
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
        <p className="text-gray-700 line-clamp-3">{post.preview}</p>
      </div>
    </Link>
  )
}
