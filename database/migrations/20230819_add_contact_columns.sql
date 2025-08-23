-- Add missing contact number columns to registrations table
ALTER TABLE registrations 
  ADD COLUMN IF NOT EXISTS player1_contact_number TEXT,
  ADD COLUMN IF NOT EXISTS player2_contact_number TEXT,
  ADD COLUMN IF NOT EXISTS player3_contact_number TEXT;

-- Update Row Level Security (RLS) policies if needed
-- This ensures the new columns are accessible via the API
ALTER POLICY "Enable public read access" ON registrations
  FOR SELECT USING (true);

ALTER POLICY "Enable insert for authenticated users only" ON registrations
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');
