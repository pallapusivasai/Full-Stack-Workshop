#!/bin/bash

echo "=== User Audit Report ==="

TOTAL_USERS=$(wc -l < /etc/passwd)
echo "Total users: $TOTAL_USERS"

SHELL_USERS=$(awk -F: '$7 !~ /(false|nologin)$/ {count++} END {print count}' /etc/passwd)
echo "Users with shell access: $SHELL_USERS"

echo "Users without password:"
NO_PASS_USERS=$(awk -F: '($2=="!" || $2=="") {print $1}' /etc/shadow 2>/dev/null)

COUNT_NO_PASS=0
for user in $NO_PASS_USERS; do
  echo "  - $user"
  ((COUNT_NO_PASS++))
done

echo "Users without password: $COUNT_NO_PASS"

echo "Last login info for shell users:"
awk -F: '$7 !~ /(false|nologin)$/ {print $1}' /etc/passwd | while read user; do
  LAST_LOGIN=$(lastlog -u "$user" | awk 'NR==2 {print $4,$5,$6}')
  echo "  - $user: ${LAST_LOGIN:-Never logged in}"
done
