'use client';

import React, { useState } from 'react';
import {
  Users,
  Heart,
  MessageSquare,
  Share2,
  PlusCircle,
  Sparkles,
  Send,
  X,
  Image as ImageIcon,
  CheckCircle2,
  HelpCircle,
  Award
} from 'lucide-react';
import { useAtma } from '@/lib/atma/store';
import { CommunityPost } from '@/lib/atma/types';

export const CommunitySection: React.FC = () => {
  const { posts, addPost, toggleLikePost, comments, addComment, user } = useAtma();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'wins' | 'q&a' | 'general'>('all');
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState<'wins' | 'q&a' | 'general'>('wins');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [activePostForComments, setActivePostForComments] = useState<CommunityPost | null>(null);
  const [commentInput, setCommentInput] = useState('');

  const filteredPosts = posts.filter(p => selectedCategory === 'all' || p.category === selectedCategory);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContent.trim()) return;
    addPost(newContent, newCategory, newImageUrl || undefined);
    setNewContent('');
    setNewImageUrl('');
    setIsComposeOpen(false);
  };

  const handleSendComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activePostForComments || !commentInput.trim()) return;
    addComment(activePostForComments.id, commentInput);
    setCommentInput('');
  };

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'wins':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#0A3B2C] border border-[#115E41] text-[#2EA043] text-[10px] font-mono uppercase">
            <Award className="w-3 h-3" /> Breakthrough
          </span>
        );
      case 'q&a':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-mono uppercase">
            <HelpCircle className="w-3 h-3" /> Question
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#1F1F1F] text-[#8C8C8C] text-[10px] font-mono uppercase">
            Discussion
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 pb-16 animate-fadeIn">
      {/* Header & Category Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#121212] border border-[#262626]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[#D4AF37] uppercase font-geist mb-1">
            <Users className="w-3.5 h-3.5" />
            <span>The Tribe</span>
          </div>
          <h1 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#F7F7F7]">
            Community Feed
          </h1>
          <p className="text-xs text-[#8C8C8C] font-geist mt-1">
            Share breakthroughs, hold peers accountable, and walk the path together.
          </p>
        </div>

        {/* Create Post CTA */}
        <button
          onClick={() => setIsComposeOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5BD45] text-[#050505] font-semibold text-xs tracking-wider uppercase font-geist transition-all shadow-md self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Share Breakthrough</span>
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {[
          { id: 'all', label: 'All Discussions' },
          { id: 'wins', label: '🏆 Wins & Breakthroughs' },
          { id: 'q&a', label: '❓ Q & A' },
          { id: 'general', label: '💬 General Wisdom' },
        ].map(cat => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-geist font-medium transition-all flex-shrink-0 ${
                isActive
                  ? 'bg-[#1A1C1A] text-[#D4AF37] border border-[#D4AF37]/40 shadow-sm'
                  : 'bg-[#121212] text-[#8C8C8C] border border-[#262626] hover:text-[#F7F7F7]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Posts Feed */}
      <div className="space-y-4 max-w-3xl">
        {filteredPosts.map(post => {
          const postCommentsList = comments[post.id] || [];
          return (
            <article
              key={post.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#262626]/90 transition-all space-y-4 shadow-sm"
            >
              {/* Post Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1F1F1F] to-[#0A3B2C] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-cormorant font-bold text-base shadow-inner">
                    {post.user_name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-geist font-semibold text-sm text-[#F7F7F7]">
                        {post.user_name}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#1F1F1F] text-[#D4AF37] font-mono border border-[#262626]">
                        Lv.{post.user_level}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#8C8C8C] font-mono mt-0.5">
                      {post.created_at}
                    </div>
                  </div>
                </div>

                <div>{getCategoryBadge(post.category)}</div>
              </div>

              {/* Post Text Content */}
              <p className="text-sm text-[#E2D7A7]/90 font-geist leading-relaxed">
                {post.content}
              </p>

              {/* Optional Post Image */}
              {post.image_url && (
                <div className="rounded-xl overflow-hidden border border-[#262626] max-h-80 bg-[#050505]">
                  <img
                    src={post.image_url}
                    alt="Community attachment"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Post Action Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-[#1F1F1F] text-xs text-[#8C8C8C]">
                <div className="flex items-center gap-4">
                  {/* Like Button */}
                  <button
                    onClick={() => toggleLikePost(post.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                      post.liked_by_me
                        ? 'bg-[#0A3B2C] border-[#115E41] text-[#2EA043]'
                        : 'bg-[#050505] border-[#262626] text-[#8C8C8C] hover:text-[#F7F7F7]'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${post.liked_by_me ? 'fill-current' : ''}`} />
                    <span className="font-mono text-[11px]">{post.like_count}</span>
                  </button>

                  {/* Comment Button */}
                  <button
                    onClick={() => setActivePostForComments(post)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#050505] border border-[#262626] hover:border-[#D4AF37]/40 text-[#8C8C8C] hover:text-[#D4AF37] transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span className="font-mono text-[11px]">{post.comment_count + postCommentsList.length}</span>
                  </button>
                </div>

                <button
                  onClick={() => alert(`Link copied to clipboard for "${post.content.slice(0, 30)}..."`)}
                  className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Compose Post Modal */}
      {isComposeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-lg bg-[#121212] border border-[#262626] rounded-2xl shadow-2xl p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-[#262626] pb-3">
              <h3 className="font-cormorant text-2xl font-bold text-[#F7F7F7]">
                Share with the Tribe
              </h3>
              <button
                onClick={() => setIsComposeOpen(false)}
                className="p-1 text-[#8C8C8C] hover:text-[#F7F7F7]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="text-xs font-geist text-[#8C8C8C] block mb-1.5">
                  Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'wins', label: '🏆 Breakthrough' },
                    { id: 'q&a', label: '❓ Question' },
                    { id: 'general', label: '💬 General' },
                  ].map(c => (
                    <button
                      type="button"
                      key={c.id}
                      onClick={() => setNewCategory(c.id as any)}
                      className={`py-2 px-2 rounded-lg text-xs font-geist text-center border transition-all ${
                        newCategory === c.id
                          ? 'bg-[#1A1C1A] text-[#D4AF37] border-[#D4AF37]'
                          : 'bg-[#050505] text-[#8C8C8C] border-[#262626]'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-geist text-[#8C8C8C] block mb-1.5">
                  Your Reflection or Question
                </label>
                <textarea
                  value={newContent}
                  onChange={e => setNewContent(e.target.value)}
                  placeholder="What breakthrough, insight, or challenge would you like to share today?"
                  rows={4}
                  required
                  className="w-full p-3.5 rounded-xl bg-[#050505] border border-[#262626] text-sm text-[#F7F7F7] placeholder-[#8C8C8C] focus:outline-none focus:border-[#D4AF37] font-geist resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-geist text-[#8C8C8C] block mb-1.5">
                  Image Attachment URL (optional)
                </label>
                <input
                  type="url"
                  value={newImageUrl}
                  onChange={e => setNewImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full p-3 rounded-xl bg-[#050505] border border-[#262626] text-xs text-[#F7F7F7] placeholder-[#8C8C8C] focus:outline-none focus:border-[#D4AF37] font-geist"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsComposeOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-geist text-[#8C8C8C] hover:text-[#F7F7F7]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5BD45] text-[#050505] font-semibold text-xs tracking-wider uppercase font-geist shadow-md"
                >
                  Publish Post (+25 XP)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Post Comments & Discussion Modal */}
      {activePostForComments && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-2xl max-h-[85vh] bg-[#121212] border border-[#262626] rounded-2xl shadow-2xl p-6 flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-[#262626] pb-3">
              <h3 className="font-cormorant text-2xl font-bold text-[#F7F7F7]">
                Discussion & Reflections
              </h3>
              <button
                onClick={() => setActivePostForComments(null)}
                className="p-1 text-[#8C8C8C] hover:text-[#F7F7F7]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Original Post Snippet */}
            <div className="p-3.5 rounded-xl bg-[#050505] border border-[#262626] text-xs text-[#B3B3B3]">
              <span className="text-[#D4AF37] font-semibold">{activePostForComments.user_name}: </span>
              {activePostForComments.content}
            </div>

            {/* Comments List */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {(comments[activePostForComments.id] || []).map(comm => (
                <div
                  key={comm.id}
                  className="p-3.5 rounded-xl bg-[#1A1C1A] border border-[#262626] space-y-1"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#F7F7F7]">{comm.user_name}</span>
                    <span className="text-[10px] text-[#8C8C8C] font-mono">{comm.created_at}</span>
                  </div>
                  <p className="text-xs text-[#B3B3B3] leading-relaxed font-geist">
                    {comm.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Add Comment Form */}
            <form onSubmit={handleSendComment} className="flex gap-2 pt-2 border-t border-[#262626]">
              <input
                type="text"
                value={commentInput}
                onChange={e => setCommentInput(e.target.value)}
                placeholder="Write a supportive reflection..."
                className="flex-1 p-3 rounded-xl bg-[#050505] border border-[#262626] text-xs text-[#F7F7F7] placeholder-[#8C8C8C] focus:outline-none focus:border-[#D4AF37] font-geist"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5BD45] text-[#050505] font-semibold text-xs font-geist flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
