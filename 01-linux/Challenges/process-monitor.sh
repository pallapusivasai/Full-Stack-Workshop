#!/bin/bash

PROCESS="$1"
INTERVAL="$2"

if [ -z "$PROCESS" ] || [ -z "$INTERVAL" ]; then
  echo "Usage: $0 process_name interval_in_seconds"
  exit 1
fi

echo "Monitoring process: $PROCESS"

while true; do
  TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

  if tasklist | grep -i "$PROCESS" > /dev/null; then
    echo "[$TIMESTAMP] $PROCESS is running"
  else
    echo "[$TIMESTAMP] ALERT: $PROCESS has stopped"
    exit 0
  fi

  sleep "$INTERVAL"
done
