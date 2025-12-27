#!/bin/bash

THRESHOLD="${1:-90}"
EXIT_CODE=0

df -P | awk 'NR>1 {print $1, $5}' | while read FS USAGE; do
  USED=${USAGE%\%}

  if [ "$USED" -ge "$THRESHOLD" ]; then
    echo "WARNING: $FS is at ${USED}% (threshold: ${THRESHOLD}%)"
    EXIT_CODE=1
  else
    echo "OK: $FS is at ${USED}%"
  fi
done

exit $EXIT_CODE
