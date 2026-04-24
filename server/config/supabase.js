const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '../.env' });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

let supabase;

// Prevent crash if keys are placeholders or missing
if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('your_') || !supabaseUrl.startsWith('http')) {
  console.warn('⚠️  Supabase credentials missing or invalid. Running in MOCK MODE.');
  // Create a dummy object that mimics the supabase client enough to prevent crashes
  supabase = {
    from: () => ({
      select: () => ({ order: () => Promise.resolve({ data: [], error: null }) }),
      insert: () => Promise.resolve({ data: [{}], error: null }),
      select: () => ({ order: () => Promise.resolve({ data: [{}], error: null }) }),
    })
  };
} else {
  try {
    supabase = createClient(supabaseUrl, supabaseKey);
    console.log('✅ Supabase client initialized.');
  } catch (err) {
    console.error('❌ Failed to initialize Supabase:', err.message);
    supabase = {
      from: () => ({
        insert: () => Promise.resolve({ data: [{}], error: null }),
        select: () => ({ order: () => Promise.resolve({ data: [{}], error: null }) }),
      })
    };
  }
}

module.exports = supabase;
