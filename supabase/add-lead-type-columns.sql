-- Migration: Add lead_type and lead_price columns to Leads_Data
-- Run this in the Supabase SQL editor before deploying the partial lead auto-save feature.

-- Add lead_type column (address_only, partial, complete)
ALTER TABLE "Leads_Data" ADD COLUMN IF NOT EXISTS lead_type TEXT DEFAULT 'complete';

-- Add lead_price column
ALTER TABLE "Leads_Data" ADD COLUMN IF NOT EXISTS lead_price INTEGER DEFAULT 150;

-- Update existing leads to be 'complete' type with correct price
UPDATE "Leads_Data" SET lead_type = 'complete', lead_price = 150 WHERE lead_type IS NULL;
