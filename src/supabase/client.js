import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://abtgobilothwxxsxkeda.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFidGdvYmlsb3Rod3h4c3hrZWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzODAwMzAsImV4cCI6MjA0OTk1NjAzMH0.iFqC5BJ4jxKFGunChQeBrT2G6FTal394gOt2pP9pj3A"
);
export default supabase;
