/**
 * MORIKA — Supabase Client
 * ใช้ VITE_SUPABASE_URL และ VITE_SUPABASE_ANON_KEY จาก .env.local
 *
 * ตั้งค่า .env.local:
 *   VITE_SUPABASE_URL=https://xxxx.supabase.co
 *   VITE_SUPABASE_ANON_KEY=eyJ...
 */

// NOTE: ติดตั้ง supabase-js ก่อน: pnpm add @supabase/supabase-js
// import { createClient } from "@supabase/supabase-js";
//
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
//
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ============================================================
// Types
// ============================================================

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: "solo" | "duo" | "engraved";
  in_stock: boolean;
  created_at: string;
}

export interface Order {
  id?: string;
  customer_name: string;
  customer_phone: string;
  customer_line?: string;
  product_id: string;
  product_name: string;
  engraving_text?: string;
  size: "S" | "M" | "L";
  quantity: number;
  total_price: number;
  status?: "pending" | "confirmed" | "producing" | "shipped" | "delivered";
  notes?: string;
  created_at?: string;
}

export interface ChatMessage {
  id?: string;
  session_id: string;
  role: "user" | "assistant";
  content: string;
  created_at?: string;
}

// ============================================================
// Mock data (ใช้ระหว่าง development ก่อนเชื่อม Supabase จริง)
// ============================================================

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Morika Solo",
    description: "โต๊ะวาง 1 ชาม เหมาะกับน้องตัวเดียว",
    price: 390,
    image_url: "/manus-storage/morika-solo_9b18441d.jpg",
    category: "solo",
    in_stock: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Morika Duo",
    description: "โต๊ะวาง 2 ชาม สำหรับบ้านที่มีน้องหลายตัว",
    price: 590,
    image_url: "/manus-storage/morika-duo_a1220e38.jpg",
    category: "duo",
    in_stock: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Morika Engraved",
    description: "สลักชื่อน้อง + ลายใบไม้ ของขวัญที่มีแค่ชิ้นเดียวในโลก",
    price: 490,
    image_url: "/manus-storage/morika-engraved_7ac64d19.jpg",
    category: "engraved",
    in_stock: true,
    created_at: new Date().toISOString(),
  },
];

// ============================================================
// API Functions (เปิดใช้เมื่อเชื่อม Supabase จริง)
// ============================================================

/**
 * ดึงรายการสินค้าทั้งหมด
 * เปิดใช้: uncomment และ import supabase ด้านบน
 */
export async function getProducts(): Promise<Product[]> {
  // const { data, error } = await supabase
  //   .from("products")
  //   .select("*")
  //   .eq("in_stock", true)
  //   .order("created_at");
  // if (error) throw error;
  // return data as Product[];

  // Mock: return ข้อมูลตัวอย่าง
  return MOCK_PRODUCTS;
}

/**
 * สร้างออเดอร์ใหม่
 */
export async function createOrder(order: Omit<Order, "id" | "created_at">): Promise<Order> {
  // const { data, error } = await supabase
  //   .from("orders")
  //   .insert([order])
  //   .select()
  //   .single();
  // if (error) throw error;
  // return data as Order;

  // Mock: return ออเดอร์ที่สร้าง
  console.log("Order created:", order);
  return { ...order, id: crypto.randomUUID(), created_at: new Date().toISOString() };
}

/**
 * ส่งข้อความไปยัง Claude AI
 */
export async function sendChatMessage(
  messages: Array<{ role: "user" | "assistant"; content: string }>
): Promise<string> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  if (!response.ok) throw new Error("Chat API failed");
  const data = await response.json();
  return data.reply as string;
}
