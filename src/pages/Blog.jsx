import React from 'react'
import { motion } from 'framer-motion'
import { config } from '../config'
import { useTranslation } from '../hooks/useTranslation'

const Blog = () => {
  const { t } = useTranslation();
  const blogPosts = [
    {
      id: 1,
      title: t.blog_section.p1_title,
      excerpt: t.blog_section.p1_excerpt,
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=400&fit=crop",
      category: t.blog_section.categories.oralHealth
    },
    {
      id: 2,
      title: t.blog_section.p2_title,
      excerpt: t.blog_section.p2_excerpt,
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop",
      category: t.blog_section.categories.cosmetic
    },
    {
      id: 3,
      title: t.blog_section.p3_title,
      excerpt: t.blog_section.p3_excerpt,
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=400&fit=crop",
      category: t.blog_section.categories.specialized
    },
    {
      id: 4,
      title: t.blog_section.p4_title,
      excerpt: t.blog_section.p4_excerpt,
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=400&fit=crop",
      category: t.blog_section.categories.wellness
    },
    {
      id: 5,
      title: t.blog_section.p5_title,
      excerpt: t.blog_section.p5_excerpt,
      date: "February 20, 2024",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=400&fit=crop",
      category: t.blog_section.categories.emergency
    },
    {
      id: 6,
      title: t.blog_section.p6_title,
      excerpt: t.blog_section.p6_excerpt,
      date: "February 15, 2024",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=400&fit=crop",
      category: t.blog_section.categories.oralHealth
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.blog_section.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.blog_section.subtitle}
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary font-semibold hover:underline"
                >
                  {t.blog_section.readMore}
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Blog

