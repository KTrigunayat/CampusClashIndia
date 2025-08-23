-- Create or replace the registration function
CREATE OR REPLACE FUNCTION public.handle_registration(registration_data jsonb)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result jsonb;
  external_url text;
  state_name text;
BEGIN
  -- Extract state from the registration data
  state_name := registration_data->>'state';
  
  -- Get external URL if state requires it
  SELECT url INTO external_url
  FROM (
    VALUES 
      ('Andhra Pradesh', 'https://play.gamecentric.io/tournaments/HATAZEHOXAOCWBG'),
      ('Maharashtra', 'https://play.gamecentric.io/tournaments/0APMRI2FVTIY83B'),
      ('Tamil Nadu', 'https://play.gamecentric.io/tournaments/0R041U3XFOP9BL4'),
      ('Telangana', 'https://play.gamecentric.io/tournaments/DUIOU42TKPHEGSQ'),
      ('Kerala', 'https://play.gamecentric.io/tournaments/B5VJJACQGTGMBB3'),
      ('Karnataka', 'https://play.gamecentric.io/tournaments/Y2KO2D3MT6E6NAC'),
      ('Uttar Pradesh', 'https://play.gamecentric.io/tournaments/2454ZZEGIZN9DGR')
  ) AS state_urls(state, url)
  WHERE state = state_name;
  
  -- Insert or update the registration
  INSERT INTO public.registrations (
    team_leader_name, team_leader_id, player1_id, player2_id, player3_id,
    player4_id, mail_id, college_name, whatsapp_number, state,
    player1_contact_number, player2_contact_number, player3_contact_number,
    created_at, updated_at
  )
  VALUES (
    registration_data->>'team_leader_name',
    registration_data->>'team_leader_id',
    registration_data->>'player1_id',
    registration_data->>'player2_id',
    registration_data->>'player3_id',
    registration_data->>'player4_id',
    registration_data->>'mail_id',
    registration_data->>'college_name',
    registration_data->>'whatsapp_number',
    registration_data->>'state',
    NULLIF(registration_data->>'player1_contact_number', '')::text,
    NULLIF(registration_data->>'player2_contact_number', '')::text,
    NULLIF(registration_data->>'player3_contact_number', '')::text,
    COALESCE((registration_data->>'created_at')::timestamp, NOW()),
    NOW()
  )
  ON CONFLICT (team_leader_id) DO UPDATE SET
    team_leader_name = EXCLUDED.team_leader_name,
    player1_id = EXCLUDED.player1_id,
    player2_id = EXCLUDED.player2_id,
    player3_id = EXCLUDED.player3_id,
    player4_id = EXCLUDED.player4_id,
    mail_id = EXCLUDED.mail_id,
    college_name = EXCLUDED.college_name,
    whatsapp_number = EXCLUDED.whatsapp_number,
    state = EXCLUDED.state,
    player1_contact_number = EXCLUDED.player1_contact_number,
    player2_contact_number = EXCLUDED.player2_contact_number,
    player3_contact_number = EXCLUDED.player3_contact_number,
    updated_at = NOW()
  RETURNING jsonb_build_object(
    'id', id,
    'team_leader_id', team_leader_id,
    'external_url', external_url
  ) INTO result;
  
  RETURN result;
EXCEPTION WHEN OTHERS THEN
  RETURN jsonb_build_object(
    'error', SQLERRM,
    'state', SQLSTATE
  );
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION public.handle_registration(jsonb) TO authenticated;
