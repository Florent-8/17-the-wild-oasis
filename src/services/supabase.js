
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://mlsxuaxdotbijzgpfupg.supabase.co'

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sc3h1YXhkb3RiaWp6Z3BmdXBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NzMwNzAsImV4cCI6MjA4MDM0OTA3MH0.XvzcH8T2lCAD6lIaS1Kke_kGhdw1_p-YuYyiQ0YsQ9k";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;