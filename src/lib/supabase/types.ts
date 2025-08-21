export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          subscription_tier: "free" | "pro" | "ultra"
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          subscription_tier?: "free" | "pro" | "ultra"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          subscription_tier?: "free" | "pro" | "ultra"
          created_at?: string
          updated_at?: string
        }
      }
      streams: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string | null
          category: string
          status: "scheduled" | "live" | "ended" | "paused"
          stream_key: string | null
          rtmp_url: string | null
          thumbnail_url: string | null
          scheduled_start: string | null
          actual_start: string | null
          actual_end: string | null
          max_viewers: number
          total_revenue: number
          ai_agent_id: string | null
          settings: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description?: string | null
          category: string
          status?: "scheduled" | "live" | "ended" | "paused"
          stream_key?: string | null
          rtmp_url?: string | null
          thumbnail_url?: string | null
          scheduled_start?: string | null
          actual_start?: string | null
          actual_end?: string | null
          max_viewers?: number
          total_revenue?: number
          ai_agent_id?: string | null
          settings?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string | null
          category?: string
          status?: "scheduled" | "live" | "ended" | "paused"
          stream_key?: string | null
          rtmp_url?: string | null
          thumbnail_url?: string | null
          scheduled_start?: string | null
          actual_start?: string | null
          actual_end?: string | null
          max_viewers?: number
          total_revenue?: number
          ai_agent_id?: string | null
          settings?: Json
          created_at?: string
          updated_at?: string
        }
      }
      ai_agents: {
        Row: {
          id: string
          user_id: string
          name: string
          type: "sales" | "engagement" | "analytics" | "moderation"
          status: "active" | "idle" | "disabled"
          performance_score: number
          tasks_completed: number
          current_task: string | null
          enabled: boolean
          settings: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          type: "sales" | "engagement" | "analytics" | "moderation"
          status?: "active" | "idle" | "disabled"
          performance_score?: number
          tasks_completed?: number
          current_task?: string | null
          enabled?: boolean
          settings?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          type?: "sales" | "engagement" | "analytics" | "moderation"
          status?: "active" | "idle" | "disabled"
          performance_score?: number
          tasks_completed?: number
          current_task?: string | null
          enabled?: boolean
          settings?: Json
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          price: number
          category: string
          image_url: string | null
          in_stock: boolean
          featured: boolean
          sales_count: number
          inventory_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          price: number
          category: string
          image_url?: string | null
          in_stock?: boolean
          featured?: boolean
          sales_count?: number
          inventory_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          price?: number
          category?: string
          image_url?: string | null
          in_stock?: boolean
          featured?: boolean
          sales_count?: number
          inventory_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      stream_metrics: {
        Row: {
          id: string
          stream_id: string
          timestamp: string
          viewer_count: number
          engagement_rate: number
          revenue: number
          chat_messages: number
          new_followers: number
          product_clicks: number
        }
        Insert: {
          id?: string
          stream_id: string
          timestamp?: string
          viewer_count?: number
          engagement_rate?: number
          revenue?: number
          chat_messages?: number
          new_followers?: number
          product_clicks?: number
        }
        Update: {
          id?: string
          stream_id?: string
          timestamp?: string
          viewer_count?: number
          engagement_rate?: number
          revenue?: number
          chat_messages?: number
          new_followers?: number
          product_clicks?: number
        }
      }
      chat_messages: {
        Row: {
          id: string
          stream_id: string
          user_id: string | null
          username: string
          message: string
          message_type: "message" | "follow" | "purchase" | "tip"
          amount: number | null
          created_at: string
        }
        Insert: {
          id?: string
          stream_id: string
          user_id?: string | null
          username: string
          message: string
          message_type?: "message" | "follow" | "purchase" | "tip"
          amount?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          stream_id?: string
          user_id?: string | null
          username?: string
          message?: string
          message_type?: "message" | "follow" | "purchase" | "tip"
          amount?: number | null
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string | null
          stream_id: string | null
          product_id: string
          quantity: number
          unit_price: number
          total_amount: number
          status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled"
          customer_email: string | null
          customer_name: string | null
          shipping_address: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          stream_id?: string | null
          product_id: string
          quantity?: number
          unit_price: number
          total_amount: number
          status?: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled"
          customer_email?: string | null
          customer_name?: string | null
          shipping_address?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          stream_id?: string | null
          product_id?: string
          quantity?: number
          unit_price?: number
          total_amount?: number
          status?: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled"
          customer_email?: string | null
          customer_name?: string | null
          shipping_address?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      analytics_daily: {
        Row: {
          id: string
          user_id: string
          date: string
          total_streams: number
          total_viewers: number
          total_revenue: number
          total_orders: number
          avg_engagement_rate: number
          top_product_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          date: string
          total_streams?: number
          total_viewers?: number
          total_revenue?: number
          total_orders?: number
          avg_engagement_rate?: number
          top_product_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          date?: string
          total_streams?: number
          total_viewers?: number
          total_revenue?: number
          total_orders?: number
          avg_engagement_rate?: number
          top_product_id?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
          }
