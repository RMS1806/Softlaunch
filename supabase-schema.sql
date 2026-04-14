-- ═══════════════════════════════════════════════════════════
-- FINOVA 2.0 — HACKATHON-ONLY SUPABASE SCHEMA
-- Run this in Supabase SQL Editor to bootstrap all tables
-- ═══════════════════════════════════════════════════════════

-- 1. USERS (registration + login)
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  roll_number TEXT UNIQUE NOT NULL,
  branch TEXT NOT NULL CHECK (branch IN ('CSE', 'IT', 'CCE', 'DSE', 'OTHER')),
  year TEXT NOT NULL,
  phone TEXT,
  password_hash TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. TEAMS (squad assembly)
CREATE TABLE teams (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  invite_code TEXT UNIQUE NOT NULL,
  leader_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. TEAM_MEMBERS (junction table)
CREATE TABLE team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member' CHECK (role IN ('leader', 'member')),
  joined_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(team_id, user_id)
);

-- 4. REGISTRATIONS (hackathon signup)
CREATE TABLE registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  team_id UUID REFERENCES teams(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'Confirmed' CHECK (status IN ('Confirmed', 'Pending', 'Cancelled')),
  qr_code TEXT UNIQUE,
  registered_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id) -- one registration per user since only 1 event
);

-- 5. SUBMISSIONS (payload upload)
CREATE TABLE submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
  submitted_by UUID REFERENCES users(id),
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT,
  repo_url TEXT,
  submitted_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 6. ANNOUNCEMENTS (dashboard feed)
CREATE TABLE announcements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tag TEXT NOT NULL,
  text TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ═══════════════════════════════════════════════════════════
-- ROW LEVEL SECURITY (RLS) — Enable on all tables
-- ═══════════════════════════════════════════════════════════

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

-- Allow public read of announcements
CREATE POLICY "Announcements are viewable by everyone"
  ON announcements FOR SELECT
  USING (true);

-- Allow authenticated users to insert announcements (admin feature)
CREATE POLICY "Authenticated users can create announcements"
  ON announcements FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to delete announcements (admin feature)
CREATE POLICY "Authenticated users can delete announcements"
  ON announcements FOR DELETE
  TO authenticated
  USING (true);

-- ═══════════════════════════════════════════════════════════
-- INDEXES for performance
-- ═══════════════════════════════════════════════════════════

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_roll ON users(roll_number);
CREATE INDEX idx_team_members_user ON team_members(user_id);
CREATE INDEX idx_team_members_team ON team_members(team_id);
CREATE INDEX idx_registrations_user ON registrations(user_id);
CREATE INDEX idx_submissions_team ON submissions(team_id);

-- ═══════════════════════════════════════════════════════════
-- 7. OPERATORS (Dashboard / Vault team showcase)
-- ═══════════════════════════════════════════════════════════
CREATE TABLE operators (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  badge TEXT NOT NULL,
  color TEXT NOT NULL,
  img TEXT NOT NULL,
  icon TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Note: Allowing public read for marketing operators
ALTER TABLE operators ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Operators are viewable by everyone" ON operators FOR SELECT USING (true);

-- Insert original operators content to seed the table
INSERT INTO operators (name, role, badge, color, img, icon) VALUES
('VINCENZO_VOID', 'LEAD_PROTOCOL_ARCHITECT', 'LVL_99', 'primary', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTtgpy48bJMgZrZAk01OSCNhVv67z_QWLKaG8lHJ04DCSkZqCeUMl5i64n15EBTXxpZ1A7_dGxeuLahsu7rOGU_O4d05fxOJ0BGlCubM_zoII8quwD5718DVbvl5bWJvUTjG-75T8XU_so4fpKpgKtFWYZgK_o05RL0f7BuN0e0kzWc7xDc3WdDnTBxbLfQtsZCaSF5jevVK6_dPD6Kes8FF6FoNIdozcuZXfXFhN9osicGUHNYm96C7o-Y2nH2aAunp6TxmQLL9l8', 'terminal'),
('KARA_SIGNAL', 'QUANT_STRATEGY_DEPT', 'ELITE', 'secondary', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHG0eEcrRcbYVNRGSm8AVNu4bxBCuER3TTC2861bwk6LHBL9UBPb3kcTS5HuzjIev9RaD81xYm7v1iCA6-vLz_fEOvrLC1E6TcKy3ni-Nu1fr0kHBk0LMYQLo_FiTx_UztlYpDILf_6sJ9fB7oNYQTTCG89fheNf2cMtb5_D0lquh415glz7hf1eC8kIwTWw7k1ytqAaq-EhN5feygywzUURd1qmC_VhUcoaT89FW-ojWnH2qytBFeXwabW8pQmXcIOH0rJkQDsd1Z', 'radar'),
('DRAKE_VAULT', 'CYBER_SECURITY_CORE', 'ROOT', 'primary', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvD4SmyRMESmXiAJmGxpCq39zO4JEBR4Ie6iuepyZSxfMjJVXQXQQEoBEC-JdPh-ltR-RkkXfc0gvDvhJFYgZR2765wE6_MZA5uVp8ja--2Jp677lCFUi8dyvUN9lHA5BbVbFeP6iYSnZ5_Xl5wC8WTgmqBmEdZvNxKWn1BREebt1_B7uasZwYCYqzPp7tqFwZJajDPsylCY5O52EAD3h8KSaYahdinrFq4uzBomtxb7wcwUrYXR_M5JvXsEI-B0T6zajrF4qfjSow', 'security'),
('MAYA_SYNAPSE', 'NEURAL_INTERFACE_UX', 'CORE', 'secondary', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYS3MZox2ocw7IQ4kQ5NCdCWMZreZPRc-IMlu36IAkSmP3XR6HFLbX2ieut09TUueqV3zEFSNCl89qZjPo8xfZCxgmJYPe4h-zEhd-2JCsB60h19Y3T6Ng9pcY_MbWG8MlL6fwxuYOUCTWlSjQY0fPKdsoSiWe7W4BV6qaEI3orn35Pnm-Q6PTcUsUuGXdk5xiuJIbXsTMqKq7licrVHdT1FDLOKXl298GwmVqtz8s08k-zDy4s7RP1aAZY9USB0mYBfuZB_AhlxEe', 'psychology');

-- ═══════════════════════════════════════════════════════════
-- 8. PERFORMANCE_METRICS (Dashboard dynamic chart)
-- ═══════════════════════════════════════════════════════════
CREATE TABLE performance_metrics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  day_of_week TEXT NOT NULL CHECK (day_of_week IN ('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun')),
  activity_level INTEGER DEFAULT 0 CHECK (activity_level >= 0 AND activity_level <= 100),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, day_of_week)
);

ALTER TABLE performance_metrics ENABLE ROW LEVEL SECURITY;

-- Note: A real app would rely on triggers or application logic to populate this table on user actions.
-- For now, when a new user joins, you can manually insert 7 rows for them to see the chart.

-- ═══════════════════════════════════════════════════════════
-- 9. FAQS (Terminal Protocols / Logs page)
-- ═══════════════════════════════════════════════════════════
CREATE TABLE faqs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ref TEXT NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "FAQs are viewable by everyone" ON faqs FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage FAQs" ON faqs FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update FAQs" ON faqs FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete FAQs" ON faqs FOR DELETE TO authenticated USING (true);

-- Seed initial FAQ data
INSERT INTO faqs (ref, question, answer, sort_order) VALUES
('PROTOCOL_01', 'HOW DO I INITIALIZE MY FIRST LIQUIDITY NODE?', 'To initialize a node, navigate to the TERMINAL sector and execute the FINOVA_INIT command. Ensure your vault is synced with the global ledger (at least 3 confirmations required). Requirements: >> Verified WALLET_SYNC status >> Minimum fuel of 0.05 ETH for gas consumption >> Biometric authorization check', 1),
('PROTOCOL_02', 'WHAT IS THE PENALTY FOR EARLY LIQUIDITY WITHDRAWAL?', 'Withdrawing before the EPOCH_FINALIZATION triggers a tactical reallocation fee of 15%. This maintains system stability during high-volatility events. CRITICAL WARNING: Withdrawals during red-zone market depth may result in slippage beyond projected parameters.', 2),
('PROTOCOL_03', 'CAN I OPERATE MULTIPLE SECTOR IDENTIFIERS?', 'Finova 2.0 supports multi-sector orchestration for Advanced Tier operators. You can link up to 5 Sub-IDs to a single master Command Key, allowing for distributed liquidity strategies across diverse signal feeds.', 3),
('PROTOCOL_04', 'HOW ARE HACKATHON TEAMS ASSEMBLED?', 'Teams of 2-4 members can self-assemble via the SQUAD_ASSEMBLY dashboard. Solo pilots may request automatic squad matching through the match_pilot --auto command. All squads must be locked before the EPOCH begins.', 4);
