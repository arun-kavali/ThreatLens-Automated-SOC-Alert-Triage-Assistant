-- Schedule: Every 5 minutes - Auto-process alerts and run correlation engine
SELECT cron.schedule(
  'process-alerts-every-5-min',
  '*/5 * * * *',
  $$
  SELECT public.trigger_process_alerts();
  $$
);

-- Schedule: Daily at midnight UTC - Generate system health summary
SELECT cron.schedule(
  'health-summary-daily',
  '0 0 * * *',
  $$
  SELECT public.trigger_health_summary();
  $$
);