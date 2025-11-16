import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const instagramDirectory = path.join(process.cwd(), 'content', 'instagram')

export interface InstagramPost {
  url: string
  image: string
  alt?: string
}

export function getInstagramPosts(): InstagramPost[] {
  try {
    const filePath = path.join(instagramDirectory, 'posts.md')
    
    if (!fs.existsSync(filePath)) {
      console.warn('Instagram posts file not found:', filePath)
      return []
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { content } = matter(fileContents)

    // Parse posts in format:
    // - URL: https://www.instagram.com/p/...
    //   Image: /instagram-posts/image.jpg
    const posts: InstagramPost[] = []
    
    // Split by lines and process
    const lines = content.split('\n').map(line => line.trim()).filter(line => line)
    
    let currentPost: Partial<InstagramPost> | null = null
    
    for (const line of lines) {
      // Check if line starts a new post entry
      if (line.startsWith('-')) {
        // Save previous post if exists
        if (currentPost && currentPost.url && currentPost.image) {
          posts.push({
            url: currentPost.url,
            image: currentPost.image,
            alt: currentPost.alt || `Instagram post ${posts.length + 1}`,
          })
        }
        
        // Start new post
        currentPost = {}
        
        // Check if URL is on the same line
        const urlMatch = line.match(/URL:\s*(https?:\/\/[^\s]+)/i) || line.match(/(https?:\/\/[^\s]+)/)
        if (urlMatch) {
          currentPost.url = urlMatch[1].trim()
        }
      } 
      // Check for URL field
      else if (line.match(/^URL:/i)) {
        const urlMatch = line.match(/URL:\s*(.+)/i)
        if (urlMatch && currentPost) {
          currentPost.url = urlMatch[1].trim()
        }
      }
      // Check for Image field
      else if (line.match(/^Image:/i)) {
        const imageMatch = line.match(/Image:\s*(.+)/i)
        if (imageMatch && currentPost) {
          currentPost.image = imageMatch[1].trim()
        }
      }
      // Check for Alt/Title field (optional)
      else if (line.match(/^(Alt|Title):/i)) {
        const altMatch = line.match(/(?:Alt|Title):\s*(.+)/i)
        if (altMatch && currentPost) {
          currentPost.alt = altMatch[1].trim()
        }
      }
    }
    
    // Save last post if exists
    if (currentPost && currentPost.url && currentPost.image) {
      posts.push({
        url: currentPost.url,
        image: currentPost.image,
        alt: currentPost.alt || `Instagram post ${posts.length + 1}`,
      })
    }

    // Limit to 4 posts
    return posts.slice(0, 4)
  } catch (error) {
    console.error('Error reading Instagram posts:', error)
    return []
  }
}
