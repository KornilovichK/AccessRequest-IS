const SUPABASE_URL = 'https://dgeaabxmpeifflvksjto.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_kRfwNb2jchSI26P0HxZz-g_d1ea1Ngm';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkAuth() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  return session;
}

async function getProfile(userId) {
  const { data } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return data;
}

window.supabaseClient = supabaseClient;
window.checkAuth = checkAuth;
window.getProfile = getProfile;